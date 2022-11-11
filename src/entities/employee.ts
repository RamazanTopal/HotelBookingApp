import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Employee extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number | undefined;

	@Column("text", { nullable: true })
	firstName: string | undefined;

	@Column("text", { nullable: true })
	lastName: string | undefined;

	@Column("text", { nullable: true })
	address: string | undefined;

	@Column("text", { nullable: true })
	department: string | undefined;

	@Column("text", { nullable: true, unique: true })
	phone: string | undefined;

	@Column("text", { nullable: true, unique: true })
	username: string | undefined;

	@Column("text", { nullable: true })
	password: string | undefined;
}
