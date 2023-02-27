import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const Navigation = () => {

    const { collapseSidebar } = useProSidebar();

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <Sidebar>
                <h3>MewPuw</h3>
                <Menu>
                    <MenuItem component={<Link to="/Home" />}> Dashbord</MenuItem>
                    <MenuItem component={<Link to="/Profile" />}> Profile</MenuItem>
                    <MenuItem component={<Link to="/Logout" />}> Logout</MenuItem>
                </Menu>
                <div style={{ position: "absolute", bottom: "0", width: "100%" }}>
                    <button style={{width: "100%"}} onClick={() => collapseSidebar()}>Hide</button>
                </div>
            </Sidebar>
        </div>

    )
}

export default Navigation