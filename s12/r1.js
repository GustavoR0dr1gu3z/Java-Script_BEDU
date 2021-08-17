const app = document.getElementById('app');


getGithubUsers()
  .then(function (data) {
    data.forEach(function (user) {
      return getUserRepositories(user.repos_url)
        .then(function (repos) {
          app.appendChild(createCard(user, repos));
        })
    })
  })


function createCard(data) {
  const card = document.createElement('div');
  card.className = 'card';

  const name = document.createElement('h2');
  const nameText = document.createTextNode(data.login);

  name.appendChild(nameText)

  const link = document.createElement('a');
  const linkText = document.createTextNode('Usuarios Github');

  link.appendChild(linkText);
  link.href = data.html_url;
  link.target = 'blank';
  link.className = 'button';

  const img = document.createElement('img');
  img.src = data.avatar_url;
  img.alt = data.login;

//const reposList = createReposList(repos_url);

  card.appendChild(img);
  card.appendChild(name);
  //card.appendChild(reposList);
  card.appendChild(link);

  return card;
}




function getGithubUsers() {
  return fetch('https://api.github.com/users')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data.slice(0, 4)
    })
}

function createReposList(repos) {
  const details = document.createElement('details');

  const summary = document.createElement('summary');
  const summaryText = document.createTextNode('Repositories:');
  summary.appendChild(summaryText);

  details.appendChild(summary);

  repos.forEach(function(repo) {
    const link = document.createElement('a');
    const linkText = document.createTextNode(repo.name);

    link.appendChild(linkText);
    link.href = repo.html_url;
    link.target = '_blank';
    link.className = 'button-repo';

    details.appendChild(link);
  })

  return details;
}

function getUserRepositories(url) {
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data.slice(0, 5)
    })
}