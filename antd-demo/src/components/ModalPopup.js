import { useRef, useState, useEffect } from 'react'
import { Form, Input, Button, Radio, Modal, Col } from 'antd'

const ModalPopup = ({ visible, setVisible, workMode, projectId, setWorkMode }) => {
    
    console.log('ModalPopup.js-start')
    const [number, setNumber] = useState(0)
    const [projectInfo, setpPojectInfo] = useState()
    const [form] = Form.useForm()
    const [formLayout, setFormLayout] = useState('horizontal')
    
    // myRef.current.input.focus()   
    

    const testFun = () => {
      console.log('ModalPopup.js-testFun')
      setNumber(number + 1)
      // setVisible(true)
    }


    useEffect(() => {    
        console.log(`projectInfo is ${projectInfo}`)
        if (projectId) {
            setpPojectInfo({})
          }
    }, [projectId])

    useEffect(() => {     
      console.log('ModalPopup.js-useEffect')
        
      

      if (workMode === "CREATE" && projectId) {
        console.log("CREATE 모드에서 projectId값이 들어오면 VIEW모드로 변경하고 렌더링을 다시합니다.")
        setWorkMode("VIEW")
      } 

      setTimeout(() => {
        // if (myRef && myRef.current) {
            // myRef.current.input.focus()            
        // }
        console.log(document.querySelectorAll("input[type=text]"))
        document.querySelectorAll("[type=text]")[0].focus()
        //setNumber(number + 1)
     })
      // console.log(document.querySelectorAll("input[type=text]"))
      // document.querySelectorAll("[type=text]")[0].focus()
    },)   

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
                {workMode} {number}
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
                      {workMode === "VIEW" ? (<span>asdasd</span>) : (<Input placeholder="input placeholder" />)}                        
                    </Form.Item>
                    <Form.Item label="Field B">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item {...buttonItemLayout}>
                        <Button type="primary">Submit</Button>
                    </Form.Item>
                    <Form.Item label="Field C">
                      <Button type="primary" onClick={() => testFun()}>변경</Button>
                    </Form.Item>
                    
                </Form>
            </Modal>
        </>
    )
}

export default ModalPopup
