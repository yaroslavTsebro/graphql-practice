import {Entity, OneToOne, Property} from "@mikro-orm/core";
import {BaseEntity} from "./base-entity";
import {User} from "./user";
import {Field, ObjectType} from "type-graphql";


@ObjectType()
@Entity()
export class Token extends BaseEntity {
  @Field(() => Token, {nullable: true})
  @OneToOne(() => User, (user: User) => user.token, { orphanRemoval: true })
  user!: User; // Provide explicit type for the 'user' property

  @Field()
  @Property()
  token!: string;
}
