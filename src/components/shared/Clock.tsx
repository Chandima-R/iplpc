import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

const Clock = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 100);

        return () => clearInterval(intervalId);
    }, []);

    const formattedDateTime = format(currentDateTime, "MMM d, yyyy HH:mm:ss");

    return (
        <div className='flex flex-col justify-center w-full items-end'>
            <p className='text-4xl font-semibold'>{format(currentDateTime, "h:mm:ss a")}</p>
            <p className='text-2xl font-semibold'>{format(currentDateTime, "MMM d, yyyy")}</p>
        </div>
    );
};

export default Clock;
