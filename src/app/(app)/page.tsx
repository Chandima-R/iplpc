'use client'

import {CustomCalendar} from "@/components/shared/CustomCalendar";

export default function Home() {
    const handleDayClick = (day: Date) => {
        console.log(222, day)
    }
  return (
   <div className={''}>
       <div className={'mb-4'}>
           <h1 className={'text-3xl font-semibold'}>Dashboard</h1>
           <p className={'text-semibold'}>View your every details here.</p>
       </div>
      <div className={'flex w-full items-start'}>
          <div className={'w-1/5 px-2 h-screen'}>
              <CustomCalendar onDayClick={handleDayClick}/>
              <div className={'my-2 border-t border-dashed pt-4'}>
                <div className={'flex items-center mb-2'}>
                    <div className={'w-5 h-5 rounded-full bg-green-300 mr-4'} />
                    <p className={'text-sm'}>Task is completed.</p>
                </div>
                  <div className={'flex items-center mb-2'}>
                      <div className={'w-5 h-5 rounded-full bg-gray-300 mr-4'} />
                      <p className={'text-sm'}>Task is not completed.</p>
                  </div>
                  <div className={'flex items-center mb-2'}>
                      <div className={'w-5 h-5 rounded-full bg-red-300 mr-4'} />
                      <p className={'text-sm'}>Task is suspended.</p>
                  </div>
              </div>
          </div>
          <div className={'w-3/5 border-l-2 border-r-2 px-2'}>center</div>
          <div className={'w-1/5 px-2'}>right</div>
      </div>
   </div>
  )
}
