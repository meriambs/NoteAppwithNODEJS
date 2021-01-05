const fs = require('fs');
const yargs = require('yargs');
/* const yargs = require('yargs'); */

// fs.appendFileSync("./notes.js" , 'heloo');
   const notes = require('./notes.js');
   //next video
   const argv = yargs.argv;
   var title = yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];
//   console.log(notes.add(2,8));
//  fs.appendFileSync('greting.txt', 'heyyy its a test');
// console.log("Process",process.argv);
// console.log("Yargs", yargs.argv);
//part of video 2
// console.log(title,body,command);
if (command === "add"){
    console.log('adding');
    notes.addingNote(title, body);
} else if (command === 'remove'){
    console.log('removing');
notes.removeNote(title);

}else if (command === 'read'){
    console.log('reading');
    notes.readNote(title);
}else if(command === "list"){
    console.log('listing all of them ');
    notes.listNote();
} else {
    console.log('unknown was used');
}