import { useParams } from "react-router-dom";
import useInterceptors from "../../Hooks/useInterceptors";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import ApplyModal from "./ApplyModal";
import { Helmet } from 'react-helmet-async';

const Details = () => {

    const [applyJob, setApplyJob] = useState([])

    const { user } = useContext(AuthContext)

    const { id } = useParams()
    const [details, setDetails] = useState([])

    const jobDetails = useInterceptors()

    useEffect(() => {
        const getDetails = async () => {
            const { data } = await jobDetails.get(`/job/${id}`)
            setDetails(data)
        }
        getDetails()
    }, [jobDetails, id])


    const { name, email, image, job_title, description, salary, applicants_number, job_category
    } = details

    return (
        <div>

            <Helmet>
                <title>
                    Job Hunt | Details
                </title>
            </Helmet>

            <div>
                <div className="flex flex-col lg:flex-row gap-5 md:gap-10 my-5 lg:my-10">
                    <div className="lg:w-[60%]">
                        <img className="w-full h-[200px] md:h-[350px] lg:h-[400px] rounded " src={image} alt="" />
                    </div>
                    <div className="lg:w-[40%]">

                        <div className="flex flex-col justify-center items-center mb-5">
                            <div>
                                <img className="w-20 h-20 rounded-full" src={user?.photoURL} alt="" />
                            </div>
                            <div className="text-center">
                                <h2 className="text-xl font-semibold ">{name}</h2>
                                <h3 className="text-sm  ">{email}</h3>
                            </div>
                        </div>

                        <h2 className="className='text-2xl md:text-3xl lg:text-4xl font-bold text-[#FF3811]">{job_title}</h2>
                        <hr className="my-3" />
                        <p className="className='text-sm text-gray-900 mt-3 text-justify font-semibold'"> {description} </p>
                        <h2 className="text-xl font-bold">Job Category: {job_category} </h2>
                        <h3 className='text-xl font-semibold flex items-center mt-2'> Salary: <span className="text-lg ml-1"> ${salary}</span>  </h3>
                        <h3 className="text-xl font-semibold"> No. Of Applicants: <span className="text-lg">{applicants_number}</span> </h3>

                        <div>
                            <button onClick={() => setApplyJob(details)} className='text-white bg-[#FF3811] px-5 py-1 rounded mt-2'> <label htmlFor="my_modal_6" className="font-semibold">Apply Now</label></button>
                        </div>
                    </div>
                </div>
            </div>
            {applyJob && <ApplyModal applyJob={applyJob}></ApplyModal>}
        </div>
    );
};

export default Details;