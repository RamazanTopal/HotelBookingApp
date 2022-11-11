import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	OneToMany,
	JoinColumn
} from "typeorm";

import { Transaction } from "./transaction";

@Entity()
export class Report extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number | undefined;

	@OneToMany(() => Transaction, (transaction) => transaction.id)
	@JoinColumn()
	transactionId: Transaction[] | undefined;

	@Column("text", { nullable: true })
	information: string | undefined;

	@Column("date", { nullable: true })
	date: string | undefined;
}
