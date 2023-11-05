
import { useParams } from "react-router-dom";
import useInterceptors from "../../Hooks/useInterceptors";
import { useEffect, useState } from "react";

const Details = () => {

    const { id } = useParams()
    const [details, setDetails] = useState([])

    const jobDetails = useInterceptors()

    console.log(details);

    useEffect(() => {
        const getDetails = async () => {
            const { data } = await jobDetails.get(`/job/${id}`)
            setDetails(data)
        }
        getDetails()
    }, [jobDetails, id])



    return (
        <div>
            <h2>Details Page</h2>
        </div>
    );
};

export default Details;