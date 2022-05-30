import { useRef, useState, useEffect } from 'react'
import { Form, Input, Button, Radio, Modal, Col } from 'antd'
import { log } from '../modules/utils'

const ModalPopup = ({
    visible,
    setVisible,
    workMode,
    projectId,
    setWorkMode,
}) => {
    const [number, setNumber] = useState(0)
    const [projectInfo, setpPojectInfo] = useState({})
    const [form] = Form.useForm()
    const [formLayout, setFormLayout] = useState('horizontal')
    log('ModalPopup.js', 'start', 0)
    log('ModalPopup.js', `projectInfo is ${JSON.stringify(projectInfo)}`, 1)
    log('ModalPopup.js', `workMode is ${workMode}`, 1)

    useEffect(() => {
        if (projectId) {
            setpPojectInfo({ name: 'aaf-project', fruits: 'Pineappple' })
        } else {
            setpPojectInfo({})
        }
    }, [projectId])

    useEffect(() => {
        const nodes = document.querySelectorAll('input[type=text]')
        if (nodes.length > 0) {
            document.querySelectorAll('[type=text]')[0].focus()
        }
        log('ModalPopup.js', `form is ${form}`, 1)
        // form.setFieldsValue(projectInfo)
    }, [projectInfo])

    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout)
    }

    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 6,
            },
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 14,
            },
        },
    }

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
                {workMode}
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
                    <Form.Item label="Fruits" name="fruits">
                        {workMode === 'VIEW' ? (
                            <span>Apple</span>
                        ) : (
                            <Input placeholder="input placeholder" />
                        )}
                    </Form.Item>
                    <Form.Item label="Beverage" name="Beverage">
                        {workMode === 'VIEW' ? (
                            <span>Coke</span>
                        ) : (
                            <Input placeholder="input placeholder" />
                        )}
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default ModalPopup
