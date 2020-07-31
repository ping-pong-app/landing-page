import React, { useEffect, useState } from "react";
import { Footer, Layout } from "../../components";
import { ApiStatus, StatusService } from "../../services/status.service";

import "./status.page.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const StatusPage = () => {
    
    const [apiStatus, setApiStatus] = useState(ApiStatus.GOOD);
    
    useEffect(() => {
        StatusService.getApiStatus(setApiStatus);
    });
    
    return (
        <Layout transparentHeader={false}>
            <div className="status-page">
                <div className="title-header">
                    <h2 className="text-center">Status of a system supporting Ping application</h2>
                </div>
                <div className="content">
                    <div className="status">
                        <h4 className="label">Backend service</h4>
                        <FontAwesomeIcon
                            icon={["fas", "heartbeat"]}
                            size={"2x"}
                            className={apiStatus === ApiStatus.GOOD ? "status-good" : "status-bad"}
                            title={apiStatus}/>
                        <span className="status-text">{apiStatus}</span>
                    </div>
                    <div className="status">
                        <h4 className="label">Logging service</h4>
                        <FontAwesomeIcon
                            icon={["fas", "heartbeat"]}
                            size={"2x"}
                            className={apiStatus === ApiStatus.GOOD ? "status-good" : "status-bad"}
                            title={apiStatus}/>
                        <span className="status-text">{apiStatus}</span>
                    </div>
                </div>
            </div>
            <Footer social/>
        </Layout>
    );
};

export default StatusPage;
