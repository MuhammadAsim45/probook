const distribution=require("../moddels/DistributionModel")
const userCtrl = {
   
    codeCreate:async(req,res)=>{
        try {
 const {Code, StartDate, EndDate, Discription, Dimension, Active, Total, Direct_Allocation, Fixed_Amount } = req.body;

            const newUser = new distribution({
                Code,
                StartDate,
                EndDate,
                Discription,
                Dimension,
                Active,
                Total,
                Direct_Allocation,
                Fixed_Amount
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