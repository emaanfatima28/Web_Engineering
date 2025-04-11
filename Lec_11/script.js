// const Promise1 = new Promise((resolve,reject)=>{
// resolve(1);
// });
// const Promise2 = new Promise((resolve,reject)=>{
//     resolve(1);
//     });

//     Promise.all([Promise1,Promise2])
//     .then(res)
//     .catch(res)


// const getAPI = fetch('https://api.github.com/users/emaanfatima28');

// getAPI.then(res=>res.json())
// .then(profile=>console.log(profile));

//Delay expected use async
// async function getGitData() {
//     const gitData = await fetch('https://api.github.com/users/emaanfatima28'); // Await fetch
//     const profile = await gitData.json(); 
//     console.log(profile);
// }

// getGitData();

//Does not deletes unless deleted
//localStorage.setItem('gitURL','api.github.com/users/emaanfatima28');
//if same key used it overwrites it
//console.log(localStorage.getItem('gitURL'));

const users = [{
    name : 'Emaan', age : 20
},{
    name : 'Imama', age : 18
}]
console.log(users);
console.log(JSON.stringify(users));

localStorage.setItem('classStudent',JSON.stringify(users));