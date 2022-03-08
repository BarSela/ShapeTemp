const express= require('express');
const port=process.env.PORT || 3000;
const app= express();

app.get('/', (req, res)=>{
    res.send('<h>hi from server </h>');
});
app.listen(port,()=>{console.log('server is up and running');});