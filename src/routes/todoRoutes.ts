import express, { Router } from "express"
import { createTodo,getTodo,updateTodo, deleteTodo} from "../controller/todoController"

const router = express.Router()

router.get("/get-todo",getTodo)

router.post("/create",createTodo)

router.patch("/update-todo/:id",updateTodo)

router.delete("/delete-todo/:id",deleteTodo)

export  default router