import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Document extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'date',
    required: true,
  })
  upload_date: string;

  @property({
    type: 'buffer',
    required: true,
  })
  file: Buffer;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Document>) {
    super(data);
  }
}

export interface DocumentRelations {
  // describe navigational properties here
}

export type DocumentWithRelations = Document & DocumentRelations;
