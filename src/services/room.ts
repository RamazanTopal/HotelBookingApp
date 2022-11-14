import { Room } from "../entities/room";

class RoomService {
	async create({
		name,
		className,
		description,
		price
	}: {
		name: string;
		className: string;
		description: string;
		price: number;
	}) {
		const room = new Room();

		room.name = name;
		room.className = className;
		room.description = description;
		room.price = price;

		await room.save();
	}

	async update(
		id: string,
		{
			name,
			className,
			description,
			price
		}: {
			name: string;
			className: string;
			description: string;
			price: number;
		}
	) {
		await Room.update(id, {
			name,
			className,
			description,
			price
		});
	}

	async remove(id: string) {
		await Room.delete(id);
	}
}

export const roomService = new RoomService();
