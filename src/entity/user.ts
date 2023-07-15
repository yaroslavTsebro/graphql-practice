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

@Entity()
export class User extends BaseEntity {
  @Property()
  email!: string;

  @Property()
  password!: string;

  @OneToMany(() => Post, post => post.author)
  posts = new Collection<Post>(this);

  @OneToOne()
  token!: Token;
}
