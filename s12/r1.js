
const divApp = document.getElementById('app');


function usuarios() {
    return fetch('https://api.github.com/users')

        .then(function (response) {
        return response.json();
        })
        
        .then(function (data) {
        return data.slice(0, 4)
        })
}





usuarios()
  .then(function (data) {
    data.forEach(function (data) {
      app.appendChild(creacionDiv(data));
    })
  })



function creacionDiv(data) {
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

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(link);

  return card;
}
