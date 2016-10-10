var _ = require('lodash');

exports = module.exports = (function(){

  var MIN = 60 * 1000; //ms

  var DEFAULTS = {
    interval: 600,
    failureInterval: 10000,
    timeout: 10000,
    warningThreshold: 3000,
    pingServiceName: 'icmp'
  };

  function generateService (service){
    return _.defaults(service, DEFAULTS);
  }

  var services = [];

  services.push(generateService({ name: 'apple', url: 'apple.com', port: 443 }));
  services.push(generateService({ name: 'node', url: 'node.com', port: 80 }));
  services.push(generateService({ name: 'amazon', url: 'amazon.com', port: 80 }));
  services.push(generateService({ name: 'npm', url: 'npm.org', port: 80 }));
  services.push(generateService({ name: 'yahoo', url: 'yahoo.com', port: 80 }));
  services.push(generateService({ name: 'alexa', url: 'alexa.com', port: 80 }));
  services.push(generateService({ name: 'github', url: 'github.com', port: 80 }));
  services.push(generateService({ name: 'bitbucket', url: 'bitbucket.com', port: 80 }));

  return services;

})();
