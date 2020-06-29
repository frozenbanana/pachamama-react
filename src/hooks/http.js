import { useState, useEffect } from "react";

export const useHttp = (url, dependencies) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    useEffect(() => {
        console.log("Sendind http request to " + url);

        setIsLoading(true);
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Could not fetch person!");
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(true);
                console.log(err);
            });
    }, dependencies); // eslint-disable-line react-hooks/exhaustive-deps

    return [isLoading, data];
};
