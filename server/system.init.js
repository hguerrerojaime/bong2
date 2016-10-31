/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  
  // map tells the System loader where to look for things
  var map = {
    'app':                        'scripts', // 'dist',
    '@angular':                   'vendors/node_modules/@angular',
    'angular2-in-memory-web-api': 'vendors/node_modules/angular2-in-memory-web-api',
    'rxjs':                       'vendors/node_modules/rxjs',
    '@bong':					            'scripts',
    'moment':                     'vendors/node_modules/moment',
    '@plugins/node':              'vendors/node_modules',
    '@plugins/other':             'vendors/other',
    'jquery':					            'vendors/node_modules/jquery/dist',
    'bootstrap':			            'vendors/node_modules/bootstrap/dist/js',
    'ng2-slim-loading-bar':       'vendors/node_modules/ng2-slim-loading-bar',
    'datatables.net':             'vendors/node_modules/datatables.net/js',
    'doT':                        'vendors/other/query-builder/doT.min.js',
    'jQuery.extendext':           'vendors/other/query-builder/jQuery.extendext.min.js'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'init/boot',  defaultExtension: 'js' },
    'core':                       { defaultExtension: 'js' },
    'commons':                    { defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    'moment':					            { main: 'moment.js', defaultExtension: 'js' },
    'jquery':				              { main: 'jquery.min.js', defaultExtension: 'js' },
    'bootstrap':			            { main: 'bootstrap.min.js', defaultExtension: 'js' },
    'ng2-slim-loading-bar':       { main: 'index.js',  defaultExtension: 'js' },
    'datatables.net':             { main: 'jquery.dataTables.js', defaultExtension: 'js' }
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade'
  ];
  
  var bongPackageNames = [
    'core',
    'components',
    'directives',
    'services'
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  
  bongPackageNames.forEach(function(pkgName){
      packages['@bong/'+pkgName] = { main: 'index', defaultExtension: 'js' };
  });
  
  var config = {
    //transpiler: 'typescript',
    map: map,
    packages: packages
  };
  System.config(config);
  
  var modules = ['jquery','bootstrap','app'];
    
  function importModules(modules) {
    
    
	  
	  if (modules.length > 0) {
		  var module = modules.shift();
      
      console.log("MODULE ["+module+"] is loading");
      
      var beforeTs = new Date().getTime();
		  
		  System.import(module).then(function (m) {
        
        var afterTs = new Date().getTime();
        
        console.log("MODULE ["+module+"] loaded after ["+(afterTs - beforeTs)+" ms]");
        
			  importModules(modules);
		  })
		  .catch( function (err) { 
			   console.error(err); 
		  });
	  }
  }
  
  importModules(modules);
  
  
})(this);