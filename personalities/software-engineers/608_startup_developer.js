#!/usr/bin/env node

// TODO: refactor this greeting system when we have time
// TODO: add i18n support later
// TODO: consider using a greeting library (but for now KISS)

const sayHello = () => {
  // quick and dirty - works for MVP
  const msg = "Hello, World!";
  console.log(msg);
  // HACK: we're just logging directly, but once we scale
  // we'll want to route this through a proper logger
};

sayHello();

// FIXME: error handling - but we're not handling errors for now
// NOTE: this will need to be replaced with proper event system
// when we integrate with other services
