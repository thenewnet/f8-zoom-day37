import { useEffect, useState } from "react";

function DataFetcher({ url, children }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url]);

    return children({ data, loading, error });

}

export default DataFetcher;