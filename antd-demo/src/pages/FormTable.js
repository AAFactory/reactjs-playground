import moment from 'moment'
import {
    Space,
    Table,
    Tag,
    Input,
    Button,
    Select,
    Form,
    DatePicker,
} from 'antd'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { log } from '../modules/utils'
const { Option } = Select
const dateFormat = 'YYYY-MM-DD'

const FormTable = () => {
    log('FormTable.js', 'start', 0)
    const [dataSource, setDataSource] = useState(data)
    const [formInstance] = Form.useForm()
    const [selectedRowKeys, setSelectedRowKeys] = useState([])
    const tempSequence = useRef(0)
    const columns = useMemo(
        () => [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                render: (name, columnData) => (
                    <Form.Item
                        name={`name_${columnData.key}`}
                        style={{ marginBottom: '0px' }}
                    >
                        <Input placeholder="Please input name" />
                    </Form.Item>
                ),
            },
            {
                title: 'Favorite Fruit',
                dataIndex: 'fruitCode',
                key: 'fruitCode',
                render: (fruitCode, columnData) => (
                    <Form.Item
                        name={`fruitCode_${columnData.key}`}
                        style={{ marginBottom: '0px' }}
                    >
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
                key: 'address',
                dataIndex: 'address',
                render: (address, columnData) => (
                    <Form.Item
                        name={`address_${columnData.key}`}
                        style={{ marginBottom: '0px' }}
                    >
                        <Input
                            placeholder="Please input address"
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
                title: 'Birthday',
                key: 'birthday',
                dataIndex: 'birthday',
                render: (birthday, columnData) => {
                    console.log(columnData.key, birthday)
                    return (
                        <Form.Item
                            name={`birthday_${columnData.key}`}
                            style={{ marginBottom: '0px' }}
                        >
                            <DatePicker
                                format={dateFormat}
                                defaultValue={
                                    birthday
                                        ? moment(birthday, dateFormat)
                                        : moment()
                                }
                                // onChange={(date, dateString) => {
                                //     console.log(dateString)
                                //     dataSource.find(
                                //         (item) => (item.key = columnData.key)
                                //     )['birthday'] = dateString
                                // }}
                            />
                        </Form.Item>
                    )
                },
            },
        ],
        [dataSource]
    )

    useEffect(() => {
        dataSource.map((rowData) => {
            rowData[`address_${rowData.key}`] = rowData.address
            rowData[`fruitCode_${rowData.key}`] = rowData.fruitCode
            rowData[`name_${rowData.key}`] = rowData.name
            // rowData[`birthday_${rowData.key}`] = rowData.birthday
            formInstance.setFieldsValue(rowData)
        })
    }, [dataSource])

    const transFormData = () => {
        const values = formInstance.getFieldValue()
        return dataSource.map((origin) => {
            const transform = {
                key: origin.key,
                address: values[`address_${origin.key}`],
                fruitCode: values[`fruitCode_${origin.key}`],
                name: values[`name_${origin.key}`],
                birthday: typeof values[`birthday_${origin.key}`] === 'object' ? values[`birthday_${origin.key}`].format(dateFormat): origin.birthday,
            }
            return transform
        })
    }

    return (
        <>
            <div
                style={{
                    marginBottom: 16,
                }}
            >
                <Button
                    onClick={() => {
                        console.log('dataSource', dataSource)
                        console.log(
                            'formInstance',
                            formInstance.getFieldValue()
                        )
                        log('FormTable.js', 'transform-start', 1)
                        const result = transFormData()
                        log('FormTable.js', 'transform-end', 1)
                        console.log('result', result)
                    }}
                >
                    Print Datasource
                </Button>
                <Button
                    onClick={() => {
                        tempSequence.current = tempSequence.current + 1
                        setDataSource([
                            ...transFormData(),
                            {
                                key: `temp_${tempSequence.current}`,
                                fruitCode: '1',
                            },
                        ])
                    }}
                >
                    ADD
                </Button>
                <Button
                    onClick={() => {
                        console.log(selectedRowKeys)
                        setDataSource(
                            transFormData().filter(
                                (item) =>
                                    !selectedRowKeys.some(
                                        (key) => key === item.key
                                    )
                            )
                        )
                    }}
                >
                    DELETE
                </Button>
            </div>
            <Form form={formInstance}>
                <Table
                    columns={columns}
                    dataSource={dataSource}
                    rowSelection={{
                        selectedRowKeys,
                        onChange: (newSelectedRowKeys) =>
                            setSelectedRowKeys(newSelectedRowKeys),
                    }}
                />
            </Form>
        </>
    )
}

export default FormTable

const data = [
    {
        key: '1',
        name: 'John Brown',
        address: 'New York No. 1 Lake Park',
        fruitCode: '1',
        birthday: '2018-05-10',
    },
    {
        key: '2',
        name: 'Jim Green',
        address: 'London No. 1 Lake Park',
        fruitCode: '1',
        birthday: '2018-10-01',
    },
    {
        key: '3',
        name: 'Joe Black',
        address: 'Sidney No. 1 Lake Park',
        fruitCode: '2',
        birthday: '2018-11-06',
    },
]

const fruits = [
    { key: '1', value: 'apple' },
    { key: '2', value: 'banana' },
]
