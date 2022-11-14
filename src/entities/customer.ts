import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	OneToMany
} from "typeorm";
import { Reservation } from "./reservation";

@Entity()
export class Customer extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number | undefined;

	@Column("text", { nullable: false })
	firstName: string | undefined;

	@Column("text", { nullable: false })
	lastName: string | undefined;

	@Column("text", { nullable: true })
	address: string | undefined;

	@Column("bool", { default: true })
	status: boolean | undefined;

	@Column("text", { nullable: true })
	age: number | undefined;

	@Column("text", { nullable: false, unique: true })
	phone: string | undefined;

	@Column("text", { nullable: false })
	password: string | undefined;

	@Column("text", { nullable: false, unique: true })
	email: string | undefined;

	@OneToMany(() => Reservation, (reservation) => reservation.customer)
	reservation: Reservation[] | undefined;
}
