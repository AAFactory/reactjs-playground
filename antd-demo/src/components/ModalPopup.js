import { useRef, useState, useEffect } from 'react'
import { Form, Input, Button, Radio, Modal } from 'antd'

const ModalPopup = ({ visible, setVisible }) => {
    console.log('Render-ModalPopup')
    const [form] = Form.useForm()
    const [formLayout, setFormLayout] = useState('horizontal')
    const myRef = useRef()
    // myRef.current.input.focus()   
    

    useEffect(() => {
      console.log('한번만')
      // console.log(document.querySelectorAll("input[type=text]"))
      // document.querySelectorAll("[type=text]")[0].focus()
    }, [])   

    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout)
    }

    const formItemLayout =
        formLayout === 'horizontal'
            ? {
                  labelCol: {
                      span: 4,
                  },
                  wrapperCol: {
                      span: 14,
                  },
              }
            : null
    const buttonItemLayout =
        formLayout === 'horizontal'
            ? {
                  wrapperCol: {
                      span: 14,
                      offset: 4,
                  },
              }
            : null
    return (
        <>
            <Modal
                title="Modal 1000px width"
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={1000}
            >
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
                <Form
                    {...formItemLayout}
                    layout={formLayout}
                    form={form}
                    initialValues={{ layout: formLayout }}
                    onValuesChange={onFormLayoutChange}
                >
                    <Form.Item label="Form Layout" name="layout">
                        <Radio.Group value={formLayout}>
                            <Radio.Button value="horizontal">
                                Horizontal
                            </Radio.Button>
                            <Radio.Button value="vertical">
                                Vertical
                            </Radio.Button>
                            <Radio.Button value="inline">Inline</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Field A">
                        <Input placeholder="input placeholder" ref={myRef} />
                    </Form.Item>
                    <Form.Item label="Field B">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item {...buttonItemLayout}>
                        <Button type="primary">Submit</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default ModalPopup
