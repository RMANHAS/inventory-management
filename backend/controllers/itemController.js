
const Item = require("../models/Item");
const Category = require("../models/Category");

// Create Item (your existing code)
exports.createItem = async (req, res) => {
  try {
    const { name, description = "", price, category } = req.body;

    if (!name || !price || !category)
      return res.status(400).json({ message: "Name, price, and category are required" });

    const numericPrice = Number(price);
    if (isNaN(numericPrice))
      return res.status(400).json({ message: "Price must be a number" });

    const newItem = await Item.create({ name, description, price: numericPrice, category });

    res.status(201).json(newItem);
  } catch (err) {
    console.error("Create item error:", err);
    res.status(500).json({ message: "Server error" });
  }
};


exports.getItems = async (req, res) => {
  try {
   
   
    const items = await Item.find().sort({ createdAt: -1 });
   
    const categories = await Category.find();
   
   

    const itemsWithCategoryName = items.map((item) => {
     
      const cat = categories.find((c) => {
        console.log(
          "Comparing:",
          c._id.toString(),
          "===",
          item.category.toString(),
        );
        return c._id.toString() === item.category.toString();
      });

    

      return {
        ...item._doc,
        category: cat ? cat.name : "Unknown",
      };
    });


    res.status(200).json(itemsWithCategoryName);
  } catch (err) {
    console.error("ERROR in getItems:", err);
    res.status(500).json({ message: "Server error" });
  }
};