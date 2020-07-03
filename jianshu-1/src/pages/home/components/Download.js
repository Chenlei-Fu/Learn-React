import React, {PureComponent} from "react";
import { DownloadArea } from "../style";
import {RightOutlined } from '@ant-design/icons';

class DownloadApp extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <DownloadArea>
                <img
                    src="http://cdn2.jianshu.io/assets/web/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png"
                    alt="Download index side qrcode"
                />
                <div className="info">
                    <div>
                        <span className="title">下载简书手机App  </span>
                        <RightOutlined />
                    </div>
                    <span className="desc">随时随地发现和创作内容</span>
                </div>
            </DownloadArea>
        );
    }
}

export default DownloadApp;

