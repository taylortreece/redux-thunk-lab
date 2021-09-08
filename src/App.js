import React from 'react'
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'

import CatList from './CatList'

class App extends React.Component {

  componentDidMount() {
    console.log(this.props)
    this.props.fetchCats()
  }
  
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>CatBook</h1>
        {this.props.catPics.map((catPic, key) => (
          this.props.loading ? <h1>loading</h1> : <CatList key={key} catPic={catPic} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

export default connect(mapStateToProps, { fetchCats })(App)

