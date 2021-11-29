import { Constant } from './_utils'

const { ApiPrefix } = Constant

module.exports = {
  [`GET ${ApiPrefix}/camera`](req, res) {
    const { query } = req
    console.log('reach here')
    res.json({ success: true, message: 'Ok' })
  }
}
