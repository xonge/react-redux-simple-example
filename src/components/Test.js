import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      y:'',
      images: [{
        img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497267581602&di=965a2d502ad068f30edcd9f30611f352&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F94cad1c8a786c91743d61a36cb3d70cf3ac757e3.jpg'
      },{
        img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497266083599&di=061536f9b81cd1d4c6991a6b2cee6b69&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fblog%2F201411%2F23%2F20141123201047_K8YUN.jpeg'
      }],
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497267581602&di=965a2d502ad068f30edcd9f30611f352&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F94cad1c8a786c91743d61a36cb3d70cf3ac757e3.jpg',
      touch_start_x: '',
      touch_end_x: '',
      cur:0,
      img_2: '',
      page: 1
  }
  }

  render() {
    console.log('下面是父属性')
    console.log(this.props)
    const { images } = this.props
    const img = images.img
    return (
      <div className='img-wrapper' onTouchStart={e=>this.handleTouchStart(e)} onTouchMove={e=>this.handleTouchMove(e)} onTouchEnd={e=>this.handleTouchEnd(e)}>
        <img src={img} alt=""/>
        <input type='text' ref='input_2' />
        <button onClick={(e) => this.handleClick(e)}>
          Add
        </button>
        <input type='text' ref='input_5' value={images.length}/>
        <input type='text' ref='input_6' value={this.state.img_2}/>
        <input type='text' ref='input_3' value={this.state.value}/>
        <input type='text' ref='input_4' value={this.state.y}/>
      </div>
    )
  }

  handleClick(e) {
    const node = this.refs.input
    let text = node.value.trim()
    this.props.onAddClick(text)
    node.value = ''
  }
  handleTouchStart(e) {
    let touch = e.targetTouches[0]; //touches数组对象获得屏幕上所有的touch，取第一个touch
    let startPos = {x:touch.pageX,y:touch.pageY,time:new Date()}; //取第一个touch的坐标值
    let isScrolling = 0; //这个参数判断是垂直滚动还是水平滚动
    console.log(startPos)
    console.log(isScrolling)
    this.setState({touch_start_x: touch.pageX})
  }
  handleTouchMove(e) {
    let touch = e.targetTouches[0]; //touches数组对象获得屏幕上所有的touch，取第一个touch
    let startPos = {x:touch.pageX,y:touch.pageY,time:new Date()}; //取第一个touch的坐标值
    let isScrolling = 0; //这个参数判断是垂直滚动还是水平滚动
    console.log(startPos)
    console.log(isScrolling)
    // console.log(touch.pageX - this.state.touch_start_x)
    if ((touch.pageX - this.state.touch_start_x) > 50) {
      this.setState({cur: this.state.cur+1 < this.state.images.length ? this.state.cur+1 : this.state.cur});
      this.setState({img: this.state.images[this.state.cur].img})
      if (this.props.images) {
        console.log('right')
        console.log(this.props.images)
        console.log(this.state.cur)
        console.log(this.props.images[this.state.cur])
      }
      this.setState({img_2: this.props.images.lenght> 0 ? this.props.images[this.state.cur].completed : ''})
      // this.props.onEndTouch('ggg')
      this.setState({touch_start_x: touch.pageX})
      console.log(this.state.cur);
      this.props.onEndTouch(this.props.images.page, 'right')
    }
    if ((touch.pageX - this.state.touch_start_x) < -50) {
      console.log('left')
      console.log(this.props.images.page)
      this.props.onEndTouch(this.props.images.page)
    }
    // this.setState({value: touch.pageX});
    // this.setState({y: touch.pageY});
    // this.setState({img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497267581602&di=965a2d502ad068f30edcd9f30611f352&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F94cad1c8a786c91743d61a36cb3d70cf3ac757e3.jpg'});
  }
  handleTouchEnd(e) {
  }
}

Test.propTypes = {
  onAddClick: PropTypes.func.isRequired,
  onEndTouch: PropTypes.func.isRequired
}