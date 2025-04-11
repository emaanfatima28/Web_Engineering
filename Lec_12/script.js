document.getElementById("magnifier-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let username = document.getElementById("searchBox").value.trim();
    if (!username) {
        alert("Please enter a GitHub username.");
        return;
    }
    fetchGitHubUser(username);
});

async function fetchGitHubUser(username) {
    const clientID = 'Ov23li60ow4d8k06BMTH';
    const clientSecret = '71857a9d0670bb97a53fea978ea92c8226b7aee2';

    const userUrl = `https://api.github.com/users/${username}?client_id=${clientID}&client_secret=${clientSecret}`;
    const reposUrl = `https://api.github.com/users/${username}/repos?client_id=${clientID}&client_secret=${clientSecret}`;
    const followersUrl = `https://api.github.com/users/${username}/followers?client_id=${clientID}&client_secret=${clientSecret}`;

    try {
        let userResponse = await fetch(userUrl);
        if (!userResponse.ok) throw new Error(`GitHub User Not Found: ${userResponse.status}`);
        let userData = await userResponse.json();
        
        console.log("User Data:", userData);
        document.getElementById("submitForm").innerHTML = `
            <div class="profile-card">
                <img src="${userData.avatar_url}" alt="Profile Picture">
                <h2>${userData.name || "No Name Provided"}</h2>
                <p><strong>Location:</strong> ${userData.location || "Not Available"}</p>
                <p><strong>Email:</strong> ${userData.email ? userData.email : "Not Publicly Available"}</p>
            </div>
        `;

        let reposResponse = await fetch(reposUrl);
        if (!reposResponse.ok) throw new Error(`Could not fetch repositories: ${reposResponse.status}`);
        let repos = await reposResponse.json();
        console.log("Repositories:", repos);
        displayRepositories(repos);

        let followersResponse = await fetch(followersUrl);
        if (!followersResponse.ok) throw new Error(`Could not fetch followers: ${followersResponse.status}`);
        let followers = await followersResponse.json();
        console.log("Followers:", followers);
        displayFollowers(followers);

    } catch (error) {
        console.error(error);
        document.getElementById("submitForm").innerHTML = `<p style="color:red;">${error.message}</p>`;
    }
}

function displayRepositories(repos) {
    let repoDetails = document.getElementById("repoDetails");
    repoDetails.innerHTML = "<h3>Repositories</h3>";

    if (repos.length === 0) {
        repoDetails.innerHTML += "<p>No repositories available</p>";
        return;
    }

    repos.forEach(repo => {
        console.log("Repo:", repo.name, repo.html_url, repo.description);

        let repoDiv = document.createElement("div");
        repoDiv.classList.add("repoID");

        repoDiv.innerHTML = `
            <h3>${repo.name}</h3>
            <p><a href="${repo.html_url}" target="_blank">${repo.html_url}</a></p>
            <p>${repo.description || "No description available"}</p>
        `;

        repoDetails.appendChild(repoDiv);
    });
}

function displayFollowers(followers) {
    let followersDetails = document.getElementById("followersDetails");
    followersDetails.innerHTML = "<h3>Followers</h3>";

    if (followers.length === 0) {
        followersDetails.innerHTML += "<p>No followers available</p>";
        return;
    }

    let followersGrid = document.createElement("div");
    followersGrid.style.display = "grid";
    followersGrid.style.gridTemplateColumns = "repeat(auto-fit, minmax(100px, 1fr))";
    followersGrid.style.gap = "10px";
    followersGrid.style.textAlign = "center";

    followers.forEach(follower => {
        console.log("Follower:", follower.login);

        let followerDiv = document.createElement("div");
        followerDiv.style.border = "1px solid #ccc";
        followerDiv.style.padding = "10px";
        followerDiv.style.borderRadius = "10px";
        followerDiv.style.background = "#f9f9f9";
        followerDiv.style.cursor = "pointer";

        followerDiv.innerHTML = `
            <img src="${follower.avatar_url}" alt="${follower.login}" style="width: 50px; height: 50px; border-radius: 50%;">
            <p><a href="#" class="follower-link" data-username="${follower.login}">${follower.login}</a></p>
        `;

        followerDiv.addEventListener("click", () => {
            let clickedUsername = follower.login;
            fetchGitHubUser(clickedUsername);
        });

        followersGrid.appendChild(followerDiv);
    });

    followersDetails.appendChild(followersGrid);
}
