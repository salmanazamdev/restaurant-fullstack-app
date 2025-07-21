const bcrypt = require('bcrypt');
const pool = require('../database/database');

const signup = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

        if (user.rows.length > 0) {
            return res.status(400).json({ message: 'User already exists' });
        }

        await pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', [username, email, hashedPassword]);

        res.status(201).json({ message: 'User created successfully' });

    } catch (error) {

        res.status(500).json({ message: 'Internal server error' });
    }

};

module.exports = signup;