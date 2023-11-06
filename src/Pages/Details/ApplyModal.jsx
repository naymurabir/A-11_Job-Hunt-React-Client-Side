import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import PropTypes from 'prop-types';
import useInterceptors from "../../Hooks/useInterceptors";
import Swal from "sweetalert2";


const ApplyModal = ({ details }) => {

    const axiosInstance = useInterceptors()

    const { application_deadline, email, _id } = details

    const { user } = useContext(AuthContext)

    const handleApplyForm = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = user?.displayName
        const currentUserEmail = user?.email
        const resume = form.get('resume')
        const applyId = _id
        const currentDate = new Date()
        const deadLineDate = new Date(Date.parse(application_deadline))

        if (currentDate > deadLineDate) {
            alert("Deadline is over.")
        } else {
            if (email !== currentUserEmail) {
                const newForm = {
                    name, email: currentUserEmail, resume, applyId
                }

                axiosInstance.post('/jobApply', newForm)
                    .then(result => {
                        console.log(result.data);
                        if (result.data.insertedId) {
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'You have successfully applied the Job.',
                                showConfirmButton: false,
                                background: '#343436',
                                heightAuto: '100px',
                                color: 'white',
                                timer: 2000
                            })
                            e.target.reset()
                        }

                    })

            } else {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'You can not apply your own posted job.',
                    showConfirmButton: false,
                    background: '#343436',
                    heightAuto: '100px',
                    color: 'white',
                    timer: 2000
                })
            }
        }
    }

    return (
        <div>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box md:w-[400px]">
                    <h2 className="text-[#FF3811] text-center font-bold  text-lg mb-3">Apply a Job</h2>

                    <form onSubmit={handleApplyForm}>
                        <div className="text-center space-y-3">
                            <div>
                                <label className="label">
                                    <span className="label-text font-semibold text-[#FF3811] px-3">Name </span>
                                </label>
                                <input name="name" defaultValue={user?.displayName} type="text" placeholder="Name..." className="input input-bordered input-warning w-full max-w-xs bg-transparent focus:outline-0 text-sm" />
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text font-semibold text-[#FF3811] px-3">Email </span>
                                </label>
                                <input name="email" defaultValue={user?.email} type="text" placeholder="Email..." className="input input-bordered input-warning w-full max-w-xs bg-transparent focus:outline-0 text-sm" />
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text font-semibold text-[#FF3811] px-3">Resume</span>
                                </label>
                                <input name="resume" type="text" placeholder="Resume..." className="input input-bordered input-warning w-full max-w-xs bg-transparent focus:outline-0 text-sm" />
                            </div>
                        </div>

                        <div className="flex justify-center items-center gap-4">
                            <div>
                                <button className='text-white bg-[#FF3811] px-2 py-1 rounded mt-2'>Submit </button>
                            </div>
                            <div className="modal-action text-white bg-[#FF3811] px-2 py-1 rounded mt-2">
                                <label htmlFor="my_modal_6" className=''>Close!</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};


ApplyModal.propTypes = {
    details: PropTypes.object.isRequired
}

export default ApplyModal;