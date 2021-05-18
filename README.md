# use-did-update

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/brunoscopelliti/use-did-update/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/@bscop/use-did-update.svg?style=flat)](https://www.npmjs.com/package/@bscop/use-did-update)
[![CircleCI Status](https://circleci.com/gh/brunoscopelliti/use-did-update.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/brunoscopelliti/use-did-update)
[![Coverage](https://img.shields.io/codecov/c/github/brunoscopelliti/use-did-update)](https://app.codecov.io/gh/brunoscopelliti/use-did-update/)

React hook to handle componentDidUpdate lifecycle event.

The effects run after every completed render - except the initial one - but it's also possible
to fire them only when certain values have changed.

## Install

```
npm i @bscop/use-did-update
```

## Usage

```js
import useDidUpdate from "@bscop/use-did-update";

useDidUpdate(
  () => {
    // Executed after each render, but the first one.
    console.log("Yay, it's updated");
  }
);
```

### Api

```
useDidUpdate(effect, [cleanup], [values]);
```

- `effect`: the side effect.

- `cleanup`: clean-up logic to execute in case the component is going to be re-rendered.

- `value`: the effect is going to be executed only if also one of these values changed.

## Contribute

Read the [guidelines](./CONTRIBUTING.md).

### Run tests

```
npm test
```

### Coverage

Coverage reports are hosted on [codecov](https://codecov.io/).

```
npm run badge:coverage -- --token=<guid>
```

---

Bruno Scopelliti\
www.brunoscopelliti.com
