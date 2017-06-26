import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { fetchAnimezilla, addTodo, completeTodo, setVisibilityFilter, VisibilityFilters, fetchLogin, fetchLogout } from '../actions'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'
import Test from '../components/Test'
import LoginForm from '../components/LoginForm'
import RemoteSubmitForm from '../components/RemoteSubmitForm'
import RemoteSubmitButton from '../components/RemoteSubmitButton'

class Auth extends Component {
  render() {
    // Injected by connect() call:
    const { dispatch, visibleTodos, visibilityFilter,images,images_1,user } = this.props
    console.log(this.props)
    return (
      <div>
          <Test images={images} images_1={images_1} user={user}
          onAddClick={text =>
            dispatch(fetchAnimezilla(text))
          } onEndTouch={(text, go) =>
            dispatch(fetchAnimezilla(text, go))
          } onLoginClick={text =>
            dispatch(fetchLogin(text))
          } onLogoutClick={text =>
            dispatch(fetchLogout(text))
          }/>
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
          <LoginForm />
          <RemoteSubmitForm />
      <RemoteSubmitButton />
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
  console.log('从reducer来的state：')
  console.log(state)
  return {
    visibleTodos: selectTodos(state.todos_2, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter,
    images: state.images,
    images_1: state.images_1,
    user: state.user,
  }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(App)
