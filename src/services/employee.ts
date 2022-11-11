import { Employee } from "../entities/employee";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/tokens";

class EmployeeService {
	async register({
		firstName,
		lastName,
		department,
		username,
		address,
		password,
		phone
	}: {
		firstName: string;
		lastName: string;
		department: string;
		username: string;
		address: string;
		password: string;
		phone: string;
	}): Promise<void> {
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);
		const employee = new Employee();

		employee.firstName = firstName;
		employee.lastName = lastName;
		employee.department = department;
		employee.username = username;
		employee.address = address;
		employee.password = hashedPassword;
		employee.phone = phone;

		await employee.save();
	}

	async login(username: string, password: string) {
		try {
			const userIsExist = await Employee.findOneBy({
				username: username
			});

			if (!userIsExist) {
				throw new Error("User is not found");
			}

			const isMatchedPassword = await bcrypt.compare(
				password,
				userIsExist.password!
			);

			if (!isMatchedPassword) {
				throw new Error("Password is wrong");
			}

			const userInformation = {
				name: userIsExist.firstName,
				surname: userIsExist.lastName,
				id: userIsExist.id
			};
			const token = generateToken(userInformation);

			return token;
		} catch (error) {
			throw error;
		}
	}
}

export const employeeService = new EmployeeService();
