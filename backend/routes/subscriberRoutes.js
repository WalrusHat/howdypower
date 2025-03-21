const express = require('express');
const router = express.Router();
const Subscriber = require('../models/Subscriber');

// Add a new subscriber
router.post('/', async (req, res) => {
  try {
    const { email } = req.body;
    
    // Check if subscriber already exists
    const existingSubscriber = await Subscriber.findOne({ email });
    
    if (existingSubscriber) {
      // If subscriber exists but is inactive, reactivate
      if (!existingSubscriber.isActive) {
        existingSubscriber.isActive = true;
        await existingSubscriber.save();
        return res.status(200).json({ 
          success: true, 
          message: 'Your subscription has been reactivated' 
        });
      }
      
      // If already active subscriber
      return res.status(400).json({ 
        success: false, 
        message: 'You are already subscribed to our newsletter' 
      });
    }
    
    // Create new subscriber
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();
    
    res.status(201).json({ 
      success: true, 
      message: 'Thank you for subscribing to our newsletter!' 
    });
  } catch (error) {
    console.error('Error adding subscriber:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Something went wrong. Please try again.' 
    });
  }
});

// Unsubscribe (soft delete by setting isActive to false)
router.post('/unsubscribe', async (req, res) => {
  try {
    const { email } = req.body;
    
    const subscriber = await Subscriber.findOne({ email });
    
    if (!subscriber) {
      return res.status(404).json({ 
        success: false, 
        message: 'Subscriber not found' 
      });
    }
    
    subscriber.isActive = false;
    await subscriber.save();
    
    res.status(200).json({ 
      success: true, 
      message: 'You have been successfully unsubscribed' 
    });
  } catch (error) {
    console.error('Error unsubscribing:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Something went wrong. Please try again.' 
    });
  }
});

// Get all active subscribers (admin route - should be protected with authentication in production)
router.get('/', async (req, res) => {
  try {
    const subscribers = await Subscriber.find({ isActive: true }).sort({ subscriptionDate: -1 });
    res.status(200).json({ subscribers });
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Something went wrong. Please try again.' 
    });
  }
});

module.exports = router;