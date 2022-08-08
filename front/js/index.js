main();
async function main() {
  const articles = await getArticles(); /* Attendre que la promesse est résolu. Peut être utilisé seulement dans les fonctions en syncrone */
  console.log(articles);
  displayArticles(articles);
}

function getArticles() {
  return fetch("http://localhost:3000/api/products") /* fetch = allez chercher */
    .then(function (responseHttp) {
      return responseHttp.json();
    })
    .then(function (articles) {
      return articles;
    })
    .catch(function (error) { /* Si APi est down on ajoute catch. Si Fetch n'arrive pas à destination */
      alert(error);
    })
}

function displayArticles(articles) {
  let items = document.getElementById("items");
  articles.forEach((article) =>{


    let balise_a = document.createElement("a");
    let balise_article = document.createElement("article");
    let balise_img = document.createElement("img");
    let balise_h3 = document.createElement("h3");
    let balise_p = document.createElement("p");

    balise_h3.innerHTML = article.name;
    balise_p.innerHTML = article.description;
    balise_img.setAttribute("src",article.imageUrl);
    balise_img.setAttribute("alt",article.altTxt);
    balise_h3.setAttribute("class","productName");
    balise_h3.setAttribute("class","productDescription");
    balise_a.setAttribute("href","product.html?id="+ article._id);


    balise_article.appendChild(balise_img);
    balise_article.appendChild(balise_h3);
    balise_article.appendChild(balise_p);
    balise_a.appendChild(balise_article);
    items.appendChild(balise_a);
  });
}

