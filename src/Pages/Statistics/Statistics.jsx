
const Statistics = () => {
    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-10 lg:gap-5 bg-[#FF3811] text-white px-5 py-5 md:py-10">
                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl  font-bold">15.5K+</h2>
                    <p className="text-sm mt-1">Jobs Available</p>
                </div>

                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl  font-bold">10.5K+</h2>
                    <p className="text-sm mt-1">New Jobs This Week!</p>
                </div>

                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl  font-bold">18.8K+</h2>
                    <p className="text-sm mt-1">Companies Hiring</p>
                </div>

                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-bold">25.2K+</h2>
                    <p className="text-sm mt-1">Candidates</p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;