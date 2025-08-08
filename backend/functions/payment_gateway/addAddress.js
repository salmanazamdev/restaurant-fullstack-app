// backend/checkout/addAddress.js
const pool = require('../../database/database');

const addAddress = async (req, res) => {
  const { country = 'Pakistan', address } = req.body;
  const userId = req.user?.id;

  if (!userId || !address) {
    return res.status(400).json({ error: 'User ID and address are required' });
  }

  try {
    // Ensure user_id is unique in addresses if you want 1 address/user
    const result = await pool.query(
      `INSERT INTO user_addresses (user_id, country, address)
       VALUES ($1, $2, $3)
       ON CONFLICT (user_id) DO UPDATE 
         SET country = EXCLUDED.country, 
             address = EXCLUDED.address, 
             updated_at = CURRENT_TIMESTAMP
       RETURNING *`,
      [userId, country, address]
    );
    res.status(200).json({ message: 'Address saved', address: result.rows[0] });
  } catch (error) {
    console.error('Error saving address:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = addAddress;
