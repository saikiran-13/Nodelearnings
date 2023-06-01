const {
  mainpage,
  subposts,
  getRequest,
  putRequest,
  deleteRequest,
} = require('../controllers/post');

const express = require('express');
const router = express.Router();

router.route('/').get(mainpage); //path and callbackfn
router.route('/subposts').get(subposts);

router.post('/subposts', (req, res) => {
  res.json({ status: 'done' });
});

router
  .route('/subposts/:id')
  .get(getRequest)
  .put(putRequest)
  .delete(deleteRequest);

const posts = [{ name: 'post1' }, { name: 'post2' }];
router.param('id', (req, res, next, id) => {
  req.post = JSON.stringify(posts[id]);
  console.log('Param function');
  next();
  console.log('Done');
});

module.exports = router;
