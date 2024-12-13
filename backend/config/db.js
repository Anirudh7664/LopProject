import mongoose from "mongoose";


const URL = "mongodb+srv://randevanirudh:AnirudhMongo@cluster0.dif22ba.mongodb.net/FoodDeliveryApp?retryWrites=true&w=majority&appName=Cluster0";
export const  connectDB = async () =>{
    try {
        await mongoose.connect(URL)
        console.log("Connected To Database")
    } catch (error) {
        console.log("Error in Connecting" + error)
    }
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.