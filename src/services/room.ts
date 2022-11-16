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

	async update({
		id,
		name,
		className,
		description,
		price
	}: {
		id: number;
		name: string;
		className: string;
		description: string;
		price: number;
	}) {
		await Room.update(id, {
			name,
			className,
			description,
			price
		});
	}

	async remove(id: number) {
		await Room.delete(id);
	}

	async getList() {
		const rooms = await Room.find();
		return rooms;
	}
}

export const roomService = new RoomService();
