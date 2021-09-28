import express, { response } from 'express';
import mongoose from 'mongoose';
import route  from './route/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app =express();
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());



app.use('/users',route);
const URL = 'mongodb+srv://monika:Monikachetu1234@crud.2njks.mongodb.net/MONIKA?retryWrites=true&w=majority';
const PORT =8001;
mongoose.connect(URL, {useNewUrlParser: true,
     useUnifiedtopology: true, 
    }).then(() =>{

   app.listen(PORT, () =>{
    console.log(`server is running sucessfully ON PORT ${PORT}`);
});

     }).catch(error =>{
         console.log('Error:', error.message);
     })