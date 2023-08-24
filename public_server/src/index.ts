import express from 'express';

const router: express.Router = express.Router();

router.use('/influencer', require('./api/influencer.api'));
router.use('/post', require('./api/post.api'));
router.use('/clip', require('./api/clip.api'));
router.use('/product', require('./api/product.api'));

module.exports = router;