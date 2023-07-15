import {Entity, OneToOne, Property} from "@mikro-orm/core";
import {BaseEntity} from "./base-entity";
import {User} from "./user";

@Entity()
export class Token extends BaseEntity {
  @OneToOne(() => User, user => user.id, {orphanRemoval: true})
  user!: User;

  @Property()
  token!: string;
}