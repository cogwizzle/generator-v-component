'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-v-component:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ componentName: 'test' });
  });

  it('creates files', () => {
    assert.file(['test.vue']);
  });
});
