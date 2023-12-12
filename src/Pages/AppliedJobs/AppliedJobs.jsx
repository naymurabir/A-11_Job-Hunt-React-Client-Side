import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useInterceptors from '../../Hooks/useInterceptors';
import { AuthContext } from '../Providers/AuthProviders';
import SingleAppliedJob from './SingleAppliedJob';


const AppliedJobs = () => {

    const { user } = useContext(AuthContext)

    const axiosInstance = useInterceptors()

    const [categoryJob, setCategoryJob] = useState('')

    const [appliedCategoryJobs, setAppliedCategoryJobs] = useState([])

    useEffect(() => {
        (async () => {
            const { data } = await axiosInstance.get(`/jobApply?email=${user?.email}`)
            const matchedJob = data.filter(singleData => singleData.job_category.toLowerCase().includes(categoryJob.toLowerCase()));
            setAppliedCategoryJobs(matchedJob)
        })()
    }, [categoryJob, axiosInstance, user?.email])

    return (
        <div>

            <Helmet>
                <title>
                    Job Hunt | Applied Jobs
                </title>
            </Helmet>

            <div className='mt-5 flex justify-center'>
                <select onChange={(e) => setCategoryJob(e.target.value)} className="select select-warning w-full max-w-xs focus:outline-0 font-semibold text-[#FF3811]">
                    <option disabled selected >Select Job Category</option>
                    <option value="On Site Job" >On Site Job</option>
                    <option value="Remote Job">Remote Job</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Part Time">Part Time</option>
                </select>
            </div>

            <div className="flex justify-center">
                <div className="overflow-x-auto mt-10">
                    <table className="table">
                        <tbody>
                            {
                                appliedCategoryJobs.map(appliedCategoryJob => <SingleAppliedJob key={appliedCategoryJob._id} appliedCategoryJob={appliedCategoryJob} ></SingleAppliedJob>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;