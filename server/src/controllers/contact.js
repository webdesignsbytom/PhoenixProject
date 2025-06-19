import {
  createNewContactForm,
  deleteAllContactForms,
  deleteContactForm,
  findAllContactForms,
  findContactFormById,
} from '../domain/contact.js';
import { myEmitterErrors } from '../event/errorEvents.js';
import {
  BadRequestEvent,
  NotFoundEvent,
  ServerErrorEvent,
} from '../event/utils/errorUtils.js';
import { sendContactEmail } from '../utils/email/emailHandler.js';
import {
  EVENT_MESSAGES,
  sendDataResponse,
  sendMessageResponse,
} from '../utils/responses.js';

export const getAllContactFormsHandler = async (req, res) => {
  try {
    const foundContactForms = await findAllContactForms();
    console.log('found foundContactForms:', foundContactForms);

    if (!foundContactForms) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.contactFormsNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 200, { contactForms: foundContactForms });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(
      req.user,
      `Get all contact forms failed`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const createNewContactFormHandler = async (req, res) => {
  const {
    name,
    email,
    contactNumber,
    hardLimits,
    interests,
    healthConcerns,
    sessionDateTime,
    sessionLength,
    identity,
    experienceLevel,
    recentReference,
  } = req.body;

  if (!email || !contactNumber) {
    return sendDataResponse(res, 400, {
      message: 'Missing email or contact number.',
    });
  }

  try {
    const createdContactForm = await createNewContactForm(
      name,
      email,
      contactNumber,
      hardLimits,
      interests,
      healthConcerns,
      sessionDateTime,
      sessionLength,
      identity,
      experienceLevel,
      recentReference
    );

    if (!createdContactForm) {
      const badRequest = new BadRequestEvent(
        req.user,
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.createContactFail
      );
      myEmitterErrors.emit('error', badRequest);
      return sendMessageResponse(res, badRequest.code, badRequest.message);
    }

    const notificationSent = await sendContactEmail(
      process.env.CONTACT_ADMIN_RECIEVER_EMAIL,
      'New Contact Form Recieved',
      'contactFormNotification',
      {
        name,
        email,
        contactNumber,
        hardLimits,
        interests,
        healthConcerns,
        sessionDateTime,
        sessionLength,
        identity,
        experienceLevel,
        recentReference,
      }
    );

    if (!notificationSent) {
      const notCreated = new BadRequestEvent(
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.notificationSendingFail
      );
      myEmitterErrors.emit('error', notCreated);
      return sendMessageResponse(res, notCreated.code, notCreated.message);
    }

    return sendDataResponse(res, 201, { contactForm: createdContactForm });
  } catch (err) {
    const serverError = new ServerErrorEvent(
      req.user,
      `Create new contact form failed`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const deleteContactFormHandler = async (req, res) => {
  const { formId } = req.params;

  if (!formId) {
    return sendDataResponse(res, 400, {
      message: 'Missing form ID.',
    });
  }

  try {
    const foundContactForm = await findContactFormById();
    console.log('found foundContactForm:', foundContactForm);

    if (!foundContactForm) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.contactFormsNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    const deletedForm = await deleteContactForm(formId);
    if (!deletedForm) {
      const badRequest = new BadRequestEvent(
        req.user,
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.deleteContactFormFail
      );
      myEmitterErrors.emit('error', badRequest);
      return sendMessageResponse(res, badRequest.code, badRequest.message);
    }

    return sendDataResponse(res, 200, {
      message: `Successfully deleted contact form`,
    });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(
      req.user,
      `Delete contact form failed.`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const deleteAllContactFormsHandler = async (req, res) => {
  try {
    const deletedForm = await deleteAllContactForms();
    if (!deletedForm) {
      const badRequest = new BadRequestEvent(
        req.user,
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.deleteContactFormFail
      );
      myEmitterErrors.emit('error', badRequest);
      return sendMessageResponse(res, badRequest.code, badRequest.message);
    }

    return sendDataResponse(res, 200, {
      message: `Successfully deleted all contact forms`,
    });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(
      req.user,
      `Delete all contact forms failed.`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
