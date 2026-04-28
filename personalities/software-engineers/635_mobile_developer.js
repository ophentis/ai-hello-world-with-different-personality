/**
 * Mobile app lifecycle and state management
 * Demonstrates: lifecycle hooks, screen/view metaphors, state restoration, battery consciousness
 */

class HelloWorldMobileApp {
  constructor() {
    this.lifecycle = 'CREATED';
    this.screenState = {
      title: 'Hello World',
      subtitle: 'Welcome to the app',
      isLoading: false,
      renderCount: 0
    };
    this.savedInstanceState = null;
  }

  // === LIFECYCLE METHODS ===
  onCreate() {
    this.lifecycle = 'CREATED';
    console.log('[LIFECYCLE] onCreate() - Initializing app');
    this.restoreState();
  }

  onStart() {
    this.lifecycle = 'STARTED';
    console.log('[LIFECYCLE] onStart() - App visible to user');
  }

  onResume() {
    this.lifecycle = 'RESUMED';
    console.log('[LIFECYCLE] onResume() - App is now active');
    this.render();
  }

  onPause() {
    this.lifecycle = 'PAUSED';
    console.log('[LIFECYCLE] onPause() - App no longer in focus');
    // Battery optimization: stop expensive operations
    console.log('[BATTERY] Pausing background tasks...');
  }

  onStop() {
    this.lifecycle = 'STOPPED';
    console.log('[LIFECYCLE] onStop() - App not visible');
    this.saveState();
  }

  // === STATE MANAGEMENT ===
  saveState() {
    this.savedInstanceState = { ...this.screenState };
    console.log('[STATE] Saved:', this.savedInstanceState);
  }

  restoreState() {
    if (this.savedInstanceState) {
      this.screenState = this.savedInstanceState;
      console.log('[STATE] Restored from previous session');
    }
  }

  render() {
    this.screenState.renderCount++;
    const screen = `
┌──────────────────────┐
│  ${this.screenState.title.padEnd(18)}  │
│  ${this.screenState.subtitle.padEnd(18)}  │
│  Render #${this.screenState.renderCount}            │
└──────────────────────┘
    `;
    console.log(screen);
  }

  // === DESTROY ===
  onDestroy() {
    this.lifecycle = 'DESTROYED';
    console.log('[LIFECYCLE] onDestroy() - Cleaning up resources');
  }
}

// === SIMULATE FULL LIFECYCLE ===
const app = new HelloWorldMobileApp();
app.onCreate();
app.onStart();
app.onResume();
app.onPause();
app.onStop();
app.onDestroy();
