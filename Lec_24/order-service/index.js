const express = require('express');
const app = express();
app.use(express.json());

app.get('/orders',(req,res)=>{
    res.json({
        id: 101,
        item: 'Laptop',
        userId: 1
    });
})

app.listen(3002,()=>{
    console.log('Server is running on port 3002');
})