import React, { useEffect } from 'react';
import { Button } from 'antd';
import { log } from '../modules/utils';

const ButtonSample = ({match, setTabKey}) => {
    log('ButtonSample.js', 'start', 0)
    log('ButtonSample.js', match.params, 1)
    useEffect(() => {
        // setTabKey(match.params.)
    })
    return (
        <>
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>
            <Button type="dashed">Dashed Button</Button>
            <br />
            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>
        </>
    )
}
export default ButtonSample
