import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Room extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number | undefined;

	@Column("text", { nullable: true })
	name: string | undefined;

	@Column("text", { nullable: true })
	className: string | undefined;

	@Column("text", { nullable: true })
	description: string | undefined;

	@Column("int", { nullable: true })
	price: number | undefined;
}
