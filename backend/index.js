const express=require('express');
const app=express();
const cors=require('cors');
const {db}=require('./dbConnection');

app.use(cors());
app.use(express.json());

db.connect(err=>{
    if(err){
        console.error("error connecting to the database",err);
        return;
    }
    console.log("connected to database successfully");
})

app.get('/',(req,res)=>{
    db.query('SELECT * FROM products',(err,result)=>{
        if(err)return res.json(err);
        return res.json(result);
    })
})


app.get('/products/:id',(req,res)=>{
    const productId = req.params.id;
    db.query('SELECT * FROM products WHERE products.id=?',[productId],(err,result)=>{
        if(err)return res.json(err);
        return res.json(result);
    })
})


app.listen(5000,()=>{
    console.log("server running at port 5000");
})