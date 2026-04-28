// MARCO POLO - Venetian Explorer
// Il Milione: A million wonders across the Silk Road

const silkRoad = {
  venus: "Florence",
  khanate: "Cathay",
  distance: "infinite",
  wonder: "Hello, World!",

  travelEast() {
    // Through deserts, mountains, and seas
    return this.wonder;
  },

  bridgeCultures() {
    const message = this.travelEast();
    console.log(message);
  },

  documentMarvels() {
    this.bridgeCultures();
  }
};

// Twenty-four years of exploration. One eternal message.
silkRoad.documentMarvels();
