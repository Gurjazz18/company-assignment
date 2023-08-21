const jwt=require("jsonwebtoken")
const authentication = (req,res,next)=>{
const token=req.headers.authorization
     if(token){
             const decoded=jwt.verify(token,"auth")
     if(decoded){
             const userID=decoded.userID
             const name=decoded.username
         
             req.body.userID=userID
             req.body.Username=name

             next()
        } else {

             res.status(401).send({
                message:"Please Login first"
             })
        }
        } else {
            res.status(401).send({
                message:"Please Login first"
             })
        }
}
module.exports={
    authentication
}