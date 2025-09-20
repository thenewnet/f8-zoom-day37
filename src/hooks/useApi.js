import { useCallback, useEffect, useState } from "react";

function useApi(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [refetch, setRefetch] = useState(0);

    useEffect(() => {
        setLoading(true);
        
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
            })
            ;
    }, [url, refetch]);

    const handleRefetch = useCallback(() => {
        setRefetch(prev => prev + 1);
        console.log('refetch', refetch);
        
    }, [refetch]);
    return { data, loading, error, refetch: handleRefetch };
}

export default useApi;