# How to code an action game using PhaserJS

Action games are like candy. The more you eat, the more you want.

Well... maybe they're not actually like candy. Maybe I just like action games and have a sweet tooth.

## What is PhaserJS?

PhaserJS is a desktop and mobile JavaScript game framework. It's built on top of Canvas
and WebGL. It features preloading, physics, sprites, animations, particles, sound,
tilemaps, a plugin system, mobile browser support, and more.

### FAQ: Why should I learn game development?

Video games make for excellent portfolio pieces. Making a video game lets you
prove your talent for coding and and your ability to solve real-world problems.
Candidates that have video games on their portfolios end up attracting lots of
attention from potential recruiters and hiring managers.

The ability to build a video game is also one of the most satisfying parts of being a
software developer. Being able to interact with a world you've built can create a
passion for coding and genuine interest in software development.

### FAQ: Should I use React? Can I use create-react-app?

I would not recommend mixing React and PhaserJS. They have very different ways
of working, and it can be difficult to get the two working well together.

You might be considering using React, Vue, or another web framework. Building an
action game can be difficult with just React because React doesn't support collision
detection or keyboard shortcuts out of the box.

I would recommend sticking to PhaserJS for this hackathon.

## Initializing your project

First, create your project directory.

```bash
mkdir your-project-name
```

Then, initialize the project with npm and git.

```bash
cd your-project-name
npm init -y
git init
```

Make sure to add a gitignore.

```
/.cache
/dist
/node_modules
```

## Setting up a bundler

If you're coding in JavaScript, you might know what bundlers are and how they work.
Some names of bundlers you may have heard of are [Webpack](https://webpack.js.org/),
[Parcel](https://parceljs.org/) and [Rollup](https://rollupjs.org/guide/en/). They
stitch together your application logic and your `node_modules` folder so that
your application can be deployed and to the web. Before bundlers, developers had
to manually ensure their JavaScript files worked well with each other. If you're
used to using `create-react-app`, Gatsby or Next.js, then you may have already
used a bundler without realizing it. (They all use Webpack under the hood.)

For this tutorial, we're going to use Parcel. Parcel is the easiest bundler out
there, featuring an easy installation and getting-started process. If you are
already familiar with another bundler, feel free to use that bundler instead.

### Initializing Phaser and Parcel

First, add Parcel as a dev dependency

```bash
npm i -D parcel-bundler
```

Installer Phaser 3 by running the following command.

```bash
npm i phaser
```

Then, create an index.html and index.js file.

```html
<!-- index.html -->
<html>
  <body>
    <script src="./index.js"></script>
  </body>
</html>
```

Add basic JavaScript to make the project run.

```js
// index.js
import Phaser from "phaser";

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: function () {},
    create: function () {},
    update: function () {},
  },
};

var game = new Phaser.Game(config);
```
