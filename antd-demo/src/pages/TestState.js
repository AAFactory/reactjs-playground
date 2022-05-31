import '../App.css'
import { useRef, useState, useEffect } from 'react'
import {
    Form,
    Input,
    Button,
    Radio,
    Modal,
    Space,
    Divider,
    Row,
    Col,
    Card,
    Tag,
} from 'antd'
import ModalPopup from './ModalPopup'
import { log } from '../modules/utils'

function TestState() {
    const { CheckableTag } = Tag
    const [visible, setVisible] = useState(false)
    const [number, setNumber] = useState(0)
    const [workMode, setWorkMode] = useState('CREATE')
    const [projectId, setProjectId] = useState()
    const [form] = Form.useForm()
    const [formLayout, setFormLayout] = useState('horizontal')
    const myRef = useRef()
    log('TestState.js', 'start', 0)

    const updateNumber = (paramNumber) => {
        setNumber(paramNumber + number)
    }

    const openPopup = (workMode, projectId = null) => {
        setProjectId(projectId)
        setVisible(true)
        setWorkMode(workMode)
    }

    return (
        <div className="App">
            <h1>React Playground</h1>
            <Space
                direction="vertical"
                size="middle"
                style={{ display: 'flex' }}
            >
                <Card style={{ width: '100%' }}>
                    <Tag color="magenta">Current Number: {number}</Tag>
                    <Space>
                        <Button type="primary" onClick={() => updateNumber(1)}>＋</Button>
                        <Button type="primary" onClick={() => updateNumber(-1)}>－</Button>
                    </Space>
                </Card>
                <Card style={{ width: '100%' }}>
                    <Space>
                        <Button
                            type="primary"
                            onClick={() => openPopup('VIEW', 'PJTID00000001')}
                        >
                            열람팝업
                        </Button>
                        <Button
                            type="primary"
                            onClick={() => openPopup('CREATE')}
                        >
                            등록팝업
                        </Button>
                    </Space>
                </Card>
            </Space>
            <ModalPopup
                visible={visible}
                setVisible={setVisible}
                workMode={workMode}
                projectId={projectId}
                setWorkMode={setWorkMode}
            ></ModalPopup>
        </div>
    )
}

export default TestState
