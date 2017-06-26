import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
// import ContactForm from './ContactForm'
// import { load as loadAccount } from '../reducers/account'
// import { connect } from 'react-redux'

// const data = {
//   // used to populate "account" reducer when "Load" is clicked
//   firstName: 'Jane',
//   lastName: 'Doe',
//   age: '42',
//   sex: 'female',
//   employed: true,
//   favoriteColor: 'Blue',
//   bio: 'Born to write amazing Redux code.'
// }

export default class Test extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  submit = (values) => {
    console.log(values)
  }

  render() {
    console.log('下面是父属性')
    console.log(this.props)
    const { images, login } = this.props
    const img = images.img
    console.log('------->')
    console.log(login)
    console.log(images)
    const access_token = login ? login.user.access_token : ''
    return (
      <div className='img-wrapper' onTouchStart={e => this.handleTouchStart(e)} onTouchMove={e => this.handleTouchMove(e)} onTouchEnd={e => this.handleTouchEnd(e)}>
        <img src={img} alt="图片地址" />
        <input type='text' ref='input_2' placeholder='你要跳转的页数' />
        <button onClick={(e) => this.handleClick(e)}>
          Go!
        </button>
        <input type='text' ref='input_7' value={access_token} />
        <button onClick={(e) => this.handleLoginClick(e)}>
          Login!
        </button>
        <button onClick={e => this.handleLogout(e)}>
          退出登录
        </button>
        <div style={{ position: 'absolute', top:'50%', width: '50%', border: '5px solid #ffffff', background: 'red', zIndex: 99999, display: images.isFetching ? '' : 'none' }}>
          正在加载
          </div>
        {/*<ContactForm onSubmit={this.submit} />*/}
      </div>
    )
  }

  handleLogout(e) {
    // dispatch
    this.props.onLogoutClick()
  }

  handleClick(e) {
    const node = this.refs.input_2
    let text = node.value.trim()
    console.log(text)
    this.props.onAddClick(text)
    // node.value = ''
  }
  handleTouchStart(e) {
    let touch = e.targetTouches[0]; //touches数组对象获得屏幕上所有的touch，取第一个touch
    let startPos = { x: touch.pageX, y: touch.pageY, time: new Date() }; //取第一个touch的坐标值
    let isScrolling = 0; //这个参数判断是垂直滚动还是水平滚动
    console.log(startPos)
    console.log(isScrolling)
    this.setState({ touch_start_x: touch.pageX })
  }
  handleTouchMove(e) {
    let touch = e.targetTouches[0]; //touches数组对象获得屏幕上所有的touch，取第一个touch
    let startPos = { x: touch.pageX, y: touch.pageY, time: new Date() }; //取第一个touch的坐标值
    let isScrolling = 0; //这个参数判断是垂直滚动还是水平滚动
    console.log(startPos)
    console.log(isScrolling)
    if (localStorage.lastpage) {
      this.props.images.page = parseInt(localStorage.lastpage, 10)
    }
    // console.log(touch.pageX - this.state.touch_start_x)
    if ((touch.pageX - this.state.touch_start_x) > 50) {
      this.setState({ cur: this.state.cur + 1 < this.state.images.length ? this.state.cur + 1 : this.state.cur });
      this.setState({ img: this.state.images[this.state.cur].img })
      if (this.props.images) {
        console.log('right')
        console.log(this.props.images)
        console.log(this.state.cur)
        console.log(this.props.images[this.state.cur])
      }
      this.setState({ img_2: this.props.images.lenght > 0 ? this.props.images[this.state.cur].completed : '' })
      // this.props.onEndTouch('ggg')
      this.setState({ touch_start_x: touch.pageX })
      console.log(this.state.cur);
      this.props.onEndTouch(this.props.images.page - 1, 'right')
    }
    if ((touch.pageX - this.state.touch_start_x) < -50) {
      console.log('left')
      console.log(this.props.images.page)
      this.props.onEndTouch(this.props.images.page + 1)
    }
    // this.setState({value: touch.pageX});
    // this.setState({y: touch.pageY});
    // this.setState({img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497267581602&di=965a2d502ad068f30edcd9f30611f352&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F94cad1c8a786c91743d61a36cb3d70cf3ac757e3.jpg'});
  }
  handleTouchEnd(e) {
  }
  handleLoginClick(e) {
    this.props.onLoginClick('ggg')
  }
}

Test.propTypes = {
  onAddClick: PropTypes.func.isRequired,
  onEndTouch: PropTypes.func.isRequired,
  onLogoutClick: PropTypes.func.isRequired,
}