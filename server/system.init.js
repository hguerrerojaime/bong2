/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  
    Promise.all([
      System.import('./system/system.config.js'),
      System.import('./system/ng2.config.js'),
      System.import('./system/module.load.js')
    ]).then(function(modules){
      var sysConfig = modules[0];
      var ng2Config = modules[1];
      var moduleLoad = modules[2];

      ng2Config(sysConfig.packages);

      System.config(sysConfig);

      moduleLoad(['jquery','bootstrap','app']);

    });

})(this);