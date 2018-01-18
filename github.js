class GitHub {
  constructor() {
    // For demo app only 
    this.client_id = 'c47e5041fa526bead30d';
    this.client_secret = '075db27a5dfae2e1f3e58446561c0ab27c7fdf92';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }
  
  async getUser(user) {
    const baseURL = `https://api.github.com/users/${user}`;
    const oauthString = `client_id=${this.client_id}&client_secret=${this.client_secret}`;
    const reposOptions = `per_page=${this.repos_count}&sort=${this.repos_sort}`;
    
    const profileResponse = await fetch(`${baseURL}?${oauthString}`);
    
    const reposResponse = await fetch(`${baseURL}/repos?${reposOptions}&${oauthString}`);
    
    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
    
    return {
      profile,
      repos
    }
  }
} 