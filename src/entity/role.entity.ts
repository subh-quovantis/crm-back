
import {Entity, Column, PrimaryGeneratedColumn, BaseEntity,CreateDateColumn,UpdateDateColumn} from "typeorm";

@Entity()
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({ type: "varchar", length: 80 })
  role!: string;
  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  public created_at!: Date;
  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  public updated_at!: Date;
}