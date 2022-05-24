const oprj=require("../moddels/ProjectModel")
const userCtrl = {
   
    codeCreate:async(req,res)=>{
        try {
             const { Code, Name, ProjectType, CostAllocation, StartDate, EndDate, Active, Address } = req.body;

            const newUser = new oprj({
                Code,
                Name,
                ProjectType,
                CostAllocation,
                StartDate,
                EndDate,
                Active,
                Address
            })

            // Save mongodb
            await newUser.save()
            res.send(newUser)
        } catch (error) {
            return res.status(500).json({msg:error})
        }
    }
 }

module.exports = userCtrl