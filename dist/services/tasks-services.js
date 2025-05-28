import { createId } from "@paralleldrive/cuid2";
import { TaskModel } from '../models/index.js';
class TaskService {
    async createTask({ title, description, images }) {
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
        };
    }
    async updateTask({ id, title, description, images }) {
        const updatedTask = await TaskModel.findOneAndUpdate({ id }, { title, description, images }, { new: true });
        return {
            updatedTask
        };
    }
    async changeTaskCompletion({ id }) {
        const taskCompleted = await TaskModel.findOneAndUpdate({ id }, [{ $set: { completed: { $not: '$completed' } } }], { new: true });
        return {
            taskCompleted
        };
    }
    async deleteTask({ id }) {
        const deleteTask = await TaskModel.findOneAndDelete({ id });
        return {
            deleteTask
        };
    }
}
export default new TaskService();
