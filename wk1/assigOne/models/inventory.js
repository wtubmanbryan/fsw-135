const mongoose = require("mongoose");
const ItemSchema = new mongoose.Schema({
fname: {
type: String,
required: true,
},
age: {
type: Number,
default: 0,
},
});
const Item = mongoose.model("Item", ItemSchema);
module.exports = Item;