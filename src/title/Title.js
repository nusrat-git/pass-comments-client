import { useEffect } from "react"


const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Pass Comments`;
    }, [title])
}

export default useTitle;