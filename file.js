const fs = require('fs')//inbuild package -filesystem
// fs.readFile('./welcome.txt','utf-8',(err,data)=>{
//     console.log(data)
// })
//overwiter files
// const text="hello"
// fs.writeFile('./awesome.txt',text,(err)=>{
//     console.log("completed writing");
// })

// const quotes="Live more, worry less";
// const niceQuote ="Make everyday a little less ordinary";

//writing files in bulk 
// function createQuotes(noOfFiles,quote){
//     for (let i=1;i<=noOfFiles;i++){
//         fs.writeFile(`./backup/text-${i}.html`,quote,(err)=>{
//             console.log("completed writing");
//         })
//     }
// }
// const [, ,noOfFiles] = process.argv
// createQuotes(noOfFiles,quotes)
quotes = "\nMake everyday little less ordinary"
//add one file to another file
fs.appendFile("./awesome.txt",quotes,(error)=>{
    console.log("complete writing!!!")
})


//deleting file
// fs.unlink("./awesome.txt",(err)=>{
//     console.log("Deleted successfully!");
// })

// fs.readdir("./backup",(err,files)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(files)
// })