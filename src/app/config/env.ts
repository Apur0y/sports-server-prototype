import dotenv from "dotenv";
 
dotenv.config();

interface EnvType {
    PORT:string;
    DB_URL: string;
    NODE_ENV:string
}

const loadEnvVariables=():EnvType=>{

    const requiredEnvVariables:string[]=["PORT","DB_URL","NODE_ENV"];

    requiredEnvVariables.forEach(key=>{
        if(!process.env[key]){
            throw new Error(`Missing required environment ${key}`)
        }
    })

    return {
    PORT : process.env.PORT as string,
    DB_URL: process.env.DB_URL!,
    NODE_ENV: process.env.NODE_ENV! 
}
}

export const envVars=loadEnvVariables();