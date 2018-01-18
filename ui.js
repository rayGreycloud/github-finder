class UI {
  constructor() {
    // Grab target element
    this.profile = document.getElementById('profile');
    
  }
  // Generate html to show profile
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img src="${user.avatar_url}" alt="" class="img-fluid mb-2" />
            <a href="${user.html_url}" class="btn btn-primary btn-block mb-3">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br /><br />
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Wesite/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>        
        </div>
      </div>
    `;
  }
  
  // Show repos 
  showRepos(repos) {
    let output = `
      <h3 class="page-heading mb-3">Latest Repos</h3>
      `;
    
    repos.forEach(function (repo) {
      output += `
        <div class="card card-body mb-2">
        <div className="row">
          <div className="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
          <div className="col-md-6">
            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success">Forks: ${repo.forks_count}</span>          
          </div>
        </div>
      </div>
      `;
    });
    
    // Output repos 
    const reposList = document.getElementById('repos');
    reposList.innerHTML = output;
  }
    
  // Clear display when input cleared
  clearProfile() {
    this.profile.innerHTML = '';
  }
  
  // Show alert 
  showAlert(message, messageClasses) {
    // Clear any existing alerts 
    this.clearAlert();
    // Create div 
    const div = document.createElement('div');
    // Add classes
    div.className = messageClasses;
    // Add text 
    div.appendChild(document.createTextNode(message));
    // Get parent element 
    const container = document.querySelector('.searchContainer');
    // Get sibling element 
    const search = document.querySelector('.search');
    // Insert alert 
    container.insertBefore(div, search);
    
    // Timeout after 3s 
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }
  
  // Clear alert 
  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    
    if (currentAlert) {
      currentAlert.remove();
    }
  }
}