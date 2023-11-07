import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import swal from "sweetalert";
import 'cooltipz-css'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navLinks = <>
        <NavLink to="/" className="text-base lg:text-white mr-3 font-semibold">Home</NavLink>

        <NavLink to="/allJobs" className="text-base lg:text-white mr-3 font-semibold">All Jobs</NavLink>

        <NavLink to="/blogs" className="text-base lg:text-white mr-3 font-semibold">Blogs</NavLink>

        {
            user ? <>  <NavLink to="/addJob" className="text-base lg:text-white mr-3 font-semibold">Add A Job</NavLink>

                <NavLink to="/myJobs" className="text-base lg:text-white mr-3 font-semibold">My Jobs</NavLink>

                <NavLink to="/appliedJobs" className="text-base lg:text-white mr-3 font-semibold">Applied Jobs</NavLink> </> : ''
        }

    </>

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Logout Successful',
                    showConfirmButton: false,
                    background: '#343436',
                    heightAuto: '100px',
                    color: 'white',
                    timer: 2000
                })
            })
            .catch(error => {
                console.log();
                swal(error.message)
            })
    }

    return (
        <nav className="navbar bg-[#FF3811]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex items-center gap-2 text-center">
                    <img className="w-16" src="https://i.ibb.co/d6SQQ94/jobLogo.png" alt="" />
                    <h2 className="text-lg text-white font-bold hidden md:block">Job Hunt</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex items-center gap-2">

                    {
                        user ? <div className="flex gap-2">
                            <div aria-label={user?.displayName} data-cooltipz-dir="bottom" className="flex items-center gap-2">
                                <img className="w-10 h-10 rounded-full hidden md:block" src={user?.photoURL} alt="" referrerPolicy="no-referrer" /> </div>

                            <div className="flex items-center gap-1">
                                <button onClick={handleLogOut} className="bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-200 ">Log Out</button>
                            </div>
                        </div>

                            :
                            <div className="flex items-center gap-2">
                                <label >
                                    {/* <div className="w-10 rounded-full hidden md:block">
                                        <img src={userImg} />
                                    </div> */}
                                </label>

                                <Link to="/login">
                                    <button className="bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-200 ">Login</button>
                                </Link>
                            </div>

                    }

                </div>
            </div>
        </nav >
    );
};

export default Navbar;