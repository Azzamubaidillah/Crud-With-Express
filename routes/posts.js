import express from 'express';

const router = express.Router();

router.get('/posts', (req, res) => {
    res.send('We are on posts');
});

module.exports = router;