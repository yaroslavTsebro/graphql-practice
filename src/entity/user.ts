import {
  Collection,
  Entity,
  OneToMany,
  OneToOne,
  Property
} from "@mikro-orm/core";
import {BaseEntity} from "./base-entity";
import {Post} from "./post";
import {Token} from "./token";
import {Field, ObjectType} from "type-graphql";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @Property()
  email!: string;

  @Field()
  @Property()
  password!: string;

  @Field()
  @OneToMany(() => Post, post => post.author)
  posts = new Collection<Post>(this);

  @Field()
  @OneToOne()
  token?: Token;
}
