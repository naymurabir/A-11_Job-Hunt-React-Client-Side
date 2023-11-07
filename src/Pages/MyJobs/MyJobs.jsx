import { ThreeDots } from "react-loader-spinner";
import useMyJobs from "../../Hooks/useMyJobs";
import MyJob from "./MyJob";
import { Helmet } from 'react-helmet-async';

const MyJobs = () => {

    const { jobs, isPending } = useMyJobs()

    if (isPending) {
        return <div className="text-center flex justify-center items-center">
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="red"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    }

    return (
        <div>

            <Helmet>
                <title>
                    Job Hunt | My Jobs
                </title>
            </Helmet>

            <div className="flex justify-center">
                <div className="overflow-x-auto mt-10">
                    <table className="table">
                        <tbody>
                            {
                                jobs?.map(job => <MyJob key={job._id} job={job}></MyJob>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyJobs;