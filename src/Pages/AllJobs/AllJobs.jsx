import { useEffect, useState } from "react";
import useInterceptors from "../../Hooks/useInterceptors";
import SingleJob from "./SingleJob";
import { Helmet } from 'react-helmet-async';


const AllJobs = () => {

    const axiosInstance = useInterceptors()
    const [allJobs, setAllJobs] = useState([])
    const [searchJob, setSearchJob] = useState('')

    useEffect(() => {
        (async () => {
            const { data } = await axiosInstance.get('/jobs')
            const matchedData = data.filter(singleData => singleData.job_title.toLowerCase().includes(searchJob.toLowerCase()));
            setAllJobs(matchedData)
        })()
    }, [axiosInstance, searchJob])


    return (
        <div>

            <Helmet>
                <title>
                    Job Hunt | All Jobs
                </title>
            </Helmet>

            <div className="mt-10">

                <h2 className="text-center font-bold my-3 text-2xl text-[#FF3811]">Search Your Desired Job</h2>


                <div className="lg:w-[50%] lg:mx-auto">
                    <div className="flex items-center flex-col md:flex-row gap-2 md:gap-0">
                        <input onChange={(e) => setSearchJob(e.target.value)} name="search" type="text" placeholder="Search your job..." className="input input-bordered input-warning w-full bg-transparent focus:outline-0 font-semibold" />
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="overflow-x-auto mt-10">
                    <table className="table">
                        <tbody>
                            {
                                allJobs.map(job => <SingleJob key={job._id} job={job}></SingleJob>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default AllJobs;