# content-blocks-proto

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Setup API and Entities
1. Make sure you have a database set up with the new Rentsync settings changes and the new Content Block tables. 
2. Using Rest API Starter project, pass the following dynamic router configuration to the dynamic-router package.
```typescript
import { Connection } from 'typeorm';
import {
  RouterConfiguration,
  DRConfiguration,
  buildDynamicRoutes,
} from '@llws/dynamic-router';

const endpointPrefix = '/api/v1';
const dynRouteConfig: RouterConfiguration[] = [];

dynRouteConfig.push(
  new RouterConfiguration('content_block_templates', 'GET'),
  new RouterConfiguration('content_blocks', 'GET'),
  new RouterConfiguration('content_blocks', 'POST'),
  new RouterConfiguration('content_blocks', 'PUT'),
  new RouterConfiguration('buildings', 'GET'),
);

export default async (connection: Connection) => {
  
  const config = new DRConfiguration(
    dynRouteConfig,
    connection,
    endpointPrefix // Prefix for dynamic endpoints,
  );

  const router = await buildDynamicRoutes(config);
  return {
    router,
    config,
  };

}
```
3. In this repo, navigate to src/api.js and change the prefix variable to whichever host|port|prefix combo you set in the API.
"# vue-drag-drop" 
