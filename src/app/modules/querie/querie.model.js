const { Schema, model } = require("mongoose");

const querieSchema = new Schema(
  {
    user: {
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
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    queryTitle: {
      type: String,
      required: true,
    },
    boyCottingReason: {
      type: String,
      required: true,
    },
    dateAndTime: {
      type: String,
      required: true,
    },
    recommendationCount: {
      type: Number,
      default: 0,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    timestamps: true,
  }
);

const Querie = model("Querie", querieSchema);

module.exports = Querie;
