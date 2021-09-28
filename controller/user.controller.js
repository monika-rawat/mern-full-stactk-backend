import { request, response } from "express";

export const getUsers =(request,response)=> {
   
        response.status(200).json("hi from monika");
    
    
    
    }
export const AddUser = (request,response) =>{

    response.send("code for monika");
}