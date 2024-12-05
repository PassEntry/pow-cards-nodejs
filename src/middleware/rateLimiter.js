const rateLimit = require('express-rate-limit');

const signInLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: {
        error: 'Too many sign-in attempts, please try again later'
    }
});

module.exports = { signInLimiter }; 