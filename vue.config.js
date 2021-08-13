module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/visualizerku/' // ngikutin repo buat deploy
    : '/'
}