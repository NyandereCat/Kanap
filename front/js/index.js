let sofaData = [];

const fetchSofa = async ()=> {
    await fetch("http://localhost:3000/api/products") /*await pour attendre qu'il aille chercher la requête */
    .then((res) => console.log (res.json()),
    );
};
fetchSofa();