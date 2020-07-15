import React, { Component } from 'react'
import { Doughnut, Bar } from 'react-chartjs-2';

import "./Styles/main.scss"

import { vietnamCovid, researchData, researchDataText } from './Api/fetchData'
import Document from './doccument/Document';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ishaveData: false,
            isShowDoc: false
        }
        this.onClick = this.onClick.bind(this);
        this.vietnamCovid = {}
        this.barData = {
            labels: ['Hà Nội', 'Hồ Chí Minh', 'Thái Bình', 'Bạc Liêu', 'Vĩnh Phúc', 'Thanh Hóa', 'Ninh Bình'],
            datasets: [
                {
                    label: 'Các tỉnh thành có người nhiễm Covid',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [121, 62, 30, 21, 19, 17, 13]
                }
            ]
        };

        this.ques1 = "Câu hỏi 1"
        this.data1 = {
            labels: [
                'Red',
                'Green',
                'Yellow'
            ],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: [
                    '#cc6278',
                    '#3e7aa3',
                    '#ccaa58'
                ],
                hoverBackgroundColor: [
                    '#cc6278',
                    '#3e7aa3',
                    '#ccaa58'
                ]
            }]
        };
        this.ques2 = "Câu hỏi 2"
        this.data2 = {
            labels: [
                'Red',
                'Green',
                'Yellow'
            ],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: [
                    '#cc6278',
                    '#3e7aa3',
                    '#ccaa58'
                ],
                hoverBackgroundColor: [
                    '#cc6278',
                    '#3e7aa3',
                    '#ccaa58'
                ]
            }]
        };
        this.ques3 = "Câu hỏi 3"
        this.data3 = {
            labels: [
                'Red',
                'Green',
                'Yellow'
            ],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: [
                    '#cc6278',
                    '#3e7aa3',
                    '#ccaa58'
                ],
                hoverBackgroundColor: [
                    '#cc6278',
                    '#3e7aa3',
                    '#ccaa58'
                ]
            }]
        };
        this.table = [
            {
                "content": "content",
                "yesPercent": 21,
                "noPercent": 79,
                "total": 100
            },
            {
                "content": "content 2",
                "yesPercent": 79,
                "noPercent": 21,
                "total": 100
            },
            {
                "content": "content 3",
                "yesPercent": 21,
                "noPercent": 79,
                "total": 100
            },
            {
                "content": "content 4",
                "yesPercent": 21,
                "noPercent": 79,
                "total": 100
            }
        ]
    }
    onClick = () => { this.setState({ isShowDoc: !this.state.isShowDoc }) }

    async componentDidMount() {
        await vietnamCovid()
            .then(res => {
                this.vietnamCovid = res.data[res.data.length - 1]
            })
            .catch(err => console.log(err))
        await researchData()
            .then(res => {
                this.table = res.data
            })
            .catch(err => console.log(err))
        await researchDataText()
            .then(res => {
                this.ques1 = res.data[1].tag
                this.data1.labels = res.data[1].label
                this.data1.datasets.data = res.data[1].data

                this.ques2 = res.data[2].tag
                this.data2.labels = res.data[2].label
                this.data2.datasets.data = res.data[2].data

                this.ques3 = res.data[0].tag
                this.data3.labels = res.data[0].label
                this.data3.datasets.data = res.data[0].data
            })
            .catch(err => console.log(err))
        this.setState({ ishaveData: true })
    }
    render() {
        return (
            <div className="row MyApp">
                {/* tiêu đề to bự */}
                <div className="col-12">
                    <div className="row">
                        <div className="col-5 ">
                            <div className="row">
                                <div className="col-12 d-flex align-items-center p-5" >
                                    <i className="p-2 fab fa-searchengin fa-3x"></i>
                                    <h2 >KHẢO SÁT TÌNH TÌNH HÌNH COVID 19</h2>
                                </div>
                                <div className="col-12 d-flex justify-content-end" >
                                    <span className=".">*cập nhật lúc : {this.vietnamCovid.Date}</span>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="row rounded-lg m-2 btn-bg p-2">
                                            <div className="col-3 responsive-font-sizes d-flex align-items-center">
                                                <i className="fas fa-hospital-alt fa-2x ic-confirmed"></i>
                                            </div>
                                            <div className="col-9 ">
                                                <div className="row">
                                                    <div className="col-12 d-flex text_confirmed">
                                                        SỐ CA NHIỄM
                                                        </div>
                                                    <div className="col-12">
                                                        {this.vietnamCovid.Confirmed}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="row rounded-lg m-2 btn-bg p-2">
                                            <div className="col-3 responsive-font-sizes d-flex align-items-center">
                                                <i className="fas fa-dizzy fa-2x ic-deaths"></i>
                                            </div>
                                            <div className="col-9 ">
                                                <div className="row">
                                                    <div className="col-12 text_deaths">
                                                        TỬ VONG
                                                        </div>
                                                    <div className="col-12">
                                                        {this.vietnamCovid.Deaths}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="row rounded-lg m-2 btn-bg p-2">
                                            <div className="col-3 responsive-font-sizes d-flex align-items-center">
                                                <i className="fas fa-directions fa-2x ic-recovered"></i>
                                            </div>
                                            <div className="col-9 ">
                                                <div className="row">
                                                    <div className="col-12 text_recovered">
                                                        KHỎI
                                                    </div>
                                                    <div className="col-12">
                                                        {this.vietnamCovid.Recovered}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="row rounded-lg m-2 btn-bg p-2">
                                            <div className="col-3 responsive-font-sizes d-flex align-items-center">
                                                <i className="fas fa-check-double fa-2x ic-active"></i>
                                            </div>
                                            <div className="col-9 ">
                                                <div className="row">
                                                    <div className="col-12 text_active">
                                                        ĐIỀU TRỊ
                                                    </div>
                                                    <div className="col-12">
                                                        {this.vietnamCovid.Active}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 d-flex justify-content-center text-center mt-5" >
                                    Thông tin khảo sát cập nhật liên tục, tích hợp mọi nơi, giúp bạn chủ động hơn với Covid
                                </div>
                            </div>
                        </div>
                        <div className="col-7 ">
                            <div className="mt-5 col-12 text-center layer-bg rounded-lg d-flex justify-content-center align-items-center">
                                <Bar
                                    data={this.barData}
                                    width={100}
                                    height={300}
                                    options={{
                                        maintainAspectRatio: false
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* biểu đồ chart */}
                <div className="col-12 ">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <h4 className="layer-bg p-3 m-4 rounded-btn text-title">BIỂU ĐỒ KHẢO SÁT COVID-19 TRÊN TOÀN QUỐC</h4>
                        </div>
                        <div className="col-12 " >
                            <div className="row">
                                <div className="col-4 " >
                                    <div className="row">
                                        <div className="col-12 d-flex justify-content-center">
                                            <Doughnut data={this.data1} />
                                        </div>
                                        <div className="col-12 text-center font-italic text-uppercase mt-2">{this.ques1}</div>
                                    </div>
                                </div>
                                <div className="col-4 " >
                                    <div className="row">
                                        <div className="col-12 d-flex justify-content-center">
                                            <Doughnut data={this.data2} />
                                        </div>
                                        <div className="col-12 text-center font-italic text-uppercase mt-2">{this.ques2}</div>
                                    </div>
                                </div>
                                <div className="col-4 " >
                                    <div className="row">
                                        <div className="col-12 d-flex justify-content-center">
                                            <Doughnut data={this.data3} />
                                        </div>
                                        <div className="col-12 text-center font-italic text-uppercase mt-2">{this.ques3}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 divide_" />
                {/* bảng dữ liệu thống kê */}
                <div className="row layer-bg table-responsive rounded-lg pt-3 pb-3 rounded-tb mr-3">
                    <div className="col-12">
                        <h4 className="ml-5 text-title">BẢNG THỐNG KÊ KẾT QUẢ KHẢO SÁT</h4>
                    </div>
                    <table className="col-12 table table-dark table-bordered table-hover p-3">
                        <thead>
                            <tr>
                                <th className="text-center">#</th>
                                <th className="text-center">Câu hỏi khảo sát</th>
                                <th className="text-center">
                                    <span>Có </span>
                                    <i className="fas fa-check-circle ic-recovered"></i>
                                </th>
                                <th className="text-center">
                                    <span>Không </span>
                                    <i className="fas fa-times-circle ic-deaths"></i>
                                </th>
                                <th className="text-center">Kết quả</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.table.map((e, i) => (
                                    <tr key={i} className={e.yesPercent > 50 ? "layer-bg" : ""}>
                                        <th className="text-center">{i + 1}</th>
                                        <td className="text-center">{e.content}</td>
                                        <td className="text-center">{e.yesPercent}%</td>
                                        <td className="text-center">{e.noPercent}%</td>
                                        <td className="text-center">{e.total}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                {/* tích hợp khảo sát */}
                <div className="col-12 divide_" />
                <div className="col-12 " >
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-4 text-center">
                                    <img src="./pic_2.png" className="pic_covid" alt="pic covid 2" />
                                </div>
                                <div className="col-4">
                                    <div className="text-center">
                                        <h4 className="text-title rounded-btn layer-bg p-3 m-2 btn_interg" onClick={this.onClick}>TÍCH HỢP KHẢO SÁT COVID</h4>
                                    </div>
                                </div>
                                <div className="col-4 text-center">
                                    <img src="./pic_1.png" className="pic_covid" alt="pci covid 1" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <p>Tích hợp khảo sát covid của chúng tôi
                            vào website của bạn đơn giản và nhanh chóng chỉ trong vài thao tác cơ bản.
                            </p>
                        </div>
                        {
                            this.state.isShowDoc ? <Document /> : <></>

                        }
                        <div className="col-12 text-center">
                            <h4 className="text-title">HÃY CHUNG TAY CHỐNG ĐẠI DỊCH</h4>
                        </div>
                    </div>
                </div>
                <div className="col-12 divide_" />
                {/* thông tin thêm */}
                <div className="row layer-bg pt-2 container-fluid">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4 d-flex justify-content-center align-items-center">
                                <img src="./gcalls.jpg" className="pic_covid" alt="logo-gcalls" />
                            </div>
                            <div className="col-8 text-center">
                                <p>Sản phẩm thực tập tại công ty GCALLS</p>
                                <p>Liên hệ:</p>
                                <p>SourceCode:</p>
                                <p>Chính sách: mã nguồn mở</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 text-center">
                        <p>Các thành viên trong team dự án</p>
                        <p>Phạm Văn Minh Nhựt</p>
                        <p>Nguyễn Vĩnh Hải</p>
                        <p>Nguyễn Chu Quốc Ngữ</p>
                    </div>
                </div>
            </div>
        );
    }
}