
import axios from 'axios'

import {GITHUB_CONFIG} from './config'


const getRepos = username =>
  axios.get(`https://api.github.com/users/${username}/repos?client_id=${GITHUB_CONFIG.clientId}&client_secret=${GITHUB_CONFIG.clientSecret}`)

const getUserInfo = username =>
  axios.get(`https://api.github.com/users/${username}?client_id=${GITHUB_CONFIG.clientId}&client_secret=${GITHUB_CONFIG.clientSecret}`)


const getGithubInfo = (username = 'ViZhe', ctx) => {
  axios.all([getRepos(username), getUserInfo(username)]).then(arr => (
    ctx.setState({
      repos: arr[0].data,
      bio: arr[1].data
    })
  ))
}

export default getGithubInfo
