import {BaseEntity} from "./base-entity";
import {Entity, ManyToOne, Property} from "@mikro-orm/core";
import {User} from "./user";

@Entity()
export class Post extends BaseEntity {
  @ManyToOne()
  author!: User;

  @Property()
  name!: string
}