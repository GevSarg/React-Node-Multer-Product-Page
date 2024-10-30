class ProductControllers {
  async getProducts(req, res) {
    try {
      const products = await req.app.locals.services.products.getProducts();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ msg: "Failed getting products " + error });
    }
  }

  async viewProduct(req, res) {
    try {
      const { id } = req.params;
      const product = await req.app.locals.services.products.viewProduct(id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ msg: "Failed getting the product " + error });
    }
  }

  async addProduct(req, res) {
    try {
      const { body, file } = req;
      const product = await req.app.locals.services.products.addProduct(
        body,
        file
      );
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ msg: "Failed adding the product " + error });
    }
  }

  async deleteProduct(req, res) {
    const { id } = req.params;
    try {
      await req.app.locals.services.products.deleteProduct(id);
      res.status(201).json({ msg: "Deleted" });
    } catch (error) {
      res.status(500).json({ msg: "Failed deleting product " + error });
    }
  }

  async editProduct(req, res) {
    try {
      const { id } = req.params;
      const { body, file } = req;
      const updatedProduct = await req.app.locals.services.products.editProduct(
        id,
        body,
        file
      );
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json({ msg: "Failed updating the product " + error });
    }
  }
}

module.exports = ProductControllers;
