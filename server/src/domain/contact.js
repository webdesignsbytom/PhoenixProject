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
) =>
  dbClient.contactForm.create({
    data: {
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
    },
  });

export const deleteContactForm = (formId) =>
  dbClient.contactForm.delete({
    where: { id: formId },
  });

export const deleteAllContactForms = () => dbClient.contactForm.deleteMany({});
