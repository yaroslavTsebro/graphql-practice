import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class User {

  id!: number;


  email!: string;


  password!: string;


  createdAt = new Date();


  updatedAt = new Date();
}
