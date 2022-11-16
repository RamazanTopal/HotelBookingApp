import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	JoinColumn,
	ManyToOne
} from "typeorm";

import { Customer } from "./customer";
import { Payment } from "./payment";
import { Employee } from "./employee";
import { Reservation } from "./reservation";

@Entity()
export class Transaction extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number | undefined;

	@ManyToOne(() => Customer, (customer) => customer.transaction)
	@JoinColumn()
	customer: Customer | undefined;

	@ManyToOne(() => Payment, (payment) => payment.transaction)
	@JoinColumn()
	payment: Payment | undefined;

	@ManyToOne(() => Employee, (employee) => employee.transaction)
	@JoinColumn()
	employee: Employee | undefined;

	@ManyToOne(() => Reservation, (reservation) => reservation.transaction)
	@JoinColumn()
	reservation: Reservation | undefined;

	@Column("text", { nullable: true })
	name: string | undefined;

	@Column("date", { nullable: true })
	date: string | undefined;
}
