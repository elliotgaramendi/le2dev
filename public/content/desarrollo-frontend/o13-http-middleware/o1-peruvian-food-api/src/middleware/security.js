import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

export const createRateLimit = (windowMs = 15 * 60 * 1000, max = 100) => {
  return rateLimit({
    windowMs,
    max,
    message: {
      error: "Too many requests! 🚫",
      message: `You've exceeded the limit of ${max} requests per ${windowMs / 60000} minutes`,
      retryAfter: Math.ceil(windowMs / 60000),
      tip: "Please wait before making more requests"
    },
    standardHeaders: true,
    legacyHeaders: false
  });
};

export const securityHeaders = helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false
});

export const requestLogger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.originalUrl;
  const ip = req.ip || req.connection.remoteAddress;

  console.log(`🌐 [${timestamp}] ${method} ${url} - IP: ${ip}`);

  const startTime = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - startTime;
    const status = res.statusCode;
    const statusEmoji = status >= 400 ? '❌' : status >= 300 ? '🔄' : '✅';

    console.log(`${statusEmoji} [${timestamp}] ${method} ${url} - ${status} - ${duration}ms`);
  });

  next();
};

export const validateData = (validationFunction) => {
  return (req, res, next) => {
    const { error, value } = validationFunction(req.body);

    if (error) {
      return res.status(400).json({
        error: "Validation failed! 📝",
        message: "Please check your data and try again",
        details: error.details.map(detail => ({
          field: detail.path.join('.'),
          message: detail.message,
          value: detail.context.value
        }))
      });
    }

    req.body = value;
    next();
  };
};