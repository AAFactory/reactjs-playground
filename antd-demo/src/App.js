import logo from './logo.svg'
import './App.css'
import { useRef, useState, useEffect } from 'react'
import { Form, Input, Button, Radio, Modal } from 'antd'
import ModalPopup from './components/ModalPopup'

function App() {
  console.log("Render-App")
    const [visible, setVisible] = useState(false)
    const [number, setNumber] = useState(0)
    const [form] = Form.useForm()
    const [formLayout, setFormLayout] = useState('horizontal')
    const myRef = useRef();


    const testFun = () => {
      console.log('call testFun')
      setNumber(number + 1)
      setVisible(true)
    }

    useEffect(() => {
      // if (myRef && myRef.current) {
      //   const { input } = myRef.current
      //   input.focus()
      // }
      setTimeout(() => {
        // if (myRef && myRef.current) {
            // myRef.current.input.focus()            
        // }
        console.log(document.querySelectorAll("input[type=text]"))
        document.querySelectorAll("[type=text]")[0].focus()
     })
    })   

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
        <div className="App">
          {number}
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
                        <Radio.Button value="vertical">Vertical</Radio.Button>
                        <Radio.Button value="inline">Inline</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Field A">
                    {/* <Input placeholder="input placeholder" ref={myRef} /> */}
                </Form.Item>
                <Form.Item label="Field B">
                    {/* <Input placeholder="input placeholder" /> */}
                </Form.Item>                
            </Form>
            <Button type="primary" onClick={() => setVisible(true)}>
                Open Modal of 1000px width
            </Button>
            <Button type="primary" onClick={() => testFun()}>
                변경
            </Button>
            <ModalPopup visible={visible} setVisible={setVisible}></ModalPopup>
            
        </div>
    )
}

export default App
