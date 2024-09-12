const images = [
    "https://img.freepik.com/free-photo/close-up-kitten-surrounded-by-flowers_23-2150782259.jpg?t=st=1726158557~exp=1726162157~hmac=cd70d424ad6ff8dad58db50b0d3d3d9b1cce02adff51e1d6f5ecbcea97f7c131&w=740",
    "https://img.freepik.com/free-photo/view-3d-adorable-cat-with-fluffy-clouds_23-2151113419.jpg?t=st=1726158968~exp=1726162568~hmac=0c770b027b4dc8e3ac8681cfe59e5e003e5f2bec5c2c65ad7f82166c48062ade&w=740",

    
];


const randomImage = images[Math.floor(Math.random() * images.length)];

const imgElement = document.createElement('img');
imgElement.src = randomImage;
imgElement.style.height = "500px"
document.body.appendChild(imgElement);
