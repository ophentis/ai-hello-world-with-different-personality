const LOG_LEVEL = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3
};

const getLogLevel = () => process.env.LOG_LEVEL || "INFO";

function log(level, message) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${level}] ${message}`);
}

function healthCheck() {
  const health = {
    status: "UP",
    timestamp: new Date().toISOString(),
    version: "1.0.0"
  };
  return health;
}

function startup() {
  log("INFO", "Application starting...");
  log("DEBUG", `Log level: ${getLogLevel()}`);
  log("DEBUG", `Environment: ${process.env.NODE_ENV || "development"}`);

  const health = healthCheck();
  log("INFO", `Health check: ${health.status}`);
}

function gracefulShutdown() {
  log("INFO", "Graceful shutdown initiated");
  process.exit(0);
}

process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);

startup();
console.log("Hello World");
