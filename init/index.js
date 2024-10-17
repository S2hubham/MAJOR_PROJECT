const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const dbUrl = "mongodb+srv://shubhamkokane151:T9YgKi4sRM8GpnYE@cluster0.qrspyz6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

main()
.then((res) => {
    console.log("Connected to DB");
})
.catch((err) => {
    console.log(err)}
);

async function main() {
    await mongoose.connect(dbUrl);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner : "669e8bd2549adb21c1054ed7"}));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
}

initDB(); 