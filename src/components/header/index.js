import React from 'react'
import {Row, Col} from 'antd';
import './index.less'
import moment from "moment";
import Api from '../../axios'

export default class Header extends React.Component {
    componentWillMount() {
        this.setState({
            userName: '敬哥'
        })

        setInterval(() => {
            let systime = moment().format('YYYY-MM-DD HH:mm:ss');
            this.setState({
                systime
            })
        }, 1000);

        this.getWaetherData();
    }

    getWaetherData() {
        let city = '北京';
        Api.jonsp({
            url: 'http://api.map.baidu.com/telematics/v3/weather?location=' + encodeURIComponent(city) + '&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res) => {
            let data = res.results[0].weather_data[0];
            this.setState({
                weather_icon: data.dayPictureUrl,
                weather_temperature: data.temperature
            })
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
                        <span className="weather_date">{this.state.systime}</span>
                        <img className="weather_icon" src={this.state.weather_icon}/>
                        <span className="weather_temperature">{this.state.weather_temperature}</span>
                    </Col>
                </Row>
            </div>
        )
    }
}
