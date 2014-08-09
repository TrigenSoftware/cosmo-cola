Package.describe({
    summary: "ColaScript plugin for Meteor.",
    version: "1.0.0"
});

Package._transitional_registerBuildPlugin({
    name: "compileColaScript",
    use: [],
    sources: [
        'compile-colascript.js'
    ],
    npmDependencies: {
        "cola-script": "~0.5.0"
    }
});