import React from 'react';
import '../css/SignContainerStyle.css';


/*
 * LoginWay, SMSLogin ,InfoLogin组件是FormLogin中的子组件
 * 其中SMSLogin是免密登录时输入表单的组件，而InfoLogin是密码登录时的输入表单组件
 * 其切换由父组件FormLogin中 state中的参数 @Param( isPwd ) 控制
 * 而FormLogin中子组件的值都提升到父组件FormLogin中，状态由父组件分发控制
 */
class LoginWay extends React.Component{
    /*
     * 父组件传进四个参数，其中一个函数。
     * tab , tabActive , isPwd(bool),smsclick(func),pwdclick(func)
     */
    constructor(props){
        super(props)
    }

    render() {
        var smswayClsn;
        var pwdwayClsn;
        var flag = this.props.isPwd;
        if(!flag){
            // 表示现在为 免密码登录 (isPwd为false)
            smswayClsn = this.props.tab + this.props.tabActive;
            pwdwayClsn = this.props.tab;
        }else{
            smswayClsn = this.props.tab;
            pwdwayClsn = this.props.tab + this.props.tabActive;
        }
        return(
            <div className="logintabs">
                <div className={smswayClsn} onClick={this.props.smsclick}>免密码登录</div>
                <div className={pwdwayClsn} onClick={this.props.pwdclick}>密码登录</div>
                <div className="isQRswitcher" onClick={this.props.loginswitch}>
                    <img src="qr.png" alt="lost"/>
                </div>
            </div>
        )
    }
}
class SMSLogin extends React.Component{
    constructor(props){
        super(props)
        this.state={
            verifymsg : '获取短信验证码'
        }
    }
    render() {
        return (
            <div className="smsform">
                <div className="smsaccount">
                    <div className="zonepre">
                        <button className="button zoneprebtn">
                            中国 +86
                            <span className="choose">
                            <svg className="Select-arrow" fill="currentColor" viewBox="0 0 24 24"
                                 width="24" height="24"><path
                                d="M12 16.183l2.716-2.966a.757.757 0 0 1 1.064.001.738.738 0 0 1 0 1.052l-3.247 3.512a.758.758 0 0 1-1.064 0L8.22 14.27a.738.738 0 0 1 0-1.052.758.758 0 0 1 1.063 0L12 16.183zm0-9.365L9.284 9.782a.758.758 0 0 1-1.064 0 .738.738 0 0 1 0-1.052l3.248-3.512a.758.758 0 0 1 1.065 0L15.78 8.73a.738.738 0 0 1 0 1.052.757.757 0 0 1-1.063.001L12 6.818z"
                                fillRule="evenodd"></path></svg>
                        </span>
                        </button>
                    </div>
                    <span className="separator"></span>
                    <div className="inputcontainer">
                        <div className="inputwrapper">
                            <input type="text" placeholder="手机号"/>
                        </div>
                    </div>
                </div>
                <div className="smspassword">
                    <div className="verify-message-input-container">
                        <input type="text" placeholder="输入 6 位短信验证码"/>
                    </div>
                    <div className="verifymessage">{this.state.verifymsg}</div>
                </div>
                <div className="optionalverify">
                    <button>接受语音验证码</button>
                </div>
            </div>
        )
    }
}
class InfoLogin extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="smsform">
                <div className="smsaccount">

                    <div className="inputcontainer">
                        <div className="inputwrapper">
                            <input type="text" placeholder="手机号或邮箱"/>
                        </div>
                    </div>
                </div>
                <div className="smspassword">
                    <div className="verify-message-input-container">
                        <input type="text" placeholder="密码"/>
                    </div>
                </div>
                <div className="optionalverify">
                    <button>忘记密码？</button>
                </div>
            </div>
        )
    }
}


/*
 *  右上角切换账号登录 / 扫码登录
 *  FormLogin为账号密码登录
 *  ScanLogin为扫码登录
 *  两者切换由父组件 SignContainer 的state中的 @Param(isQR) 来控制
 */
class FormLogin extends React.Component{
    constructor(props){
        super(props);
        this.state={
            tab:"logintab ",
            tabActive:"logintab-active",
            isPwd: false,
        };
        this.smsActiveHandler = this.smsActiveHandler.bind(this);
        this.pwdActiveHandler = this.pwdActiveHandler.bind(this);
    }
    smsActiveHandler(){
        this.setState({isPwd : false})
    }
    pwdActiveHandler(){
        this.setState({isPwd : true})
    }

    render() {
        let logincomp;
        let flag = this.state.isPwd;
        if(!flag){
            logincomp = <SMSLogin/>
        }else{
            logincomp = <InfoLogin/>
        }
        return (
            <form className="form-login">
                <LoginWay loginswitch={this.props.loginswitch} tab={this.state.tab} tabActive={this.state.tabActive}
                          isPwd={this.state.isPwd} smsclick={this.smsActiveHandler} pwdclick={this.pwdActiveHandler}/>
                {logincomp}
                <button className="reg-or-login-btn">注册/登录</button>
                <div className="login-tip">
                    <div>
                        <p>未注册手机验证后自动登录</p>
                        <p>注册即代表同意《知乎协议》《隐私保护指引》</p>
                    </div>
                    <div>
                        <button >注册机构号</button>
                    </div>
                </div>
            </form>
        )
    }
}
class ScanLogin extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div className="QRcontainer">
                <div className="isQRswitcher" onClick={this.props.loginswitch}>
                    <img src="mobile.png" alt="lost"/>
                </div>
                <div className="QRtitle">扫码登录</div>
                <div className="QRcontent">
                    <div className="QRimg">
                        <img src="qrimage.png" alt="lost" style={{width:150+'px',height:150+'px'}}/>
                    </div>
                    <p>打开 <span>知乎 App</span></p>
                    <p>在「我的」页面右上角打开扫一扫</p>
                </div>
            </div>
        )
    }
}



class SignContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isQR: false
        }
        this.loginSwitcherHandler = this.loginSwitcherHandler.bind(this);
    }
    loginSwitcherHandler(){
        let re = !this.state.isQR;
        this.setState({isQR: re})
    }
    render(){
        let flag = this.state.isQR;
        let LoginSwitcher;
        if(!flag){
            LoginSwitcher = <FormLogin loginswitch={this.loginSwitcherHandler}/>
        }else{
            LoginSwitcher = <ScanLogin loginswitch={this.loginSwitcherHandler}/>
        }
        return (
                <div className="sign-container card">
                    <div className="sign-content-inner">
                        {LoginSwitcher}
                    </div>
                </div>

        )
    }
}

export default SignContainer;