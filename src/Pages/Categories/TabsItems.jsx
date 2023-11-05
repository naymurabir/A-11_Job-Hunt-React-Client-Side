import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import './TabsItems.css'
import Categories from "./Categories";
import useInterceptors from "../../Hooks/useInterceptors";
import { useEffect, useState } from "react";


const TabsItems = () => {

    const [jobs, setJobs] = useState([])

    const axiosInstance = useInterceptors()

    useEffect(() => {
        const getJobs = async () => {
            const { data } = await axiosInstance.get('/jobs')
            console.log(data);
            setJobs(data)
        }
        getJobs()
    }, [axiosInstance])

    const OnSiteJob = jobs.filter(job => job.job_title === 'On Site Job')
    const remoteJob = jobs.filter(job => job.job_title === 'Remote Job')
    const hybridJob = jobs.filter(job => job.job_title === 'Hybrid')
    const partTimeJob = jobs.filter(job => job.job_title === 'Part Time')

    return (
        <div>
            <div>
                <div className="text-center my-5 md:my-5 lg:my-10 lg:w-3/4 mx-auto">
                    <h2 className="text-xl font-bold text-[#CE1446]">Jobs</h2>
                    <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800">Our Latest Jobs</h1>

                    <div className="mt-2">
                        <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                    </div>

                </div>
                <div>
                    <Tabs>
                        <TabList className="py-2 m-auto text-center">
                            <Tab>All Jobs</Tab>
                            <Tab>On Site Job</Tab>
                            <Tab>Remote Job</Tab>
                            <Tab>Hybrid</Tab>
                            <Tab>Part Time</Tab>
                            <hr className="w-[50%] mx-auto my-3" />
                        </TabList>

                        <TabPanel>
                            <Categories allJobs={jobs}></Categories>
                        </TabPanel>

                        <TabPanel>
                            <Categories allJobs={OnSiteJob}></Categories>
                        </TabPanel>

                        <TabPanel>
                            <Categories allJobs={remoteJob}></Categories>
                        </TabPanel>

                        <TabPanel>
                            <Categories allJobs={hybridJob}></Categories>
                        </TabPanel>

                        <TabPanel>
                            <Categories allJobs={partTimeJob}></Categories>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default TabsItems;