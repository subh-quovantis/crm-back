import {Entity, Column, PrimaryGeneratedColumn, BaseEntity,CreateDateColumn,UpdateDateColumn} from "typeorm";

@Entity()
export class Employee extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({ type: "varchar", length: 80 })
  fullname!: string;
  @Column({ type: "varchar", length: 80 })
  emailid!: string;
  @Column({ type: "double" })
  phone_number!: number;
  @Column({ type: "varchar", length: 15 })
  gender!: string;
  @Column({ type: "int" })
  salary!: number;
  @Column({ type: "varchar", length: 500 })
  password!: string;
  @Column({ type: "int" })
  role_id!: number;
  @Column({ type: "varchar", length: 500 })
  address!: string;
  @Column({ type: "boolean" })
  isActive!: boolean;
  @Column({ type: "boolean" })
  isDeleted!: boolean;
  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  public created_at!: Date;
  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  public updated_at!: Date;
}