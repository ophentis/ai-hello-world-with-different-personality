/**
 * Frontend component: React-style thinking with DOM and template literals
 * Demonstrates: event-driven, component state, template literals, DOM manipulation
 */

class HelloWorldComponent {
  constructor() {
    this.state = {
      message: 'Hello World',
      isVisible: true,
      clickCount: 0
    };
  }

  handleClick = () => {
    this.state.clickCount++;
    this.render();
  };

  getStyles = () => `
    .hello-container {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
      padding: 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 8px;
      text-align: center;
    }
    .hello-text {
      font-size: 2rem;
      font-weight: 600;
      margin: 0;
    }
    .click-counter {
      font-size: 0.875rem;
      opacity: 0.8;
      margin-top: 8px;
    }
  `;

  render = () => {
    const { message, clickCount, isVisible } = this.state;
    const markup = `
      <div class="hello-container">
        <h1 class="hello-text">${message}</h1>
        <p class="click-counter">Rendered ${clickCount} times</p>
      </div>
    `;

    console.log('=== FRONTEND RENDER ===');
    console.log(markup);
    console.log('=== STYLES ===');
    console.log(this.getStyles());
  };
}

// Mount and render
const app = new HelloWorldComponent();
app.render();
app.handleClick();
app.handleClick();
