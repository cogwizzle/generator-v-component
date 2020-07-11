'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const paramCase = require('param-case').paramCase;

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the splendid ${chalk.red('generator-v-component')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'componentName',
        message: 'What is the name of the component?',
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    const dashCaseComponentName = paramCase(this.props.componentName);
    this.fs.copyTpl(
      this.templatePath('vue-component.template.vue'),
      this.destinationPath(`${dashCaseComponentName}.vue`),
      {
        ...this.props,
        dashCaseComponentName,
      }
    );
  }
};

