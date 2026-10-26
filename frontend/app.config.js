// Extiende app.json. Si EXPO_BASE_URL está definida (por ejemplo "/pinguino-music"
// en GitHub Pages), la versión web se publica bajo esa subcarpeta.
module.exports = ({ config }) => ({
  ...config,
  experiments: {
    ...config.experiments,
    ...(process.env.EXPO_BASE_URL ? { baseUrl: process.env.EXPO_BASE_URL } : {}),
  },
});
