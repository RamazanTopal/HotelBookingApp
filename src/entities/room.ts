import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	OneToMany
} from "typeorm";
import { Reservation } from "./reservation";

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

	@OneToMany(() => Reservation, (reservation) => reservation.room)
	reservation: Reservation[] | undefined;
}
