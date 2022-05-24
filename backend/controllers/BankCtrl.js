const bank=require('../moddels/BankModel')
const userCtrl = {
   
    codeCreate:async(req,res)=>{
        try {
    const {Country_code, Bank_code, Bank_Name, BIC_Swift_Code,Post_office, Account_no,
         Branch_Name, Next_Check_no } = req.body;

            const newUser = new bank({
                Country_code,
                Bank_code,
                Bank_Name,
                BIC_Swift_Code,
                Post_office,
                Account_no,
                Branch_Name,
                Next_Check_no
                 
            })

            // Save mongodb
            await newUser.save()
            console.log("done");
            res.send(newUser)    
        } catch (error) {    
            return res.status(500).json({msg:error})
        }
    }
 }

module.exports = userCtrl