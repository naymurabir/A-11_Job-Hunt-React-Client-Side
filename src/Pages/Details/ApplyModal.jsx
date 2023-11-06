
const ApplyModal = () => {

    return (
        <div>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box md:w-[400px]">
                    <h2 className="text-[#FF3811] text-center font-bold  text-lg mb-3">Apply a Job</h2>

                    <div className="text-center space-y-3">
                        <div>
                            <label className="label">
                                <span className="label-text font-semibold text-[#FF3811] px-3">Name </span>
                            </label>
                            <input type="text" placeholder="Name..." className="input input-bordered input-warning w-full max-w-xs bg-transparent focus:outline-0 text-sm" />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text font-semibold text-[#FF3811] px-3">Email </span>
                            </label>
                            <input type="text" placeholder="Email..." className="input input-bordered input-warning w-full max-w-xs bg-transparent focus:outline-0 text-sm" />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text font-semibold text-[#FF3811] px-3">Resume</span>
                            </label>
                            <input type="text" placeholder="Resume..." className="input input-bordered input-warning w-full max-w-xs bg-transparent focus:outline-0 text-sm" />
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
                </div>
            </div>
        </div>
    );
};

export default ApplyModal;