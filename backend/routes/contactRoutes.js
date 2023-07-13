const router = require('express').Router();
const { body } = require('express-validator');
const {
  getContacts,
  setContact,
  updateContact,
  deleteContact,
} = require('../controllers/contactController');
const { protect } = require('../middleware/authMiddleware');

// router.get('/', getContacts);
// router.post('/', setContact);
// router.put('/:id', updateContact);
// router.delete('/:id', deleteContact);

router
  .route('/')
  .get(protect, getContacts)
  .post(
    protect,
    body('name', "Please include contact's name").notEmpty(),
    body('email', 'Please include a valid email').isEmail(),
    setContact
  );
router.route('/:id').put(protect, updateContact).delete(protect, deleteContact);

module.exports = router;
