const dimension=require('../moddels/DimensionsModel')
const userCtrl = {
   
    codeCreate:async(req,res)=>{
        try {
             const {DimCode, DimName, DimActive, DimDesc } = req.body;

            const newUser = new dimension({
                
                DimCode, DimName,
                DimActive,
                DimDesc
                
                
            })

            // Save mongodb
            await newUser.save()
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    }
 }

module.exports = userCtrl