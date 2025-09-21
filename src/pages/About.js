import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="py-12 bg-logo-yellow">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold font-playfair text-center mb-8 text-logo-dark-brown">عن Karam El-Sham</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3"
              alt="مطعم Karam El-Sham"
              className="w-full h-64 object-cover rounded-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg mb-4 text-logo-dark-brown">
              تأسس Karam El-Sham في عام 2010، وهو يجمع بين التراث العربي والحداثة في تقديم أشهى الأطباق.
              نهتم باستخدام مكونات طازجة ومحلية لضمان تجربة لا تُنسى.
            </p>
            <p className="text-lg text-logo-dark-brown">
              قصتنا بدأت بحلم صغير لإنشاء مكان يجمع الناس حول الطعام الرائع. اليوم، نحن فخورون بكوننا وجهة مفضلة
              لعشاق الطعام.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;