'use client';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
// import emailjs from 'emailjs-com';

type FormData = {
  name: string;
  email: string;
  message: string;
  category: string;
};

type ContactUsProps = {
  onClose: () => void;
  widthClass?: string;
};

export default function ContactUs({ onClose, widthClass = 'max-w-2xl' }: ContactUsProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    category: 'Website Error',
  });
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Trigger fade-in transition on mount
    setIsVisible(true);
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // try {
    //   await emailjs.send(
    //     'your_service_id',
    //     'your_template_id',
    //     {
    //       name: formData.name,
    //       to_email: 'example@paragonautonomous.com',
    //       from_email: formData.email,
    //       message: formData.message,
    //       category: formData.category,
    //     },
    //     'your_public_key'
    //   );
    //   alert('Message sent successfully!');
    //   setFormData({ name: '', email: '', message: '', category: 'Website Error' });
    // } catch (error) {
    //   console.error('Error sending email:', error);
    //   alert('Failed to send message.');
    // }
  };

  return (
    <div
      className={`relative bg-[#FF8C00] p-6 rounded-2xl w-full ${widthClass} mx-auto mt-10 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Close button in top right corner */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-white text-2xl font-bold"
      >
        &times;
      </button>
      <h2 className="text-white text-xl font-bold mb-4 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="flex gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 rounded border border-white bg-white text-black w-1/2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 rounded border border-white bg-white text-black w-1/2"
            required
          />
        </div>
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
          className="bg-white text-[#FF8C00] font-bold py-2 px-4 rounded hover:bg-gray-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}