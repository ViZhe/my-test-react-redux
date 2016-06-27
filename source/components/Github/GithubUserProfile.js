
// import React, { PropTypes } from 'react'
import React from 'react'


const GithubUserProfile = ({bio}) =>
  <ul className='c-profile'>
    {bio.avatar_url && <li><img src={bio.avatar_url} /></li>}
    {bio.name && <li>Name: {bio.name}</li>}
    {bio.login && <li>Username: {bio.login}</li>}
    {bio.email && <li>Email: {bio.email}</li>}
    {bio.location && <li>Location: {bio.location}</li>}
    {bio.company && <li>Company: {bio.company}</li>}
    {bio.followers && <li>Followers: {bio.followers}</li>}
    {bio.following && <li>Following: {bio.following}</li>}
    {bio.public_repos && <li>Public Repos: {bio.public_repos}</li>}
    {bio.blog && <li>Blog: <a href={bio.blog}> {bio.blog}</a></li>}
  </ul>

// GithubUserProfile.propTypes = {
//     index: PropTypes.number.isRequired,
//     number: PropTypes.number.isRequired
// }

export default GithubUserProfile
