require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use(
  fileUpload({
    useTempFiles: true,
  })
);
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
mongoose
  .connect("mongodb://localhost:27017/Bookkeeping", {
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log("error to connected with mongodb" + err);
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ msg: "hello i am home page" });
});

app.use("/", require("./routers/userRouter"));
app.use("/", require("./routers/costCenterRouter"));
app.use("/", require("./routers/detailRouter"));
app.use("/", require("./routers/journalEntryRouter"));
app.use("/", require("./routers/JournalVoucherRouter"));
app.use("/", require("./routers/ProjectRoute"));
app.use("/", require("./routers/BankRoute"));
app.use("/", require("./routers/CurrencyRoute"));
app.use("/", require("./routers/TaxRoute"));
app.use("/", require("./routers/DistributionRoute"));
app.use("/", require("./routers/DimensionRoute"));
app.use("/", require("./routers/ChartAccountRoute"));
app.use("/", require("./routers/NameRouter"));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`your server is ok at ${port}`);
});
