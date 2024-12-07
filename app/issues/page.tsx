'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import dynamic from 'next/dynamic'
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';

import 'easymde/dist/easymde.min.css'
import { useRouter } from 'next/navigation';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"



const SimpleMDE = dynamic(() => import('react-simplemde-editor'), {
    ssr: false,
    loading: () => <p>Loading...</p>  // Optional: to show a loading message while the component loads
})

interface IssueForm {
    title: string;
    description: string;
}


const Issues = () => {
    const { register, control, handleSubmit } = useForm<IssueForm>();
    const router = useRouter();
    const [alertTitle, setAlertTitle] = useState('');
    const [alertDescription, setAlertDescription] = useState('');

    const onSubmit = async (data: IssueForm) => {
        try {
            console.log('Submitting the form:', data);
            const response = await axios.post('https://api.example.com/aiinterview', data);
            console.log('Response:', response.data);
            router.push('/');
        } catch (error) {
            console.error('Error submitting the form:', error);
            setAlertTitle('Error');
            setAlertDescription('There was an error submitting the form. Please try again later.');
        }
    };

    return (
        <>
            {alertTitle && alertDescription && (
                <Alert variant="custom" className='mx-auto'>
                    <AlertTitle>{alertTitle}</AlertTitle>
                    <AlertDescription>{alertDescription}</AlertDescription>
                </Alert>
            )}
            <form className='w-6/12 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='font-extrabold tracking-normal text-gray-700'>Report an Issue</h1>
                <Input placeholder='Title' className='my-4' {...register('title')} />
                <Controller
                    name='description'
                    control={control}
                    render={({ field }) => <SimpleMDE placeholder='What is the issue?' {...field} />}
                />
                <Button className='mt-4'>Submit</Button>
            </form>
        </>
    )
}

export default Issues
