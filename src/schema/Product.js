const Product = `type Product {
  id: ID!
  name: String!
  price: Float!
  stock: Int!
  onDisplay: Boolean
  category: Category
  tags: [Tag]
}`;

module.exports = Product;
