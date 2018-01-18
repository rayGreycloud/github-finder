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
          ui.showAlert('User not found.', 'alert alert-danger');
        } else {
          // Show profile 
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      });
  } else {
    // Clear profile 
    ui.clearProfile();
  }
});
