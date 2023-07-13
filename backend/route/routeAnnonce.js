const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth.js');


router.get('/', auth.Auth);
router.post('/', auth.Auth);
router.get('/:id', auth.Auth);
router.put('/:id', auth.Auth);
router.delete('/:id', auth.Auth);

module.exports = router;