import { Component } from 'react'
import { Page } from 'components'
import { convertToRaw } from 'draft-js'
import { Row, Col, Card } from 'antd'
import draftToHtml from 'draftjs-to-html'
import draftToMarkdown from 'draftjs-to-markdown'

export default class GPSLocationPage extends Component {
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
      padding: '16px 8px'
    }

    return (
      <Page inner>
        <Row gutter={32}>
          <Col {...colProps}>
            <Card title="相机参数" style={{ overflow: 'visible' }}>
              GPS xxx
            </Card>
          </Col>
          <Col {...colProps}>
            <Card title="HTML">
              <textarea
                style={textareaStyle}
                disabled
                value={
                  editorContent
                    ? draftToHtml(
                    convertToRaw(editorContent.getCurrentContent())
                    )
                    : ''
                }
              />
            </Card>
          </Col>
          <Col {...colProps}>
            <Card title="Markdown">
              <textarea
                style={textareaStyle}
                disabled
                value={
                  editorContent
                    ? draftToMarkdown(
                    convertToRaw(editorContent.getCurrentContent())
                    )
                    : ''
                }
              />
            </Card>
          </Col>
          <Col {...colProps}>
            <Card title="JSON">
              <textarea
                style={textareaStyle}
                disabled
                value={
                  editorContent
                    ? JSON.stringify(
                    convertToRaw(editorContent.getCurrentContent())
                    )
                    : ''
                }
              />
            </Card>
          </Col>
        </Row>
      </Page>
    )
  }
}
