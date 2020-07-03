import React, { PureComponent } from 'react';
import {WriterItem, WriterWrapper} from '../style';
import {DownloadOutlined,  SyncOutlined, SmileOutlined } from '@ant-design/icons';
import {connect} from 'react-redux';

class Writer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {list} = this.props;
        return (
            <WriterWrapper>
                <div className='title'>
                    <span>recommend authors</span>
                    <span className='right'>换一批</span>
                    <SyncOutlined spin className='right'/>
                </div>
                <div>
                    {
                        list.map((item) => {
                            return (
                                <WriterItem key={item.get('id')}>
                                    <img src={item.get('avatar')} alt={item.get('nickname')} />
                                    <div className='info'>
                                        <span>{item.get('nickname')}</span>
                                        <span className='desc'>
                                            {item.get('desc')}
                                        </span>
                                    </div>
                                    <span className='right'>
                                        <DownloadOutlined />
                                        关注
                                    </span>
                                </WriterItem>
                            )
                        })
                    }
                </div>
                <div className='viewAll'>
                    <span>查看全部</span>
                    <SmileOutlined />
                </div>

            </WriterWrapper>
        );

    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'writerList'])
})

export default connect(mapState, null)(Writer);
