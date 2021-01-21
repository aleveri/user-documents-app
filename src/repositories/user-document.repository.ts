import {DefaultCrudRepository} from '@loopback/repository';
import {UserDocument, UserDocumentRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserDocumentRepository extends DefaultCrudRepository<
  UserDocument,
  typeof UserDocument.prototype.id,
  UserDocumentRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(UserDocument, dataSource);
  }
}
