class UI{
    constructor(){
        this.location = document.querySelector('#profile');
    }

    showProfile(user){
        let output = `<div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary p-2">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary p-2">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success p-2">Followers: ${user.followers}</span>
                    <span class="badge badge-info p-2 mt-2">Following: ${user.following}</span>
                    <br><br>

                    <ul class="list-group">
                        <li class="list-group-item">Username: ${user.login}</li>
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member since: ${user.created_at.slice(0,10)}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3"> Latest Repos</h3>
        <div id="repos"></div>
        `;
        this.location.innerHTML = output;
    }

    showRepos(repos){
        let output = '';
        repos.forEach(repo => {
            output += `<div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                    <span class="badge badge-primary p-2">Stars: ${repo.stargazers_count}</span>
                    <span class="badge badge-secondary p-2">Watchers: ${repo.watchers_count}</span>
                    <span class="badge badge-success p-2">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>`;

            document.getElementById('repos').innerHTML = output;
        });
    }

    clearProfile(){
        document.querySelector('#profile').innerHTML = '';
    }

    showAlert(){
        this.checkAlert();
        const parent = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        const div = document.createElement('div');
        div.className = 'alert alert-danger';
        div.appendChild(document.createTextNode('Profile Not Found'));
        parent.insertBefore(div, search);

        setTimeout(this.checkAlert,3000);
    }

    checkAlert(){
        const element = document.querySelector('.alert');
        if(element){
            element.remove();
        }
    }
}