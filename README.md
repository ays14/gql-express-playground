# gql-express-playground
This node module integrates **GraphQL Playground** in your NodeJS Express App. This module is simplified to be used with Express using `require()` function of JavaScript.

 - Visit [GraphQL](https://graphql.org/) to know more about the language
 - To learn more about GraphQL visit [How to GraphQL](https://www.howtographql.com/) for in-depth tutorials and exercises that guide you throughout the learning of GraphQL

# GraphQL Playground
As it is written on [How to GraphQL - Introduction](https://www.howtographql.com/graphql-js/0-introduction/), it says as following

[GraphQL Playground](https://github.com/graphcool/graphql-playground): “GraphQL IDE” that allows to interactively explore the functionality of a GraphQL API by sending queries and mutations to it. It’s somewhat similar to Postman which offers comparable functionality for REST APIs. Among other things, a GraphQL Playground
- auto-generates a comprehensive documentation for all available API operations.
- provides an editor where you can write queries, mutations & subscriptions, with auto-completion(!) and syntax highlighting.
- lets you easily share your API operations.

# Usage
### Installation
Simply install either by **yarn**
```bash
yarn add gql-express-playground
```
or **npm**
```bash
npm install gql-express-playground
```
### Integration
To integrate the module in your **Express App** 
Modify your `index.js` or `app.js` file, where you have initialized express application

```javascript
// require the module
...
var playground = require('graphql-playground-middleware-express');
...
var app = express();
...
// this will allow you to access GraphQL Playground at /playground endpoint of your application
app.use('/playground', playground.expressPlayground({
	endpoint: '/graphql'
	})
);
```

