import React from 'react'
import {Row, Col} from 'antd';
import './index.less'

export default class Header extends React.Component {
    componentWillMount() {
        this.setState({
            userName: '敬哥'
        })
    }

    render() {
        return (
            <div className="header_box">
                <Row className="header_top">
                    <Col span={24}>
                        <span>欢迎，{this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb_title">首页</Col>
                    <Col span={20} className="weather">
                        <span className="weather_date">2018-5-20</span>
                        <span className="weather_detail">晴转多云</span>
                    </Col>
                </Row>
            </div>
        )
    }
}
