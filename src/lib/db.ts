import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  image: String,
  description: String,
  category: String,
});

const orderSchema = new mongoose.Schema({
  product: {
    type: {
      _id: String,
      title: String,
      price: Number,
      image: String,
      description: String,
      category: String,
    },
  },
  userId: String,
  status: { type: String, default: "Pending" },
});

export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export const Order =
  mongoose.models.Order || mongoose.model("Order", orderSchema);

await (async () => {
  await mongoose.connect(process.env.MONGODB_URI || "");
  console.log("MongoDB connected");
})();

export const addProduct = async ({
  title,
  price,
  image,
  description,
  category,
}: {
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
}) => {
  const product = new Product({ title, price, image, description, category });
  try {
    await product.save();
    return 0;
  } catch (err) {
    return `DB Error: Unable to add product: ${err}`;
  }
};

export const addOrder = async ({
  productId,
  userId,
}: {
  productId: string;
  userId: string;
}) => {
  const order = new Order({ productId, userId });
  try {
    order.save();
    return 0;
  } catch (err) {
    return `DB Error: Unable to add order: ${err}`;
  }
};
