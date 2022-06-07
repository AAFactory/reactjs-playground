import { Space, Table, Tag, Input, Button, Select } from 'antd'
import React, { useState } from 'react'
import { log } from '../modules/utils'
const { Option } = Select;
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tag: 'nice',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tag: 'loser',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tag: 'cool',
        fruitKey: 1,
        fruitValue: 'apple'
    },
]

const TableSample = () => {
    log('TableSample.js', 'start', 0)
    const [dataSource, setDataSource] = useState(data)
    const fruits = [
      {key: 1, value: 'apple'},
      {key: 2, value: 'banana'}
    ]
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            render: (text, columnData) => (
                <>
                    <Select
                      value={columnData.fruitValue}
                        // defaultValue="lucy"
                        style={{
                            width: 120,
                        }}
                        onChange={(e) => {
                            console.log(e, this)
                        }}
                    >
                        {fruits.map((fruit) => (
                            <Option key={fruit.key}>{fruit.value}</Option>
                        ))}
                    </Select>
                </>
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
                <>
                    <Input
                        placeholder="Tag"
                        value={text}
                        onChange={(e) => {
                            setDataSource(
                                dataSource.map((data) => {
                                    if (data.key === columnData.key)
                                        data['tag'] = e.target.value
                                    return data
                                })
                            )
                        }}
                    />
                </>
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

    return (
        <>
            <Button
                onClick={() => {
                    console.log(dataSource)
                }}
            >
                Print Datasource
            </Button>
            <Table columns={columns} dataSource={dataSource} />
        </>
    )
}

export default TableSample
