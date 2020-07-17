import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <>
                <footer className="footer">
                    <div className="footer_content container">
                        <div className="footer_top row">
                            <ul className="col  footer__item">
                                <li className="fotter__list-item">
                                    <a className="footer__text-bold" href="">
                                        Thành viên:
                                    </a>
                                </li>
                                <li className="fotter__list-item">
                                    <a className="footer__text-bold" href="">
                                        Nguyễn Vinh Hải
                                </a>
                                </li>
                                <li className="fotter__list-item">
                                    <a className="text-normal" href="">
                                        Phạm Văn Minh Nhựt
                              </a>
                                </li>
                                <li className="fotter__list-item">
                                    <a className="text-normal" href="">
                                        Nguyễn Chu Quốc Ngữ
                                  </a>
                                </li>
                            </ul>
                            <ul className="col  footer__item">
                                <li className="fotter__list-item">
                                    <a className="footer__text-bold" href="">
                                        Hỗ trợ
                                        </a>
                                </li>
                                <li className="fotter__list-item">
                                    <a className="footer__text-bold" href="">
                                        Anh Phạm Tấn Phúc
                                            </a>
                                </li>
                                <li className="fotter__list-item">
                                    <a className="text-normal" href="">
                                        Công ty GCalls
                                                </a>
                                </li>
                            </ul>
                            <ul className="col  footer__item">
                                <li className="fotter__list-item">
                                    <a className="footer__text-bold" href="">
                                        Liên hệ
                                                          </a>
                                </li>
                                <li className="fotter__list-item">
                                    <a className="text-normal" href="">
                                        GCovicTeam@gmail.com
                                    </a>
                                </li>
                            </ul>

                        </div>
                        <div className="footer_bot row">
                            <div className=" footer__bot--left col-md-6 col-sm-12 ">
                                <img className="footer_img" src="./gcallupdate.png" alt="" />
                                <span className="Copyright">TeamGcalls©2020 gmail.Intern</span>
                            </div>
                            <div className=" footer__bot--right col-md-6 col-sm-12 ">
                                
                                    <h6>HOTLINE &nbsp; &nbsp;
                                        <a href="https://callgcovid.tk" target="_blank">
                                            034.235.0466
                                            </a>
                                            </h6>
                            </div>

                        </div>
                    </div>
                </footer>
            </>
        )
    }
}
