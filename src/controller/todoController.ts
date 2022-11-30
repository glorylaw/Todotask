import {Request,Response} from "express"
import TodoInstance from "../model/todoModel"
import {todoAttribute} from "../model/todoModel"



export const getTodo = async (req:Request,res:Response)=>{
    try {
        const todo = await TodoInstance.find()
        res.status(200).json({
            todo
        })        
    } catch (err:any) {
        console.log(err.message);
    // console.log(err.stack)
    res.status(500).json({
      Error: "Internal server Error",
      route: "/todo/get-todo",
    });
    }
}


export const createTodo = async (req:Request,res:Response)=>{
  try {
    const{description,status}= req.body
    
  const Todo = await TodoInstance.find()
  console.log(Todo)
  if(Todo){ 
    const createTodo= await TodoInstance.create({
        description,
        status
    })
     return res.status(200).json({
        status:"Todo created successfully",
        data:Todo
    })

  }
   return res.status(400).json({
    status:"failed"
  })
}
   catch (err:any) {
    console.log(err.message);
    // console.log(err.stack)
 return   res.status(500).json({
      Error: "Internal server Error",
      route: "/todo/create",
    });
  }
}

export const updateTodo = async (req:Request, res:Response) => {
    try{
        const id = req.params.id;
 const {description, status} = req.body;
 const updatetodo = await TodoInstance.findOne({"_id": id});
 if(updatetodo){
    const todo = await TodoInstance.updateOne({"_id": id},{
        description, status
    })
    return res.status(200).json({
        status: 'updated successfully',
        data: todo
    })
    }
    return res.status(400).json({
        message: "unidentified data"
     }) 
}catch(err){
        return res.status(500).json({
            message: 'internal server error',
            routes: 'todo/update-todo/:id'
         })  
    }
}
export const deleteTodo = async (req:Request, res:Response) => {
    try{
        const id = req.params.id;
        const removedtodo = await TodoInstance.findOneAndDelete({"_id": id})
        return res.status(200).json({
           message: "deleted successfully"
        })
        return res.status(400).json({
            message: "unidentified data"
         }) 
    }catch(err){
        return res.status(500).json({
            message: 'internal server error',
            routes: 'todo/remove-todo/:id'
         })
    }
}


