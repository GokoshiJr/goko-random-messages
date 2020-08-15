const messages = [
  'Julio',
  'Enrique',
  'Alejandro',
  'Maria',
  'Fernanda',
  'Andres',
  'Jainny',
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(`Hola ${message}`);
};

module.exports = {randomMsg};
