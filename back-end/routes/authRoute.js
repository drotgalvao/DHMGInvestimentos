const express = require("express");
const {
  createUser,
  loginUserCtrl,
  loginAdminCtrl,
  getAllUsers,
  getSingleUser,
  deleteUser,
  updateUser,
  saveAdress,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
} = require("../controller/userCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", createUser);
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);

router.put("/update-password", authMiddleware, updatePassword);
router.post("/login", loginUserCtrl);
router.post("/admin-login", loginAdminCtrl);

router.get("/all-users", getAllUsers);

router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);

router.get("/:id", authMiddleware, isAdmin, getSingleUser);
router.delete("/:id", deleteUser);

router.put("/edit-user", authMiddleware, updateUser);
router.put("/save-address", authMiddleware, saveAdress);

router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);

module.exports = router;