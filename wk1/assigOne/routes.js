const express = require("express");
const itemModel = require("./models/inventory");
const app = express();

//POST endpoint
app.post("/add_item", async (request, response) => {
    const item = new itemModel(request.body);
  
    try {
      await item.save();
      response.send(item);
    } catch (error) {
      response.status(500).send(error);
    }
});

//GET endpoint
app.get("/items", async (request, response) => {
    const items = await itemModel.find({});
  
    try {
      response.send(items);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  module.exports = app;