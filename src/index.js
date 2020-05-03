import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';

import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

import './assets/css/index.css';

ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <App />
    </ConfigProvider>,
    document.getElementById('root')
);
