const JV=require('../moddels/JournalVoucherModel')
const userCtrl = {
   
    codeCreate:async(req,res)=>{
        try {
    const {JVNumber, Remarks, Trans, Date,TotalLC} = req.body;

            const newUser = new JV({
                JVNumber,
                Remarks,
                Trans,
                Date,
                TotalLC
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