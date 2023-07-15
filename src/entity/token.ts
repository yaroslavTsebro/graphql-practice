import {Entity, OneToOne, Property} from "@mikro-orm/core";
import {BaseEntity} from "./base-entity";
import {User} from "./user";
import {Field, ObjectType} from "type-graphql";

@ObjectType()
@Entity()
export class Token extends BaseEntity {
  @Field()
  @OneToOne(() => User, user => user.token, {orphanRemoval: true})
  user!: User;

  @Field()
  @Property()
  token!: string;
}