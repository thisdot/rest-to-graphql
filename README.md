# GraphQL Migration Demo

## Prerequisites

- Node v16+
- npm v7+

## Getting Started

There are 2 project folders in this repo under 'apps':

- server: Express.js API
- client: Next.js website

Before continuing, run `npm install` in both directories:

```bash
npm install
```

### Initialize the Database

The following command will initialize the database, create the new tables, and seed the data. When asked for a name call it anything you'd like for instance, "init seed"

```bash
npm run prisma:reset
```

### Copy `/apps/client/.env.sample` -> `/apps/client/.env`

### Run the server

```bash
npm run dev:server
```

### Run the client

```bash
npm run dev:client
```

### Run both for easy development

```bash
npm run dev
```

## Migration Steps

1. Setup your GraphQL Server
2. Define your schema
3. Create your resolvers using your preferred methodology
4. Setup your choice for GraphQL client
5. Update existing API calls with GraphQL calls
6. 🚢
