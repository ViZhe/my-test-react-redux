
import React, { Component } from 'react'

import getGithubInfo from '../../utils/helpers'

export default class Github extends Component {
    // TODO: write all better
    constructor(props) {
        super(props)
        this.state = {
            bio: {},
            repos: []
        }
    }
    componentDidMount(){
        const username = this.props.params && this.props.params.username || 'vizhe'
        this.init(username)
    }

    init(username) {
        getGithubInfo(username).then(function(data){
            this.setState({
                bio: data.bio,
                repos: data.repos
            })
        }.bind(this))
    }

    render() {
        const { repos } = this.state
        return <div>
            <h1>Github</h1>
            {this.props.children}

            {repos.map((repo, index) => {
                return <li key={index}>
                        {repo.html_url && <h5>{repo.name} <a href={repo.html_url}>-></a></h5>}
                        {repo.description && <p>{repo.description}</p>}
                    </li>
            })}
        </div>
    }
}
