import React, { useState } from 'react'
import './style.css'

const TabList = [
  {
    name: '全部',
    value: 'all'
  },
  {
    name: '精华',
    value: 'good'
  },
  {
    name: '分享',
    value: 'share'
  },
  {
    name: '问答',
    value: 'ask'
  },
  {
    name: '招聘',
    value: 'job'
  }
]

const Tabs = ({ onSelect }) => {
  const [value, setValue] = useState('all')
  return <div className='cnode-tab'>
    {TabList.map(item => <span
      className='cnode-tab-item'
      style={{ color: value == item.value ? '#80bd01' : '' }}
      onClick={() => { onSelect(item.value); setValue(item.value)}}
    >{item.name}</span>)}
  </div>
}

export default Tabs