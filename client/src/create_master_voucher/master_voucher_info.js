import '../App.css';

function MasterVoucherInfo() {
    return (
        <div>
            <h5>THÔNG TIN MASTER VOUCHER</h5>
            <div class="row">
                <div class="col-sm">
                    <input className="full_width" placeholder="Tên Voucher Master"></input>
                </div>
                <div class="col-sm">
                    <input className="full_width" placeholder="Shortcode"></input>
                </div>
                <div class="col-sm">
                    <div className="row">
                        <div className="col-md-6">
                            <input className="full_width" placeholder="Số Lượng"></input>
                        </div>
                        <div className="col-md-6">
                            <select id="voucher_type">
                                <option value="" disabled selected hidden>Loại Voucher</option>
                                <option value="type1">Loại 1</option>
                                <option value="type1">Loại 2</option>
                                <option value="type1">Loại 3</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <div class="row">
                <div class="col-md-4">
                    <input type="date" id="create_date" name="create_date"></input>
                </div>
                <div class="col-md-4">
                    <input type="date" id="end_date" name="end_date"></input>
                </div>
            </div>
            <br></br>
        </div>
    );
}

export default MasterVoucherInfo;