'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react'; // Import icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [showPopup, setShowPopup] = useState(false); // state to show/hide popup

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Send email using EmailJS
    emailjs
      .send(
        'service_8g84cms', // Your Service ID
        'template_welcome', // Your Template ID
        {
          name: formData.name,
          email: formData.email,
          title: formData.title,
          message: formData.message
        },
        'EBHjtV_STQpj1Quwl' // Your User ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus('Message sent successfully!');
          setShowPopup(true); // Show success popup
          setFormData({ name: '', email: '', title: '', message: '' }); // Clear form
        },
        (error) => {
          console.error('FAILED...', error);
          setStatus('Failed to send message. Please try again later.');
        }
      );
  };

  // Handle close popup
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <section>
      <div className="container mx-auto">
        {/* text & illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-purple-600 dark:text-yellow-400 text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-purple-600 dark:bg-yellow-400"></span>
              Hey there! 👋
            </div>
            <h1 className="h1 max-w-md mb-8">Let's chat!</h1>
            <p className="subtitle max-w-[400px]">
              Ready to build your site? Send me a message and let's talk!
            </p>
          </div>
          {/* illustration */}
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>

        {/* info text & form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-purple-600 dark:text-yellow-400" />
              <div>ninaclairesaberon@gmail.com</div>
            </div>
            {/* address */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-purple-600 dark:text-yellow-400" />
              <div>Edmonton, Alberta, Canada</div>
            </div>
            {/* phone */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-purple-600 dark:text-yellow-400" />
              <div>+780-709-5784</div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="p-3 border rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="p-3 border rounded"
            />
            <input
              type="text"
              name="title"
              placeholder="Subject"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="p-3 border rounded"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="p-3 border rounded"
            />
            <button type="submit" className="bg-purple-600 text-white py-3 rounded mt-4">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <p className="text-lg">I have received your email. I will reach out to you as soon as possible :)</p>
            <button
              onClick={handleClosePopup}
              className="mt-4 bg-purple-600 text-white py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
