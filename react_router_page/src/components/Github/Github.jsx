// import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    // const data=useLoaderData()
    const repos = useLoaderData();

    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data);
    //         });
    // }, []);

    // Mapping repo names to their deployed URLs
    const deployedLinks = {
        "Basic_React_Projects": "https://ask3002.github.io/Basic_React_Projects/",
        "BASIC_PROJECTS_HTML_CSS_JS": "https://ask3002.github.io/BASIC_PROJECTS_HTML_CSS_JS/"
    };

    return (
        <div className="text-center m-4 bg-gray-900 text-white p-6 min-h-screen">
            <h1 className="text-4xl font-bold mb-6">My GitHub Repositories</h1>

            {repos && repos.length > 0 ? (
                <ul className="space-y-6">
                    {repos.map((repo) => {
                        const deployedLink = deployedLinks[repo.name];

                        return (
                            <li key={repo.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
                                <a
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:underline text-2xl font-semibold"
                                >
                                    {repo.name}
                                </a>

                                {deployedLink && (
                                    <div className="mt-2">
                                        <a
                                            href={deployedLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
                                        >
                                            See Deployed Project
                                        </a>
                                    </div>
                                )}
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <p>Loading or No Repos Found...</p>
            )}
        </div>
    );
}


export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ASK3002/repos')
    return response.json()
} 
