const user = 'csbello95';
//const API_URL = `https://api.github.com/users/${user}`;
//Extraigo la información de los repositorios del usuario
function getRepos(user){
    return fetch(`https://api.github.com/users/${user}/repos`)
    .then((result)=> result.json())
    .then(data => {
        console.log(data);
        return data
    } );
}
// Se extrae unicamente los datos del usuario de GitHUB
function getinformationUser(user) {
    return fetch(`https://api.github.com/users/${user}`)
    .then((data)=> data.json())
    .then(data => {
        console.log(data);
        return data
    } );
}
//Esta función debe extraer los repositorios del usuario y mostrarlos
async function generatePage(user) {
  const userInformation = await getinformationUser(user);
  const userRepository = await getRepos(user);
  
  

  let renderHeader = "<h1><strong>Portfolio of Repositories</strong></h1>";
  renderHeader += `<div class = "card" ><img src="${userInformation.avatar_url}" id="avt"/><div><h2><strong>${userInformation.name}</strong></h2> 
    <h6><strong>${userInformation.bio}</strong></h6></div></div>`;
    let renderCard = "";
    if (userRepository != undefined) {
      console.log('repo',userRepository);
      userRepository.forEach((element) => {
        renderCard += `
        <div class="card repocard" style="">
        <img src="cat.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"><strong>${element.name}</strong></h5>
          <p class="card-text"></p>
          <a href="${element.svn_url}" target ="_blank" class="btn btn-primary">${element.name}</a>
        </div>
      </div>
      </div>
      `;
      });
    
      document.getElementById("repos-container").innerHTML = renderHeader;    
      document.getElementById("repos-cards").innerHTML = renderCard;
    }
  
  
}

 generatePage(user);
//render += `<div class="box-user"><a href="${element.svn_url}" target="_blank" class="btn btn-primary">${element.name}</a><img src="cat.png"></div>`;