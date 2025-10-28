import { User } from "./user.model";
import { IUser } from "./user.interface";

/**
 * Create a new user
 * @param payload - The user data
 * @returns The created user (without password)
 */
export const createUserService = async (payload: IUser) => {
  // Check if user already exists by email
  const existingUser = await User.findOne({ email: payload.email });
  if (existingUser) {
    throw new Error("User with this email already exists.");
  }

  // Create new user
  const user = await User.create(payload);

  // Exclude password from response
  const userWithoutPassword = await User.findById(user._id).select("-password");
  return userWithoutPassword;
};

export const getAllUsers=async()=>{
    
    const data =await User.find();
    return data;
    
}

export const updateUserInfo=async(id:string, payload: Partial <IUser>)=>{
      const user =await User.findOne({_id:id});
      
      if(!user){
       throw new Error("User not found!")
      }else{
        const updateInfo =await User.findByIdAndUpdate(id,payload,{
            new:true,
            runValidators:true,
        }).select("-password");
        console.log("In servide");
        console.log(updateInfo);
      return updateInfo;  
      }

      
}

export const deleteSingleUser=async(id:string)=>{
     const user =await User.findOne({_id:id});
      
      if(!user){
       throw new Error("User not found!")
      }else{
        const deleteInfo=await User.findByIdAndDelete(id,{
            new:true,
            runValidators:true,

        })
        return deleteInfo;
      }
}
