const { Schema, model } = require("mongoose");

const recommendationSchema = new Schema({
  queryUser: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  recommendationUser: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  querieId: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  querieTitle: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
});

const Recommendation = model("Recommendation", recommendationSchema);

module.exports = Recommendation;
