
import axios from 'axios'


const getRepos = (username) =>
    axios.get(`https://api.github.com/users/${username}/repos`)

const getUserInfo = (username) =>
    axios.get(`https://api.github.com/users/${username}`)


const getGithubInfo = (username = 'vizhe') =>
    axios.all([getRepos(username), getUserInfo(username)]).then((arr) => ({
        repos: arr[0].data,
        bio: arr[1].data
    }))

export default getGithubInfo
