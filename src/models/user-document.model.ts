import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class UserDocument extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  id_user: string;

  @property({
    type: 'string',
    required: true,
  })
  id_document: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UserDocument>) {
    super(data);
  }
}

export interface UserDocumentRelations {
  // describe navigational properties here
}

export type UserDocumentWithRelations = UserDocument & UserDocumentRelations;
