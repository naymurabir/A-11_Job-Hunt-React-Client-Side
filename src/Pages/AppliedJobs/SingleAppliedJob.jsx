import PropTypes from 'prop-types';

const SingleAppliedJob = ({ appliedCategoryJob }) => {

    const { name, job_title, posting_date, application_deadline, salary, image, job_category } = appliedCategoryJob

    return (
        <>
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="w-[80px] h-[80px]  rounded-full">
                                <img src={image} />
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className='text-base font-semibold truncate text-[#FF3811]'>{job_title}</div>
                                <div className="text-sm font-semibold text-black">{name}</div>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <h1 className='text-base font-semibold text-[#FF3811]'>Posting Date</h1>
                    <h1 className='font-semibold text-black'>{posting_date}</h1>
                </td>
                <td>
                    <h1 className='text-base font-semibold text-[#FF3811]'>Application Deadline</h1>
                    <h1 className='font-semibold text-black'>{application_deadline}</h1>
                </td>

                <td>
                    <h1 className='text-base font-semibold text-[#FF3811]'>Salary: </h1> <h2 className='font-semibold text-black'>{salary}</h2>
                </td>
                <td>
                    <h1 className='text-base font-semibold text-[#FF3811]'>Job Category:  </h1> <h2 className='font-semibold text-black'>{job_category}</h2>
                </td>
            </tr>
        </>
    );
};

SingleAppliedJob.propTypes = {
    appliedCategoryJob: PropTypes.object.isRequired
}

export default SingleAppliedJob;