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
        <div>
            <div className="mt-10 text-2xl font-bold text-center">
                Experience
            </div>
            <div className="h-1 bg-yellow-300 w-36 my-1 mx-auto"></div>
            <div className="flex justify-center mt-8 mx-auto">
                <div className="flex flex-col w-40">
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
                <div className="w-[600px] max-w-[700px]">
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
                                        <p>{data}</p>
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
