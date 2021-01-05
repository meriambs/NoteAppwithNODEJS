//   console.log('test');

//  function add(x,y){
//       return x+y ;
//   }

//   module.exports={
//       add
//   };

const fs = require('fs');
const { join } = require('path');
const  fetchNotes =()=>{
    try{
 return JSON.parse(fs.readFileSync('notes.txt'));
} catch (err){
   return [];
}
}

var  addingNote =(title, body)=>{
     var notess=fetchNotes();

//   var notess=[];

//   notess.push(JSON.parse(fs.readFileSync('notes.txt')));
    // ici nous avons un truc dans le cas ou on supp le contenue de notes.txt ici le code donne une erreur car dans jsopn on ne peut parsen un truc dans un fichier vide.
// amelioration des deux lignes ;

// try{
//  notess.push(JSON.parse(fs.readFileSync('notes.txt')));
// } catch (err){
//      notess=[];
// }
// ici on trouve en 1er il ya l'ajout du object vide puis du contenue puis des ajouts et objects a chaque fois .
 // maintenat le try on l'enkeve pour utiliser le fetch .
console.log(notess);
    var note ={
        title,
        body,
   };
   var duplicate=notess.filter((el)=>
      el.title === title);
   
   if(duplicate.length === 0){
 notess.push(note);
   
     fs.writeFileSync("notes.txt",JSON.stringify(notess) );
     logNote(note);
   } else {
       console.log(' Stop u have it ');
   }

//    notess.push(note);
   
//      fs.writeFileSync("notes.txt",JSON.stringify(notess) );
//      logNote(note);
 }

 var removeNote=(title)=>{
  var notess=fetchNotes();
  var filtreted = notess.filter((el)=>
      el.title !== title 
  );

fs.writeFileSync("notes.txt",JSON.stringify(filtreted) );
 }
 //ici on va filterer selon le titre , donc on filtre et on affiche le truc avec filtre
//note les {} dans un filtre filtre le tt .


var readNote=(title)=>{
    var notess=fetchNotes();
  var filtreted = notess.filter((el)=>
      el.title === title 
  );
    console.log(filtreted) ;
}
var listNote=()=>{
    var notess=fetchNotes();
notess.forEach((el)=>{
    logNote(el);
})
    console.log(notess);
}

var logNote=(note)=>{
    console.log(("gggggggggggggggggggg"));
    console.log('TRitle:${note.title');
     console.log('Body:${note.body');
}
module.exports={
    addingNote,
    removeNote,
    readNote
}
//and with this we could add an other object next to the new one a list of object.