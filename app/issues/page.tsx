'use client'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'

import { Table, TableHeader, TableBody, TableRow } from '@/components/ui/table';


interface Issue {
    title: string;
    description: string;
}

const IssueList = () => {
    const [issues, setIssues] = useState<Issue[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchIssues = async () => {
            const response = await axios.get('https://run.mocky.io/v3/b451e189-bcf6-4b9e-b545-dfebc9f4fa1d');
            setIssues(response.data);
            setLoading(false);
        }
        fetchIssues();
    }, []);


    return (
        <div className="p-6 w-8/12 mx-auto">
            <h1 className="text-3xl font-extrabold text-gray-700 mb-4">Issues</h1>
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
                            <td className="py-2 px-4">{issue.title}</td>
                            <td className="py-2 px-4">{issue.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default IssueList
