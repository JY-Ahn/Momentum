const images = [
    "dog.jpg",
    "mountain.jpg",
    "surfing.jpeg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');

bgImage.src = `img/${chosenImage}`;
console.log(bgImage);

document.body.appendChild(bgImage);