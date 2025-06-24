import dbClient from '../utils/dbClient.js';

export const findAllContactForms = () =>
  dbClient.contactForm.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

export const findContactFormById = (formId) =>
  dbClient.contactForm.findFirst({
    where: { id: formId },
  });

export const createNewContactForm = (
  firstName,
  lastName,
  email,
  message,
  phoneNumber,
  location,
  businessName,
  projectType
) =>
  dbClient.contactForm.create({
    data: {
      firstName,
      lastName,
      email,
      message,
      phoneNumber,
      location,
      businessName,
      projectType,
    },
  });

export const deleteContactForm = (formId) =>
  dbClient.contactForm.delete({
    where: { id: formId },
  });

export const deleteAllContactForms = () => dbClient.contactForm.deleteMany({});
