import { useState, useEffect } from "react";

function useNetwork() {
    const [isOnline, setIsOnline] = useState(true);
    const [state, setState] = useState(() => {
        return {
            since: undefined,
            online: isOnline,
        };
    });

    useEffect(() => {
        const checkOnlineStatus = async () => {
            try {
                const online = await fetch("/");
                return online.status >= 200 && online.status < 300; // either true or false
            } catch (err) {
                return false; // definitely offline
            }
        };

        setIsOnline(navigator.onLine);

        const getNetworkConnection = () => {
            return (
                navigator.connection ||
                navigator.mozConnection ||
                navigator.webkitConnection ||
                null
            );
        }

        const getNetworkConnectionInfo = () => {
            const connection = getNetworkConnection();
            if (!connection) {
                return {};
            }
            return {
                rtt: connection.rtt,
                type: connection.type,
                saveData: connection.saveData,
                downLink: connection.downLink,
                downLinkMax: connection.downLinkMax,
                effectiveType: connection.effectiveType,
            };
        }
        const handleOnline = () => {
            setState((prevState) => {
                console.log('handleOnline', prevState)
                return {
                    ...prevState,
                    online: true,
                    since: new Date().toString(),
                }
            });

        };
        const handleOffline = () => {
            setState((prevState) => {
                console.log('handleOffline', prevState);
                return {
                    ...prevState,
                    online: false,
                    since: new Date().toString(),
                }
            });
        };
        const handleConnectionChange = () => {
            setState((prevState) => {
                return {
                    ...prevState,
                    ...getNetworkConnectionInfo(),
                }
            });
        };

        window.addEventListener("load", async (event) => {
            const result = await checkOnlineStatus();
            setState((prevState) => {
                console.log('handleOffline', prevState);
                return {
                    ...prevState,
                    online: result,
                    since: new Date().toString(),
                }
            });
        });

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);
        const connection = getNetworkConnection();
        connection?.addEventListener("change", handleConnectionChange);
        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
            window.removeEventListener("load");
            connection?.removeEventListener("change", handleConnectionChange);
        };
    }, []);

    return state;
}
export default useNetwork;