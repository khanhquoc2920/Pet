import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import queryString from 'query-string'

import orderAPI from '../Api/orderAPI';
import Pagination from '../Shared/Pagination'
import Search from '../Shared/Search'


function DetailOrder(props) {
    const [idDetail] = useState(props.match.params.id)
    const [filter, setFilter] = useState({
        page: '1',
        limit: '4',
        search: ''
    })

    const [order, setOrder] = useState()
    const [totalPage, setTotalPage] = useState()
    const [details, setDetails] = useState([]);

    useEffect(() => {
        const fetchAllData = async () => {
            const res = await orderAPI.details(idDetail)
            // console.log(res)
            setOrder(res)
        }

        fetchAllData()
    }, [])

    useEffect(() => {
        const query = '?' + queryString.stringify(filter)

        const fetchAllData = async () => {
            const od = await orderAPI.detailOrder(idDetail, query)
            console.log(od)
            setTotalPage(od.totalPage)
            setDetails(od.details)
        }

        fetchAllData()
    }, [filter])

    const onPageChange = (value) => {
        setFilter({
            ...filter,
            page: value
        })
    }

    const handlerSearch = (value) => {
        setFilter({
            ...filter,
            page: '1',
            search: value
        })
    }
    return (


        <div className="page-wrapper">

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title ml-1">Detail Order</h4>
                                {
                                    order ?
                                        (
                                            <div className="mt-3 ml-1">
                                                <h5>?????a ch???: {order.address}</h5>
                                                <h5>Ph?? v???n chuy???n: {new Intl.NumberFormat('vi-VN',{style: 'decimal',decimal: 'VND'}).format(order.feeship)+ ' VN??'}</h5>
                                                <h5>T???ng chi ph??: {new Intl.NumberFormat('vi-VN',{style: 'decimal',decimal: 'VND'}).format(order.total)+ ' VN??'}</h5>
                                                <h5>Thanh to??n: {order.id_payment.pay_name}</h5>
                                                <h5>Th???i gian nh???n h??ng: {order.create_time}</h5>
                                            </div>

                                        ) :
                                        (
                                            <div></div>
                                        )
                                }

                                <div className="table-responsive mt-3">
                                    <table className="table table-striped table-bordered no-wrap">
                                        <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>T??n</th>
                                                <th>Gi??</th>
                                                <th>S??? l?????ng</th>
                                                <th>T???ng ti???n</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {
                                                details && details.map((value, index) => (
                                                    <tr key={index}>
                                                        <td><img src={value.id_product.image} alt="" style={{ width: '70px' }} /></td>
                                                        <td className="name">{value.name_product}</td>
                                                        <td className="name">{new Intl.NumberFormat('vi-VN',{style: 'decimal',decimal: 'VND'}).format(value.price_product)+ ' VN??'}</td>
                                                        <td className="name">{value.count}</td>
                                                        <td className="name">{new Intl.NumberFormat('vi-VN',{style: 'decimal',decimal: 'VND'}).format(value.count * Number(value.price_product))+ ' VN??'}</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                    <Pagination filter={filter} onPageChange={onPageChange} totalPage={totalPage} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer text-center text-muted">
                 Designed and Developed by <a
                    href="#">Kh??nh Rose</a>.
        </footer>
        </div >
    );
}

export default DetailOrder;