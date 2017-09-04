const assert = require('chai').assert;

const awsIamTool = require('../');

let exportPolicy = awsIamTool.exportPolicy;
let exportRole = awsIamTool.exportRole;
let importPolicy = awsIamTool.importPolicy;
let importRole = awsIamTool.importRole;
let deletePolicy = awsIamTool.deletePolicy;

describe('require each module', () => {
  it('loads valid', () => {
    assert.isFunction(exportPolicy, 'exportPolicy is not loaded');
    assert.isFunction(exportRole, 'exportRole is not loaded');
    assert.isFunction(importPolicy, 'importPolicy is not loaded');
    assert.isFunction(importRole, 'importRole is not loaded');
    assert.isFunction(deletePolicy, 'deletePolicy is not loaded');
  });
});