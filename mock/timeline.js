import { Constant } from './_utils'

const { ApiPrefix } = Constant

module.exports = {
  [`GET ${ApiPrefix}/timeline`](req, res) {
    const { query } = req
    console.log('reach here')
    res.json({ success: true, message: 'Ok' })
  }
}
