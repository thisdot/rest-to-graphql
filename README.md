# GraphQL Migration Demo

## Prerequisites

- Node v16+
- yarn
- Docker

## Getting Started

There are 2 project folders in this repo under 'apps':

- server: Express.js API
- client: Next.js website

Before continuing, run `npm install` in both directories:

```bash
npm install
```

Once complete, you'll need to run the docker container and initialize the database.

### Docker Setup

To setup the PostgresQL image:

```bash
docker compose up -d
```

To teardown the database:

```bash
docker compose down
```

To start and restart the docker image:

```bash
docker compose start

docker compose stop
```

### Initialize the Database

The following command will initialize the database, create the new tables, and seed the data. When asked for a name call it anything you'd like for instance, "init seed"

```bash
npm run prisma:migrate
```

### Run the server

```bash
cd server
yarn dev
```

### Run the client

```bash
cd client
yarn dev
```

## Migration Steps

1. Setup your GraphQL Server
2. Define your schema
3. Create your resolvers using your preferred methodology
4. Setup your choice for GraphQL client
5. Update existing API calls with GraphQL calls
6. 🚢
