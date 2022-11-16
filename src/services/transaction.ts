import { Reservation } from "../entities/reservation";
import { Customer } from "../entities/customer";
import { Employee } from "../entities/employee";
import { Payment } from "../entities/payment";
import { Transaction } from "../entities/transaction";

class TransactionService {
	async create({
		date,
		name,
		customerId,
		employeeId,
		reservationId,
		paymentId
	}: {
		date: string;
		name: string;
		customerId: number;
		employeeId: number;
		reservationId: number;
		paymentId: number;
	}) {
		const customer = await Customer.findOneBy({ id: customerId });
		const payment = await Payment.findOneBy({ id: paymentId });
		const employee = await Employee.findOneBy({ id: employeeId });
		const reservation = await Reservation.findOneBy({ id: reservationId });

		const transaction = new Transaction();
		transaction.payment = payment as Payment;
		transaction.customer = customer as Customer;
		transaction.employee = employee as Employee;
		transaction.reservation = reservation as Reservation;
		transaction.name = name;
		transaction.date = date;
		await transaction.save();
	}

	async update({
		id,
		name,
		date,
		paymentId,
		customerId,
		employeeId,
		reservationId
	}: {
		id: number;
		date: string;
		name: string;
		paymentId: number;
		customerId: number;
		employeeId: number;
		reservationId: number;
	}) {
		const customer = (await Customer.findOneBy({
			id: customerId
		})) as Customer;
		const payment = (await Payment.findOneBy({ id: paymentId })) as Payment;
		const employee = (await Employee.findOneBy({
			id: employeeId
		})) as Employee;
		const reservation = (await Reservation.findOneBy({
			id: reservationId
		})) as Reservation;

		await Transaction.update(id, {
			name,
			date,
			customer,
			payment,
			employee,
			reservation
		});
	}

	async remove(id: number) {
		await Transaction.delete(id);
	}

	async getList() {
		const transactions = await Transaction.find();
		return transactions;
	}
}

export const transactionService = new TransactionService();
