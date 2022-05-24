const Cur = require("../moddels/CurrencyModel")
const currencyCtrl = {

    createCurrency: async (req, res) => {
        try {
            const {

                Code,
                Currency,
                International_Code,
                International_Description,
                Hundredth_Name,
                English,
                English_Hundredth_Name,
                ISO_Currency_Code,
                Incoming_Amt_Diff_Allowed,
                Outgoing_Amt_Diff_Allowed,
                Outcoming_Incoming_Percent,
                Outgoing,
            } = req.body;
            const newCurrency = new Cur({
                Code,
                Currency,
                International_Code,
                International_Description,
                Hundredth_Name,
                English,
                English_Hundredth_Name,
                ISO_Currency_Code,
                Incoming_Amt_Diff_Allowed,
                Outgoing_Amt_Diff_Allowed,
                Outcoming_Incoming_Percent,
                Outgoing
            })
            console.log({ newCurrency })
            await newCurrency.save()
            res.send(newCurrency) 
        }
        catch (error) {
            return res.status(500).json({ msg: error })
        }
    },
}


module.exports = currencyCtrl;