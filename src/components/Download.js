import React from 'react';
import '../css/DownloadStyle.css';

class Download extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return(
            <button className="card idownload">
                <div>
                    <svg width="20" height="20" fill="currentColor"><g fill="none" fillRule="evenodd"><path fill="#0084FF" d="M15.234 0C18.125 0 20 1.875 20 4.766v10.468C20 18.125 18.125 20 15.234 20H4.766C1.875 20 0 18.125 0 15.234V4.766C0 1.875 1.875 0 4.766 0h10.468z"></path><path d="M0 0h20v20H0z"></path><path fill="#FFF" d="M10.313 10.352c0-.012-.004-1.036-.328-1.055h-2.26a48.42 48.42 0 0 0 .095-3.164h2.21c0-.003.084-.982-.37-.977H5.837c.15-.563.34-1.15.566-1.758 0 0-1.039 0-1.393.937-.146.386-.57 1.87-1.325 3.388.254-.028 1.095-.05 1.59-.963.091-.255.109-.289.222-.627h1.246c0 .452-.051 2.897-.072 3.164H4.414c-.507.019-.672 1.043-.672 1.055h2.832c-.19 2.15-1.209 3.972-3.058 5.413.884.253 1.766-.04 2.202-.43 0 0 .992-.906 1.536-3.004l2.33 2.817s.342-1.166-.053-1.734c-.328-.387-1.212-1.434-1.589-1.814l-.631.504a7.686 7.686 0 0 0 .34-1.752h2.662zM10.898 5v9.441h1.015l.334 1.145 1.82-1.144h2.144V5h-5.313zm4.258 8.398h-1.214l-1.212.782-.22-.782h-.518V6.016h3.164v7.382z"></path></g></svg>
                    下载知乎 App
                </div>
            </button>
        )
    }
}
export default Download;