import PropTypes from 'prop-types';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import Swal from 'sweetalert2';



const Category = ({ job }) => {

    const { _id, author_name, job_title, posting_date, application_deadline, salary, applicants_number } = job

    const { user } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleViewDetails = () => {
        if (user) {
            navigate(`/details/${_id}`)
        } else {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'You have to log in first to view details',
                showConfirmButton: false,
                background: '#343436',
                heightAuto: '100px',
                color: 'white',
                timer: 2000
            })
            navigate(`/details/${_id}`)
        }
    }


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

                    <button onClick={handleViewDetails} className='text-white bg-[#FF3811] px-2 py-1 w-full rounded'>More Details</button>
                </div>
            </div>
        </div>
    );
};

Category.propTypes = {
    job: PropTypes.object.isRequired
}

export default Category;