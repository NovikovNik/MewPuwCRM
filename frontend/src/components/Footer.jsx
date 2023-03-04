import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {

    return (
        <footer class="text-center text-lg-start bg-light text-muted">
            <div class="text-center p-2" style={{ position: "absolute", bottom: "0", width: "100%", backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
               <h5 className="muted small">© 2023 NoCopyright</h5>
            </div>
        </footer>
    )
}

export default Footer