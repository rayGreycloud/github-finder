// Init classes
const github = new GitHub;
const ui = new UI;

// Search input 
const searchUser = document.getElementById('searchUser');

// Search input event listener 
searchUser.addEventListener('keyup', (e) => {
  // Get input text 
  const userText = e.target.value;
  // If not empty, get search for that user
  if (userText !== '') {
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show alert 
          console.log("Profile not found.");
        } else {
          // Show profile 
          ui.showProfile(data.profile);
        }
      });
  } else {
    // Clear profile 
    
  }
});