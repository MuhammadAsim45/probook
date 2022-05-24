const chartAccount=require('../moddels/Chart_AccountModel')
const ChartAccountCtrl = {
   
    codeCreate:async(req,res)=>{
        try {
              const {   Parent,
                Title,
                Active,
                Group_Mask,
                GL_Account,
                        Name,
                        ExternalCode,
                        Currency,
                        Confidential,
                        Level,
                        Code,
                        Balance,
                        AccountType,
                        ControlAccount,
                        CashAccount,
                        Indexed,
                        RevalCurrency,
                        BlockPosting
                    } = req.body;

        const newUser = new chartAccount({
            Parent,
            Title,
            Active,
            Group_Mask,
            GL_Account,
                        Name,
                        ExternalCode,
                        Currency,
                        Confidential,
                        Level,
                        Code,
                        Balance,
                        AccountType,
                        ControlAccount,
                        CashAccount,
                        Indexed,
                        RevalCurrency,
                        BlockPosting
                 
            })

            // Save mongodb
            await newUser.save()
            res.send(newUser)
        } catch (error) {
            return res.status(500).json({msg:error})
            // return res.status(500).json({msg:error.message})
        }
    }
 }

module.exports = ChartAccountCtrl