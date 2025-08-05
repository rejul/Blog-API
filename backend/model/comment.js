const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

// Define the schema for the Comment model

const commentSchema = new mongoose.Schema({
    commentId: { type: Number, unique: true }, // Primary key use this instead of _id
    title: { type: String, required: true },
    description: { type: String, required: true },
    categoryId: { type:Number, ref: 'Category', required: true },
    commentDate: { type: Date, required: true },
    rating: { type: Number, required: true },
    isActive: { type: Boolean, default: true },
    createdDate: { type: Date, default: Date.now }
}, {
    timestamps: true,
    versionKey: false,
    toJSON: {
        transform: function(doc, ret) { // to remove _id from the response
            delete ret._id;
            return ret;
        }
    }    
});

//Auto incrementing commentId
commentSchema.plugin(AutoIncrement, { inc_field: 'commentId' });

module.exports = mongoose.model('Comment', commentSchema);