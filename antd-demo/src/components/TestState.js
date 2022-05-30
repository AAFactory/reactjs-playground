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

function TestState() {
    console.log('💨💨🚀 TestState.js-start')
    const { CheckableTag } = Tag
    const [visible, setVisible] = useState(false)
    const [number, setNumber] = useState(0)
    const [workMode, setWorkMode] = useState('CREATE')
    const [projectId, setProjectId] = useState()
    const [form] = Form.useForm()
    const [formLayout, setFormLayout] = useState('horizontal')
    const myRef = useRef()

    const testFun = () => {
        console.log('call testFun')
        setNumber(number + 1)
        // setVisible(true)
    }

    const openPopup = (projectId) => {
        console.log(projectId)
        setProjectId(projectId)
        setVisible(true)
        setWorkMode('CREATE')
    }

    useEffect(() => {
        console.log('App.js-useEffect')
    })

    return (
        <div className="App">
            <h1>React Playground</h1>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
              <Card style={{ width: "100%" }}>
                  <Tag color="magenta">Current Number: {number}</Tag>
                  <Button type="primary" onClick={() => testFun()}>
                      변경
                  </Button>
              </Card>
              <Card style={{ width: "100%" }}>
                  <Space>
                      <Button
                          type="primary"
                          onClick={() => openPopup('PJTID00000001')}
                      >
                          열람팝업
                      </Button>
                      <Button type="primary" onClick={() => openPopup()}>
                          수정팝업
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
