const express =require("express");

// memanggil express
const app = express();

// membuat routing 
// app method(path, handler)
// app.use("/", (req, res, next)=> {
//     res.send('hello user')
// })

app.get("/", (req,res) => {
    res.send('hello pojan')
})

app.post("/", (req,res) => {
    res.send('hello alpin')
})


// membuat port 
app.listen(4000,()=>{
    console.log('Server berhasil di running')
})
