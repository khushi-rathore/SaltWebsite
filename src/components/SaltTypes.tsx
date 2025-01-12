import React from 'react';

const saltTypes = [
  {
    name: 'Pink Himalayan Salt',
    description: 'Premium quality Pink Himalayan Salt, sourced from the finest mines. Perfect for cooking, spa treatments, and health-conscious consumers.',
    image: 'https://i.dawn.com/primary/2023/05/645fff778d595.jpg'
  },
  {
    name: 'Black Salt (Kala Namak)',
    description: 'Traditional Indian Black Salt known for its distinctive sulfurous taste and numerous health benefits. Ideal for traditional recipes.',
    image: 'https://img.bebeautiful.in/www-bebeautiful-in/black-salt-benefits-for-skin_1.jpg?w=300'
  },
  {
    name: 'Rock Salt Products',
    description: 'Pure and natural rock salt products, perfect for cooking and therapeutic uses. Rich in essential minerals and natural elements.',
    image: 'https://images.unsplash.com/photo-1616316087571-bb3c986770c5?auto=format&fit=crop&q=80'
  }
];

const SaltTypes = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {saltTypes.map((salt, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <div className="h-64 overflow-hidden">
            <img
              src={salt.image}
              alt={salt.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-pink-600">{salt.name}</h3>
            <p className="text-gray-600">{salt.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SaltTypes;