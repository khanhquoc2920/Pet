import React from 'react'
import './Dashboard.css'
function Dashboard() {
    return (
        <div className="page-wrapper">

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Dashboard</h4>
                                <div className='featured'>
                                    <div className="featuredItem">
                                        <span className="featuredTitle">Tổng hàng đã bán</span>
                                        <div className="featuredMoneyContainer">
                                            <span className="featuredMoney">9999999</span>
                                            <span className="featureMoneyRate">

                                            </span>
                                        </div>
                                        <span className="featuredSub">
                                            Cập nhật vào tuần trước
                                        </span>
                                    </div>
                                    <div className="featuredItem">
                                        <span className="featuredTitle">Tổng doanh thu</span>
                                        <div className="featuredMoneyContainer">
                                            <span className="featuredMoney">$2000000</span>
                                            <span className="featureMoneyRate">-11.4

                                            </span>
                                        </div>
                                        <span className="featuredSub">
                                            Cập nhật vào tuần trước
                                        </span>
                                    </div>
                                    <div className="featuredItem">
                                        <span className="featuredTitle">Feedback</span>
                                        <div className="featuredMoneyContainer">
                                            <span className="featuredMoney">5592</span>
                                            <span className="featureMoneyRate">

                                            </span>
                                        </div>
                                        <span className="featuredSub">
                                            Cập nhật vào tuần trước
                                        </span>
                                    </div>
                                    <div className="featuredItem">
                                        <span className="featuredTitle">Khách hàng ghé thăm</span>
                                        <div className="featuredMoneyContainer">
                                            <span className="featuredMoney">59852</span>
                                            <span className="featureMoneyRate">

                                            </span>
                                        </div>
                                        <span className="featuredSub">
                                            Cập nhật hôm nay
                                        </span>
                                    </div>
                                </div>
                                <div className='homeWidgets'>
                                   
                                    <div className='widgetSm'>
                                        <span className="widgetSmTitle">Sản phẩm nổi bật</span>
                                        <ul className="widgetSmList">
                                            <li className="widgetSmListItem">
                                                <img src="https://fvet.vn/wp-content/uploads/2021/08/meo-anh-long-dai1.jpg" alt="" className="widgetSmImg" />
                                                <div className="widgetSmUser">
                                                    <span className="widgetSmUserName">Mèo anh lông dài</span>
                                                    <span className="widgetSmUserTitle">Mèo</span>
                                                </div>
                                                <button className="widgetSmBtn">

                                                    Xem
                                                </button>
                                            </li>
                                            <li className="widgetSmListItem">
                                                <img src="https://vuipet.com/wp-content/uploads/2021/05/cho-husky.jpg" alt="" className="widgetSmImg" />
                                                <div className="widgetSmUser">
                                                    <span className="widgetSmUserName">Mèo anh lông dài</span>
                                                    <span className="widgetSmUserTitle">Mèo</span>
                                                </div>
                                                <button className="widgetSmBtn">

                                                    Xem
                                                </button>
                                            </li>
                                            <li className="widgetSmListItem">
                                                <img src="https://static.chotot.com/storage/chotot-kinhnghiem/c2c/2021/03/d2ea8e0b-cho-husky-sibir.jpg" alt="" className="widgetSmImg" />
                                                <div className="widgetSmUser">
                                                    <span className="widgetSmUserName">Mèo anh lông dài </span>
                                                    <span className="widgetSmUserTitle">Mèo</span>
                                                </div>
                                                <button className="widgetSmBtn">

                                                    Xem
                                                </button>
                                            </li>


                                        </ul>
                                    </div>
                                    <div className="widgetLg">
                                        <h3 className="widgetLgTitle">Đơn hàng mới nhất</h3>
                                        <table className="widgetLgTable">
                                            <tr className="widgetLgTr">
                                                <th className="widgetLgTh">Tên sản phẩm</th>
                                                <th className="widgetLgTh">Ngày đặt</th>
                                                <th className="widgetLgTh">Số tiền</th>
                                                <th className="widgetLgTh">Trạng thái</th>
                                            </tr>
                                            <tr className="widgetLgTr">
                                                <td className="widgetLgUser">
                                                    <img
                                                        src="https://cdn.chotot.com/9Vx2VF3OsohQIP3ZsbGFn57CKrb9lOwB0I8QDtku1s0/preset:listing/plain/00972b5c9aa140ce7228668fb9cf744d-2786402736237456441.jpg"
                                                        alt=""
                                                        className="widgetLgImg"
                                                    />
                                                    <span className="widgetLgName">Chó Corgi</span>
                                                </td>
                                                <td className="widgetLgDate">22/3/2022</td>
                                                <td className="widgetLgAmount">$122.00</td>
                                                <td className="widgetLgStatus">
                                                    <button className='Approved'> Đã thanh toán</button>
                                                </td>
                                            </tr>
                                            <tr className="widgetLgTr">
                                                <td className="widgetLgUser">
                                                    <img
                                                        src="https://sendidau.com/wp-content/uploads/2020/12/meo-munchkin-chan-ngan-dang-yeu.jpg"
                                                        alt=""
                                                        className="widgetLgImg"
                                                    />
                                                    <span className="widgetLgName">Mèo chân ngắn</span>
                                                </td>
                                                <td className="widgetLgDate">31/1/2022</td>
                                                <td className="widgetLgAmount">$122.00</td>
                                                <td className="widgetLgStatus">
                                                    <button className='Declined'  >Đang giao hàng</button>
                                                </td>
                                            </tr>
                                            <tr className="widgetLgTr">
                                                <td className="widgetLgUser">
                                                    <img
                                                        src="https://traichomeo.com/wp-content/uploads/2022/01/meo-anh-long-ngan-3.jpg"
                                                        alt=""
                                                        className="widgetLgImg"
                                                    />
                                                    <span className="widgetLgName">Mèo Anh lông ngắn</span>
                                                </td>
                                                <td className="widgetLgDate">05/5/2022</td>
                                                <td className="widgetLgAmount">$122.00</td>
                                                <td className="widgetLgStatus">
                                                    <button className='Pending' >Đã hủy</button>
                                                </td>
                                            </tr>
                                            <tr className="widgetLgTr">
                                                <td className="widgetLgUser">
                                                    <img
                                                        src="https://bizweb.dktcdn.net/100/326/708/articles/sun-conure-1.jpg?v=1615545100643"
                                                        alt=""
                                                        className="widgetLgImg"
                                                    />
                                                    <span className="widgetLgName">Vẹt Sun Conure</span>
                                                </td>
                                                <td className="widgetLgDate">30/5/2022</td>
                                                <td className="widgetLgAmount">$122.00</td>
                                                <td className="widgetLgStatus">
                                                <button className='Declined'  >Đang giao hàng</button>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div className='homeWidgets'>
                                    <div className="widgetLg">
                                        <h3 className="widgetLgTitle">Thành viên mới nhất</h3>
                                        <table className="widgetLgTable">
                                            <tr className="widgetLgTr">
                                                <th className="widgetLgTh">Tên thành viên</th>
                                                <th className="widgetLgTh">Ngày đăng kí</th>
                                                <th className="widgetLgTh">Số tiền đã đặt</th>
                                                <th className="widgetLgTh">Trạng thái</th>
                                            </tr>
                                            <tr className="widgetLgTr">
                                                <td className="widgetLgUser">
                                                    <img
                                                        src="https://bcp.cdnchinhphu.vn/334894974524682240/2022/4/29/son-tung-mtp-08110778-1651217357607701319631.jpg"
                                                        alt=""
                                                        className="widgetLgImg"
                                                    />
                                                    <span className="widgetLgName">Lê Quốc Khánh</span>
                                                </td>
                                                <td className="widgetLgDate">22/3/2022</td>
                                                <td className="widgetLgAmount">$122.00</td>
                                                <td className="widgetLgStatus">
                                                    <button className='Approved' > Kích hoạt</button>
                                                </td>
                                            </tr>
                                            <tr className="widgetLgTr">
                                                <td className="widgetLgUser">
                                                    <img
                                                        src="https://static1.dienanh.net/upload/202108/0d1275f2-6444-47da-b48f-fa40b454a7cc.jpg"
                                                        alt=""
                                                        className="widgetLgImg"
                                                    />
                                                    <span className="widgetLgName">Nguyễn Văn Nhơn</span>
                                                </td>
                                                <td className="widgetLgDate">22/3/2022</td>
                                                <td className="widgetLgAmount">$122.00</td>
                                                <td className="widgetLgStatus">
                                                <button className='Declined' > Hủy</button>
                                                </td>
                                            </tr>
                                            <tr className="widgetLgTr">
                                                <td className="widgetLgUser">
                                                    <img
                                                        src="https://nguoinoitieng.vn/wp-content/uploads/2019/07/nhung-hinh-anh-dep-cua-ca-si-chi-dan-1.jpg"
                                                        alt=""
                                                        className="widgetLgImg"
                                                    />
                                                    <span className="widgetLgName">Hoàng Anh Tuấn</span>
                                                </td>
                                                <td className="widgetLgDate">22/3/2022</td>
                                                <td className="widgetLgAmount">$122.00</td>
                                                <td className="widgetLgStatus">
                                                    <button className='Approved' > Kích hoạt</button>
                                                </td>
                                            </tr>
                                            <tr className="widgetLgTr">
                                                <td className="widgetLgUser">
                                                    <img
                                                        src="https://nhachot.vn/wp-content/uploads/2021/01/unnamed-file-170.jpg"
                                                        alt=""
                                                        className="widgetLgImg"
                                                    />
                                                    <span className="widgetLgName">Nguyễn Quốc Huy</span>
                                                </td>
                                                <td className="widgetLgDate">22/3/2022</td>
                                                <td className="widgetLgAmount">$122.00</td>
                                                <td className="widgetLgStatus">
                                                    <button className='Declined' > Hủy</button>
                                                </td>
                                            </tr>
                                            <tr className="widgetLgTr">
                                                <td className="widgetLgUser">
                                                    <img
                                                        src="https://vcdn1-vnexpress.vnecdn.net/2022/02/09/jack-9362-1627552063-4718-1644377647.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=nfIRkgao9OWvqwsY6xrJ0Q"
                                                        alt=""
                                                        className="widgetLgImg"
                                                    />
                                                    <span className="widgetLgName">Trần Văn Cường</span>
                                                </td>
                                                <td className="widgetLgDate">22/3/2022</td>
                                                <td className="widgetLgAmount">$122.00</td>
                                                <td className="widgetLgStatus">
                                                    <button className='Approved' > Kích hoạt</button>
                                                </td>
                                            </tr>
                                            <tr className="widgetLgTr">
                                                <td className="widgetLgUser">
                                                    <img
                                                        src="https://nhachot.vn/wp-content/uploads/2021/01/top-6-ca-si-noi-tieng-nhat-viet-nam-trong-nam-2021.jpg"
                                                        alt=""
                                                        className="widgetLgImg"
                                                    />
                                                    <span className="widgetLgName">Trần Quốc Toản</span>
                                                </td>
                                                <td className="widgetLgDate">22/3/2022</td>
                                                <td className="widgetLgAmount">$122.00</td>
                                                <td className="widgetLgStatus">
                                                    <button className='Approved' > Kích hoạt</button>
                                                </td>
                                            </tr>   
                                           
                                        </table>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>


            </div>
            <footer className="footer text-center text-muted">
                 Designed and Developed by <a
                    href="#">Khánh Rose</a>.
        </footer>
        </div>

    )
}
export default Dashboard