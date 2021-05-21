const express = require("express");

const postController = require("../controllers/postController");
const protectRoute = require("../middleware/authMiddelware");

const router = express.Router();

router.get("/", protectRoute, postController.getAllPosts);

router.post("/", protectRoute, postController.createPost);

router.get("/:id", postController.getOnePost);

router.put("/:id", protectRoute, postController.updatePost);

router.delete("/:id", protectRoute, postController.deletePost);

module.exports = router;
