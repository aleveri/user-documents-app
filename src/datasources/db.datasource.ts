import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'db',
  connector: 'mongodb',
  url: 'mongodb://admin:admin2021@testcluster-shard-00-00.horuj.mongodb.net:27017,testcluster-shard-00-01.horuj.mongodb.net:27017,testcluster-shard-00-02.horuj.mongodb.net:27017/test_app_db?ssl=true&replicaSet=atlas-1282j9-shard-0&authSource=admin&retryWrites=true&w=majority',
  host: '',
  port: 27017,
  user: 'admin',
  password: 'admin2021',
  database: 'test_app_db',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
