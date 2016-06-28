
import React, {Component} from 'react'
import {connect} from 'react-redux'

import {
  loadOptions
} from '~/core/options/actions'
import * as mlabHelpers from '~/utils/mlab/helpers'
import Options from '~/components/Options/Options'


class OptionsContainer extends Component {
  componentDidMount() {
    mlabHelpers.getOptions().then(response => {
      this.props.loadOptions({
        templates: response[0].data,
        groups: response[1].data,
        fields: response[2].data
      })
    })
  }
  render() {
    return <Options
      {...this.props}
      />
  }
}


const mapStateToProps = state => ({
  options: state.options.toJS()
})

const mapDispatchToProps = dispatch => ({
  loadOptions: data => dispatch(loadOptions(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionsContainer)
