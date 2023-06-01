const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

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

router.post('/', (req,res) => {
    const item = req.body
    console.log(item)
    const sqlText = ` INSERT INTO list ("name","quantity","unit")
    VALUES ($1,$2,$3)`;
    pool.query(sqlText,[item.name,item.quantity,item.unit])
    .then(result => {
        console.log('add an item to our database',item)
        res.sendStatus(201)
    }).catch(err => {
        console.log('Error sending to server',err)
        res.sendStatus(500)
    })
})


module.exports = router;