function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="collapse navbar-collapse container" id="navbarNav">
                <ul className="navbar-nav nav-fill w-100">
                    <li className="nav-item active">
                        <a className="nav-link" href="/list">Master Voucher</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Quản lý Đăng ký sử dụng Voucher</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Quản lý Đại lý</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Quản lý User</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
  }
  
  export default Navbar;