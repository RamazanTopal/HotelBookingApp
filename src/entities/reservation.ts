import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	JoinColumn,
	OneToMany
} from "typeorm";
import { Customer } from "./customer";
import { Room } from "./room";

@Entity()
export class Reservation extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number | undefined;

	@OneToMany(() => Customer, (customer) => customer.id)
	@JoinColumn()
	customerId: Customer[] | undefined;

	@OneToMany(() => Room, (room) => room.id)
	@JoinColumn()
	roomId: Room[] | undefined;

	@Column("date", { nullable: true })
	reservationDate: string | undefined;

	@Column("date", { nullable: true })
	dateIn: string | undefined;

	@Column("date", { nullable: true })
	dateOut: string | undefined;

	@Column("int", { nullable: true })
	dateRange: number | undefined;
}
