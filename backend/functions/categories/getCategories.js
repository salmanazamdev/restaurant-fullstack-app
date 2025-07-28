const pool = require('../../database/database');

const getCategories = async (req,res) => {
   try {

     const result = await pool.query(
            'SELECT * FROM categories',
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'No menu items found for this restaurant' });
        }

        res.json(result.rows);

   } catch (err){
    res.status(500).send({message:"Internal Server Error"})
   }
}

module.exports = getCategories;