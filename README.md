# 🏨 Hooroo test

[![Build Status](https://travis-ci.com/angusfretwell/hooroo-test.svg?token=AP3g5qsxKM4x5UsEE1F7&branch=master)](https://travis-ci.com/angusfretwell/hooroo-test)

http://hooroo-test.herokuapp.com

## Setup

1. Install [nvm](https://github.com/creationix/nvm).

2. Install and use the node version specified in `.nvmrc`:

	```shell
	$ nvm install && nvm use
	```

3. Install Yarn:

  ```shell
  $ npm install -g yarn
  ```

4. Install dependencies:

  ```shell
  $ yarn
  ```

## Development

Start the development server:

```shell
$ yarn start
```

Run tests:

```shell
$ yarn test

# Generate coverage report
$ yarn test -- --coverage
```

## To do

- [ ] Add tests for `<ListItem />`
- [ ] Improve tests for `<List />` (e.g. test that `sortMethods` is called)
- [ ] Responsive layout
- [ ] A more scalable CSS solution (e.g. CSS modules)
- [ ] State management (e.g. Redux)
- [ ] Add more comprehensive linting rules
