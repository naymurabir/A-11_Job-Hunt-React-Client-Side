import { useContext, } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import PropTypes from 'prop-types';
import useInterceptors from "../../Hooks/useInterceptors";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';


const ApplyModal = ({ applyJob }) => {

    const axiosInstance = useInterceptors()

    const { user } = useContext(AuthContext)

    const { _id: jobId, name, job_category, image, salary, job_title, applicants_number, posting_date, application_deadline, description, email } = applyJob

    const handleApplyForm = e => {

        e.preventDefault()

        const form = new FormData(e.currentTarget)
        const applyName = user?.displayName
        const applyEmail = user?.email
        const applyResume = form.get('resume')
        const currentDate = new Date()
        const deadLineDate = new Date(Date.parse(application_deadline))

        const templateParams = {
            from_name: applyName,
            from_email: applyEmail,
            message: "Congratulations!! You have successfully applied for the job. Our team will contact with you soon. Best wishes."
        }

        console.log(templateParams);

        if (currentDate > deadLineDate) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Deadline is over to apply this Job.',
                showConfirmButton: false,
                background: '#343436',
                heightAuto: '100px',
                color: 'white',
                timer: 2000
            })
        } else {
            if (email !== applyEmail) {
                const newForm = {
                    applyName, applyEmail, applyResume, name, job_category, image, salary, job_title, applicants_number, posting_date, application_deadline, description, email, jobId
                }

                console.log(newForm);

                axiosInstance.post('/jobApply', newForm)
                    .then(result => {
                        console.log(result.data);
                        if (result.data.insertedId) {

                            // Email JS------------------------------------
                            emailjs.send('service_11kk9iq', 'template_nomzrht', templateParams, 'OODnN_JBcfByZ2M0F')
                                .then((response) => {
                                    console.log('SUCCESS!', response.status, response.text);
                                }, (err) => {
                                    console.log('FAILED...', err);
                                });
                            // ------------------------------------

                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'You have successfully applied the Job. An confirmation mail has been sent.',
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
    applyJob: PropTypes.object.isRequired
}

export default ApplyModal;