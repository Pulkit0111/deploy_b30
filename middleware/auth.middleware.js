const jwt=require("jsonwebtoken")

const auth=(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1]
    if(token){
        jwt.verify(token,"masai",(err,decoded)=>{
            if(decoded){
                req.body.userID=decoded.userID
                req.body.username=decoded.username
                next() //=> going to update/delete route
            } else {
                res.send({"msg":"You are not authorised!"})
            }
        })
    } else {
        res.send({"msg":"Please Login!"})
    }
}

module.exports={
    auth
}