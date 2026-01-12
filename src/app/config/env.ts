import dotenv from "dotenv";
 
dotenv.config();

interface EnvType {
    PORT:string;
    DB_URL: string;
    NODE_ENV:string
}

const loadEnvVariables=():EnvType=>{

    const requiredEnvVariables:string[]=["DB_URL","NODE_ENV"];

    requiredEnvVariables.forEach(key=>{
        if(!process.env[key]){
            throw new Error(`Missing required environment ${key}`)
        }
    })

    return {
    PORT : (process.env.PORT || '3000') as string,
    DB_URL: process.env.DB_URL!,
    NODE_ENV: process.env.NODE_ENV! 
}
}

export const envVars=loadEnvVariables();