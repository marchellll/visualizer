module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/visualizer/' // ngikutin repo buat deploy
    : '/',
};
