const Vaccine = require('../vaccine');
const sequelize = require('../../config/db');

const vaccines = [
  { name: 'Moderna' },
  { name: 'Covishield' },
  { name: 'Sputnik' },
  { name: 'Novavax' },
  // Add more vaccines as needed
];

async function seedVaccines() {
  try {
    await sequelize.sync({ force: false });

    console.log('Database synced');

    for (const eachData of vaccines) {
      const exists = await Vaccine.findOne({
        where: { name: eachData.name },
      });
      if (!exists) {
        const Vaccines = new Vaccine(eachData);

        const data = await Vaccines.save();
      } else console.log(`The ${eachData.name} Exists`);
    }
    process.exit(0);
  } catch (e) {
    console.log(e.message);
  }
}

seedVaccines();
