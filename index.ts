import app from './src/App';
const port = process.env.PORT || 3000;
app.listen(port,err=>{
    if(err){
        console.log(err);
    }
    console.log(`server is running on port : ${port}`);
})