const bcrypt = require('bcrypt');
const pool = require('../database/database');

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (user.rows.length === 0) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        if (!validPassword) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful',
        userId: user.rows[0].user_id });

    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = login;
