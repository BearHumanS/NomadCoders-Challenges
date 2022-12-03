const img = ["css.png", "2.png", "1.png"];

const bgImg = img[Math.floor(Math.random()*img.length)];

const image = document.createElement("img");

image.src = `img/${bgImg}`;

document.body.prepend(image);