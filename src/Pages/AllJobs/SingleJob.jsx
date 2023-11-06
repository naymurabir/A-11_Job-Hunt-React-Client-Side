import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const SingleJob = ({ job }) => {

    const { _id, name, job_title, posting_date, application_deadline, salary, image, applicants_number } = job

    const navigate = useNavigate()

    return (
        <>
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="w-[60px] h-[60px] rounded-md">
                                <img src={image} />
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className='text-base font-semibold truncate text-[#FF3811]'>{job_title}</div>
                                <div className="text-sm font-semibold">{name}</div>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <h1 className='text-base font-semibold text-[#FF3811]'>Posting Date</h1>
                    <h1 className='font-semibold'>{posting_date}</h1>
                </td>
                <td>
                    <h1 className='text-base font-semibold text-[#FF3811]'>Application Deadline</h1>
                    <h1 className='font-semibold'>{application_deadline}</h1>
                </td>

                <td>
                    <h1><span className='text-base font-semibold text-[#FF3811]'>Salary</span>: {salary}</h1>
                    <h1><span className='text-base font-semibold text-[#FF3811]'>Applicants</span>:{applicants_number}</h1>
                </td>
                <td>
                    <button onClick={() => navigate(`/details/${_id}`)} className='bg-[#FF3811] text-white py-2 px-5 rounded-sm font-semibold'>Details</button>
                </td>
            </tr>
        </>
    );
};

SingleJob.propTypes = {
    job: PropTypes.object.isRequired
}

export default SingleJob;