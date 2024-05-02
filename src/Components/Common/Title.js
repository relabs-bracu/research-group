import { Button, ConfigProvider } from 'antd';
import React from 'react';

const CustomTitle = () => (
    <ConfigProvider
        theme={{
            token: {
                colorPrimary: "red"
            }
        }}
    >
        <Button />
    </ConfigProvider>
);

export default CustomTitle;