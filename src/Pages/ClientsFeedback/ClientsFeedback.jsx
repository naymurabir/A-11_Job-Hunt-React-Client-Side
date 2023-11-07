
const ClientsFeedback = () => {
    return (

        <div>
            <div className="text-center">
                <h2 className="text-3xl font-bold text-[#FF3811]">What our clients are saying</h2>
                <p className="text-sm font-semibold mt-2">Discover the voices of our delighted clients, as they share their remarkable experiences, <br /> success stories, and genuine feedback, highlighting the unparalleled quality of our products/services.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                <div className="card card-compact bg-base-100 shadow-lg px-5 mt-10 py-5">
                    <p className="text-base font-semibold">I can not express how pleased I am with the exceptional service provided by Job Hunt. Their professionalism, dedication, and expertise have made a profound and positive impact on my career. The results I have seen since partnering with them have been nothing short of remarkable. I highly recommend Job Hunt to anyone seeking top-quality jobs that truly cares about their clients success.</p>
                    <div className="card-body">
                        <div className="flex gap-5 items-center">
                            <div>
                                <img className="w-16 h-16 rounded-full" src="https://i.ibb.co/FVRRdhm/feedback4.jpg" alt="" />
                            </div>

                            <div>
                                <h2 className="text-sm font-bold">Naymur Rahman Abir</h2>
                                <h3 className="text-sm font-semibold text-[#FF3811]">Software Engineer</h3>

                                <div className="rating mt-1">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF3811]" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF3811]" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF3811]" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF3811]" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF3811]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card card-compact bg-base-100 shadow-lg px-5 mt-10 py-5">
                    <p className="text-base font-semibold">My experience with Job Hunt has revolutionized my job search. Their teams in-depth knowledge and unwavering support have been invaluable to me. I have seen a remarkable transformation in my career prospects, all thanks to their commitment to excellence in the job market. Job Hunt is not just a job placement service.</p>
                    <div className="card-body">
                        <div className="flex gap-5 items-center">
                            <div>
                                <img className="w-16 h-16 rounded-full" src="https://i.ibb.co/JKWRPs0/feedback2.jpg" alt="" />
                            </div>

                            <div>
                                <h2 className="text-sm font-bold">Sinthiya Tabassum</h2>
                                <h3 className="text-sm font-semibold text-[#FF3811]">Sales Executive</h3>

                                <div className="rating mt-1">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF3811]" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF3811]" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF3811]" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF3811]" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF3811]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card card-compact bg-base-100 shadow-lg px-5 mt-10 py-5">
                    <p className="text-base font-semibold">I am incredibly grateful to Job Hunt for their role in my job search. Their professional guidance and job matching expertise have had a profound impact on my career. The opportunities they have provided are truly remarkable. If you are seeking high-quality job placements and a partner genuinely invested in your career success, I wholeheartedly recommend Job Hunt.</p>
                    <div className="card-body">
                        <div className="flex gap-5 items-center">
                            <div>
                                <img className="w-16 h-16 rounded-full" src="https://i.ibb.co/ByMNkvL/feedback1.jpg" alt="" />
                            </div>

                            <div>
                                <h2 className="text-sm font-bold">Rakibul Hasan Shemul</h2>
                                <h3 className="text-sm font-semibold text-[#FF3811]">Graphics Designer</h3>

                                <div className="rating mt-1">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF3811]" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF3811]" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF3811]" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF3811]" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FF3811]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientsFeedback;