function downloadImages(images) {
  const promises = images.map((image) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = image.url;
      img.onload = () => {
        resolve(img);
      };
      img.onerror = () => {
        reject(`Failed to load image's URL: ${image.url}`);
      };
    });
  });

  Promise.all(promises)
    .then((images) => {
      const output = document.getElementById('output');
      images.forEach((img) => {
        output.appendChild(img);
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

const images = [
  { url: 'https://via.placeholder.com/150' },
  { url: 'https://via.placeholder.com/200' },
  { url: 'https://via.placeholder.com/250' },
  { url: 'https://via.placeholder.com/300' },
  { url: 'https://via.placeholder.com/350' },
];

const downloadButton = document.getElementById('download-images-button');
downloadButton.addEventListener('click', () => {
  downloadImages(images);
});
