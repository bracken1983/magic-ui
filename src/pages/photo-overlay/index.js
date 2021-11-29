import React, { PureComponent } from 'react'
import { Page } from 'components'
import { Button, Divider, Dropdown, Image, Menu, message, Radio, Space, Upload } from 'antd'
import { DownOutlined, LoadingOutlined, PlusOutlined, UserOutlined } from '@ant-design/icons'
import { connect } from 'umi'

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

@connect(({ photoOverlay, loading }) => ({ photoOverlay, loading }))
class PhotoOverlay extends PureComponent {

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
    console.log('radio checked', e.target.value)
    // setValue(e.target.value);
    this.setState({
      e,
    })
  }


  handleMenuClick = e => {
    message.info('Click on menu item.')
    console.log('click', e)
  }


  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  render() {
    const { editorContent } = this.state
    const colProps = {
      lg: 12,
      md: 24,
      style: {
        marginBottom: 32,
      },
    }
    const textareaStyle = {
      minHeight: 496,
      width: '100%',
      background: '#f7f7f7',
      borderColor: '#F1F1F1',
      padding: '16px 20px',
    }

    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1" icon={<UserOutlined/>}>
          自定义
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined/>}>
          自定义
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined/>}>
          自定义
        </Menu.Item>
      </Menu>
    )



    const { loading, imageUrl } = this.state;
    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );

    return (
      <div>
      <Page inner>
        <Space>
          <Radio.Group onChange={this.onRadioChange} value={2}>
            <Radio value={1}>开启</Radio>
            <Radio value={2}>关闭</Radio>
          </Radio.Group>
        </Space>

        <Divider/>
        <Space><span>图片选择：</span>
          <Dropdown overlay={menu} trigger={'click'}>
            <Button>
              自定义 <DownOutlined/>
            </Button>
          </Dropdown>

        </Space>

        <p/>
        图片预览：
        <p/>
        <Image width={200} src={'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'}></Image>

        <p/>
        上传图片：
        <p/>
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          beforeUpload={beforeUpload}
          onChange={this.handleChange}
        >
          {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
        </Upload>

        <p/>
        <p/>



      </Page>

      </div>
    )
  }
}

export default PhotoOverlay
