import express from 'express';

const router: express.Router = express.Router();

router.use('/influencer', require('./UserAPI/influencer.api'));
router.use('/post', require('./UserAPI/post.api'));
router.use('/clip', require('./UserAPI/clip.api'));
router.use('/product', require('./UserAPI/product.api'));

module.exports = router;