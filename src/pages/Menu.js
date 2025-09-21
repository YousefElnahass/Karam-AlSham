import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Menu = () => {
  const [category, setCategory] = useState('all');
  
  const dishes = [
    { id: 1, name: 'برغر كلاسيك', price: '15$', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3', desc: 'برغر لحم بقري مع خضروات طازجة وصوص مميز.', category: 'Mains' },
    { id: 2, name: 'سلطة سيزار', price: '10$', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3', desc: 'سلطة خضراء طازجة مع دجاج مشوي وصوص سيزار.', category: 'Starters' },
    { id: 3, name: 'باستا كاربونارا', price: '12$', image: 'https://thf.bing.com/th/id/OIP.CfNGB6bnZPsymqAk21r6GAHaEp?w=249&h=180&c=7&r=0&o=7&cb=thfc1&dpr=1.3&pid=1.7&rm=3', desc: 'باستا إيطالية أصلية مع صوص الكريمة والبيكون.', category: 'Mains' },
    { id: 4, name: 'تشيز كيك', price: '8$', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3', desc: 'حلوى تشيز كيك كريمية مع صوص التوت.', category: 'Desserts' },
  ];

  const filteredDishes = category === 'all' ? dishes : dishes.filter(dish => dish.category === category);

  return (
    <div className="container mx-auto px-4 py-12 bg-logo-yellow">
      <h1 className="text-3xl font-bold font-playfair text-center mb-8 text-logo-dark-brown">قائمة Karam El-Sham</h1>
      <div className="flex justify-center space-x-4 space-x-reverse mb-8">
        {['all', 'Starters', 'Mains', 'Desserts'].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded font-playfair ${
              category === cat ? 'bg-logo-dark-brown text-logo-white' : 'bg-logo-white text-logo-dark-brown'
            } hover:bg-logo-dark-brown hover:text-logo-white transition-colors duration-300`}
          >
            {cat === 'all' ? 'الكل' : cat === 'Starters' ? 'المقبلات' : cat === 'Mains' ? 'الأطباق الرئيسية' : 'الحلويات'}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDishes.map((dish) => (
          <motion.div
            key={dish.id}
            className="bg-logo-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-bold text-logo-dark-brown">{dish.name}</h3>
            <p className="text-gray-600 mb-2">{dish.desc}</p>
            <p className="text-logo-dark-brown font-bold">{dish.price}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Menu;