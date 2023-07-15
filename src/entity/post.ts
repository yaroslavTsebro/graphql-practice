import {BaseEntity} from "./base-entity";
import {Entity, ManyToOne, Property} from "@mikro-orm/core";
import {User} from "./user";
import {Field, ObjectType} from "type-graphql";

@ObjectType()
@Entity()
export class Post extends BaseEntity {
  @Field()
  @ManyToOne()
  author!: User;

  @Field()
  @Property()
  name!: string
}