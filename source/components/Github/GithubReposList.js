
import React, {PropTypes} from 'react'


const GithubReposList = ({repos}) =>
  <div>
    {repos.map((repo, index) =>
      <div key={index}>
        {repo.html_url && <h5>{repo.name} <a href={repo.html_url}>-></a></h5>}
        {repo.description && <p>{repo.description}</p>}
      </div>
    )}
  </div>

GithubReposList.propTypes = {
  repos: PropTypes.array.isRequired
}

export default GithubReposList
