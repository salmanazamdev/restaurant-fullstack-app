const pool = require('../../database/database');

const deleteCartItemById = async (req, res) => {
  try {
    const { cartItemId } = req.params;

    if (!cartItemId) {
      return res.status(400).json({ error: "Cart item ID is required" });
    }

    const [result] = await pool.query(
      'DELETE FROM cart WHERE cart_item_id = ?',
      [cartItemId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Cart item not found" });
    }

    res.status(200).json({ message: "Cart item deleted successfully" });
  } catch (error) {
    console.error("Error deleting cart item:", error);
    res.status(500).json({ error: "Failed to delete cart item" });
  }
};

module.exports = deleteCartItemById;
