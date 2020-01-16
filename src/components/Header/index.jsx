import React from 'react'
import { Icon } from 'antd-mobile'
import { Link, useLocation, useHistory } from 'react-router-dom'
import './style.css'

const Header = () => {
  const location = useLocation()
  const history = useHistory()

  const goback = () => {
    history.goBack()
  }
  return <div className='cndoe-header'>
    {
      location.pathname == '/detail' ? <Icon onClick={() => goback()} className='goback' type="left" /> : null
    }
    <ul>
      <li><Link to='/'>首页</Link></li>
      <li><Link to='/detail'>关于</Link></li>
    </ul>
  </div>
}

export default Header