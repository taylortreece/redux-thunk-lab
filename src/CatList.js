// write your CatList component here
import React from 'react'

export default class CatList extends React.Component {
    render() {
        return (
            <img src={this.props.catPic.url} alt="a very cute kitty" />
        )
    }
}