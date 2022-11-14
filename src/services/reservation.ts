import { Reservation } from "../entities/reservation";
import { Customer } from "../entities/customer";
import { Room } from "../entities/room";

class ReservationService {
	async create({
		reservationDate,
		dateIn,
		dateOut,
		dateRange,
		customerId,
		roomId
	}: {
		reservationDate: string;
		dateIn: string;
		dateOut: string;
		dateRange: number;
		roomId: number;
		customerId: number;
	}) {
		const room = await Room.findOneBy({ id: roomId });
		const customer = await Customer.findOneBy({ id: customerId });

		const reservation = new Reservation();
		reservation.room = room as Room;
		reservation.customer = customer as Customer;
		reservation.reservationDate = reservationDate;
		reservation.dateIn = dateIn;
		reservation.dateOut = dateOut;
		reservation.dateRange = dateRange;
		await reservation.save();
	}

	async update(
		id: string,
		{
			customer,
			room,
			reservationDate,
			dateIn,
			dateOut,
			dateRange
		}: {
			customer: Customer;
			room: Room;
			reservationDate: string;
			dateIn: string;
			dateOut: string;
			dateRange: number;
		}
	) {
		await Reservation.update(id, {
			customer,
			room,
			reservationDate,
			dateIn,
			dateOut,
			dateRange
		});
	}

	async remove(id: string) {
		await Reservation.delete(id);
	}
}

export const reservationService = new ReservationService();
