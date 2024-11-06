// controllers/volunteerController.js
import Volunteer from '../models/Volunteer.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerVolunteer = async (req, res) => {
  const { name, dob, gender, address, phone, email, password } = req.body;
  try {
    const existingVolunteer = await Volunteer.findOne({ email });
    if (existingVolunteer) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const newVolunteer = new Volunteer({ name, dob, gender, address, phone, email, password });
    await newVolunteer.save();

    res.status(201).json({ message: "Volunteer registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const loginVolunteer = async (req, res) => {
  const { email, password } = req.body;
  try {
    const volunteer = await Volunteer.findOne({ email });
    if (!volunteer) {
      return res.status(404).json({ message: "Volunteer not found" });
    }

    const isMatch = await bcrypt.compare(password, volunteer.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: volunteer._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
