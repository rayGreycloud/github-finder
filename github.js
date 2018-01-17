class GitHub {
  constructor() {
    this.client_id = 'c47e5041fa526bead30d';
    this.client_secret = '075db27a5dfae2e1f3e58446561c0ab27c7fdf92';
  }
  
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const profile = await profileResponse.json();
    
    return {
      profile
    }
  }
} 