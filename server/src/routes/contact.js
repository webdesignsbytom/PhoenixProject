import { Router } from 'express';
import {
  createNewContactFormHandler,
  deleteAllContactFormsHandler,
  deleteContactFormHandler,
  getAllContactFormsHandler,
} from '../controllers/contact.js';
import {
  validateAuthentication,
  validateDeveloperRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/get-all-contact-forms', getAllContactFormsHandler);
router.post('/create-new-contact-form', createNewContactFormHandler);
router.delete('/delete-contact-form/:formId', deleteContactFormHandler);
router.delete('/delete-all-contact-forms', deleteAllContactFormsHandler);

export default router;
