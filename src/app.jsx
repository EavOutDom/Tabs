import React, { useEffect, useState } from "react";

const url = "https://course-api.com/react-tabs-project";
const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [value, setValue] = useState(0);
    const fetchData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setJobs(data);
        setIsLoading(false);
        console.log(data);
    };
    useEffect(() => {
        fetchData();
    }, []);
    if (isLoading) {
        return (
            <div
                className="fixed top-2/4 left-2/4
             translate-x-[-50%] translate-y-[-50%]"
            >
                <h2 className="font-bold text-3xl">Loading...</h2>
            </div>
        );
    }
    const { company, dates, duties, id, order, title } = jobs[value];
    return (
        <div className={'px-2'}>
            <div className="mt-10 md:text-2xl text-xl duration-500 font-bold text-center">
                Experience
            </div>
            <div className="h-1 bg-yellow-300 md:w-36 w-28 duration-500 my-1 mx-auto"></div>
            <div className="md:flex justify-center mt-8 mx-auto">
                <div className="flex md:flex-col w-40">
                    {jobs.map((data, index) => {
                        return (
                            <button onClick={() => setValue(index)}
                              className={`text-start mx-2 hover:shadow-md hover:text-yellow-400 p-1 ${value === index && 'text-yellow-400 shadow-md'}`}
                            >
                                {data.company}
                            </button>
                        );
                    })}
                </div>
                <div className="">
                    <h2 className="font-bold">{title}</h2>
                    <h3 className="bg-yellow-300 table text-[10px] p-1 rounded-sm my-2 text-white">
                        {company}
                    </h3>
                    <p className="text-[10px] text-gray-500">{dates}</p>

                    <div>
                        {duties.map((data, index) => {
                            return (
                                <div key={index} className="my-3">
                                    <div className="flex">
                                        <p className="mr-8 text-lg text-yellow-400">
                                            »
                                        </p>
                                        <p className={'w-3/4'}>{data}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
