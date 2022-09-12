const API_URL = "https://api.adviceslip.com/advice";
const button = document.querySelector('button');

const fetchAdive = async() => {
    const response = await fetch(API_URL)
    const data = await response.json()
    document.querySelector("span").innerHTML = `ADVICE #${data.slip.id}`
    document.querySelector("p").innerHTML = `"${data.slip.advice}"`
};

fetchAdive();

button.addEventListener("click", () => {
    fetchAdive();
});

setInterval(() => {
    button.onClick(fetchAdive());
}, 10000)





//OTRA FORMA DE HACER LA LLAMADA Y LA CONEXION A LA API
// fetch(API_URL)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data)
//     document.querySelector("span").innerHTML = `ADVICE #${data.slip.id}`
//     document.querySelector("p").innerHTML = `"${data.slip.advice}"`
//   });

  
