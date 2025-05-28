import { createId } from "@paralleldrive/cuid2";
import { UpdateTaskProps, createTaskProps } from "../interfaces/tasks-services.js";
import {  TaskModel  } from '../models/index.js';

class TaskService {
    async createTask({ title, description, images } : createTaskProps) {
        const newTask = await TaskModel.create({
            id: createId(),
            title,
            description,
            images
        });

        return {
         newTask
        };
    }



    async getALLTasks() {
        const tasks = await TaskModel.find();

        return {
            tasks
        }
    }

   async updateTask({id, title, description, images} : UpdateTaskProps){
    const updatedTask = await TaskModel.findOneAndUpdate(
        { id },
        { title, description, images },
        { new: true }
    );

    return {
        updatedTask
    }
   }
}

export default new TaskService();