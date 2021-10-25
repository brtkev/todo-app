import { useState ,useEffect } from "react";

export default function useDocTitle(title){
    const [docTitle, setDoctTitle] = useState(title);
    useEffect(() => {
        document.title = docTitle;
    }, [docTitle])

    return [docTitle, setDoctTitle];
}