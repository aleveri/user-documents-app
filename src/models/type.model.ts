import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Type extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  description: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Type>) {
    super(data);
  }
}

export interface TypeRelations {
  // describe navigational properties here
}

export type TypeWithRelations = Type & TypeRelations;
