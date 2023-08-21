const mongoose=require("mongoose")

async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("DB IS CONNECTED")
    } catch (error) {

         console.log("DB IS NOT CONNECT",error)
    }

}
module.exports={connectDB}