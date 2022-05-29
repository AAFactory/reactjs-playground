import logo from './logo.svg'
import './App.css'
import { useRef, useState, useEffect } from 'react'
import { Form, Input, Button, Radio, Modal, Space, Tag, Divider } from 'antd'
import ModalPopup from './components/ModalPopup'

function App() {
  console.log("App.js-start")
    const [visible, setVisible] = useState(false)
    const [number, setNumber] = useState(0)
    const [workMode, setWorkMode] = useState("CREATE")
    const [projectId, setProjectId] = useState()
    const [form] = Form.useForm()
    const [formLayout, setFormLayout] = useState('horizontal')
    const myRef = useRef();

    const testFun = () => {
      console.log('call testFun')
      setNumber(number + 1)
      // setVisible(true)
    }

    const openPopup = (projectId) => {
      console.log(projectId)
      setProjectId(projectId)
      setVisible(true)
      setWorkMode("CREATE")
    }

    useEffect(() => {
      console.log('App.js-useEffect')
    })   
    
    return (
        <div className="App">
            <Divider />
            <Space>
                <Tag color="magenta">{number}</Tag>
                <Button type="primary" onClick={() => testFun()}>
                    변경
                </Button>
            </Space>
            <Divider />
            <Space>
                <Button type="primary" onClick={() => openPopup('12312323')}>
                    열람팝업
                </Button>
                <Button type="primary" onClick={() => openPopup()}>
                    수정팝업
                </Button>
            </Space>
                       
            <ModalPopup visible={visible} setVisible={setVisible}  workMode={workMode} projectId={projectId} setWorkMode={setWorkMode}></ModalPopup>
        </div>
    )
}

export default App
