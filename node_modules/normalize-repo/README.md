# Normalize Repo

[![Build Status](https://travis-ci.com/krmax44/normalize-repo.svg?branch=master)](https://travis-ci.com/krmax44/normalize-repo)
![npm bundle size](https://img.shields.io/bundlephobia/min/normalize-repo?label=size)
![npm version](https://img.shields.io/npm/v/normalize-repo)

Normalizes the `repository` object or string you typically find in `package.json`. It adheres to the [specification](https://docs.npmjs.com/files/package.json#repository) and can parse everything you can also use as a value for `repository`.

## Installation

```bash
yarn add normalize-repo
```

## Examples

All values that `repository`

```js
const normalizeRepo = require('normalize-repo');

normalizeRepo('github:krmax44/normalize-repo')

// output:
{
  url: 'https://github.com/krmax44/normalize-repo.git',
  shortcut: 'github:krmax44/normalize-repo',
  provider: 'github',
  owner: 'krmax44',
  name: 'normalize-repo'
}
```

You can also pass an object:

```js
normalizeRepo({ url: 'https://github.com/krmax44/normalize-repo.git' });
```

A malformatted and incompliant input will throw an error:

```js
try {
  // will throw an error, as only shortcut strings are allowed
  normalizeRepo('https://github.com/krmax44/normalize-repo.git');
} catch (error) {
  console.log(error);
}
```

**Note**: Only Github, Gitlab, Github Gist and Bitbucket repositories will return `shortcut`, `provider`, `owner` and `name` values.
