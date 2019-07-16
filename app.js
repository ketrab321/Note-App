const chalk = require("chalk");
const fs = require('fs');
const yargs = require("yargs");
const notesUtilities = require('./notes.js');
const command = process.argv[2];

// if(command === 'add'){
//     console.log('Adding note!');
// }
// else if(command === 'remove'){
//     console.log('Removing note');
// }

//Customize yargs version

//Creating add command
yargs.command({
    command: 'add',
    describe: 'add new note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv)=>{
        notesUtilities.addNote(argv.title,argv.body);
    } 
});

//Creating remove command
yargs.command({
    command: 'remove',
    describe: 'remove note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv)=>{
        notesUtilities.removeNote(argv.title);
    } 
});

//Creating read command
yargs.command({
    command: 'read',
    describe: 'read note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv)=>{
        notesUtilities.readNote(argv.title);
    } 
});

//Creating list command
yargs.command({
    command: 'list',
    describe: 'list the notes',
    handler: ()=>{
        notesUtilities.listNotes();
    } 
});
yargs.version('1.1.0');
yargs.argv;
// add, remove, read, list

