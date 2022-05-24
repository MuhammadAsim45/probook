const oprj=require("../moddels/NamesModel")
const userCtrl = {
   
    codeCreate:async(req,res)=>{
        try {
             const { Code, Name, CustomName } = req.body;

            const newUser = new oprj({
                Code,
                Name,
                CustomName
            })

            // Save mongodb
            await newUser.save()
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    }
 }

module.exports = userCtrl