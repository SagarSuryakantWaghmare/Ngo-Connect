// models/Volunteer.js
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const volunteerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: Date },
  gender: { type: String },
  address: { type: String },
  phone: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

volunteerSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);
export default Volunteer;
