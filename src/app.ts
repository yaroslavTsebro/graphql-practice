import { MikroORM } from '@mikro-orm/core';
import { YourEntity } from './path-to-your-entity-file'; // Import your entity class

export default {
  dbName: 'your-database-name',
  user: 'your-database-username',
  password: 'your-database-password',
  type: 'mysql', // Change this according to your database type
  entities: [YourEntity], // Add all your entity classes here
  debug: !__prod__, // Enable debugging in non-production environment
} as Parameters<typeof MikroORM.init>[0];
