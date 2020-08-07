const Bootcamp = require('../model/Bootcamp')

exports.getBootcamps=  async (req,res,next) => {
   try {
      const bootcamps = await Bootcamp.find();
      res.status(200).json({
          sucess: true,
          count:bootcamps.length,
          data: bootcamps
       })
  } catch (error) {
      res.status(400).json({sucess: false})
  }
    
};

exports.getBootcamp =  async (req, res, next) => {
   try {
     const bootcamp = await Bootcamp.findById(req.params.id);
     if(!bootcamp){
         return res.status(400).json({
             sucess: false
         });
     } 
     res.status(200).json({
         sucess: true,
         data: bootcamp
     })
   } catch (error) {
     res.status(400).json({
         sucess: false
     })
 }
  
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

//updated
exports.updateBootcamp = async(req, res, next) => {
    try {
         const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
             new: true,
             runValidation: true
         });
          if (!bootcamp) {
              return res.status(400).json({
                  sucess: false
              });
          }
  
         res.status(200).json({
             success: true,
             data:bootcamp
         }) 
       
    } catch (error) {
        res.status(400).json({
            sucess: false
        });
    } 
    }

exports.deleteBootcamp = async (req, res, next) => {
     try {
         const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
         
         if (!bootcamp) { 
             return res.status(400).json({ sucess: false }); 
            }
      
         res.status(200).json({
                     success: true,
                     data: {}
                 })
       } 
       catch (error) {
         res.status(400).json({
             sucess: false
         });
     }
 
 

}







