const pool = require('../../database/database');

module.exports = async (req, res) => {
  try {
    const { userId } = req.params;

    await db.query('DELETE FROM cart WHERE user_id = ?', [userId]);

    res.status(200).json({ message: "All cart items deleted successfully" });
  } catch (error) {
    console.error("Error deleting cart items:", error);
    res.status(500).json({ error: "Failed to delete cart items" });
  }
};
