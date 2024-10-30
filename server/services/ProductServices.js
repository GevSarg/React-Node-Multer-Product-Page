class ProductServices {
  constructor(models) {
    this.models = models;
  }
  async getProducts() {
    try {
      const products = await this.models.products.find();
      return products;
    } catch (error) {
      return error;
    }
  }
  async viewProduct(id) {
    try {
      const product = await this.models.products.findById(id);
      return product;
    } catch (error) {
      return error;
    }
  }
  async addProduct(body, file) {
    try {
      const doc = await this.models.products({ ...body, image: file.filename });
      const product = await doc.save();
      return product;
    } catch (error) {
      return error;
    }
  }
  async editProduct(id, body, file) {
    const updatedProduct = await this.models.products.findByIdAndUpdate(id, {
      ...body,
      image: file ? file.filename : body.image,
    });

    return updatedProduct;
  }

  async deleteProduct(id) {
    const delId = await this.models.products.findByIdAndDelete(id);
    return delId;
  }
}

module.exports = ProductServices;
