import React, { useEffect, useState } from 'react'
import moment from 'moment'
import api from '../service'
import { getQueryString } from '../utils'
import './style.css'

const TabMaps = {
  ask: '问答',
  share: '分享',
  job: '工作',
  good: '精华'
}

const Detail = () => {
  const [detail, setDetail] = useState({})
  const id = getQueryString('id')

  useEffect(() => {
    api.getTopicsById({ id }).then(({ data }) => {
      setDetail(data)
    })
  }, [])

  return <div className='detail'>
    <div className='detail-header'>
      <h3 className='detail-header-title'>{detail.title}</h3>
<div className='detail-header-desc'>发布于 {moment(detail.create_at).fromNow()} 作者 {detail.author ? detail.author.loginname : null}  {detail.visit_count} 次浏览  来自 {TabMaps[detail.tab]}</div>
    </div>
    <div className='detail-content' dangerouslySetInnerHTML={{ __html: detail.content }} >

    </div>
  </div>
}

export default Detail