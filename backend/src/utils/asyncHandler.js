const asyncHandler = (requestHandler)=> {
    (req,res,next)=>{
        Promise.resolve(requestHandler(res,req, next)).catch((err) => next())
    }
}


export {asyncHandler}

