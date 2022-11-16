import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	ManyToOne,
	OneToMany
} from "typeorm";
import { Customer } from "./customer";
import { Room } from "./room";
import { Transaction } from "./transaction";

@Entity()
export class Reservation extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number | undefined;

	@ManyToOne(() => Customer, (customer) => customer.reservation)
	customer: Customer | undefined;

	@ManyToOne(() => Room, (room) => room.reservation)
	room: Room | undefined;

	@Column("date", { nullable: true })
	reservationDate: string | undefined;

	@Column("date", { nullable: true })
	dateIn: string | undefined;

	@Column("date", { nullable: true })
	dateOut: string | undefined;

	@Column("int", { nullable: true })
	dateRange: number | undefined;

	@OneToMany(() => Transaction, (transaction) => transaction.employee)
	transaction: Transaction[] | undefined;
}
