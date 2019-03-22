var repoList = document.querySelector('#list ul');
var repoNameinput = document.querySelector('#list input');
var repoButton = document.querySelector('#list button');

var repos = [];

function renderRepos(){
    repoList.innerHTML = '';

    for (repo of repos){
        var listElm = document.createElement('li');
        var elmTxt = document.createTextNode(repo.login);
        var elmLink = document.createElement('a');
        var linkTxt = document.createTextNode(repo.url)

        elmLink.setAttribute('href', repo.url);
        elmLink.appendChild(linkTxt);
        listElm.appendChild(elmTxt);
        listElm.appendChild(elmLink);

        repoList.appendChild(listElm);
    }
}

function tempRepo(cod){
    if (cod == 1) {
        var elm = document.createElement('li');
        var eTxt = document.createTextNode('Charging... ...');
        elm.setAttribute('id', 'temp');
        elm.appendChild(eTxt);

        repoList.appendChild(elm);
    } else {
        repoList.removeChild(repoList.lastElementItem)
    }
}

tempRepo();

function addRepo(){
    var repoName = 'https://api.github.com/users/' + repoNameinput.value;

    tempRepo(1);

    axios.get(repoName)
        .then(function(response){
            renderRepos(0);
            repos.push(response.data);
            renderRepos()
        })
        .catch(function(error){
            alert('User error! Code:' + error);
        });
    
        console.log(repos);
}

repoButton.onclick = addRepo;