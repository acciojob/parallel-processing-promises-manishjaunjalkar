//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

document.getElementById('download-images-button').addEventListener('click',(event)=>{

	let promises = images.map((url)=>{ //creating promise for each of the image url
		return new Promise((resolve,reject) => {
			let img = new Image();//getting image 

			img.onload = () => resolve(img); //upon laoding the image the promise is resolved
			img.onerror = () => reject(`Failed to load image's URL: ${url}`); //if error give the statement
			img.src = url; //save the image source
	});
	});

	Promise.all(promises).then(images => {
		images.forEach((image) => {
			document.getElementById('output').appendChild(image); //append the image tag as and when the promise is resolved
		});
	}).catch(error => {
		console.log(error);
	});
});
