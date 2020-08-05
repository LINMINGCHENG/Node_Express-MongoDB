const Bootcamp = require('../model/Bootcamp')

exports.getBootcamps=  (req,res,next) => {
 
    res.status(201).json({
        sucess:true,
        data: bootcamp
})
}

exports.getBootcamp =  (req, res, next) => {

   res.status(201).json({
       sucess: true,
       data: bootcamp
   })
}


exports.createBootcamp = async (req, res, next) => {
   try {
        const bootcamp = await Bootcamp.create(req.body)
        res.status(201).json({
            sucess: true,
            data: bootcamp
        })
   } catch (error) {
       res.status(400).json({sucess:false})
   }
   
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







