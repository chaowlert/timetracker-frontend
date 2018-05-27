#!/usr/bin/env node

const fs = require('fs');
const file = process.argv[2];

const content = fs.readFileSync(file);
const data = JSON.parse(content);

const regex = /Using(GET|POST|PUT|DELETE)(_\d+)?$/;

// name should be camel case instead of kebab case
for (const tag of data.tags) {
  tag.name = toCamelCase(tag.name);
}

const paths = Object.keys(data.paths);
for (const path of paths) {
  const pathObj = data.paths[path];

  const methods = Object.keys(pathObj);
  for (const method of methods) {
    const methodObj = pathObj[method];

    for (let i = 0; i < methodObj.tags.length; i++) {
      methodObj.tags[i] = toCamelCase(methodObj.tags[i]);
    }

    if (regex.test(methodObj.operationId)) {
      methodObj.operationId = methodObj.operationId.replace(regex, '');
    }
  }
}
fs.writeFileSync(file, JSON.stringify(data, null, 4));

/**
 * @param name {string}
 */
function toCamelCase(name) {
  const segments = name.split('-');
  if (segments.length === 1) {
    return name;
  }
  return segments[0] + segments.slice(1).map(it => it[0].toUpperCase() + it.substr(1)).join('');
}
