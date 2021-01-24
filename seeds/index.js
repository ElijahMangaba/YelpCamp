const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');


mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => console.log('DB Connection Successfull'))
    .catch((err) => {
        console.error(err);
    });


const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            // YOUR USER ID
            author: '60022b0b1fbe103c20224636',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis nam sit corporis obcaecati, quos, quia aperiam aliquid maxime dolore soluta architecto dolor incidunt ut eveniet harum eius, sunt accusamus nobis!',
            price,
            geometry: { 
                type: 'Point', 
                coordinates: [
                    cities[random1000].longitude, 
                    cities[random1000].latitude
                ]
            },
            images: [
                    {
                      url: 'https://res.cloudinary.com/da7jdrzcr/image/upload/v1611391084/YelpCamp/wrnctxniwut5nylwnvnl.jpg',
                      filename: 'YelpCamp/wrnctxniwut5nylwnvnl'
                    },
                    {
                      url: 'https://res.cloudinary.com/da7jdrzcr/image/upload/v1611391074/YelpCamp/l5gu2pdbnjufd7bvewfp.jpg',
                      filename: 'YelpCamp/l5gu2pdbnjufd7bvewfp'
                    },
                    {
                        url: 'https://res.cloudinary.com/da7jdrzcr/image/upload/v1611391073/YelpCamp/mqfx84xeetip4xzemwx9.jpg',
                        filename: 'YelpCamp/mqfx84xeetip4xzemwx9'           
                    }
            ]
        });
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
});