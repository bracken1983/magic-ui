import React, { PureComponent } from 'react'
import { Page } from 'components'
import { Divider, Input, Radio, Space, Button, Dropdown, Menu, message } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { connect } from 'umi'


@connect(({ geoLocation, loading }) => ({ geoLocation, loading }))
class GeoLocation extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      editorContent: null,
    }
  }

  onEditorStateChange = editorContent => {
    this.setState({
      editorContent,
    })
  }


  onRadioChange = e => {
    console.log('radio checked', e.target.value);
    // setValue(e.target.value);
    this.setState({
      e,
    })
  };


  handleMenuClick = e => {
    message.info('Click on menu item.');
    console.log('click', e);
  }

  render() {
    const { editorContent } = this.state
    const colProps = {
      lg: 12,
      md: 24,
      style: {
        marginBottom: 32,
      }
    }
    const textareaStyle = {
      minHeight: 496,
      width: '100%',
      background: '#f7f7f7',
      borderColor: '#F1F1F1',
      padding: '16px 20px'
    }

    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          右对齐
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          左对齐
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
          居中
        </Menu.Item>
      </Menu>
    );


    return (
      <Page inner>
        <Space><span>地理位置：</span>
        <Radio.Group onChange={this.onRadioChange} value={2}>
          <Radio value={1}>开启</Radio>
          <Radio value={2}>关闭</Radio>
        </Radio.Group>
        </Space>

        <Divider />
        <Space direction='vertical'>输入地理位置：
          <Input placeholder="Basic usage" />
          <Input placeholder="Basic usage" />
          <Input placeholder="Basic usage" />
          <Input placeholder="Basic usage" />
          <Input placeholder="Basic usage" />
        </Space>

        <Divider />
        <Space direction={'vertical'}>
          对齐方式
          <Dropdown overlay={menu} trigger={'click'}>
            <Button>
              右对齐 <DownOutlined />
            </Button>
          </Dropdown>
        </Space>
      </Page>
    )
  }
}

export default GeoLocation
