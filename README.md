# Visualizer

See it in action: [https://dsa-visualizer.marchell.xyz/](https://dsa-visualizer.marchell.xyz/)

# Inspiration

Inspired by Clement's work [here](https://www.youtube.com/watch?v=n4t_-NjY_Sg). The purpose of this repo is to let me re-learn Data Structure and Algo

links:
- https://clementmihailescu.github.io/Sorting-Visualizer/
- https://clementmihailescu.github.io/Pathfinding-Visualizer/


## Project setup
```sh
npm i -g pnpm # if you haven't installed pnpm
pnpm install
```

### Compiles and hot-reloads for development
```sh
pnpm run serve
```

### Compiles and minifies for production
```sh
pnpm run build
```

### Lints and fixes files
```sh
pnpm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Deploying to Github Pages
Make sure you have add a new SSh key to your Github account. https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key


```sh
make deploy
```

It will forcfully push whatever inside `/dist` to `deploy` branch. Because that is where our Github Pages configured to be served