//Instatiating objects
const github = new GitHub();
const ui = new UI;

const input = document.querySelector('#searchUser');

input.addEventListener('keyup', (e) =>{
    const userText = e.target.value;

    if(userText !== ''){
        //Display profile
        github.getUser(userText)
            .then( profile => {
                if(profile.profile.message === 'Not Found'){
                    //Show current profile & alert
                    ui.showAlert();
                }
                else{
                    //show fetched profile
                    ui.showProfile(profile.profile);
                    ui.showRepos(profile.repos);
                }
            });
    }
    else{
        ui.clearProfile();
    }
});