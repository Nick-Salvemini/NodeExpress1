### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  You can use promises with /then and /catch, or you can use async and await.

- What is a Promise?
  An object that can either be in the pending, resolved, or rejected states.  You need to use /then and/catch to access the the data from the promise once it's resolved.

- What are the differences between an async function and a regular function?
  Async functions return promises, so you have to use the await keyword so that the function will pause the function until the promise resolves, and then it returns to value of the promise.

- What is the difference between Node.js and Express.js?
  Node is allows you to build a server environment using JS code.  Express is a Node framework that allows you to make HTTP requests.

- What is the error-first callback pattern?
  The first parameter of a Node callback function will use an error  object as it's first argument, and functions are usually built to first check for an error, and to then execute the function from there.

- What is middleware?
  Functions that run in between the request response cycle in Express.

- What does the `next` function do?
  It looks to the next express function, and checks if the parameters of the request meet that functions requirements.  It needs to be included in the argument on the middleware function in order to be called.  Without calling next, the request cycle will immediately end.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

  All the requests are being made one after another.  This would take a relatively long time, so they should be called at the same time with .all().  The variable names are too general, so they shoud be made more descriptive or unique.  There is also no error handling. 
