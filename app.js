const chalk = require("chalk");
const fs = require('fs');
const yargs = require("yargs");
const sum = require("./utils.js");
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
    handler: function(argv){
        console.log("Title: ",argv.title);
        console.log("Body: ",argv.body);
    } 
});

//Creating remove command
yargs.command({
    command: 'remove',
    describe: 'remove note',
    handler: function(){
        console.log("remove note");
    } 
});

//Creating read command
yargs.command({
    command: 'read',
    describe: 'read note',
    handler: function(){
        console.log("read note");
    } 
});

//Creating list command
yargs.command({
    command: 'list',
    describe: 'list the notes',
    handler: function(){
        console.log("list notes");
    } 
});
yargs.version('1.1.0');
yargs.argv;
// add, remove, read, list

