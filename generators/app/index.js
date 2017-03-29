'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
 constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Next, add your custom code
    this.appName = ''
  }

  initializing() {
    this.log('start mirror');
  }

	prompting() {
    return this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : this.appname // Default to current folder name
    }]).then((answers) => {
      this.log('app name: ', answers.name);
      this.appName = answers.name;
      this.fs.copy(
        this.templatePath('my-app'),
        this.destinationPath(),
        { title: 'copy file' }
      );
    });
  }

 	writing() {
    var currentPkg = this.fs.readJSON(this.destinationPath('package.json'), {});
    currentPkg.name = this.appName ? this.appName : currentPkg.name;
    this.fs.writeJSON(this.destinationPath('package.json'), currentPkg);
  }

  install (){
    this.spawnCommand('yarn', ['install']);
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

    this.yarnInstall(['babel-plugin-transform-class-properties',
                      'babel-plugin-transform-decorators-legacy',
                      'babel-plugin-import',
                      'less',
                      'less-loader'
                      ],{ 'dev': true });
  }

  end() {
      this.log('mirror finish');
  }

};
