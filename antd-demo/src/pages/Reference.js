import React from 'react'
import { Image } from 'antd'
import octocat from "../github-octocat.png"

const Reference = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <Image
                width="50%"
                src={octocat}
            />
        </div>
    )
}

export default Reference
