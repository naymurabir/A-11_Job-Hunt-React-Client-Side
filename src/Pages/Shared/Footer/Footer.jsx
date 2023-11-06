import { FaFacebookF, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='bg-[#FF3811]'>
            <footer className="footer p-10   text-white">
                <nav>
                    <header className="text-white text-lg font-bold">Services</header>
                    <a className="link link-hover">Job Searching</a>
                    <a className="link link-hover">Job Categories</a>
                    <a className="link link-hover">Company Profiles</a>
                    <a className="link link-hover">Career Resources</a>
                </nav>
                <nav>
                    <header className="text-white text-lg font-bold">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Blogs</a>
                </nav>
                <nav>
                    <header className="text-white text-lg font-bold">Legal</header>
                    <a className="link link-hover">Report an Issue</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Feedback</a>
                </nav>
            </footer>

            <div>
                <div className="footer px-10 py-4 border-t bg-[#FF3811] text-white border-base-300">
                    <aside className="items-center grid-flow-col">
                        <img className="w-16" src="https://i.ibb.co/d6SQQ94/jobLogo.png" alt="" />
                        <p>Job Hunt<br />Providing reliable job services from 2023 <br /> Dhanmondi, Dhaka, Bangladesh</p>
                    </aside>
                    <div className="md:place-self-center md:justify-self-end">
                        <div className="grid grid-flow-col gap-4">
                            <Link> <FaLinkedin className='text-3xl'></FaLinkedin> </Link>
                            <Link><FaYoutube className='text-3xl'></FaYoutube></Link>
                            <Link><FaFacebookF className='text-3xl'></FaFacebookF></Link>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className=' text-center text-white font-semibold text-sm'>Copyright © 2023 - All right reserved by Job Hunt</h2>
        </div>
    );
};

export default Footer;