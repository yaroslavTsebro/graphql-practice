import {Collection, Entity, Enum, OneToMany, Property} from "@mikro-orm/core";
import {BaseEntity} from "./base-entity";
import {OauthProvider} from "./oauth-provider";
import {Post} from "./post";

@Entity()
export class User extends BaseEntity {
  @Property()
  email!: string;

  @Property({nullable: true})
  password?: string;

  @Property({nullable: true})
  oAuthId?: string;

  @Enum({items: () => OauthProvider, nullable: true})
  oAuthProvider?: OauthProvider;

  @OneToMany(() => Post, post => post.author)
  posts = new Collection<Post>(this);
}
