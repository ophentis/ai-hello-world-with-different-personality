// Config-driven: everything parameterized

const config = {
  environment: process.env.NODE_ENV || 'development',
  message: {
    greeting: process.env.GREETING_WORD || 'Hello',
    subject: process.env.SUBJECT_WORD || 'World',
    separator: process.env.SEPARATOR || ' ',
  },
  output: {
    enabled: process.env.OUTPUT_ENABLED !== 'false',
    destination: process.env.OUTPUT_DEST || 'console',
    formatting: {
      uppercase: process.env.FORMAT_UPPERCASE === 'true',
      prefix: process.env.MESSAGE_PREFIX || '',
      suffix: process.env.MESSAGE_SUFFIX || '',
    },
  },
  logging: {
    enabled: process.env.LOGGING_ENABLED !== 'false',
    level: process.env.LOG_LEVEL || 'info',
  },
};

function buildMessage(cfg) {
  let msg = cfg.message.greeting + cfg.message.separator + cfg.message.subject;

  if (cfg.output.formatting.uppercase) {
    msg = msg.toUpperCase();
  }

  msg = cfg.output.formatting.prefix + msg + cfg.output.formatting.suffix;

  return msg;
}

function outputMessage(msg, cfg) {
  if (!cfg.output.enabled) return;

  switch (cfg.output.destination) {
    case 'console':
      console.log(msg);
      break;
    case 'stderr':
      console.error(msg);
      break;
    default:
      console.log(msg);
  }
}

const message = buildMessage(config);
outputMessage(message, config);
