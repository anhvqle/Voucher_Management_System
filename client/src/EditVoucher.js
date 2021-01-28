import './App.css';
import Axios from 'axios';
import { useState, useEffect } from 'react';
// import MasterVoucherInfo from './create_master_voucher/mv_info';
// import MasterVoucherCondition from './create_master_voucher/mv_condition';
// import MasterVoucherControl from './create_master_voucher/mv_control';

function EditVoucher(props) {
    // Get Previous Data
    const [voucher, setVoucher] = useState(null);
    const [vouchername, setVouchername] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("");
    const url = `http://localhost:3001/voucher/${props.location.pathname.substring(6)}`;
    let voucherDetail = null;
    let placeholderName = "", placeholderAmount = null, placeholderType = null;

    useEffect(() => {
        Axios.get(url).then((response) => {
            setVoucher(response.data);
            console.log(response.data);
        })
    }, [url]);

    if(voucher){
        voucherDetail = [voucher[0].name, voucher[0].type, voucher[0].amount, voucher[0].name];
        placeholderName = voucherDetail[0];
        placeholderType = voucherDetail[1];
        placeholderAmount = voucherDetail[2];
    }

    const edit_voucher = () => {
        console.log("Edit Voucher Pressed");
        Axios.post(`http://localhost:3001/edit/${props.location.pathname.substring(6)}`, {
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
            <h2>Edit Voucher</h2>
            <br />
            <div>
                {/* <MasterVoucherInfo /> */}
                <h5>THÔNG TIN MASTER VOUCHER</h5>
                <div className="row">
                    <div className="col-sm">
                        <input className="full_width" name="vouchername" placeholder={placeholderName} required onChange = {(e) => {
                            setVouchername(e.target.value);
                        }}></input>
                    </div>
                    <div className="col-sm">
                        <input className="full_width" placeholder="Shortcode"></input>
                    </div>
                    <div className="col-sm">
                        <div className="row">
                            <div className="col-md-6">
                                <input className="full_width" name="amount" placeholder={placeholderAmount} required onChange = {(e) => {
                                    setAmount(e.target.value);
                                }}></input>
                            </div>
                            <div className="col-md-6">
                                <select defaultValue={placeholderType} id="voucher_type" required onChange={(e) => { setType(e.target.value) }}>
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
                {/* <MasterVoucherCondition />
                <MasterVoucherControl /> */}
            </div>
            <button type="button" className="btn btn-primary float_right" onClick = {edit_voucher}>Update</button>
            <button type="button" className="btn btn-outline-secondary float_right mr-2" onClick = {event =>  window.location.href='/list'} >Cancel</button>
        </div>
    );
}

export default EditVoucher;