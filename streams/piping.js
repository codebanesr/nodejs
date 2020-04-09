let fs = require('fs'),
reader = fs.createReadStream('../injector.js', {
    flag: 'a+',
    encoding: 'utf-8',
    highWaterMark: 1024*1024
});
 
reader.pipe(fs.createWriteStream('../trash.txt')).on('data', function (chunk) {
 
    console.log(chunk.toString());
 
});



/** 
* cron jobs with a heap size of 6 GB; B2B
*/
