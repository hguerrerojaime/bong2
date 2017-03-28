exports = {
    transpiler: 'typescript',
    map: {
        'app':                        'scripts', // 'dist',
        '@angular':                   'vendors/node_modules/@angular',
        'angular2-in-memory-web-api': 'vendors/node_modules/angular2-in-memory-web-api',
        'rxjs':                       'vendors/node_modules/rxjs',
        'moment':                     'vendors/node_modules/moment',
        '@plugins/node':              'vendors/node_modules',
        '@plugins/other':             'vendors/other',
        'jquery':					  'vendors/node_modules/jquery/dist',
        'bootstrap':			      'vendors/node_modules/bootstrap/dist/js',
        'ng2-slim-loading-bar':       'vendors/node_modules/ng2-slim-loading-bar',
        'doT':                        'vendors/other/query-builder/doT.min.js',
        'jQuery.extendext':           'vendors/other/query-builder/jQuery.extendext.min.js',
        'angular2-datatable':         'vendors/node_modules/angular2-datatable',
        'ng2-dragula':                'vendors/node_modules/ng2-dragula',
        'lodash':                     'vendors/node_modules/lodash',
        'dragula':                    'vendors/node_modules/dragula/dist',
        'typescript':                 'vendors/node_modules/typescript'
    },
    packages: {
        'app':                        { main: 'application/src/ts/init/boot',  defaultExtension: 'js' },
        'core':                       { defaultExtension: 'js' },
        'commons':                    { defaultExtension: 'js' },
        'rxjs':                       { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
        'moment':					  { main: 'moment.js', defaultExtension: 'js' },
        'jquery':				      { main: 'jquery.min.js', defaultExtension: 'js' },
        'bootstrap':			      { main: 'bootstrap.min.js', defaultExtension: 'js' },
        'ng2-slim-loading-bar':       { main: 'index.js',  defaultExtension: 'js' },
        'angular2-datatable':         { main: 'index.js', defaultExtension: 'js' },
        'lodash':                     { main: 'index.js', defaultExtension: 'js' },
        'ng2-dragula':                { main: 'ng2-dragula.js', defaultExtension: 'js' },
        'dragula':                    { main: 'dragula.js', defaultExtension: 'js' },
        'typescript':                 { main: 'lib/typescript.js', defaultExtension: 'js' }
    }

};

