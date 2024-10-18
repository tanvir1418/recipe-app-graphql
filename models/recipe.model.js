import { Schema, model } from "mongoose";

const recipeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    createdAt: {
      type: String,
    },
    thumbsUp: {
      type: Number,
    },
    thumbsDown: {
      type: Number,
    },
    // createdBy: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User",
    // },
  },
  {
    timestamps: true,
  }
);

const RecipeModel = model("Recipe", recipeSchema);
export default RecipeModel;
