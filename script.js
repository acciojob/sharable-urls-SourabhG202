// your code here
const button = document.getElementById("button");
const urlElement = document.getElementById("url");

button.addEventListener("claick",function(){
	const name = document.getElementById("name");
	const year = document.getElementById("year");
	const newUrl = `https://localhost:8080/?name=${name}&year=${year}`;
	urlElement.textContent = newUrl;
})
