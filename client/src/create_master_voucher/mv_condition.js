import '../App.css';

function MasterVoucherCondition() {
    return (
        <div>
            <h5>ĐIỀU KIỆN ÁP DỤNG</h5>
            <div className="row">
                <div className="col-sm">
                    <select id="voucher_type">
                        <option value="" disabled selected hidden>Đơn vị áp dụng</option>
                        <option value="type1">Loại 1</option>
                        <option value="type1">Loại 2</option>
                        <option value="type1">Loại 3</option>
                    </select>
                </div>
                <div className="col-sm">
                    <select id="voucher_type">
                        <option value="" disabled selected hidden>Loại phòng áp dụng</option>
                        <option value="type1">Loại 1</option>
                        <option value="type1">Loại 2</option>
                        <option value="type1">Loại 3</option>
                    </select>
                </div>
                <div className="col-sm">
                    <div className="row">
                        <div className="col-md-6">
                            <select id="voucher_type">
                                <option value="" disabled selected hidden>Người lớn</option>
                                <option value="type1">1</option>
                                <option value="type1">2</option>
                                <option value="type1">3</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <select id="voucher_type">
                                <option value="" disabled selected hidden>Trẻ em</option>
                                <option value="type1">1</option>
                                <option value="type1">2</option>
                                <option value="type1">3</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <div>
                <input type="checkbox" id="breakfast" name="breakfast" value="breakfast"></input>
                <label for="vehicle1">Bao gồm ăn sáng</label><br></br>
                <input type="checkbox" id="weekend_fee" name="weekend_fee" value="weekend_fee"></input>
                <label for="vehicle1">Phụ thu cuối tuần</label><br></br>
                <input type="checkbox" id="holidays" name="holidays" value="holidays"></input>
                <label for="vehicle1">Áp dụng Lễ/Tết</label><br></br>
                <input type="text" className="full_width" placeholder="Mô tả loại voucher" height="48"></input>
            </div>
            <br></br>
        </div>
    );
}

export default MasterVoucherCondition;