import React from 'react'

export default class IRouter extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )

    }
}