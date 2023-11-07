import findJobImg from '../../assets/findJob.svg'
import postJob from '../../assets/postJob.svg'
import applyJob from '../../assets/appliedJob.svg'
import browseImg from '../../assets/browseImg.svg'


const OurServices = () => {
    return (
        <div className='my-5'>
            <div className="bg-[#FF3811] text-white px-5 py-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Our Services</h1>
                    <p className='text-sm'>Job Hunt is your go-to resource for job seekers and employers. <br /> Find your ideal job, post job openings, and bring talent and opportunity together.</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5 py-10'>

                    <div className='flex flex-col items-center text-center'>
                        <div className='w-[80px] h-[80px] rounded-full bg-white flex justify-center items-center'>
                            <img src={findJobImg} alt="" />
                        </div>

                        <div>
                            <h2 className='text-2xl font-semibold mt-2'>Find A Job</h2>
                            <p className='text-sm mt-1'>Welcome to Job Hunt, your trusted online resource for job seekers and employers. Discover a wide range of job opportunities in various industries, connect with top companies, and take the next step in your career.</p>
                        </div>
                    </div>

                    <div className='flex flex-col items-center text-center'>
                        <div className='w-[80px] h-[80px] rounded-full bg-white flex justify-center items-center'>
                            <img src={postJob} alt="" />
                        </div>

                        <div>
                            <h2 className='text-2xl font-semibold mt-2'>Post A Job</h2>
                            <p className='text-sm mt-1'>If you are looking to hire talented professionals for your organization, you have come to the right place.This is your trusted source for connecting with potential candidates who can help your business thrive..</p>
                        </div>
                    </div>

                    <div className='flex flex-col items-center text-center'>
                        <div className='w-[80px] h-[80px] rounded-full bg-white flex justify-center items-center'>
                            <img src={applyJob} alt="" />
                        </div>

                        <div>
                            <h2 className='text-2xl font-semibold mt-2'>Apply A Job</h2>
                            <p className='text-sm mt-1'> Explore our extensive job listings to find positions that match your skills and interests. Use our search and filtering tools to narrow down your options. Your are on the right place as well as.</p>
                        </div>
                    </div>

                    <div className='flex flex-col items-center text-center'>
                        <div className='w-[80px] h-[80px] rounded-full bg-white flex justify-center items-center'>
                            <img src={browseImg} alt="" />
                        </div>

                        <div>
                            <h2 className='text-2xl font-semibold mt-2'>Browse by category</h2>
                            <p className='text-sm mt-1'>Explore job listings based on specific categories to streamline your search. We offer a wide range of categories, from technology and healthcare to finance and education. Our category filters to quickly find jobs. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;