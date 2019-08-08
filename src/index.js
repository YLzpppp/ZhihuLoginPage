import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import SignHeader from './components/SignHeader.js';
import SignContainer from './components/SignContainer.js';
import LoginSocial from './components/LoginSocial.js';
import Download from './components/Download.js';

import * as serviceWorker from './serviceWorker';

class App extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <div className={'App-main'}>
                    <div className={'SignHomepage'}>
                        <div className={'SignHomepage-content'}>
                            <SignHeader/>
                            <SignContainer/>
                            <LoginSocial/>
                            <Download/>
                        </div>
                        <div className={'SignHomepage-footer'}>
                            <div className="Zhihulinks">
                                <a href="#" target="_blank">
                                    知乎专栏
                                </a>
                                <a href="#" target="_blank">
                                    圆桌
                                </a>
                                <a href="#" target="_blank">
                                    发现
                                </a>
                                <a href="#" target="_blank">
                                    移动应用
                                </a>
                                <a href="#" target="_blank">
                                    联系我们
                                </a>
                                <a href="#" target="_blank">
                                    来知乎工作
                                </a>
                                <a href="#" target="_blank">
                                    注册机构号
                                </a>
                            </div>
                            <div className="Zhihurights">
                                <span>
                                    © 2019 知乎
                                </span>
                                <a href="#">
                                    京 ICP 证 110745 号
                                </a>
                                <a href="#">
                                    <img src="police.png" alt="lost"/>
                                    京公网安备 11010802010035 号
                                </a>
                                <a href="#">
                                    出版物经营许可证
                                </a>
                            </div>
                            <div className="Zhihureports">
                                <a href="#">
                                    侵权举报
                                </a>
                                <a href="#">
                                    网上有害信息举报专区
                                </a>
                                <a href="#">
                                    儿童色情信息举报专区
                                </a>
                                <span>
                                    违法和不良信息举报：010-82716601
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'CornerButtons'}>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));


serviceWorker.unregister();
