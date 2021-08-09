const package = require('../../package.json');
const componentGenerator = require('./component/index.js');

module.exports = plop => {
  const today = new Date();
  const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

  console.log(`[${time}] `, '\x1b[36m', package.name, '\x1b[0m');
  console.log(`[${time}] `, '\x1b[36m', `v${package.version}`, '\x1b[0m');

  plop.setGenerator('component', componentGenerator);

  // plop.addHelper('componentName', name => {
  //   const compName = name.split('lids-');
  //   return compName[1];
  // });
};
