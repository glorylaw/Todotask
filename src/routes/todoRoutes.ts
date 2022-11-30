import express, { Router } from "express"
import { createTodo } from "../controller/todoController"

const router = express.Router()

router.get("/create",createTodo)

export  default router