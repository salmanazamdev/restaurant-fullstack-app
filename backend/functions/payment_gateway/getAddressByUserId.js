const pool = require('../../database/database');

const getAddressByUserId = async (req, res) => {
  const userId = req.params.userId;

  if (!userId) {
    return res.status(400).json({ message: 'User ID is required' });
  }

  try {
    const result = await pool.query(
      'SELECT * FROM user_addresses WHERE user_id = $1 ORDER BY updated_at DESC LIMIT 1',
      [userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'No address found for this user' });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching address:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = getAddressByUserId;
