import { ThreeDots } from "react-loader-spinner";
import useMyJobs from "../../Hooks/useMyJobs";
import MyJob from "./MyJob";
import { Helmet } from 'react-helmet-async';
import useInterceptors from "../../Hooks/useInterceptors";
import swal from "sweetalert";



const MyJobs = () => {

    const { jobs, isPending, refetch } = useMyJobs()
    const axiosInstance = useInterceptors()

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

    const handleDeleteMyJobs = (id) => {

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axiosInstance.delete(`/myJobs/${id}`)
                        .then(data => {
                            refetch()
                            if (data.data.deletedCount > 0)
                                swal("The Job has been deleted successfully.", {
                                    icon: "success",
                                });
                        })

                } else {
                    swal("Your file is safe!");
                }
            });

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
                                jobs?.map(job => <MyJob key={job._id} job={job} handleDeleteMyJobs={handleDeleteMyJobs}></MyJob>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyJobs;