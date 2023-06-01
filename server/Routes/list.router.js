const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    const sqlText = ` SELECT * FROM "list" ORDER BY "purchased", "name";`
    pool.query(sqlText)
        .then((result) => {
            console.log('Get List', result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`error geting database query, ${sqlText}`, error);
            res.sendStatus(500);
        })

})

router.delete('/:id', (req, res) => {
  const itemID = req.params.id;
  console.log(itemID);
  const sqlText = `DELETE FROM list WHERE id=$1`;
  // Let sql sanitize your inputs (NO Bobby Drop Tables here!)
  // the $1, $2, etc get substituted with the values from the array below
  pool.query(sqlText, [itemID])
      .then((result) => {
          res.sendStatus(201);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500); // Good server always responds
      })
})


module.exports = router;