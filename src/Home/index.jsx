import React, { useState, useEffect, useRef } from 'react'
import { Card, Toast, Pagination, Icon } from 'antd-mobile'
import { Link } from 'react-router-dom'
import moment from 'moment'
import Tabs from '../components/Tabs'
import api from '../service'
import './style.css'

const TabMaps = {
  ask: '问答',
  share: '分享',
  job: '工作',
  good: '精华'
}

const Home = () => {
  const [list, setList] = useState([])
  const [tab, setTab] = useState('all')
  const [page, setPage] = useState(1)

  useEffect(() => {
    Toast.loading('加载中', 2)
    api.getTopics({
      page,
      limit: 10,
      tab
    }).then(({ data }) => {
      setList(data)
      Toast.hide()
      window.scrollTo(0, 0) // 返回顶部
    })
  }, [tab, page])

  const changeTab = (value) => {
    setTab(value)
  }

  const handleChangePage = (value) => {
    setPage(value)
  }
  return <div className='home'>
    <Tabs onSelect={changeTab} />
    {
      list.map(item => <Link
        key={item.id}
        to={{ pathname: 'detail', search: `?id=${item.id}` }}
      >
        <Card className='list-item'>
          <Card.Header
            title={item.title}
            thumb={item.author.avatar_url}
            extra={<span>{TabMaps[item.tab]}</span>}
          />
          <Card.Footer
            content={`${item.reply_count}/${item.visit_count}`}
        extra={<div>{moment(item.create_at).fromNow()}</div>}
          />
        </Card>
      </Link>)
    }
    <Pagination total={100}
      className="custom-pagination-with-icon"
      current={page}
      locale={{
        prevText: (<span className="arrow-align"><Icon type="left" />上一页</span>),
        nextText: (<span className="arrow-align">下一页<Icon type="right" /></span>),
      }}
      onChange={(value) => handleChangePage(value)}
    />
  </div>
}
export default Home

