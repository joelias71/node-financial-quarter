# Node + Typescript Revenue API

Revenue API using Typescript and GraphQL

## Requirements

- node.js 14.*
- npm 6.*

## Dependencies

- apollo-server-express 2.16.1
- express 4.17.1
- graphql 15.3.0
- reflect-metadata 0.1.13
- type-graphql 1.0.0-rc.3

## Install and Build

You need to clone the repo and install the dependencies before start:

```sh
$ cd node-financial-quarter
$ sudo npm install
```
## API documentation

| Method        | Arguments | Description |
| ------------- | --------- | ----------- |
| getByMonth    | month     | Required: false<br>Type: int<br>Description: Receives the number of the month from 0  to 11|

## Run the Application

By default the application is going to run on port **8888**.  

Development

```sh
$ npm run dev
```

or use

```sh
$ npm start
```
