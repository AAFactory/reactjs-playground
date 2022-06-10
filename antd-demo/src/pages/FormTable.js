import { Space, Table, Tag, Input, Button, Select, Form } from 'antd'
import React, { useEffect, useState } from 'react'
import { log } from '../modules/utils'
const { Option } = Select
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tag: 'nice',
        fruitKey: '2',
        tag_1: 'Hello!!',
        fruit_1: '2',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tag: 'loser',
        fruitKey: '1',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tag: 'cool',
        fruitKey: '1',
    },
]

const FormTable = () => {
    log('FormTable.js', 'start', 0)
    const [dataSource, setDataSource] = useState(data)
    const [formInstance] = Form.useForm()
    const fruits = [
        { key: '1', value: 'apple' },
        { key: '2', value: 'banana' },
    ]
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Favorite Fruit',
            dataIndex: 'fruitKey',
            key: 'fruitKey',
            render: (text, columnData) => (
                <Form.Item name={`fruit_${columnData.key}`}>
                    <Select
                        style={{
                            width: 120,
                        }}
                        onChange={(e) => {
                            // setDataSource(
                            //     dataSource.map((data) => {
                            //         if (data.key === columnData.key)
                            //             data['fruitKey'] = e
                            //         return data
                            //     })
                            // )
                        }}
                    >
                        {fruits.map((fruit) => (
                            <Option key={fruit.key} value={fruit.fruitKey}>
                                {fruit.value}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
            ),
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tag',
            key: 'tag',
            dataIndex: 'tag',
            render: (text, columnData) => (
                <Form.Item name={`tag_${columnData.key}`}>
                    <Input
                        placeholder="Tag"
                        // value={text}
                        onChange={(e) => {
                            // setDataSource(
                            //     dataSource.map((data) => {
                            //         if (data.key === columnData.key)
                            //             data['tag'] = e.target.value
                            //         return data
                            //     })
                            // )
                        }}
                    />
                </Form.Item>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ]

    useEffect(() => {
        formInstance.setFieldsValue(dataSource[0])
    }, [dataSource])

    return (
        <>
            <Button
                onClick={() => {
                    console.log('dataSource', dataSource)
                    console.log('formInstance', formInstance.getFieldValue())
                }}
            >
                Print Datasource
            </Button>
            <Button
                onClick={() => {
                    setDataSource([
                        ...dataSource,
                        { key: `temp_${dataSource.length}` },
                    ])
                }}
            >
                ADD
            </Button>
            <Form form={formInstance}>
                <Table columns={columns} dataSource={dataSource} />
            </Form>
        </>
    )
}

export default FormTable
