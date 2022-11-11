import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	OneToMany,
	JoinColumn
} from "typeorm";

import { Customer } from "./customer";

@Entity()
export class Payment extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number | undefined;

	@OneToMany(() => Customer, (customer) => customer.id)
	@JoinColumn()
	customerId: Customer[] | undefined;

	@Column("date", { nullable: true })
	date: string | undefined;
}
