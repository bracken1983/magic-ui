import { Constant } from './_utils'

const { ApiPrefix } = Constant

module.exports = {
  [`GET ${ApiPrefix}/geo-location`](req, res) {
    const { query } = req
    res.json({ success: true, message: 'Ok' })
  }
}
