import {Entity, PrimaryKey, Property} from "@mikro-orm/core";
import {v4 as uuid} from 'uuid';

@Entity({abstract: true})
export abstract class BaseEntity {
  @PrimaryKey({default: uuid(), type: 'uuid'})
  id: string = uuid();

  @Property({onCreate: () => new Date()})
  createdAt: Date = new Date();

  @Property({onUpdate: () => new Date()})
  updatedAt: Date = new Date();
}