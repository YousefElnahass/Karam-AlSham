import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', date: '', time: '', guests: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Reservation:', formData);
  };

  return (
    <div className="container mx-auto px-4 py-12 bg-logo-yellow">
      <h1 className="text-3xl font-bold font-playfair text-center mb-8 text-logo-dark-brown">تواصل مع Karam El-Sham</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold font-playfair mb-4 text-logo-dark-brown">معلومات التواصل</h2>
          <p className="mb-2">العنوان: شارع المطاعم الرئيسي، المدينة</p>
          <p className="mb-2">الهاتف: 0123456789</p>
          <p className="mb-2">الإيميل: info@karamelsham.com</p>
          <p>ساعات العمل: 10 صباحًا - 10 مساءً</p>
        </motion.div>
        <motion.div
          className="h-64"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.142293868383!2d31.235712!3d30.044419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDI2JzQ2LjQiTiAzMcKwMTQnOS4yIkU!5e0!3m2!1sen!2sus!4v1630000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
      <motion.div
        className="mt-12 bg-logo-white p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold font-playfair mb-4 text-center text-logo-dark-brown">احجز طاولتك</h2>
        {submitted ? (
          <p className="text-logo-dark-brown text-center">تم إرسال الحجز! سنتواصل معك قريبًا.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-logo-dark-brown">الاسم</label>
              <input
                type="text"
                className="w-full p-2 border border-logo-dark-brown rounded"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-logo-dark-brown">التاريخ</label>
              <input
                type="date"
                className="w-full p-2 border border-logo-dark-brown rounded"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-logo-dark-brown">الوقت</label>
              <input
                type="time"
                className="w-full p-2 border border-logo-dark-brown rounded"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-logo-dark-brown">عدد الأشخاص</label>
              <input
                type="number"
                className="w-full p-2 border border-logo-dark-brown rounded"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                min="1"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-logo-dark-brown text-logo-white p-2 rounded hover:bg-logo-light-yellow hover:text-logo-dark-brown transition-colors duration-300"
            >
              احجز الآن
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default Contact;