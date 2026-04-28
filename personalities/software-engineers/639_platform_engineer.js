/**
 * Platform Engineer: infrastructure-as-code thinking, service mesh, health probes
 * Demonstrates: readiness/liveness endpoints, service discovery, configuration management
 */

const HTTP_STATUS = {
  OK: 200,
  SERVICE_UNAVAILABLE: 503
};

// === CONFIGURATION MANAGEMENT ===
const config = {
  SERVICE_NAME: 'hello-world-svc',
  VERSION: '1.0.0',
  NAMESPACE: 'default',
  REPLICAS: 3,
  PORT: 8080,
  HEALTH_CHECK_INTERVAL: 30000,
  STARTUP_TIME: Date.now()
};

// === SERVICE READINESS STATE ===
const serviceState = {
  isReady: false,
  isAlive: true,
  dependenciesReady: false,
  dbConnected: false,
  cacheWarmed: false,

  initialize: async function() {
    console.log(`[${config.SERVICE_NAME}] Initializing...`);
    console.log(`[CONFIG] ${config.SERVICE_NAME}:${config.PORT} in ${config.NAMESPACE}`);

    // Simulate startup checks
    console.log('[STARTUP] Connecting to dependencies...');
    this.dbConnected = true;
    console.log('[STARTUP] Database: OK');

    console.log('[STARTUP] Warming cache...');
    this.cacheWarmed = true;
    console.log('[STARTUP] Cache: OK');

    this.dependenciesReady = this.dbConnected && this.cacheWarmed;
    this.isReady = this.dependenciesReady;

    console.log(`[STARTUP] Service ready: ${this.isReady}\n`);
  }
};

// === HEALTH CHECK ENDPOINTS ===
const healthCheck = {
  // Liveness probe: Is the process alive?
  liveness: () => {
    return {
      status: serviceState.isAlive ? 'alive' : 'dead',
      uptime: Math.floor((Date.now() - config.STARTUP_TIME) / 1000),
      statusCode: serviceState.isAlive ? HTTP_STATUS.OK : HTTP_STATUS.SERVICE_UNAVAILABLE
    };
  },

  // Readiness probe: Can I handle traffic?
  readiness: () => {
    const ready = serviceState.isReady && serviceState.dependenciesReady;
    return {
      status: ready ? 'ready' : 'not_ready',
      checks: {
        dependencies: serviceState.dependenciesReady,
        database: serviceState.dbConnected,
        cache: serviceState.cacheWarmed
      },
      statusCode: ready ? HTTP_STATUS.OK : HTTP_STATUS.SERVICE_UNAVAILABLE
    };
  },

  // Startup probe: Has startup completed successfully?
  startup: () => {
    return {
      status: serviceState.isReady ? 'started' : 'starting',
      statusCode: serviceState.isReady ? HTTP_STATUS.OK : HTTP_STATUS.SERVICE_UNAVAILABLE
    };
  }
};

// === SERVICE MESH METADATA ===
const serviceMesh = {
  getServiceMetadata: () => ({
    apiVersion: 'v1',
    kind: 'Service',
    metadata: {
      name: config.SERVICE_NAME,
      namespace: config.NAMESPACE,
      labels: {
        app: config.SERVICE_NAME,
        version: config.VERSION
      }
    },
    spec: {
      replicas: config.REPLICAS,
      selector: { app: config.SERVICE_NAME },
      ports: [{ port: config.PORT, protocol: 'TCP' }]
    }
  })
};

// === HELLO ENDPOINT ===
const helloEndpoint = () => ({
  message: 'Hello World',
  service: config.SERVICE_NAME,
  version: config.VERSION,
  timestamp: new Date().toISOString()
});

// === EXECUTION ===
(async () => {
  await serviceState.initialize();

  console.log('=== HEALTH CHECK RESULTS ===\n');
  console.log('[GET /health/live]');
  console.log(JSON.stringify(healthCheck.liveness(), null, 2));

  console.log('\n[GET /health/ready]');
  console.log(JSON.stringify(healthCheck.readiness(), null, 2));

  console.log('\n[GET /health/startup]');
  console.log(JSON.stringify(healthCheck.startup(), null, 2));

  console.log('\n[GET /hello]');
  console.log(JSON.stringify(helloEndpoint(), null, 2));
})();
