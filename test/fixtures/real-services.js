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
<<<<<<< HEAD
  services.push(generateService({ name: 'bitbucket', url: 'http://bitbucket.com', port: 80 }));
  services.push(generateService({ name: 'youtube', url: 'http://youtube.com', port: 80 }));
  services.push(generateService({ name: 'facebook', url: 'http://facebook.com', port: 80 }));
  services.push(generateService({ name: 'twitter', url: 'http://twitter.com', port: 80 }));
  services.push(generateService({ name: '3=====D~~', url: 'http://linkedin.com', port: 80 }));
  services.push(generateService({ name: '3====D~~', url: 'http://bbc.com', port: 80 }));
  services.push(generateService({ name: '3===D~~', url: 'http://google.com', port: 80 }));
  services.push(generateService({ name: '3==D~~', url: 'http://maps.google.com', port: 80 }));
  services.push(generateService({ name: '3=D~~', url: 'http://maps.google.com', port: 80 }));

/*
  services.push(generateService({ name: 'bitbucket', url: 'http://bitbucket.com', port: 80 }));
  services.push(generateService({ name: 'youtube', url: 'http://youtube.com', port: 80 }));
  services.push(generateService({ name: 'facebook', url: 'http://facebook.com', port: 80 }));
  services.push(generateService({ name: 'twitter', url: 'http://twitter.com', port: 80 }));
  services.push(generateService({ name: 'linkedin', url: 'http://linkedin.com', port: 80 }));
  services.push(generateService({ name: 'bing', url: 'http://bing.com', port: 80 }));
  services.push(generateService({ name: 'blogspot', url: 'http://blogspot.com', port: 80 }));
  services.push(generateService({ name: 'oracle', url: 'http://oracle.com', port: 80 }));
  services.push(generateService({ name: 'microsoft', url: 'http://microsoft.com', port: 80 }));
  services.push(generateService({ name: 'business', url: 'http://business.com', port: 80 }));
  services.push(generateService({ name: 'bbc', url: 'http://bbc.com', port: 80 }));
  services.push(generateService({ name: 'google', url: 'http://google.com', port: 80 }));
  services.push(generateService({ name: 'google maps', url: 'http://maps.google.com', port: 80 }));
*/
=======

  services.push(generateService({ name: 'apple', url: 'apple.com', port: 443 }));
  services.push(generateService({ name: 'node', url: 'node.com', port: 80 }));
  services.push(generateService({ name: 'amazon', url: 'amazon.com', port: 80 }));
  services.push(generateService({ name: 'npm', url: 'npm.org', port: 80 }));
  services.push(generateService({ name: 'yahoo', url: 'yahoo.com', port: 80 }));
  services.push(generateService({ name: 'alexa', url: 'alexa.com', port: 80 }));
  services.push(generateService({ name: 'github', url: 'github.com', port: 80 }));
  services.push(generateService({ name: 'bitbucket', url: 'bitbucket.com', port: 80 }));

>>>>>>> 77d640991b9ee4c35e894531cf3ea73a9fe129ad
  return services;

})();
