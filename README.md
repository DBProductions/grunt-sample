grunt-sample
============

Example or skeleton for using Grunt.  
As default Grunt runs the following tasks:  
clean, jshint, jscs, jasmine, uglify, release, yuidoc, compress

Adjust package.json to your needs and edit Gruntfile.js when needed.

[Grunt Homepage](http://gruntjs.com/)

## Getting started

Installing the command line interface.  
`npm install -g grunt-cli`

1. Download or clone repository  
2. inside of the directory run `npm install` to install the dependencies  
3. run `grunt`  

## git Hook

The example use grunt-githooks and have a test task defined which runs jshint, jscs.  
To activate the hook run `grunt githooks`, then every commit will run the test task before.

## Travis CI

The continuous integration service is monitoring this repository: [Link](https://travis-ci.org/DBProductions/grunt-sample)

![Build Status](https://travis-ci.org/DBProductions/grunt-sample.svg?branch=master)

## Jenkins

Using the example as Jenkins job, you can simple run a shell execution when dependencies are installed.

```bash
#!/bin/bash

export PATH=/usr/local/bin:$PATH;

git clone https://github.com/DBProductions/grunt-sample.git .
npm install
grunt --verbose
```

For diplaying the results, following Plugins are useful.
* Checkstyle Plug-in
* Cobertura Plugin

## Feedback
Star this repo if you found it useful. Use the github issue tracker to give feedback on this repo.  
