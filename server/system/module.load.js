exports = function(modules) {
    if (modules.length > 0) {
        var module = modules.shift();
        console.log("MODULE ["+module+"] is loading");
    
        var beforeTs = new Date().getTime();
        
        System.import(module).then(function (m) {
            var afterTs = new Date().getTime();
            console.log("MODULE ["+module+"] loaded after ["+(afterTs - beforeTs)+" ms]");
            exports(modules);
        })
        .catch( function (err) { 
            console.error(err); 
        });
    }
}