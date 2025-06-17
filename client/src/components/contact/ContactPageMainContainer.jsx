import React from 'react';
// Components
import ContactForm from '../forms/ContactForm';

function ContactPageMainContainer() {
  return (
    <main role='main' className='grid w-full h-full pb-12 pt-12'>
      {/* Form section */}
      <section className='grid w-full items-center'>
        <div className='grid w-full px-6 lg:container lg:mx-auto'>
          <section className='grid shadow-2xl lg:max-w-[50vw] mx-auto'>
            <div className='grid gap-4 w-full h-full px-8 py-6'>
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
