import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function VoucherDetail(props) {
    const [voucher, setVoucher] = useState(null);
    const url = `http://localhost:3001${props.location.pathname}`;
    let tableContent = null;

    useEffect(() => {
        axios.get(url).then((response) => {
            setVoucher(response.data);
            console.log(response.data);
        })
    }, [url]);

    if(voucher){
        tableContent = 
        <tr>
            <td>{voucher[0].name}</td>
            <td>{voucher[0].type}</td>
            <td>{voucher[0].amount}</td>
            <td>{voucher[0].delivered}</td>
            <td>{voucher[0].date_created.substring(0,10)}</td>
            {/* <td>
                <button><a href={'/generate/' + voucher[0].id}><i className="fa fa-share action_button"></i></a></button>
                <button><a href={'/edit/' + voucher[0].id}><i className="fa fa-edit action_button"></i></a></button>
                <button><a href={'/delete/' + voucher[0].id}><i className="fa fa-trash-o action_button"></i></a></button>
            </td> */}
        </tr>
    }

    return (
        <div className="jumbotron">
            <h3>VOUCHER DETAILS</h3>
            <br />
            <table>
                <tbody>
                <tr>
                    <th>Tên Voucher Master</th>
                    <th>Tên Phân Loại</th>
                    <th>Số Lượng</th>
                    <th>Phân Phối</th>
                    <th>Ngày Tạo</th>
                    {/* <th>Action</th> */}
                </tr>
                {tableContent}
                </tbody>
            </table>
            <br />
            <button type="button" className="btn btn-outline-secondary float_right mr-2" onClick = {event =>  window.location.href='/list'} >Back</button>
        </div>
    );
}

export default VoucherDetail;
