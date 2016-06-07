
import axios from 'axios'

import { clientId, clientSecret } from './githubConfig' // is not on github


const getRepos = (username) =>
    axios.get(`https://api.github.com/users/${username}/repos?client_id=${clientId}&client_secret=${clientSecret}`)

const getUserInfo = (username) =>
    axios.get(`https://api.github.com/users/${username}?client_id=${clientId}&client_secret=${clientSecret}`)


const getGithubInfo = (username = 'vizhe') =>
    axios.all([getRepos(username), getUserInfo(username)]).then((arr) => ({
        repos: arr[0].data,
        bio: arr[1].data
    }))

export default getGithubInfo
