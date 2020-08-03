exports.getBootcamps= (req,res,next) => {
    res.status(200).json({
        sucess:true,
        msg:'Show all bootcamps', hello:req.hello });
}

exports.getBootcamp= (req,res,next)=>{
  res.status(200).json({
      success: true,
      msg: `show bootcamp ${req.params.id}`
  })
}


exports.createBootcamp = (req, res, next) => {
   res.status(200).json({
       success: true,
       msg: "create new bootcamp"
   })
}
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `update bootcamp ${req.params.id}`
    })
}

exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({
      success: true,
      msg: `delete bootcamp ${req.params.id}`
  })
}







