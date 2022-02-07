import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
// BaseEntity 기본 기능이 추가됨
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  number!: number;

  @Column({ type: "text" })
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "text" })
  age!: number;

  @Column({ type: "timestamp", default: null, nullable: true })
  deleteAt!: Date;
}
