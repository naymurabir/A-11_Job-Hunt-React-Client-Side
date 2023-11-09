import { useContext, useState } from "react";
import { format } from 'date-fns';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../Providers/AuthProviders";
import useInterceptors from "../../Hooks/useInterceptors";
import Swal from "sweetalert2";
import { Helmet } from 'react-helmet-async';


const AddJobs = () => {

    const { user } = useContext(AuthContext)
    const [selectedValue, setSelectedValue] = useState('')
    const [startDate, setStartDate] = useState(new Date());
    const axiosInstance = useInterceptors()

    const handleAddJob = async (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = user?.displayName
        const job_category = selectedValue
        const image = form.get('image')
        const email = user?.email
        const salary = form.get('salary')
        const job_title = form.get('job_title')
        const applicants_number = parseInt(form.get('applicants_number'))
        const posting_date = form.get('posting_date')
        const application_deadline = format(startDate, 'MM/dd/yyyy')
        const description = form.get('description')

        const newJob = { name, job_category, image, salary, job_title, applicants_number, posting_date, application_deadline, description, email }

        console.log(newJob);
        const { data } = await axiosInstance.post('/jobs', newJob)
        if (data.insertedId) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'A new Job has been added Successfully.',
                showConfirmButton: false,
                background: '#343436',
                heightAuto: '100px',
                color: 'white',
                timer: 2000
            })
            e.target.reset()
        }
    }

    return (
        <div>

            <Helmet>
                <title>
                    Job Hunt | Add Job
                </title>
            </Helmet>

            <div>
                <div className="my-5 text-center ">
                    <h2 className="text-2xl mb-3 text-[#ee4624] font-bold">Add A New Job</h2>
                    <hr className="w-[50%] mx-auto" />
                </div>
                <div className="md:w-3/4 lg:w-2/4 mx-auto text-center bg-[#FF3811] text-black px-5 py-4 my-10 rounded">

                    <div>
                        <form onSubmit={handleAddJob}>
                            <div className="flex flex-col md:flex-row gap-5">
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text font-semibold text-white">Name</span>
                                    </label>
                                    <input defaultValue={user?.displayName} type="text" name="name" placeholder="Name..." className="input input-bordered w-full text-sm max-w-xs focus:outline-0" />
                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text font-semibold text-white">Job Category </span>
                                    </label>

                                    <select
                                        id="input"
                                        name="job_category"
                                        className="input text-sm input-bordered w-full max-w-xs focus:outline-0 "
                                        value={selectedValue}
                                        onChange={(e) => setSelectedValue(e.target.value)}
                                    >
                                        <option>Select Option Job</option>
                                        <option value="On Site Job" >On Site Job</option>
                                        <option value="Remote Job">Remote Job</option>
                                        <option value="Hybrid">Hybrid</option>
                                        <option value="Part Time">Part Time</option>
                                    </select>

                                </div>

                            </div>

                            <div className="flex flex-col md:flex-row gap-5 mt-5">
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text font-semibold text-white">Image Url</span>
                                    </label>
                                    <input type="text" name="image" placeholder="Image Url..." className="input input-bordered w-full text-sm max-w-xs focus:outline-0" />
                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text font-semibold text-white">Salary</span>
                                    </label>
                                    <input type="number" name="salary" placeholder="Salary..." className="input input-bordered w-full text-sm max-w-xs focus:outline-0" />
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-5 mt-5">
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text font-semibold text-white">Job Title</span>
                                    </label>
                                    <input type="text" name="job_title" placeholder="Job Title..." className="input input-bordered w-full text-sm max-w-xs focus:outline-0" />
                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text font-semibold text-white">Applicants Number</span>
                                    </label>
                                    <input
                                        defaultValue={0}
                                        type="text" name="applicants_number" placeholder="Applicants Number..." className="input input-bordered w-full text-sm max-w-xs focus:outline-0" />
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-5 mt-5">
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text font-semibold text-white">Posting Date</span>
                                    </label>
                                    <input value={format(new Date(), 'MM/dd/yyyy')} className="focus:outline-0 input input-bordered w-full text-sm max-w-xs" type="text" name="posting_date" readOnly />
                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text font-semibold text-white">Deadline</span>
                                    </label>

                                    <DatePicker className=" focus:outline-0 input input-bordered w-full text-sm max-w-xs" name="application_deadline" selected={startDate} onChange={(date) => setStartDate(date)} />
                                </div>

                            </div>

                            <div >
                                <div className="mt-5">
                                    <label className="label">
                                        <span className="label-text font-semibold text-white">Description</span>
                                    </label>
                                    <textarea name="description" id="" cols="20" rows="5" placeholder="Description..." className="input focus:outline-0 input-bordered w-full  text-sm h-[100px]" ></textarea>
                                </div>
                            </div>

                            <button className="font-semibold bg-white text-[#ee4624] px-3 py-1 rounded w-full mt-3">Add A Job</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddJobs;