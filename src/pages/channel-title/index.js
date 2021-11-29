import React, { PureComponent } from 'react'
import { Page } from 'components'
import { Divider, Input, Radio } from 'antd'
import { connect } from 'umi'
import axios from 'axios'


@connect(({ channelTitle, loading }) => ({ channelTitle, loading }))
class ChannelTitle extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      radioValue: null,
    }
  }

  fetchRadioValue = async () => {
    let response = await axios.get("http://localhost:8080/api/channel-title")
    return response.data.channelTitle ? 1 : 2;
  }

  async componentDidMount() {
    let number = await this.fetchRadioValue()
    this.setState({ radioValue: number })
  }

  onRadioChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      radioValue: e.target.value,
    })
  };

  render() {
    return (
      <Page inner>
        <Radio.Group onChange={this.onRadioChange} value={this.state.radioValue}>
          <Radio value={1}>开启</Radio>
          <Radio value={2}>关闭</Radio>
        </Radio.Group>

        <Divider />
        输入通道标题：<Input placeholder="Basic usage" />
      </Page>
    )
  }
}

export default ChannelTitle
