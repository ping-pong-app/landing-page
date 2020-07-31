import React from "react";
import { HEALTH_URL } from "../config/api.config";

export enum ApiStatus {
    GOOD = "GOOD",
    BAD = "BAD"
}

export class StatusService {
    
    public static getApiStatus(setStateFunc:  React.Dispatch<React.SetStateAction<ApiStatus>>) {
        fetch(HEALTH_URL)
            .then((response: Response) => {
                if (response.status === 200) {
                    setStateFunc(ApiStatus.GOOD);
                } else {
                    setStateFunc(ApiStatus.BAD);
                }
            })
            .catch(() => {
                setStateFunc(ApiStatus.BAD);
            });
    }
}
