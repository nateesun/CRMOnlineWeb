const { createLogger, format, transports } = require('winston');
const fs = require('fs');
const path = require('path');
const moment = require('moment');

const env = process.env.NODE_ENV || 'development';
const logDir = 'logs';

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const currentDate = moment().format('DD_MM_YYYY_HH_mm_ss');
const filename = path.join(logDir, `results_${currentDate}.log`);

const logger = createLogger({
  level: env === 'development' ? 'debug' : 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.json(),
  ),
  transports: [
    new transports.Console({
      level: 'info',
      format: format.combine(
        format.colorize(),
        format.printf(
          info => `${info.timestamp} ${info.level}: ${info.message}`,
        ),
      ),
    }),
    new transports.File({ filename }),
  ],
});

module.exports = logger;
