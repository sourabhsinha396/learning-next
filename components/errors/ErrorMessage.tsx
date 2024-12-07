import { PropsWithChildren, React, ReactNode } from 'react'


const ErrorMessage = ({ children }: PropsWithChildren) => {
    return (
        <div>
            <p className='text-rose-300'>{children}</p>
        </div>
    )
}

export default ErrorMessage
