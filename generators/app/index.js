'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
 constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Next, add your custom code
  }

  start() {
      this.log('start mirror');
  }

 	writing() {
    this.fs.copyTpl(
      this.templatePath('my-app'),
      this.destinationPath(),
      { title: 'Templating with Yeoman' }
    );
  }

  end() {
      this.log('mirror finish');
  }

};
