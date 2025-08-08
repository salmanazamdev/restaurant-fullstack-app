const pool = require('../../database/database');

const deleteCartItemById = async (req, res) => {
  try {
    const cartItemId = parseInt(req.params.cartItemId, 10);
    if (Number.isNaN(cartItemId)) {
      return res.status(400).json({ error: "Invalid cartItemId" });
    }

    const result = await pool.query(
      'DELETE FROM cart_items WHERE cart_item_id = $1 RETURNING *',
      [cartItemId]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Cart item not found" });
    }

    return res.status(200).json({
      message: "Cart item deleted successfully",
      deleted: result.rows[0],
    });
  } catch (error) {
    console.error("Error deleting cart item:", error);
    return res.status(500).json({ error: "Failed to delete cart item" });
  }
};

module.exports = deleteCartItemById;
