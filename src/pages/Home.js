import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div>
      <section
        className="bg-cover bg-center h-96"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3)' }}
      >
        <div className="bg-gradient-to-r from-logo-dark-brown/70 to-logo-yellow/30 h-full flex items-center justify-center">
          <motion.div
            className="text-center text-logo-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-4">مرحبًا بك في Karam El-Sham</h1>
            <p className="text-xl mb-6">تذوق أشهى المأكولات في أجواء تقليدية أنيقة.</p>
            <a
              href="/menu"
              className="bg-logo-light-yellow text-logo-dark-brown px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
            >
              اطلع على القائمة
            </a>
          </motion.div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold font-playfair text-center mb-8 text-logo-dark-brown">عروضنا المميزة</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'عرض اليوم', desc: 'وجبة كاملة بخصم 20%.', img: "https://thf.bing.com/th/id/OIP.SZc_kaheMscGOdBxJKQQBAHaHk?w=208&h=212&c=7&r=0&o=7&cb=thfc1&dpr=1.3&pid=1.7&rm=3" },
            { title: 'وجبة عائلية', desc: 'مشاركة مثالية للعائلات بسعر مميز.', img: 'https://thf.bing.com/th/id/OIP.9O9_M5WXwReoEU04MjVp-QHaJ4?w=208&h=277&c=7&r=0&o=5&cb=thfc1&dpr=1.3&pid=1.7' },
            { title: 'تجربة VIP', desc: 'أجواء فاخرة مع خدمة مميزة.', img: 'https://thf.bing.com/th/id/OIP.kcNgLHjQsichXgc6BiDi7AHaLH?w=204&h=306&c=7&r=0&o=7&cb=thfc1&dpr=1.3&pid=1.7&rm=3' },
          ].map((offer, index) => (
            <motion.div
              key={index}
              className="bg-logo-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={offer.img} alt={offer.title} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-bold text-logo-dark-brown">{offer.title}</h3>
              <p className="text-gray-600">{offer.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;