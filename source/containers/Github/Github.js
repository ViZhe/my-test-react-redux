
import React, { Component } from 'react'

import getGithubInfo from '../../utils/github/helpers'

import {
    GithubUserProfile,
    GithubReposList
} from '../../components'


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
    componentWillReceiveProps(nextProps){
        this.init(nextProps.params.username)
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
        const { bio, repos } = this.state
        return <div>
            <h2>Github</h2>
            <GithubUserProfile bio={bio} />
            <GithubReposList repos={repos} />
        </div>
    }
}
