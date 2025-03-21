// This service handles all API calls to the backend
// It can be imported in any component that needs to communicate with the server

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const apiService = {
  // Newsletter subscription
  subscribeToNewsletter: async (email) => {
    try {
      const response = await fetch(`${API_URL}/subscribers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to subscribe');
      }
      
      return data;
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      throw error;
    }
  },

  // Contact form submission
  submitContactForm: async (formData) => {
    try {
      const response = await fetch(`${API_URL}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit form');
      }
      
      return data;
    } catch (error) {
      console.error('Contact form submission error:', error);
      throw error;
    }
  }
};

export default apiService;