import {Request,Response} from "express"
import TodoInstance from "../model/todoModel"
import {todoAttribute} from "../model/todoModel"

export const createTodo = async (req:Request,res:Response)=>{
  try {
    const{description,status}= req.body
    
  const Todo = await TodoInstance.findOne() as unknown as todoAttribute
  console.log(Todo)
  if(Todo){ 
    const createTodo= await TodoInstance.create({
        description,
        status
    })
    return res.status(201).json({
        message:"Todo created successfully",
        createTodo,
    })

  }
}
   catch (err:any) {
    console.log(err.message);
    // console.log(err.stack)
    res.status(500).json({
      Error: "Internal server Error",
      route: "/todo/create-todo",
    });
  }
}
// router.get('/add/todo',(req,res)=>{
//     const {todo}=req.body;
//     const newTodo=new Todo_model({todo,email_:req.user.email,done:"0"})
//     if(todo==""){
//         res.redirect('/')
//     }
//     newTodo.save()
//     .then(()=>{
//         console.log("done")
//         res.redirect('/')
//     })
//     .catch(err=>console.log(err))
// })
// export const createTodo = async (req:Request,res:Response)=>{
// try {
//    const {todo} = req.body
//     const newTodo = new TodoInstance({description,status:})
// } catch (error) {
    
// }
// }