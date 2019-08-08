import React from 'react';
import '../css/LoginSocialStyle.css';

class LoginSocial extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="card loginsocial">
                <span className="tip">社交账号登录</span>
                <span className="socialogin-btn-group">
                    <div className="socialogin-btn">
                        <svg viewBox="0 0 20 19" className="Icon Login-socialIcon Icon--wechat"
                             style={{fill:'#60c84d',height:18+'px',width:18+'px'}} width="18" height="18"
                             aria-hidden="true"><title></title><g>
                            <path fillRule="evenodd" d="M.224 18.667s4.24-1.825 4.788-2.056C13.03 20.14 20 14.715 20 8.9 20 3.984 15.523 0 10 0S0 3.984 0 8.898c0 1.86.64 3.585 1.737 5.013-.274.834-1.513 4.757-1.513 4.757zM6.167 8.96c.69 0 1.25-.57 1.25-1.27 0-.703-.56-1.272-1.25-1.272s-1.25.57-1.25 1.27c0 .703.56 1.272 1.25 1.272zm7.583 0c.69 0 1.25-.57 1.25-1.27 0-.703-.56-1.272-1.25-1.272s-1.25.57-1.25 1.27c0 .703.56 1.272 1.25 1.272z">
                            </path></g>
                        </svg>
                        微信
                    </div>
                    <div className="socialogin-btn ml">
                        <svg width="18" height="18" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg"
                             className="Icon Login-socialIcon Icon--qq" style={{fill:'#50c8fd',height:18+'px',width:18+'px'}}
                             aria-hidden="true"><title></title>
                            <g>
                                <title>QQ</title>
                                <path d="M9.003 0c-2.265 0-6.29 1.364-6.29 7.325V8.52S.55 12.96.55 15.474c0 .665.17 1.025.28 1.025.115 0 .903-.485 1.75-2.073 0 0-.18 2.197 1.903 3.967 0 0-1.77.495-1.77 1.182 0 .686 4.078.43 6.29 0 2.24.425 6.287.687 6.287 0 0-.688-1.768-1.182-1.768-1.182 2.085-1.77 1.905-3.967 1.905-3.967.845 1.588 1.634 2.072 1.746 2.072.11 0 .283-.36.283-1.026 0-2.514-2.166-6.954-2.166-6.954V7.325C15.29 1.365 11.268 0 9.003 0z"
                                fillRule="evenodd">
                                </path>
                            </g>
                        </svg>
                        QQ
                    </div>
                    <div className="socialogin-btn ml">
                        <svg viewBox="0 0 22 18" className="Icon Login-socialIcon Icon--weibo"
                             style={{fill:'#fb6622',height:18+'px',width:18+'px'}} width="18" height="18"
                             aria-hidden="true">
                            <title></title>
                            <g>
                                <g fillRule="evenodd">
                                <path d="M14.518.06s-.87.644.03 1.71c0 0 6.287-1.19 5.69 6.33 0 0 1.05 1.13 1.674-.31 0 .002 1.44-8.584-7.394-7.73zM4.883 13.17s.038 2.584 3.326 2.584c3.657 0 3.683-2.98 3.683-2.98S12.1 9.67 8.687 9.61c-3.863-.07-3.804 3.56-3.804 3.56zM7.41 14.21c-.668 0-1.214-.447-1.214-.998 0-.55.543-.998 1.215-.998.67 0 1.213.447 1.213.998 0 .55-.54.998-1.212.998z"></path>     <path
                                d="M4.317 4.52C-2.603 10.353.873 14.85.873 14.85c.57 1.01 3.382 3.1 8.596 3.1 5.21 0 9.314-3.628 9.314-6.44 0-2.813-2.918-2.714-2.918-2.714 1.04-1.554.19-2.65.19-2.65-1.684-2.118-5.404-.16-5.407-.158.772-1.717.11-2.797.11-2.797C8.932.66 4.317 4.52 4.317 4.52zm10.448 7.79s-.467 4.16-6.447 4.16c-5.745 0-5.82-3.322-5.842-3.712 0 0-.073-4.423 6.58-4.654 5.94-.204 5.71 4.207 5.71 4.207zM18.65 7.045s1.018-4.37-3.864-3.818c0 0-.628.58.09 1.346 0 0 2.602-.58 2.397 2.598 0 0 .715.885 1.376-.125z">
                                </path>
                                </g>
                            </g>
                        </svg>
                        微博
                    </div>
                </span>
            </div>
        )
    }
}

export default LoginSocial;