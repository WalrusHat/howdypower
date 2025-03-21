import React, { useState } from 'react';
import apiService from '../services/api';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: null,
    message: ''
  });

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: '' });

    try {
      // For demo purposes, simulate an API call
      // In production, use: await apiService.subscribeToNewsletter(email);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus({
        success: true,
        message: 'Thank you for subscribing to our newsletter!'
      });
      
      // Clear email on success
      setEmail('');
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: error.message || 'Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {submitStatus.success !== null && (
        <div className={`p-4 mb-4 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {submitStatus.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter your email address"
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 sm:w-auto disabled:opacity-50"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Subscribing...
            </span>
          ) : 'Subscribe'}
        </button>
      </form>
      
      <p className="text-sm text-gray-500 mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default NewsletterForm;