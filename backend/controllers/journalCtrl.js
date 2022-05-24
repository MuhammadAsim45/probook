const jCtrl = require("../moddels/journalEntryModel");
const journalEntry = {
  createJournal: async (req, res) => {
    try {
      const {
        GL_Account,
        Name,
        Control,
        Debit,
        Credit,
        Employee_id,
        Remark,
        Ref1,
        Ref3,
        Project,
        CostCenter,
        Series,
        // number,
        postingDate,
        dueDate,
        docDate,
        remarks,
        origin,
        trans,
        project,
        ref,
        ref2,
        ref3,
        Number,
        DocumentLines,
      } = req.body;
      const newJournal = new jCtrl({
        GL_Account,
        Name,
        Control,
        Debit,
        Credit,
        Employee_id,
        Remark,
        Ref1,
        Ref3,
        Project,
        CostCenter,
        Series,
        postingDate,
        dueDate,
        docDate,
        remarks,
        origin,
        trans,
        project,
        ref,
        ref2,
        ref3,
        Number,
        DocumentLines,
      });

      DocumentLines.push({
        GL_Account,
        Name,
        Control,
        Debit,
        Credit,
        Employee_id,
        Remark,
        Ref1,
        Ref3,
        Project,
        CostCenter,
      });
      const body = DocumentLines.filter((el) => {
        return el.Name !== undefined && JSON.stringify(el) !== "{}";
      });
      //   newJournal.body
      await newJournal.save();
      res.send(newJournal);
    } catch (error) {
      return res.status(500).json({ msg: error });
    }
  },
};
module.exports = journalEntry;
