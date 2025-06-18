import React from 'react';
// Components
import ContactForm from '../forms/ContactForm';
import { CompanyEmailAddress } from '../../utils/Constants';

function ContactPageMainContainer() {
  return (
    <main role='main' className='grid lg:grid-cols-2 w-full h-full pt-12 pb-12 lg:pb-0'>
      {/* Page Header */}
      <header className='grid relative w-full items-center justify-center text-center px-4 pt-12'>
        <div className='grid gap-y-8 py-16 md:py-20 lg:py-28'>
          <div className='grid h-fit gap-y-3'>
            <h1 className='text-2xl md:text-5xl font-bold uppercase'>
              Contact me
            </h1>
            <h2 className='text-base md:text-xl font-semibold'>
              Custom Headdress Inquiries Welcome
            </h2>
            <p className='text-sm lg:leading-7 font-thin max-w-xl mx-auto'>
              If you’re interested in a one-of-a-kind headdress, feel free to
              reach out using the form below. We can discuss your ideas,
              preferences, and vision. While I love hearing new concepts, please
              note that not all requests can be guaranteed or accepted. Each
              piece is unique and subject to material availability and schedule.
            </p>
            <p className='text-sm md:text-base italic text-gray-500'>
              Vision | Craft | Expression
            </p>
            <p className='text-sm md:text-base text-gray-700 mt-4'>
              You can also email me directly at{' '} <br />
              <a href={CompanyEmailAddress} className='underline'>
                {CompanyEmailAddress}
              </a>{' '} <br />
              or use the contact form.
            </p>
          </div>
        </div>
      </header>

      {/* Form section */}
      <section className='grid w-full items-center'>
        <div className='grid w-full px-6 lg:container lg:mx-auto'>
          <section className='grid shadow-2xl lg:max-w-[50vw] mx-auto'>
            <div className='grid gap-4 w-full h-full px-6 py-6'>
              {/* Contact form */}
              <section>
                <ContactForm />
              </section>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default ContactPageMainContainer;
