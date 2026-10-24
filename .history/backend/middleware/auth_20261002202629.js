const jwt = require("jsonwebtoken")

const AuthUser = (req,res,next) => {

    const {token} = req.headers
    if(!token){
        res.status(404).json({scuess:false,message:"Auth Token and Login Required"})
    }
    try {
        const verify = jwt.verify(token,process.env.SECRECT_KEY)
        req.user = verify.id
        next()
    } catch (error) {
        console.log(error)
        res.json({scuess:false,message:"error"})
    }

}

module.exports = {
    AuthUser
}