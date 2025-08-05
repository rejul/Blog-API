const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

// Define the schema for the Category model
const categorySchema = new mongoose.Schema({
    categoryId: {type: Number, unique: true}, // Primary key use this instead of _id
    categoryName: {type: String, required: true},
    slug: {
        type: String,
        required: true,
    }
},
{
    timestamps: true,
    versionKey: false,
    toJSON: {
        transform: function(doc, ret) { // to remove _id from the response
            delete ret._id;
            return ret;
        }
    }
    
});
// Auto incrementing categoryId
categorySchema.plugin(AutoIncrement, { inc_field: 'categoryId' });

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;