function Navbar() {
    return (
        // <nav className="navbar navbar-default navfont navbar-inverse navbar-fixed-top">
        //     <div className="container">
        //         <div className="navbar-header">
        //             <ul className="nav navbar-nav"><li><a className="navbar-link" href="/login">Log In</a></li></ul>
        //             <ul className="nav navbar-nav"><li><a className="navbar-link" href="/register">Register</a></li></ul>
        //         </div>
        //     </div>
        // </nav> 
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="collapse navbar-collapse container" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/list">Home <span class="sr-only">(current)</span></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
  }
  
  export default Navbar;