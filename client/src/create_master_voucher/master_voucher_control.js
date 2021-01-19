import '../App.css';

function MasterVoucherControl() {
    return (
        <div>
            <h5>KIỂM SOÁT NỘI BỘ</h5>
            <div class="row">
                <div class="col-sm">
                    <select id="voucher_type">
                        <option value="" disabled selected hidden>Đơn vị hạch toán</option>
                        <option value="type1">Loại 1</option>
                        <option value="type1">Loại 2</option>
                        <option value="type1">Loại 3</option>
                    </select>
                </div>
                <div class="col-sm">
                    <select id="voucher_type">
                        <option value="" disabled selected hidden>Đơn vị đề xuất</option>
                        <option value="type1">Loại 1</option>
                        <option value="type1">Loại 2</option>
                        <option value="type1">Loại 3</option>
                    </select>
                </div>
                <div class="col-sm">
                    <input className="full_width" placeholder="Người đề xuất"></input>
                </div>
            </div>
            <br></br>
            <div class="row">
                <div class="col-md-8">
                    <input className="full_width" placeholder="Link tờ trình được phê duyệt"></input>
                </div>
            </div>
        </div>
    );
}

export default MasterVoucherControl;