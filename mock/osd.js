import { Constant } from './_utils'

const { ApiPrefix } = Constant

module.exports = {
  [`GET ${ApiPrefix}/osd`](req, res) {
    const { query } = req
    res.json({ success: true, message: 'Ok' })
  }
}
