// console.log("Starting App js");
// import notes from './notes.js';
// const notes = require('./notes.js');
// console.log(notes.add(3,22));

// const _ = require('lodash');
// console.log(_.uniq([2, 2, 3, 4, 2, 3,]));

// fs module

// const fs = require('fs');
// fs.writeFileSync('notes.txt', 'My name is Shubham');
// fs.appendFileSync('notes.txt', ' \nI am a backend developer.');
  
// Validator module
 
// const validator = require('validator');
// // import validator from 'validator';
// console.log(validator.isEmail('skshubham1437@gmail.com'));

// Chalk module

const chalk = require('chalk');
const { demandOption } = require('yargs');
// console.log(chalk.green.bold('Success!'));

// nodemon package - To automatically run node app
// nodemon app.js

// process.argv - To get command line arguments
// console.log(process.argv);

// yargs  -  NPM package to parse command line arguments
const yargs = require('yargs');
  // console.log(yargs.argv);
  // customise yargs version
  // yargs.version('1.2.0')
  //add, remove, read, list

  const notes = require('./notes.js')
  // Create add command
  yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
      title:{
        describe: 'Note title',
        demandOption: true, //to set as required arguments
        type: "string" //to set title type as string
      },
      body: {
        describe: "Description of the list",
        demandOption: true,
        type: "string"
      }
    },
    handler(argv){
      // console.log('Title:' + argv.title + "\nDescription:" + argv.bodymea);
      notes.addNote(argv.title, argv.body)
    }
  })

  // Create remove command
  yargs.command({
    command:'remove',
    describe: 'Remove a note', 
    builder: {
      title: {
          describe: 'Note Title',
          demandOption: true,
          type: "string"
        }
      },  
    handler(argv){
      notes.removeNote(argv.title)
    }
  })
  // Create list command
  yargs.command({
    command:'list',
    describe: 'List the note', 
    handler(){
      // console.log(chalk.blue.bold.underline('Your Notes:'))
      notes.listNotes()
    }
  })
  // Create read command
  yargs.command({
    command:'read',
    describe: 'Read the note',
    bulider: {
      title: {
        describe: "Note Title",
        demandOption: true,
        type: "string"
      }
    },
    handler(argv){
      // console.log('Reading the note')
      notes.readNote(argv.title)
    }
  })

  yargs.parse();
  // console.log(yargs.argv)


 

















