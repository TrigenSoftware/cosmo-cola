var fs = Npm.require('fs'),
    path = Npm.require('path'),
    Cola = Npm.require('cola-script');

Plugin.registerSourceHandler("cola", function(compileStep) {
    var source = compileStep.read().toString('utf8'),
        result = "",
        outputFile = compileStep.inputPath + ".js",

        stream = new Cola.OutputStream({ beautify : true, comments : true }),
        compressor = new Cola.Compressor({ is_js : false });

    try {
        // 1. compile
        var ast = Cola
            .parse(source, { is_js : false })
            .toJavaScript({ 
                main_binding : false,
                is_node : true,
                modules : {}
            });

        // 2. compress
        // ast.figure_out_scope();
        // ast = ast.transform(compressor);

        ast.print(stream);
        result = stream.toString();
    } catch(e){
        throw e;
    }

    compileStep.addJavaScript({
        path: outputFile,
        sourcePath: compileStep.inputPath,
        data: result,
        bare: compileStep.fileOptions.bare
    });
});