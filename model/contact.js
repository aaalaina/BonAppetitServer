const mongoose = require ("mongoose")

const ContactSchema = new mongoose.Schema(
{
    email: { type: String ,required:
    false },
    firstName: {type: String, required:
    false},
    lastName: { type: String, required:
    false},
    message: {type: String, required:
    false},


},
{timestamps:true}
);

module.exports = mongoose.model("Contact", ContactSchema);