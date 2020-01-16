import axios from '../utils/axios'

export default {
  getTopics: (params) => axios.get('/topics', { params }),
  getTopicsById: ({ id }) => axios.get(`/topic/${id}`)
}

/*
  getTopics:
  page Number 页数
  tab String 主题分类。目前有 ask share job good
  limit Number 每一页的主题数量
  mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。
*/

/*
  getTopicsById:
  id String 文章对应的 id
  mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。
*/