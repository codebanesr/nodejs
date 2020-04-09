let fs = require('fs'),
reader = fs.createReadStream('../injector.js', {
    flag: 'a+',
    encoding: 'utf-8',
    highWaterMark: 1024*1024
});
 
// pipe doesnot return a this object;;;;; need to apply it on reader
// reader.pipe(fs.createWriteStream('../trash.txt'))


// reader.on('data', chunk=>{
//     console.log("chuunk", chunk);
// }).on('end', ()=>{
//     console.log("end")
// })
