import './App.css';
import MasterVoucherInfo from './create_master_voucher/master_voucher_info';
import MasterVoucherCondition from './create_master_voucher/master_voucher_condition';
import MasterVoucherControl from './create_master_voucher/master_voucher_control';

function CreateVoucher() {
    return (
        <div className="jumbotron">
            <h2>Create New Type Voucher</h2>
            <div className="jumbotron">
                <MasterVoucherInfo />
                <MasterVoucherCondition />
                <MasterVoucherControl />
            </div>
            <button type="button" className="btn btn-primary float_right" >Create</button>
            <button type="button" className="btn btn-outline-secondary float_right mr-2" onClick = {event =>  window.location.href='/list'} >Cancel</button>
        </div>
    );
}

export default CreateVoucher;