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

  installDependencies (){
    this.yarnInstall([
      'antd',
      'lodash',
      'axios',
      'classnames',
      'qs',
      'moment',
      'mobx',
      'mobx-react',
      'react-router@3.0.0',
      'react-ga',
      'file-saver',
      'echarts-for-react'
    ]);
    this.yarnInstall(['babel-plugin-transform-class-properties','babel-plugin-transform-decorators-legacy','babel-plugin-import'],{ 'dev': true });
  }

  end() {
      this.log('mirror finish');
  }

};
