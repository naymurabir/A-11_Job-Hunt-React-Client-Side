import PropTypes from 'prop-types';


const Category = ({ job }) => {

    const { author_name, job_title, posting_date, application_deadline, salary, applicants_number } = job

    return (
        <div>
            <div className="card bg-base-100 shadow-md my-5 lg:my-10 border border-[#FF3811]">
                <div className="card-body">
                    <h2 className='text-2xl font-bold text-center text-[#FF3811]'> {job_title} </h2>
                    <hr />
                    <h2 className='text-base font-semibold'> Posted By: {author_name} </h2>

                    <div className='flex justify-between'>
                        <div>
                            <h3 className='text-base font-semibold'>Post date:</h3>
                            <p>{posting_date}</p>
                        </div>
                        <div>
                            <h3 className='text-base font-semibold'> Deadline:</h3>
                            <p>{application_deadline}</p>
                        </div>
                    </div>

                    <div className='flex justify-between'>
                        <h3 className='text-base font-semibold'> Salary: ${salary} </h3>
                        <h3 className='text-base font-semibold'> Applicants: {applicants_number}</h3>
                    </div>
                    <button className='text-white bg-[#FF3811] px-2 py-1 w-full rounded'>More Details</button>
                </div>
            </div>
        </div>
    );
};

Category.propTypes = {
    job: PropTypes.object.isRequired
}

export default Category;