import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Customer extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number | undefined;

	@Column("text", { nullable: true })
	firstName: string | undefined;

	@Column("text", { nullable: true })
	lastName: string | undefined;

	@Column("text", { nullable: true })
	address: string | undefined;

	@Column("text", { nullable: true })
	status: string | undefined;

	@Column("text", { nullable: true })
	age: number | undefined;
}
