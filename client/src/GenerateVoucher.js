import './App.css';
import Axios from 'axios';
import { useState } from 'react';
let msg = "";

function GenerateVoucher(props) {
    const [amount, setAmount] = useState("");
    const [deliverStatus, setDeliverStatus] = useState("");

    const generate_voucher = () => {
        console.log("Generate Voucher Pressed");
        Axios.post(`http://localhost:3001${props.location.pathname}`, {
            inputAmount: amount,
        }).then( (response) => {
            if(parseInt(response.data.status) <= 299){
                window.location.href = `/voucher/${props.location.pathname.substring(10)}`;
            }
            else{
                msg = "Không thể phân phối voucher nhiều hơn số lượng có sẵn!";
                setDeliverStatus(msg);
            }
        }).catch((error) => {
            console.log(error);
        })
    };
    return (
        <div className="jumbotron">
            <h2>DELIVER VOUCHER</h2>
            <br />
            <div className="row">
                <div className="col-md-6">
                    <select id="voucher_type">
                        <option value="" disabled selected hidden>Tên đại lý</option>
                        <option value="type1">1</option>
                        <option value="type1">2</option>
                        <option value="type1">3</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <input className="full_width" placeholder="Số lượng phân phối" onChange = {(e) => { setAmount(e.target.value); }}></input>
                    <br />
                </div>
            </div>
            <br />
            <p style={{color:'red'}}>{deliverStatus}</p>
            <button type="button" className="btn btn-primary float_right" onClick = {generate_voucher} >Deliver</button>
            <button type="button" className="btn btn-outline-secondary float_right mr-2" onClick = {event =>  window.location.href=`/list`} >Cancel</button>
        </div>
    );
}

export default GenerateVoucher;
