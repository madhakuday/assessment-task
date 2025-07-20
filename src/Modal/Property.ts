import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    location: {
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
      area: { type: String, required: false },
    },
    details: {
      rooms: { type: Number, required: true },
      bathrooms: { type: Number, required: true },
      size_m2: { type: Number, required: true },
      listingType: { type: String, enum: ["Buy", "Rent"], required: true },
      price_eur: { type: Number, required: true },
      currency: { type: String, default: "EUR" },
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Property ||
  mongoose.model("Property", PropertySchema);
