const errorHandler = (err, req, res, next) => {
    console.error('Error:', err);
    // Handle the error by sending an appropriate response to the client
    return res.status(500).json({ success: false, message: 'Internal server error' });
  };
  
  // Register the error handling middleware
  app.use(errorHandler);