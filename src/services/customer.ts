import { Customer } from "../entities/customer";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/tokens";
import { BadRequestError } from "../error/errorHandler";

class CustomerService {
	async register({
		firstName,
		lastName,
		age,
		address,
		password,
		phone,
		email
	}: {
		firstName: string;
		lastName: string;
		age: number;
		address: string;
		password: string;
		phone: string;
		email: string;
	}): Promise<void> {
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);
		const customer = new Customer();

		customer.firstName = firstName;
		customer.lastName = lastName;
		customer.age = age;
		customer.email = email;
		customer.address = address;
		customer.password = hashedPassword;
		customer.phone = phone;

		await customer.save();
	}

	async login(email: string, password: string) {
		try {
			const userIsExist = await Customer.findOneBy({
				email
			});

			if (!userIsExist) {
				throw new BadRequestError("User is not found");
			}

			const isMatchedPassword = await bcrypt.compare(
				password,
				userIsExist.password!
			);

			if (!isMatchedPassword) {
				throw new BadRequestError("Password is wrong");
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

export const customerService = new CustomerService();
