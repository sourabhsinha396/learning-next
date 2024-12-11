'use client'
import React from 'react'
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LoadingIssues = () => {
    const [issues, setIssues] = useState([
        'Issue 1',
        'Issue 2',
        'Issue 3',
        'Issue 4',
    ]);

    return (
        <div className="p-6 w-8/12 mx-auto">
            <h1 className="text-3xl font-extrabold text-gray-700 mb-4">Issues</h1>
            <p>Loading...</p>
            <table className="table-auto border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-gray-200 text-gray-600">
                    <tr>
                        <th className="py-2 px-4 text-left">Title</th>
                        <th className="py-2 px-4 text-left">Description</th>
                    </tr>
                </thead>
                <tbody className="text-gray-800">
                    {issues.map((issue, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                            <Skeleton />
                            <Skeleton />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default LoadingIssues
