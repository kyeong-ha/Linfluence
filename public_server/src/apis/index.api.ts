import express from 'express';

const router: express.Router = express.Router();

router.use('/influencer', require('./influencer.api'));
router.use('/post', require('./post.api'));
router.use('/clip', require('./clip.api'));
router.use('/product', require('./product.api'));

module.exports = router;