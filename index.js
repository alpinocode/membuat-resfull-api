const express =require("express");

// memanggil express
const app = express();

// membuat port 
app.listen(4000,()=>{
    console.log('Server berhasil di running')
})