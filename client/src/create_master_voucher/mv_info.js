import '../App.css';
import { useState } from 'react';

function MasterVoucherInfo(props) {
    let [vouchername, setVouchername] = useState("");
    let [amount, setAmount] = useState("");
    let [type, setType] = useState("");
    return (
        <div>
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
                            <select id="voucher_type" onChange={(e) => { setType(this.handleChange)}}>
                                <option value="" disabled selected hidden>Loại Voucher</option>
                                <option value="1">Loại 1</option>
                                <option value="2">Loại 2</option>
                                <option value="3">Loại 3</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="row">
                <div className="col-md-4">
                    <input type="date" id="create_date" name="create_date"></input>
                </div>
                <div className="col-md-4">
                    <input type="date" id="end_date" name="end_date"></input>
                </div>
            </div>
            <br></br>
        </div>
    );
}

export default MasterVoucherInfo;