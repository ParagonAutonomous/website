'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';

type FormData = {
  email: string;
  message: string;
  category: string;
};

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    message: '',
    category: 'Website Error',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await emailjs.send(
        'your_service_id',
        'your_template_id',
        {
          to_email: 'example@paragonautonomous.com',
          from_email: formData.email,
          message: formData.message,
          category: formData.category,
        },
        'your_public_key'
      );
      alert('Message sent successfully!');
      setFormData({ email: '', message: '', category: 'Website Error' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message.');
    }
  };

  return (
    <div className="bg-[#FF4800] p-6 rounded-2xl w-full max-w-md mx-auto mt-10">
      <h2 className="text-white text-xl font-bold mb-4 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="p-2 rounded border border-white bg-white text-black"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="p-2 rounded border border-white bg-white text-black h-24"
          required
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="p-2 rounded border border-white bg-white text-black"
        >
          {["Website Error", "Application Error", "Drone Error", "Business Interest", "Other"].map(
            (option) => (
              <option key={option} value={option}>
                {option}
              </option>
            )
          )}
        </select>
        <button
          type="submit"
          className="bg-white text-[#FF4800] font-bold py-2 px-4 rounded hover:bg-gray-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
