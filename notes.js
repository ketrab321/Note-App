const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body)=>{
    const notes  = loadNotes();
    const duplicateNotes = notes.filter((note)=>note.title === title);
    if(duplicateNotes.length === 0)
    {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green("New note added!"));
    }
    else{
        console.log(chalk.red("Note title taken!"));
    }
}
const removeNote = (title)=>{
    const notes = loadNotes();
    notesAfterRemoving = notes.filter((note)=>note.title !== title);
    if(notesAfterRemoving.length < notes.length)
    {
        saveNotes(notesAfterRemoving);
        console.log(chalk.green("Note successfully deleted"));
    }
    else{
        console.log(chalk.red("None of the notes match the title"));
    }
}
const listNotes = ()=>{
    const notes = loadNotes();
    console.log(chalk.green("Your notes"));

    notes.forEach( (note)=>{
        console.log(chalk.blue("Title: " + note.title));
        console.log("   " + chalk.yellow(note.body));
    })
}
const readNote = (title)=>{
    const notes = loadNotes();
    const note = notes.find((_note)=>_note.title===title);
    if(note){
        console.log(chalk.blue("Title: " + note.title));
        console.log("   " + chalk.yellow(note.body));
    }
    else{
        console.log(chalk.red("None of the notes match the title"));

    }
}
const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}
const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch(e){
        return []
    }
    
}
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}