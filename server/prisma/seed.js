import bcrypt from 'bcrypt';
import dbClient from '../src/utils/dbClient.js';

// Seed data
const users = [{ email: 'admin@admin.com', role: 'ADMIN', id: 'admin' }];

const contactForms = [
  {
    firstName: 'Alice',
    lastName: 'Smith',
    email: 'alice.smith@example.com',
    message:
      'Hi, I’d like to inquire about your services for an upcoming event.',
    phoneNumber: '555-123-4567',
    location: 'London, UK',
    businessName: 'Smith Events',
  },
  {
    firstName: 'Bob',
    lastName: 'Johnson',
    email: 'bob.johnson@example.com',
    message:
      'Can I get a quote for monthly maintenance for my business website?',
    phoneNumber: '555-987-6543',
    location: 'Manchester, UK',
    businessName: 'Johnson Solutions',
  },
  {
    firstName: 'Alice',
    lastName: 'Smith',
    email: 'alice.smith@example.com',
    message:
      'Hi, I’d like to inquire about your services for an upcoming event.',
    phoneNumber: '555-123-4567',
    location: 'London, UK',
    businessName: 'Smith Events',
  },
  {
    firstName: 'Bob',
    lastName: 'Johnson',
    email: 'bob.johnson@example.com',
    message:
      'Can I get a quote for monthly maintenance for my business website?',
    phoneNumber: '555-987-6543',
    location: 'Manchester, UK',
    businessName: 'Johnson Solutions',
  },
  {
    firstName: 'Alice',
    lastName: 'Smith',
    email: 'alice.smith@example.com',
    message:
      'Hi, I’d like to inquire about your services for an upcoming event.',
    phoneNumber: '555-123-4567',
    location: 'London, UK',
    businessName: 'Smith Events',
  },
  {
    firstName: 'Bob',
    lastName: 'Johnson',
    email: 'bob.johnson@example.com',
    message:
      'Can I get a quote for monthly maintenance for my business website?',
    phoneNumber: '555-987-6543',
    location: 'Manchester, UK',
    businessName: 'Johnson Solutions',
  },
];

const events = [
  {
    type: 'ERROR',
    topic: 'Test event',
    code: 500,
    content: '500 test content',
  },
  { type: 'USER', topic: 'Test event', code: 200, content: '200 test content' },
  {
    type: 'ADMIN',
    topic: 'Test event',
    code: 201,
    content: '201 test content',
  },
  {
    type: 'VISITOR',
    topic: 'Test event',
    code: 201,
    content: '201 test content',
  },
  {
    type: 'DEVELOPER',
    topic: 'Test event',
    code: 201,
    content: '201 test content',
  },
];

async function seed() {
  try {
    // Validate environment variables
    if (!process.env.SEED_PASSWORD || !process.env.SALT_ROUNDS) {
      throw new Error(
        'Environment variables SEED_PASSWORD and SALT_ROUNDS are required'
      );
    }

    // Hash the seed password
    const saltRounds = Number(process.env.SALT_ROUNDS);
    const password = await bcrypt.hash(process.env.SEED_PASSWORD, saltRounds);

    // Create users
    for (const user of users) {
      await dbClient.user.create({
        data: {
          id: user.id,
          email: user.email,
          password,
          role: user.role || 'USER',
        },
      });
    }

    // Create contact forms
    for (const form of contactForms) {
      await dbClient.contactForm.create({
        data: form,
      });
    }

    // Create events
    for (const event of events) {
      await dbClient.event.create({
        data: event,
      });
    }

    console.log('Seed completed.');
  } catch (error) {
    console.error('Seeding failed:', error.message);
  } finally {
    await dbClient.$disconnect();
  }
}

seed().catch((error) => {
  console.error('Unexpected error:', error);
  process.exit(1);
});
