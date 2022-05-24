const Tax = require("../moddels/TaxModel")
const taxCtrl = {
    createTax: async (req, res) => {
        try {
            const {
                Code,
                Name,
                InActive,
                Category,
                Acquisition_Reverse,
                Effective_From,
                Rate_Percent,
                Non_Reduction_Percentage,
                Tax_Account,
                Acquisition_Tax_Account,
                Deferred_Tax_Account,
                Non_Deduct_Account,
                Group_Description
            } = req.body;

            const newTax = new Tax({
                Code,
                Name,
                InActive,
                Category,
                Acquisition_Reverse,
                Effective_From,
                Rate_Percent,
                Non_Reduction_Percentage,
                Tax_Account,
                Acquisition_Tax_Account,
                Deferred_Tax_Account,
                Non_Deduct_Account,
                Group_Description

            })
            console.log({ newTax })
            await newTax.save()
            res.send(newTax)
        } catch (error) {
            // res.send()    
            return res.status(500).json({ msg: error })
        }

    },
}


module.exports = taxCtrl;