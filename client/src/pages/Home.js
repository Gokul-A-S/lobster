import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div className="home-pages">
            <div className="dashboard">
                <div className="container">
                    <p>Overview</p>
                    <Link to="/overview">Overview</Link>
                </div>
                <div className="container">
                    <p>Main Stock Register</p>
                    <Link to="/main">Main</Link>
                </div>
                <div className="container">

                    <p>Labs</p>
                    <Link to="/lab">Labs</Link>
                </div>
                <div className="container">

                    <p>Reports</p>
                    <Link to="/reports">Reports</Link>
                </div>
                <div className="container">

                    <p>Alerts</p>
                    <Link to="/alerts">Alerts</Link>
                </div>
                <div className="container">

                    <p>Help</p>
                    <Link to="/help">Help</Link>
                </div>

            </div>

        </div>
    )
}
export default Home;