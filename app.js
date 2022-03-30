const chalk = require('chalk');
const { demandOption } = require('yargs');

const yargs = require('yargs'); // yargs  -  NPM package to parse command line arguments
  // customise yargs version
  yargs.version('1.1.0')
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
      console.log("Note Added")
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
      console.log("Note Removed")
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


 

















