//Import models
const Category = require('./Category');
const Product = require('./Product');
const ProductTag = require('./ProductTag');
const Tag = require('./Tag');

// Associations
// Product belongs to Category, as a category can have multiple products but a product can only belong to one category.
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Category has many Product models.
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// Product belongs to many Tag models. Using the ProductTag through model, allow products to have multiple tags and tags to have many products.
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
})

// Tag belongs to many Product models.
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
})

// Export models
module.exports = { 
  Category, 
  Product, 
  ProductTag, 
  Tag 
};