
const Banner = () => {
    return (
        <div className="hero h-[400px] md:h-[400px] lg:h-[450px]" style={{ backgroundImage: 'url(https://i.ibb.co/L9psZ84/banner1.jpg)' }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-4xl text-white font-bold">Explore, Apply, Succeed</h1>
                    <p className="mb-5 text-white">Your journey to career success begins here. Explore jobs, apply confidently, and start succeeding.</p>

                    <div className="flex items-center flex-col md:flex-row gap-2 md:gap-0">
                        <input type="text" placeholder="Search job..." className="input input-bordered input-warning w-full max-w-xs bg-transparent" />

                        <button className="btn btn-outline btn-warning">Search Job</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;