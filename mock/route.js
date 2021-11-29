import { Constant } from './_utils'
const { ApiPrefix } = Constant

const database = [
  {
    id: '1',
    icon: 'dashboard',
    name: 'Dashboard',
    zh: {
      name: '首页'
    },
    'pt-br': {
      name: 'dashboard'
    },
    route: '/dashboard',
  },
  {
    id: '2',
    icon: 'dashboard',
    name: 'ChannelTitle',
    zh: {
      name: '通道标题'
    },
    'pt-br': {
      name: 'ChannelTitle'
    },
    route: '/channel-title',
  },{
    id: '4',
    icon: 'dashboard',
    name: 'location',
    zh: {
      name: '地理位置'
    },
    'pt-br': {
      name: 'location'
    },
    route: '/geo-location',
  },{
    id: '5',
    icon: 'dashboard',
    name: 'osd',
    zh: {
      name: 'OSD信息'
    },
    'pt-br': {
      name: 'location'
    },
    route: '/osd',
  },{
    id: '6',
    icon: 'dashboard',
    name: 'photoOverlay',
    zh: {
      name: '图片叠加'
    },
    'pt-br': {
      name: 'location'
    },
    route: '/photo-overlay',
  }
]

module.exports = {
  [`GET ${ApiPrefix}/routes`](req, res) {
    console.log(database)
    res.status(200).json(database)
  },
}
