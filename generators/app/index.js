var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    //Greet the user
    initializing() {
        this.log(`
     .-::/:-'        
    -++/-://+.         
    -++.  '://-         Hello!         
    ':o.   ./+/-        You've just launched the GOATstack generator
    :o   -/o+/'                  
    '.' -/oo//          Select from the list below to get started!
        '/ooo+-'       
        .+ooo--+o+:-.    
        .oooo:':/+ooo.   
        :ooooo++oooo+'   
        -oooooooooo+.    
        ./oooooo+-' 
        '`);
    }
    //Ask the user for their input
    prompting() {
        return this.prompt([{
          type    : 'list',
          name    : 'home',
          message : `Select from the options below`,
          choices: [ 
                {type: 'separator', line: '----------- Start here --------------------'},
                `Generate a new app`, 
                {type: 'separator', line: '----------- Resources --------------------'},
                "View Documentation",
                "View Demo app",
                {type: 'separator', line: '----------- Get involved --------------------'},
                "Report a Bug",
                "Make a Pull Request",
                {type: 'separator', line: '----------- Created By --------------------'},
                "LyghtWorks",
                "Christopher Haugen",
                "Jason Thomas",
                {type: 'separator', line: '----------- Custom optimizations, tailored for your use-case! ------------'},
                "It\'s dangerous to go alone! Hire us"
            ]
        }, {
          type    : 'confirm',
          name    : 'cool',
          message : 'Would you like to enable the Cool feature?',
          store   : true
        }]).then((answers) => {
          this.log('home selection', answers.home);
          this.log('cool feature', answers.cool);
        });
      }


};