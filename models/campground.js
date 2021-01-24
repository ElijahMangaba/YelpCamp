const mongoose = require('mongoose');
const Review = require('./review')
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    url: String,
    filename: String
});

ImageSchema.virtual('thumbnail').get(function() {
    // we use a regex function to find /upload so that we can edit the api link to a width that I find satisfactory for the thumbnail
    return this.url.replace('/upload', '/upload/w_200');
});

// this is a must to include the stuff from virtual
const opts = { toJSON: { virtuals: true } };

const CampgroundSchema = new Schema({
    title: String,
    images: [ImageSchema],
    geometry: { // From the mongodb docs on how to use implement GeoJSON in our models
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    price: Number,
    description: String,
    location: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    // campground schema also keeps reviews as an array of object ids
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review' // this line means REFERS to Review
        }
    ]
}, opts);

CampgroundSchema.virtual('properties.popUpMarkup').get(function() {
    return `<strong><a href='/campgrounds/${this._id}'>${this.title}</a></strong>
    <p>${this.description.substring(0, 30)}...</p>`
});


// this is some of the deletion middleware that after AFTER a campground gets deleted
CampgroundSchema.post('findOneAndDelete', async function (doc) {
    // if a doc gets passed as parameter then we use the deleteMany() method get rid of the deprecating warning and 
    if (doc) {
        await Review.deleteMany({
            _id: {
                $in: doc.reviews
            }
        })
    }
});

module.exports = mongoose.model('Campground', CampgroundSchema);
