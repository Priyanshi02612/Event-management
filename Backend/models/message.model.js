import mongoose from 'mongoose';
import validator from 'validator';

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is Required.'],
    minLength: [3, 'Name must contains atleast 3 letters.'],
  },
  email: {
    type: String,
    required: [true, 'E-mail is Required.'],
    validate: [validator.isEmail, 'Please provide valid email.'],
  },
  subject: {
    type: String,
    required: [true, 'Subject is Required.'],
    minLength: [5, 'Subject must contains atleast 5 letters.'],
  },
  message: {
    type: String,
    required: [true, 'Message is Required.'],
    minLength: [10, 'Message must contains atleast 10 letters.'],
  },
});

export const MessageModel = mongoose.model("Message",messageSchema);

