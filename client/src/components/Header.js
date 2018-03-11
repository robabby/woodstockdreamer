import React from 'react'

import medicineWheel from '../images/medicine-wheel-small.png';

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
      <div className="logo">
        {/* <span className="icon fa-diamond"></span> */}
        <img src={medicineWheel} />
      </div>
      <div className="content">
        <div className="inner">
          <h1>Woodstock Dreamer</h1>
          <p>Holding the space for the spiritual man</p>
        </div>
      </div>
      <nav>
        <ul>
          <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
          <li><a href="javascript:;" onClick={() => {props.onOpenArticle('blog')}}>Blog</a></li>
          <li><a href="javascript:;" onClick={() => {props.onOpenArticle('coaching')}}>Coaching</a></li>
          <li><a href="javascript:;" onClick={() => {props.onOpenArticle('events')}}>Events</a></li>
          <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
        </ul>
      </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
