"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoController_1 = require("../controller/todoController");
const router = express_1.default.Router();
router.get("/get-todo", todoController_1.getTodo);
router.post("/create", todoController_1.createTodo);
router.patch("/update-todo/:id", todoController_1.updateTodo);
router.delete("/delete-todo/:id", todoController_1.deleteTodo);
exports.default = router;
