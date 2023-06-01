const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send("You're in the main route");
});

// router.get('/form', (req, res) => {
//   res.render('/route/form', { firstname: 'saikiran' });
// });

router.get('/subroute', (req, res) => {
  res.send("You're in the sub route");
});

module.exports = router;
