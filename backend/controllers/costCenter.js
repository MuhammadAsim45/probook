const costcenter = require("../moddels/costCenter")




const costCenterCtrl = {
    createCost: async (req, res) => {

        try {
            const { costCenter,
                costName,
                owner,
                sortCode,
                dimension,
                costCenterType,
                startDate,
                endDate,
                Active
            } = req.body;


            const cost = new costcenter({
                costCenter,
                costName,
                owner,
                sortCode,
                dimension,
                costCenterType,
                startDate,
                endDate,
                Active

            })


            console.log({ cost })

            await cost.save()
            res.send(cost)
        } catch (error) {
            return res.status(500).json({ msg: error })
        }




    },
}


module.exports = costCenterCtrl;