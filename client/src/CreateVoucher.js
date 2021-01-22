import './App.css';
import Axios from 'axios';
import { useState } from 'react';
// import MasterVoucherInfo from './create_master_voucher/mv_info';
import MasterVoucherCondition from './create_master_voucher/mv_condition';
import MasterVoucherControl from './create_master_voucher/mv_control';

function CreateVoucher() {
    const [vouchername, setVouchername] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("");

    const create_voucher = () => {
        console.log("Create Voucher Pressed");
        Axios.post("http://localhost:3001/create", {
            vouchername: vouchername,
            amount: amount,
            type: type
        }).then( (response) => {
            console.log(response);
            window.location.href = '/list';
        }).catch((error) => {
            console.log(error);
        })
    };
    return (
        <div className="jumbotron">
            <h2>Create New Type Voucher</h2>
            <div className="jumbotron">
                {/* <MasterVoucherInfo data={vouchername, amount}/> */}
                <h5>THÔNG TIN MASTER VOUCHER</h5>
                <div className="row">
                    <div className="col-sm">
                        <input className="full_width" name="vouchername" placeholder="Tên Voucher Master" required onChange = {(e) => {
                            setVouchername(e.target.value);
                        }}></input>
                    </div>
                    <div className="col-sm">
                        <input className="full_width" placeholder="Shortcode"></input>
                    </div>
                    <div className="col-sm">
                        <div className="row">
                            <div className="col-md-6">
                                <input className="full_width" name="amount" placeholder="Số Lượng" required onChange = {(e) => {
                                    setAmount(e.target.value);
                                }}></input>
                            </div>
                            <div className="col-md-6">
                                <select id="voucher_type" required onChange={(e) => { setType(e.target.value) }}>
                                    <option value="" disabled selected hidden>Loại Voucher</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-4">
                        <input type="date" id="create_date" name="create_date"></input>
                    </div>
                    <div className="col-md-4">
                        <input type="date" id="end_date" name="end_date"></input>
                    </div>
                </div>
                <br />
                <MasterVoucherCondition />
                <MasterVoucherControl />
            </div>
            <button type="button" className="btn btn-primary float_right" onClick = {create_voucher}>Create</button>
            <button type="button" className="btn btn-outline-secondary float_right mr-2" onClick = {event =>  window.location.href='/list'} >Cancel</button>
        </div>
    );
}

export default CreateVoucher;