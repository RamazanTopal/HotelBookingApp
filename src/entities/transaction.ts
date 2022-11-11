import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	JoinColumn,
	OneToMany
} from "typeorm";

import { Customer } from "./customer";
import { Payment } from "./payment";
import { Employee } from "./employee";
import { Reservation } from "./reservation";

@Entity()
export class Transaction extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number | undefined;

	@OneToMany(() => Customer, (customer) => customer.id)
	@JoinColumn()
	customerId: Customer[] | undefined;

	@OneToMany(() => Payment, (payment) => payment.id)
	@JoinColumn()
	paymentId: Payment[] | undefined;

	@OneToMany(() => Employee, (employee) => employee.id)
	@JoinColumn()
	employeeId: Employee[] | undefined;

	@OneToMany(() => Reservation, (reservation) => reservation.id)
	@JoinColumn()
	reservationId: Reservation[] | undefined;

	@Column("text", { nullable: true })
	name: string | undefined;

	@Column("date", { nullable: true })
	date: string | undefined;
}
