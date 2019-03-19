[![Build Status](https://travis-ci.org/wmzy/vue-prop-helper.svg?branch=master)](https://travis-ci.org/wmzy/vue-prop-helper)
[![Coverage Status](https://coveralls.io/repos/github/wmzy/vue-prop-helper/badge.svg?branch=master)](https://coveralls.io/github/wmzy/vue-prop-helper?branch=master)
# vue-prop-helper

> Vue prop validation helper

## Install

```bash
npm i vue-prop-helper
```

## Usage
```js
import ph from 'vue-prop-helper';

props: {
  firstName: ph.string.required(),
  lastName: ph(),
  age: ph.number.default(100)()
}
```
