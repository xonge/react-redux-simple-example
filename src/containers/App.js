/*import React, { Component } from 'react'
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
        console.log('props')
        console.log(this.props)
        console.log(dispatch)
        const { dispatch, selectedReddit } = this.props
        console.log(dispatch)
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
export default connect(mapStateToProps)(App)*/


/*import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import Explore from '../components/Explore'
import { resetErrorMessage, loadToken } from '../actions'
console.log(browserHistory)

class App extends Component {
  static propTypes = {
    // Injected by React Redux
    errorMessage: PropTypes.string,
    resetErrorMessage: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired,
    // Injected by React Router
    children: PropTypes.node,
    loadToken: PropTypes.func.isRequired,
  }

  componentWillMount() {
    console.log(browserHistory)
  }

  handleDismissClick = e => {
    this.props.resetErrorMessage()
    e.preventDefault()
  }

  handleChange = nextValue => {
    browserHistory.push(`/${nextValue}`)
  }

  handleLoadToken = () => {
      console.log('token')
    this.props.loadToken(this.props.fullName, true)
  }

  handleDeleteToken = () => {
      console.log('token')
    this.props.loadToken(this.props.fullName, true)
  }

  renderErrorMessage() {
    const { errorMessage } = this.props
    if (!errorMessage) {
      return null
    }

    return (
      <p style={{ backgroundColor: '#e99', padding: 10 }}>
        <b>{errorMessage}</b>
        {' '}
        <button onClick={this.handleDismissClick}>
          Dismiss
        </button>
      </p>
    )
  }

  render() {
      console.log('zzz')
    const { children, inputValue } = this.props
    
    return (
      <div>
        <Explore value={inputValue}
                 onChange={this.handleChange} onLoadTokenClick={this.handleLoadToken} onDeleteTokenClick={this.handleDeleteToken}/>
        <hr />
        {this.renderErrorMessage()}
        {children}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  errorMessage: state.errorMessage,
  inputValue: ownProps.location.pathname.substring(1)
})

export default connect(mapStateToProps, {
  resetErrorMessage,
  loadToken
})(App)*/

// import React from 'react';
// import {Navbar, NavBrand, Nav, NavItem} from 'react-bootstrap';
// // import {Link} from 'react-router';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {logoutAndRedirect} from '../actions';

// // import '../styles/core.scss';

// connect((state) => {
//     return {
//      isAuthenticated: state.auth.isAuthenticated
//     };
// })
// export default class CoreLayout extends React.Component {

//     render () {

//         const {dispatch} = this.props;

//         return (
//             <div>
//                 <nav className="navbar navbar-default">
//                     <div className="container">
//                         <div className="navbar-header">
//                         </div>
//                         <div id="navbar">
//                             <ul className="nav navbar-nav navbar-right">
//                                 {this.props.isAuthenticated
//                                  ? <li><a href='#' onClick={() => this.props.dispatch(logoutAndRedirect())}>Logout</a> </li>
//                                  : ''
//                                 }
//                             </ul>
//                         </div>
//                     </div>
//                 </nav>
//                 <div className='container'>
//                     <div className='row'>
//                         <div className='col-xs-12'>
//                             {this.props.children}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         );
//     }
// }

import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { fetchAnimezilla, addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'
import Test from '../components/Test'

class App extends Component {
  render() {
    // Injected by connect() call:
    const { dispatch, visibleTodos, visibilityFilter,images,images_1 } = this.props
    return (
      <div>
          <Test images={images} images_1={images_1}
          onAddClick={text =>
            dispatch(fetchAnimezilla(text))
          } onEndTouch={(text, go) =>
            dispatch(fetchAnimezilla(text, go))
          } />
        <AddTodo
          onAddClick={text =>
            dispatch(addTodo(text))
          } />
        <TodoList
          todos={visibleTodos}
          onTodoClick={index =>
            dispatch(completeTodo(index))
          } />
        <Footer
          filter={visibilityFilter}
          onFilterChange={nextFilter =>
            dispatch(setVisibilityFilter(nextFilter))
          } />
      </div>
    )
  }
}

App.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
}

function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
    default:
      return todos
  }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    visibleTodos: selectTodos(state.todos_2, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter,
    images: state.images,
    images_1: state.images_1
  }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(App)
