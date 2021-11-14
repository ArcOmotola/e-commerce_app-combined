import { useLocation } from "react-router"

export default function Success() {
    const location = useLocation();

    console.log(location);

    return (
        <div>
            Successfull
        </div>
    )
}
