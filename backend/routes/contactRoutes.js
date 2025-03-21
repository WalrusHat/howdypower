const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Submit a new contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, and message'
      });
    }
    
    // Create new contact message
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    
    res.status(201).json({
      success: true,
      message: 'Thank you for your message! We will get back to you soon.'
    });
  } catch (error) {
    console.error('Error saving contact message:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.'
    });
  }
});

// Get all contact messages (admin route - should be protected with authentication in production)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ contactDate: -1 });
    res.status(200).json({ contacts });
  } catch (error) {
    console.error('Error fetching contact messages:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.'
    });
  }
});

// Update contact status (admin route)
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    // Validate status
    if (!['new', 'in-progress', 'resolved'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status. Must be one of: new, in-progress, resolved'
      });
    }
    
    const updatedContact = await Contact.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    
    if (!updatedContact) {
      return res.status(404).json({
        success: false,
        message: 'Contact message not found'
      });
    }
    
    res.status(200).json({
      success: true,
      contact: updatedContact
    });
  } catch (error) {
    console.error('Error updating contact status:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.'
    });
  }
});

module.exports = router;