import { env } from "./config/env.js";
import connectDB from './config/db.js'
import app from "./app.js";

const PORT = env.PORT;

const startServer = async () => {
    try{
        await connectDB();
        app.listen(PORT, () =>{
            console.log(`Server running on port ${PORT}`);
        })
    } catch(error: any) {
        console.error(`Failed to start the server: ${error.message}`)
    }
}

startServer();
