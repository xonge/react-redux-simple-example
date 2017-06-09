import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import reactMixin from 'react-mixin';
import * as actionCreators from '../actions';

export class LoginView extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props)
    const redirectRoute = this.props.location.query.next || '/login';
    this.state = {
      email: '111@qq.com',
      password: '1111',
      redirectTo: redirectRoute
    };
  }

  login(e) {
      e.preventDefault();
      console.log(this.props)
      console.log(actionCreators)
      const {loginUser, loginUser2,loadStarred } = actionCreators
      console.log(loginUser2)
      console.log(this.state.email)
      console.log(this.state.redirectTo)
    //   loginUser2(this.state.email, this.state.password, this.state.redirectTo);
    //   console.log(loginUser(this.state.email, this.state.password, this.state.redirectTo));
    // const haha = loginUser(this.state.email, this.state.password, this.state.redirectTo);
    // haha()
    loadStarred()
  }

  test(e) {
      e.preventDefault();
      console.log(this.props)
      console.log(actionCreators)
      const {loginUser, loginUser2,loadStarred,testr } = actionCreators
      console.log(testr)
      console.log(this.state.email)
      console.log(this.state.redirectTo)
    //   loginUser2(this.state.email, this.state.password, this.state.redirectTo);
    //   console.log(loginUser(this.state.email, this.state.password, this.state.redirectTo));
    // const haha = loginUser(this.state.email, this.state.password, this.state.redirectTo);
    // haha()
    // testr()
    // dispatch(addTodo('1111'))
  }

  render () {
      console.log('ffff')
    return (
      <div className='col-xs-12 col-md-6 col-md-offset-3'>
        <h3>Log in to view protected content!</h3>
        <p>Hint: hello@test.com / test</p>
        {this.props.statusText ? <div className='alert alert-info'>{this.props.statusText}</div> : ''}
        <form role='form'>
        <div className='form-group'>
            <input type='text'
              className='form-control input-lg'
              
              placeholder='Email' />
            </div>
          <div className='form-group'>
            <input type='password'
              className='form-control input-lg'
              
              placeholder='Password' />
          </div>
          <button type='submit'
            className='btn btn-lg'
            disabled={this.props.isAuthenticating}
            onClick={this.login.bind(this)}>Submit</button>
            <button type='submit'
            className='btn btn-lg'
            disabled={this.props.isAuthenticating}
            onClick={this.test.bind(this)}>Submit1</button>
      </form>
    </div>
    );
  }
}

// reactMixin(LoginView.prototype, React.addons.LinkedStateMixin);

const mapStateToProps = (state, testr) => ({
  isAuthenticating   : state.auth.isAuthenticating,
  statusText         : state.auth.statusText,
  testr: testr
});

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, {loadStarred:actionCreators.loadStarred})(LoginView);
