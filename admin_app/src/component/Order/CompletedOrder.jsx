import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import queryString from 'query-string'

import orderAPI from '../Api/orderAPI';
import Pagination from '../Shared/Pagination'
import Search from '../Shared/Search'

function CompletedOrder(props) {
    const [filter, setFilter] = useState({
        page: '1',
        limit: '10',
        getDate: '',
    })

    const [order, setOrder] = useState([])
    const [totalPage, setTotalPage] = useState()
    const [totalMoney, setTotalMoney] = useState()

    useEffect(() => {
        const query = '?' + queryString.stringify(filter)

        const fetchAllData = async () => {
            const od = await orderAPI.completeOrder(query)
            setTotalPage(od.totalPage)
            setOrder(od.orders)
            setTotalMoney(od.totalMoney)
        }
        fetchAllData()

    }, [filter])

    const onPageChange = (value) => {
        setFilter({
            ...filter,
            page: value
        })
    }

    const handler_Report = () => {

        // source code HTML table to PDF

        var sTable = document.getElementById('customers').innerHTML;

        var style = "<style>";
        style = style + "table {width: 100%;font: 17px Calibri;}";
        style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
        style = style + "padding: 2px 3px;text-align: center;}";
        style = style + "</style>";

        // CREATE A WINDOW OBJECT.
        var win = window.open('', '', 'height=900,width=1000');

        win.document.write('<html><head>');
        win.document.write('<title>Profile</title>');   // <title> FOR PDF HEADER.
        win.document.write(style);          // ADD STYLE INSIDE THE HEAD TAG.
        win.document.write('</head>');
        win.document.write('<body>');
        win.document.write(sTable);         // THE TABLE CONTENTS INSIDE THE BODY TAG.
        win.document.write('</body></html>');

        win.document.close(); 	// CLOSE THE CURRENT WINDOW.

        win.print();    // PRINT THE CONTENTS.

    }


    let day = [] 
    let month = []

    for (let i = 1; i < 32; i++){
        day.push(i)
    }

    for (let i = 1; i < 13; i++){
        month.push(i)
    }


    const [getDay, setGetDay] = useState('null')
    const [getMonth, setGetMonth] = useState('null')
    const [getYear, setGetYear] = useState('null')

    const [errMessage, setErrMessage] = useState('')
    const [subMessage, setSubMessage] = useState('')

    const handlerStatistic = (e) => {

        e.preventDefault()

        // Check Validation

        // Ki???m tra ng??y th??ng n??m ?????u r???ng
        if ((getDay === 'null' && getMonth === 'null' && getYear === 'null')){
            setErrMessage('Vui l??ng ki???m tra l???i!')
            console.log("123")
            setSubMessage('')
            return
        }

        // Ki???m tra ch??? th??ng l?? r???ng
        if (getDay !== 'null' && getYear !== 'null' && getMonth === 'null'){
            setErrMessage('Vui l??ng ki???m tra l???i!')
            console.log("456")
            setSubMessage('')
            return
        }

        // Ki???m tra ch??? n??m l?? r???ng
        if (getDay !== 'null' && getMonth !== 'null' && getYear === 'null'){
            setErrMessage('Vui l??ng ki???m tra l???i!')
            console.log("789")
            setSubMessage('')
            return
        }

        // Ki???m tra n??m v?? th??ng l?? r???ng
        if (getDay !== 'null' && getMonth === 'null' && getYear === 'null'){
            setErrMessage('Vui l??ng ki???m tra l???i!')
            console.log("11")
            setSubMessage('')
            return
        } 
        
        // Ki???m tra ng??y v?? n??m l?? r???ng
        if (getDay === 'null' && getMonth !== 'null' && getYear === 'null'){
            setErrMessage('Vui l??ng ki???m tra l???i!')
            console.log("10")
            setSubMessage('')
            return
        }           
        // Check Validation



        //X??? l?? thanh to??n theo ng??y
        if ((getDay !== 'null') && (getMonth !== 'null') && (getYear !== 'null')){

            setFilter({
                ...filter,
                getDate: `${getDay}/${getMonth}/${getYear}`
            })

            setSubMessage('Th???ng K?? Theo Ng??y Th??nh C??ng!')
            setErrMessage('')
        }        

        // X??? l?? thanh to??n theo th??ng
        if (getDay === 'null' && getMonth !== 'null' && getYear !== 'null'){

            setFilter({
                ...filter,
                getDate: `/${getMonth}/${getYear}`
            })

            setSubMessage('Th???ng K?? Theo Th??ng Th??nh C??ng!')
            setErrMessage('')
        }

        //X??? l?? thanh to??n theo n??m
        if (getDay === 'null' && getMonth === 'null' && getYear !== 'null'){

            setFilter({
                ...filter,
                getDate: `/${getYear}`
            })

            setSubMessage('Th???ng K?? N??m Th??nh C??ng!')
            setErrMessage('')
        }

    }

    return (
        <div className="page-wrapper">

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Complete Order</h4>
                                <div className="table-responsive mt-3" id="customers">
                                    <table className="table table-striped table-bordered no-wrap" id="tab_customers">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>T??n</th>
                                                <th>Email</th>
                                                <th>S??? ??i???n tho???i</th>
                                                <th>?????a ch???</th>
                                                <th>Tr???ng th??i</th>
                                                <th>T???ng</th>
                                                <th>Thanh to??n</th>
                                                <th>H??nh ?????ng</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {
                                                order && order.map((value, index) => (
                                                    <tr key={index}>
                                                        <td className="name">{value._id}</td>
                                                        <td className="name">{value.id_note.fullname}</td>
                                                        <td className="name">{value.id_user.email}</td>
                                                        <td className="name">{value.id_note.phone}</td>
                                                        <td className="name">{value.address}</td>
                                                        <td>
                                                            {(() => {
                                                                switch (value.status) {
                                                                    case "1": return "??ang x??? l??";
                                                                    case "2": return "???? x??c nh???n";
                                                                    case "3": return "??ang giao";
                                                                    case "4": return "Ho??n th??nh";
                                                                    default: return "????n b??? h???y";
                                                                }
                                                            })()}
                                                        </td>
                                                        <td className="name">{new Intl.NumberFormat('vi-VN',{style: 'decimal',decimal: 'VND'}).format(value.total)+ ' VN??'}</td>
                                                        <td className="name">{value.pay === true ? "???? thanh to??n" : "Ch??a thanh to??n"}</td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <Link to={"/order/detail/" + value._id} className="btn btn-info mr-1">Chi ti???t</Link>

                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                    <h4 className="card-title">T???ng ti???n: {new Intl.NumberFormat('vi-VN',{style: 'decimal',decimal: 'VND'}).format(totalMoney)+ ' VN??'}</h4>
                                </div>
                                <Pagination filter={filter} onPageChange={onPageChange} totalPage={totalPage} />
                                    <div>
                                        <div className="d-flex">
                                            <h4>Ch???n ph????ng th???c th???ng k??</h4>
                                        </div>
                                        <br />
                                        <select className="custom-select" style={{ color: 'gray', width: '85px'}}
                                            value={getDay} onChange={(e) => setGetDay(e.target.value)}>
                                            <option value="null">Ng??y</option>
                                            {
                                                day && day.map(d => (
                                                    <option value={d} key={d}>{d}</option>
                                                ))
                                            }
                                        </select>
                                        &nbsp;/&nbsp;
                                        <select className="custom-select" style={{ color: 'gray', width: '85px'}}
                                            value={getMonth} onChange={(e) => setGetMonth(e.target.value)}>
                                            <option value="null" >Th??ng</option>
                                            {
                                                month && month.map(m => (
                                                    <option value={m} key={m}>{m}</option>
                                                ))
                                            }
                                        </select>
                                        &nbsp;/&nbsp;
                                        <select className="custom-select" style={{ color: 'gray', width: '85px'}}
                                            value={getYear} onChange={(e) => setGetYear(e.target.value)}>
                                            <option value="null">N??m</option>
                                            <option value="2020">2020</option>
                                            <option value="2021">2021</option>
                                        </select>
                                        &nbsp;
                                        <input type="submit" className="btn btn-primary" value="L???c H??a ????n" onClick={handlerStatistic} />
                                    </div>
                                    <div>
                                    {
                                        errMessage !== '' && <span className="text-danger">{errMessage}</span>
                                    }
                                    {
                                        subMessage !== '' && <span className="text-success">{subMessage}</span>
                                    }
                                    </div>
                                    <br />
                                    <a className="btn btn-success mb-5"
                                        onClick={handler_Report}
                                        style={{ color: '#fff', cursor: 'pointer' }}>Th???ng K??</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer text-center text-muted">
                 Designed and Developed by <a
                    href="#">Kh??nh Rose</a>.
        </footer>
        </div>
    );
}

export default CompletedOrder;