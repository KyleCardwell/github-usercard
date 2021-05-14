/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios';

axios.get('https://api.github.com/users/KyleCardwell')
  .then(response => {
    const newIdCard = idCardMaker(response.data);
    console.log(newIdCard);
    const cardsGroup = document.querySelector('.cards')
    cardsGroup.appendChild(newIdCard);
  })
  // .catch()
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function idCardMaker(gitHubInfo) {

  // assign variables info from passed-in object
  const gitHubAvatar = gitHubInfo.avatar_url;
  const gitHubName = gitHubInfo.name;
  const gitHubLogin = gitHubInfo.login
  const gitHubLoc = gitHubInfo.location;
  const gitHubURL = gitHubInfo.html_url;
  const gitHubFollowers = gitHubInfo.followers;
  const gitHubFollowing = gitHubInfo.following;
  const gitHubBio = gitHubInfo.bio;

  // create html elements
  const cardDiv = document.createElement('div');
  const userImg = document.createElement('img');
  const infoDiv = document.createElement('div');
  const fullName = document.createElement('h3');
  const userLogin = document.createElement('p');
  const userLoc = document.createElement('p');
  const userProfile = document.createElement('p');
  const profileHref = document.createElement('a');
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');

  // add classes to a few elements
  cardDiv.classList.add('card');
  // userImg.classList.add('card img');
  infoDiv.classList.add('card-info');
  fullName.classList.add('name');
  userLogin.classList.add('username');

  // assign content to variables
  userImg.src = gitHubAvatar;
  fullName.textContent = gitHubName;
  userLogin.textContent = gitHubLogin;
  userLoc.textContent = gitHubLoc;
  userProfile.textContent = 'Profile: ';
  profileHref.href = gitHubURL;
  profileHref.textContent = gitHubURL;
  userFollowers.textContent = `Followers: ${gitHubFollowers}`;
  userFollowing.textContent = `Following: ${gitHubFollowing}`;
  userBio.textContent = gitHubBio;

  // organize html elements
  cardDiv.appendChild(userImg);
  cardDiv.appendChild(infoDiv);
  infoDiv.appendChild(fullName);
  infoDiv.appendChild(userLogin);
  infoDiv.appendChild(userLoc);
  infoDiv.appendChild(userProfile);
  userProfile.appendChild(profileHref);
  infoDiv.appendChild(userFollowers);
  infoDiv.appendChild(userFollowing);
  infoDiv.appendChild(userBio);

  return cardDiv;

}

followersArray.forEach(name => {
  axios.get(`https://api.github.com/users/${name}`)
  .then(response => {
    const newIdCard = idCardMaker(response.data);
    console.log(newIdCard);
    const cardsGroup = document.querySelector('.cards')
    cardsGroup.appendChild(newIdCard);
  })
})

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
