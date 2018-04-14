import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import './index.css';
import Container from '@component/container/container';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Container />, document.getElementById('root'));
registerServiceWorker();
