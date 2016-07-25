
import {GITHUB_CONFIG} from './config'


const getGithub = (username, link) =>
  new Promise((resolve, reject) => {
    fetch(link)
      .then(response => {
        resolve(response.json())
      })
      .catch(ex => {
        reject(ex)
      })
  })

const getRepos = username =>
  getGithub(username, `https://api.github.com/users/${username}/repos?client_id=${GITHUB_CONFIG.clientId}&client_secret=${GITHUB_CONFIG.clientSecret}`)

const getUser = username =>
  getGithub(username, `https://api.github.com/users/${username}?client_id=${GITHUB_CONFIG.clientId}&client_secret=${GITHUB_CONFIG.clientSecret}`)

const getGithubInfo = (username = 'ViZhe', ctx) => {
  Promise.all([
    getRepos(username),
    getUser(username)
  ])
  .then(results => {
    ctx.setState({
      repos: results[0],
      bio: results[1]
    })
  })
  .catch(reason => {
    throw Error(reason)
  })
}

export default getGithubInfo
