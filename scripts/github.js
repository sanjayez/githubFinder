class GitHub{
    constructor(){
        this.per_page = 5;
        this.sort = "created:asc";
    }
    async getUser(user){
        if(user !== ''){
            const details = await fetch('./scripts/github.json');
            const key = await details.json();

            const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${key.client_id}&client_secret=${key.client_secret}`);

            const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.per_page}&sort=${this.sort}&client_id=${key.client_id}&client_secret=${key.client_secret}`);

            const profile = await profileResponse.json();
            const repos = await repoResponse.json();
            return{
                profile,
                repos
            }
        }
        else{

        }
    }
}



