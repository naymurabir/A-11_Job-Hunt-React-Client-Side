import img1 from '../../assets/JobTexts/svg1.svg'
import img2 from '../../assets/JobTexts/svg2.svg'
import img3 from '../../assets/JobTexts/svg3.svg'
import img4 from '../../assets/JobTexts/svg4.svg'
import banner from '../../assets/banner.jpg'



const WhatYouDoWithJobHunt = () => {
    return (
        <div>

            <div className="text-center mt-10">
                <h2 className="text-3xl font-bold text-[#FF3811]">What can I do with Job Hunt</h2>
                <p className="text-sm font-semibold mt-2">Streamline your hiring process with strategic channels to reach qualified candidates</p>
            </div>

            <div className='py-5 lg:py-10'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div>
                        <img className='w-full h-[300px] md:h-[400px]' src={banner} alt="part Time jobs" />
                    </div>
                    <div className='bg-[#F1F5F8] overflow-hidden'>
                        <div className='p-10'>
                            <br />
                            <div className='space-y-10 lg:space-y-4'>
                                <div className='flex-row text-center lg:text-left lg:flex gap-2'>
                                    <img className='m-auto lg:m-0' src={img1} alt="" />
                                    <div>
                                        <h1 className='text-lg font-semibold'>Reduce Hiring Bias</h1>
                                        <p className='text-sm'>Structured digital interviews increase the predictive validity of your hires</p>
                                    </div>
                                </div>
                                <div className='flex-row text-center lg:text-left lg:flex gap-2'>
                                    <img className='m-auto lg:m-0' src={img2} alt="" />
                                    <div>
                                        <h1 className='text-lg font-semibold'>Save Time & Headspace</h1>
                                        <p className='text-sm'>Reduce your time-to-hire by up to 80% and free up head space for other HR priorities.</p>
                                    </div>
                                </div>
                                <div className='flex-row text-center lg:text-left lg:flex gap-2'>
                                    <img className='m-auto lg:m-0' src={img3} alt="" />
                                    <div>
                                        <h1 className='text-lg font-semibold'>Minimize Environmental Impact</h1>
                                        <p className='text-sm'>Did you know? U.S. office workers use ~10,000 sheets of paper every year</p>
                                    </div>
                                </div>
                                <div className='flex-row text-center lg:text-left lg:flex gap-2'>
                                    <img className='m-auto lg:m-0' src={img4} alt="" />
                                    <div>
                                        <h1 className='text-lg font-semibold'>Save Money</h1>
                                        <p className='text-sm'>Interview more candidates, more quickly  and still save money.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatYouDoWithJobHunt;