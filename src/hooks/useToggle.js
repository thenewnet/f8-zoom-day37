import { useCallback, useState } from "react";

function useToggle(initialValue = false) {
    const [value, setValue] = useState(initialValue);

    const toggle = useCallback(
        () => {
            setValue(prev => !prev);
        }, []
    );


    return [value, toggle, setValue];
}

export default useToggle;