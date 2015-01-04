Package.describe({
  name: 'dangreen:cosmo-cola',
  summary: 'ColaScript plugin for Meteor.',
  version: '1.0.3',
  git: 'https://github.com/TrigenSoftware/cosmo-cola.git'
});

Package._transitional_registerBuildPlugin({
    name: "compileColaScript",
    use: [],
    sources: [
        'compile-colascript.js'
    ],
    npmDependencies: {
        "cola-script": "0.8.5"
    }
});