import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
const addressSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
    lowercase: true,
  },
  city: {
    type: String,
    required: true,
    lowercase: true,
  },
  postalCode: {
    type: Number,
    required: true,
  },
  state: {
    type: String,
    required: true,
    lowercase: true,
  },
  country: {
    type: String,
    required: true,
    lowercase: true,
  },
});
const paymnetSchema = new mongoose.Schema({});
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password cannot be empty"],
    },
    phoneNo: {
      type: Number,
      unique: true,
      required: true,
    },
    address: [addressSchema],
    // paymentDetails: [paymnetSchema],
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
const User = mongoose.model("User", userSchema);
export { User };
