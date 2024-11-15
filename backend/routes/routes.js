const express = require('express');
const router = express.Router();
const contactController = require('../controllers/idk');
router.post('/contacts',contactController.createContact);
router.get('/contacts',contactController.getContact);
router.get('/contacts/:id',contactController.getContactById);
router.put('/contacts/:id',contactController.updateContact);
router.delete('/contacts/:id',contactController.deleteContact);

module.exports = router;