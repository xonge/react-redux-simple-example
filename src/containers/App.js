import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'
import News from '../components/News'

class App extends Component {
    static propTypes = {
        selectedReddit: PropTypes.string.isRequired,
        posts: PropTypes.array.isRequired,
        news: PropTypes.array.isRequired,
        isFetching: PropTypes.bool.isRequired,
        lastUpdated: PropTypes.number,
        dispatch: PropTypes.func.isRequired
    }

    componentDidMount() {
        const { dispatch, selectedReddit } = this.props
        dispatch(fetchPostsIfNeeded(selectedReddit))
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedReddit !== this.props.selectedReddit) {
            const { dispatch, selectedReddit } = nextProps
            dispatch(fetchPostsIfNeeded(selectedReddit))
        }
    }

    handleChange = nextReddit => {
        this.props.dispatch(selectReddit(nextReddit))
    }

    handleRefreshClick = e => {
        e.preventDefault()

        const { dispatch, selectedReddit } = this.props
        dispatch(invalidateReddit(selectedReddit))
        dispatch(fetchPostsIfNeeded(selectedReddit))
    }

    render() {
        const { selectedReddit, posts, isFetching, lastUpdated, news } = this.props
        const isEmpty = posts.length === 0
        const isEmpty1 = news.length === 0
        return (

            <div>
                <Picker value={selectedReddit}
                        onChange={this.handleChange}
                        options={[ 'reactjs', 'frontend' ]} />
                <p>
                    {lastUpdated &&
                    <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
                        {' '}
            </span>
                    }
                    {!isFetching &&
                    <button onClick={this.handleRefreshClick}>
                        Refresh
                    </button>
                    }
                </p>
                {isEmpty
                    ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
                    : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                        <Posts posts={posts} />
                    </div>
                }
                {isEmpty1
                    ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
                    : <div><News news={news} /></div>
                }
                
            </div>

        )
    }
}

const mapStateToProps = state => {
    const { selectedReddit, postsByReddit, newsByReddit } = state

    const {
        isFetching,
        lastUpdated,
        items: posts,
    } = postsByReddit[selectedReddit] || {
        isFetching: true,
        items: [],
    }
    const {
        items1: news,
    } = newsByReddit[selectedReddit] || {
        isFetching: true,
        items1: [],
    }
    // news = [{title:'333'}];

    // const {items: news};
    // console.log(state);
    // console.log(selectedReddit);
    // console.log(posts);

    return {
        selectedReddit,
        posts,
        news,
        isFetching,
        lastUpdated
    }
}

// import { withRouter } from 'react-router-dom'
export default connect(mapStateToProps)(App)