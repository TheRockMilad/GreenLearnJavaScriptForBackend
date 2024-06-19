const fs = require('fs')

fs.mkdir('Milad',{recursive : true},(err)=>{
    if (err) {
        throw err
    }
    console.log("Directory created successfully");
}) 