import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function DeleteVoucher(props) {
    const [voucher, setVoucher] = useState(null);
    const url = `http://localhost:3001/voucher/${props.location.pathname.substring(8)}`;
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
        </tr>
    }

    const [deleteForm, setDeleteForm] = useState(false);

    function openForm() {
        setDeleteForm(prev => !prev);
    }

    const delete_voucher = () => {
        console.log("Delete Voucher Pressed");
        axios.post(`http://localhost:3001${props.location.pathname}`)
        .then( (response) => {
            console.log(response);
            window.location.href = '/list';
        }).catch((error) => {
            console.log(error);
        })
    };
    return (
        <div className="jumbotron">
            <h2>DELETE VOUCHER</h2>
            <br />
            <table>
                <tbody>
                <tr>
                    <th>Tên Voucher Master</th>
                    <th>Tên Phân Loại</th>
                    <th>Số Lượng</th>
                    <th>Phân Phối</th>
                    <th>Ngày Tạo</th>
                </tr>
                {tableContent}
                </tbody>
            </table>
            <br />
            <button type="button" className="btn btn-danger float_right" onClick = {openForm} >Delete</button>
            <button type="button" className="btn btn-outline-secondary float_right mr-2" onClick = {event =>  window.location.href=`/list`} >Cancel</button>
            <div className="form-popup" style={{display: deleteForm ? "block" : "none"}}>
                <h3>Xác Nhận Xoá Voucher?</h3>
                <br />
                <button type="button" className="close_btn cancel" aria-label="Close" onClick = {openForm}>
                    <span aria-hidden="true">&times;</span>
                </button>
                <button type="button" className="btn btn-danger float_right" onClick = {delete_voucher}>Đồng Ý</button>
                <button type="button" className="btn btn-outline-secondary float_right mr-2" onClick = {openForm}>Huỷ</button>
            </div>
        </div>
    );
}

export default DeleteVoucher;
