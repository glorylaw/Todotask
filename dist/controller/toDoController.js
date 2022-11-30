"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = void 0;
const todoModel_1 = __importDefault(require("../model/todoModel"));
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { description, status } = req.body;
        const Todo = yield todoModel_1.default.findOne();
        console.log(Todo);
        if (Todo) {
            const createTodo = yield todoModel_1.default.create({
                description,
                status
            });
            return res.status(201).json({
                message: "Todo created successfully",
                createTodo,
            });
        }
    }
    catch (err) {
        console.log(err.message);
        // console.log(err.stack)
        res.status(500).json({
            Error: "Internal server Error",
            route: "/todo/create-todo",
        });
    }
});
exports.createTodo = createTodo;
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
