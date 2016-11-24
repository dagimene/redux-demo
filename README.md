# Angular Redux Sample Project

This is a sample application showcasing the integration of Redux into Angular, using ng-redux.

The application simulates an SMS client, with 'mark as unread' capabilities.
Redux is used to get the messages state, open message, and unread messages counter in sync.

### Try it

Run the following commands to get it running locally:

```sh
npm install
npm start
```


### Source code worth checking out

Here are some files worth looking to get some insights in the benefits of using Redux.

- [Template](src/template.html)

   In contrast to an standard Angular application, there's no much (or any) information being passed to smart components
   in the template.

- [Smart Component](src/list/item-component.js)

   Smart components are the ones that connect to the store to gather the information they need. In this component,
   there's a single input binding with the message id, but the message itself is obtained from the Redux store. Also,
   actions do not change internal component state, but instead are send directly to the store, with help of the
   bindings provided by `$ngRedux.connect`.

- [Store](src/store-config.js)

   In this file you can see how ng-redux is setup for this sample application. The store is configured with its
   reducers, middleware and enhancers.

- [Tests](/test)

   Redux code is easy to test, as most of it just handles plain JS objects. In this folder there are
   examples of reducers and action creators test using mocha and chai.


### Develop

You can run the build process and server with watchers with the following command

```sh
npm run watch
```

### License

This project is licensed under the terms of the ISC license.
