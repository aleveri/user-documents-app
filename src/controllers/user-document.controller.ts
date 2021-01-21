import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {UserDocument} from '../models';
import {UserDocumentRepository} from '../repositories';

export class UserDocumentController {
  constructor(
    @repository(UserDocumentRepository)
    public userDocumentRepository : UserDocumentRepository,
  ) {}

  @post('/user-documents', {
    responses: {
      '200': {
        description: 'UserDocument model instance',
        content: {'application/json': {schema: getModelSchemaRef(UserDocument)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserDocument, {
            title: 'NewUserDocument',
            exclude: ['id'],
          }),
        },
      },
    })
    userDocument: Omit<UserDocument, 'id'>,
  ): Promise<UserDocument> {
    return this.userDocumentRepository.create(userDocument);
  }

  @get('/user-documents/count', {
    responses: {
      '200': {
        description: 'UserDocument model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(UserDocument) where?: Where<UserDocument>,
  ): Promise<Count> {
    return this.userDocumentRepository.count(where);
  }

  @get('/user-documents', {
    responses: {
      '200': {
        description: 'Array of UserDocument model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(UserDocument, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(UserDocument) filter?: Filter<UserDocument>,
  ): Promise<UserDocument[]> {
    return this.userDocumentRepository.find(filter);
  }

  @patch('/user-documents', {
    responses: {
      '200': {
        description: 'UserDocument PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserDocument, {partial: true}),
        },
      },
    })
    userDocument: UserDocument,
    @param.where(UserDocument) where?: Where<UserDocument>,
  ): Promise<Count> {
    return this.userDocumentRepository.updateAll(userDocument, where);
  }

  @get('/user-documents/{id}', {
    responses: {
      '200': {
        description: 'UserDocument model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(UserDocument, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(UserDocument, {exclude: 'where'}) filter?: FilterExcludingWhere<UserDocument>
  ): Promise<UserDocument> {
    return this.userDocumentRepository.findById(id, filter);
  }

  @patch('/user-documents/{id}', {
    responses: {
      '204': {
        description: 'UserDocument PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserDocument, {partial: true}),
        },
      },
    })
    userDocument: UserDocument,
  ): Promise<void> {
    await this.userDocumentRepository.updateById(id, userDocument);
  }

  @put('/user-documents/{id}', {
    responses: {
      '204': {
        description: 'UserDocument PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() userDocument: UserDocument,
  ): Promise<void> {
    await this.userDocumentRepository.replaceById(id, userDocument);
  }

  @del('/user-documents/{id}', {
    responses: {
      '204': {
        description: 'UserDocument DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.userDocumentRepository.deleteById(id);
  }
}
