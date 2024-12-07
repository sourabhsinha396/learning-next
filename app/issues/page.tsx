'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import dynamic from 'next/dynamic'

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), {
    ssr: false,
    loading: () => <p>Loading...</p>  // Optional: to show a loading message while the component loads
})

import 'easymde/dist/easymde.min.css'

const Issues = () => {
    return (
        <div className='w-6/12 mx-auto'>
            <h1 className='font-extrabold tracking-normal text-gray-700'>Report an Issue</h1>
            <Input placeholder='Title' className='my-4' />
            <SimpleMDE placeholder='What is the issue?' />
            <Button className='mt-4'>Submit</Button>
        </div>
    )
}

export default Issues
