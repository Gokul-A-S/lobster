const Help=()=>{
    return(
        <div className="help-pages">
            <div className="container">
                <h1>User Manual</h1>
                <h2>Logging In</h2>
                <p>
                    To log in to your account, follow these steps:
                    <ol> 
                        1. Enter your username and password in the login page.
                        <br/>
                        2. Click the login button.
                    </ol>
                </p>
                <h2>Navigating the Dashboard</h2>
                <p>
                After logging in, you will be directed to your dashboard. The dashboard provides an overview of your equipment, main stock register details, and other relevant information. Here are some key features:
                    <ol>
                        1. <u> Overview: </u> This contains an overview of the number of equipment, number of labs, and number of working equipment.
                        <br/>
                        2. <u> Main Stock Register: </u> This contains the details of the main stock register. It also allows you to add and allocate equipment to labs and to delete equipment that are no longer required.
                        <br/>
                        3. <u> Labs: </u> This contains the details of the labs. It also allows you to add and delete labs. It also allows you to view the equipment allocated to each lab.
                        <br/>
                        4. <u> Alerts: </u> This section contains the equipment that are due for expiration of warranty.
                        <br/>
                        5. <u> Reports: </u> This section generates the reports for the equipment that are selected by the user.
                        <br/>
                        6. <u> Help: </u> This section contains the user manual.
                    </ol>
                </p>
                <h2>Adding Equipment</h2>
                <p>
                    To add equipment, follow these steps:
                    <ol>
                        1. Enter the equipment details in the form in the Main Stock Register section or the Labs section.
                        <br/>
                        2. Click on the "Add Equipment" button.
                    </ol>
                </p>
                <h2>Allocating Equipment</h2>
                <p>
                    To allocate equipment to a lab, follow these steps:
                    <ol>
                        1. Select the lab to which the equipment is to be allocated in the drop down list in the Main Stock Register section.
                        <br/>
                        2. Click on the "Allocate" button.
                    </ol>
                </p>
                <h2>Deleting Equipment</h2>
                <p>
                    To delete equipment, click on the "Trash" icon in the Main Stock Register section.
                </p>
                <h2>Adding Labs</h2>
                <p>
                    To add labs, follow these steps:
                    <ol>
                        1. Enter the lab details in the form in the Labs section.
                        <br/>
                        2. Click on the "Add Lab" button.
                    </ol>
                </p>
                <h2>Deleting Labs</h2>
                <p>
                    To delete labs, click on the "Trash" icon in the Labs section.
                </p>
                <h2>Viewing Equipment Allocated to a Lab</h2>
                <p>
                    To view the equipment allocated to a lab, click on the "Equipment" icon in the Labs section.
                </p>
                <h2>Generating Reports</h2>
                <p>
                    To generate reports, follow these steps:
                    <ol>
                        1. Select the equipment for which the report is to be generated in the Reports section.
                        <br/>
                        2. Click on the "Generate Report" button.
                    </ol>
                </p>
                <h2>Logging Out</h2>
                <p>
                    To log out of your account, click on the "Logout" button in the top right corner of the page.
                </p>

            </div>
        </div>
    )
}
export default Help;