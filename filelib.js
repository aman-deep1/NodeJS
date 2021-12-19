const fs=require('fs');

/* fs.readFile('read.txt',(err, data) => {
    if (err === null){
        console.log(data.toString());
    }
    else{
        console.log(err.message);
    }
}); */

let d=fs.readFileSync('read.txt');
fs.writeFileSync('read.txt',d.toString()+ ' Hello Aman',(err) => {
    if (err === null){
      //  console.log(data.toString());
    }
    else{
        console.log(err.message);
    }
});