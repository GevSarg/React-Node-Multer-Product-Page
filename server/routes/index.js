const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

const ProductController = require("../controllers/ProductControllers");

const controller = new ProductController();

/* GET home page. */
router.get("/", controller.getProducts);

router.get("/:id", controller.viewProduct);

router.post("/add", upload.single("image"), controller.addProduct);

router.put("/:id", upload.single("image"), controller.editProduct);

router.delete("/:id", controller.deleteProduct);

module.exports = router;
