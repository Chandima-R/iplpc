"use client";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    LineElement,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
);

import {CustomCalendar} from "@/components/shared/CustomCalendar";
import Clock from "@/components/shared/Clock";
import { MultipleMapLocation } from "@/components/shared/MultipleLocation";

const locations = [
    { name: 'Kandy', latitude: 7.8731, longitude: 80.7718, day: 'day01', image: 'https://images.unsplash.com/photo-1562698013-ac13558052cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FuZHl8ZW58MHx8MHx8fDA%3D', description: 'A scenic city in the central hills of Sri Lanka known for its cultural heritage and lush landscapes.' },
    { name: 'Colombo', latitude: 6.9271, longitude: 79.8612, day: 'day02', image: 'https://images.unsplash.com/photo-1578159802020-13ec49d669df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbG9tYm98ZW58MHx8MHx8fDA%3Dg', description: 'The bustling capital city of Sri Lanka, offering a mix of modern and colonial charm.' },
    { name: 'Galle', latitude: 6.9271, longitude: 79.8612, day: 'day03', image: 'https://images.unsplash.com/photo-1579989197111-928f586796a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsbGV8ZW58MHx8MHx8fDA%3D', description: 'A historic city with a well-preserved Dutch fort and beautiful coastal views.' },
    { name: 'Nuwara Eliya', latitude: 7.0106, longitude: 80.9600, day: 'day04', image: 'https://images.unsplash.com/photo-1610017810004-a6f3c531df34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bnV3YXJhJTIwZWxpeWF8ZW58MHx8MHx8fDA%3D', description: 'Known as "Little England," this hill station offers cool climate and scenic tea plantations.' },
    { name: 'Negombo', latitude: 6.9271, longitude: 79.8612, day: 'day05', image: 'https://images.unsplash.com/photo-1581420456035-58b8efadcdea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmVnb21ib3xlbnwwfHwwfHx8MA%3D%3D', description: 'A popular beach destination with a mix of vibrant local culture and modern amenities.' },
    { name: 'Anuradhapura', latitude: 6.9271, longitude: 79.8612, day: 'day06', image: 'https://images.unsplash.com/photo-1638418844320-9844b9680b7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFudXJhZGhhcHVyYXxlbnwwfHwwfHx8MA%3D%3D', description: 'An ancient city with well-preserved ruins, including stupas and ancient reservoirs.' },
    { name: 'Dambulla', latitude: 7.5565, longitude: 80.6190, day: 'day07', image: 'https://images.unsplash.com/photo-1586845991314-5233fe22ac49?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFtYnVsbGF8ZW58MHx8MHx8fDA%3D', description: 'Home to the famous Dambulla Cave Temple, a UNESCO World Heritage Site.' },
    { name: 'Polonnaruwa', latitude: 6.9271, longitude: 79.8612, day: 'day08', image: 'https://images.unsplash.com/photo-1653151106731-734392b98b24?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9sb25uYXJ1d2F8ZW58MHx8MHx8fDA%3D', description: 'An ancient royal city with well-preserved archaeological sites and statues.' },
    { name: 'Sigiriya', latitude: 6.9271, longitude: 79.8612, day: 'day09', image: 'https://images.unsplash.com/photo-1612862862126-865765df2ded?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2lnaXJpeWF8ZW58MHx8MHx8fDA%3D', description: 'Famous for the ancient rock fortress, Sigiriya offers breathtaking views and frescoes.' },
    { name: 'Bentota', latitude: 6.0535, longitude: 80.2170, day: 'day10', image: 'https://images.unsplash.com/photo-1585839471282-7b414c44119e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVudG90YXxlbnwwfHwwfHx8MA%3D%3D', description: 'A coastal town with beautiful beaches, water sports, and river safari experiences.' },
    { name: 'Matale', latitude: 7.3275, longitude: 80.6314, day: 'day11', image: 'https://images.unsplash.com/photo-1667890159613-b0780fbe5ec5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hdGFsZXxlbnwwfHwwfHx8MA%3D%3D', description: 'Known for its spice gardens and the Aluvihare Rock Temple.' },
    { name: 'Kalutara', latitude: 6.1224, longitude: 80.1040, day: 'day12', image: 'https://images.unsplash.com/photo-1697548532456-561b5f9a694d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2FsdXRhcmF8ZW58MHx8MHx8fDA%3D', description: 'Home to the Kalutara Bodhiya and a beautiful stretch of coastline.' },
    { name: 'Kegalle', latitude: 7.2955, longitude: 80.6350, day: 'day13', image: 'https://images.unsplash.com/photo-1589373797397-d19670f47549?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2FsbGV8ZW58MHx8MHx8fDA%3D', description: 'Surrounded by lush greenery, Kegalle is known for its elephant orphanage.' },
    { name: 'Beruwala', latitude: 6.2458, longitude: 80.0592, day: 'day14', image: 'https://images.unsplash.com/photo-1681411163432-dc2eeb72b8b6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVydXdhbGF8ZW58MHx8MHx8fDA%3D', description: 'A coastal town with a lively fishing harbor and sandy beaches.' },
    { name: 'Panadura', latitude: 6.1178, longitude: 80.4964, day: 'day15', image: 'https://images.unsplash.com/photo-1555740369-1f6a74290e5f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFuYWR1cmF8ZW58MHx8MHx8fDA%3D', description: 'A town with historical significance and a gateway to coastal attractions.' },
    { name: 'Ahungalla', latitude: 6.0394, longitude: 80.2180, day: 'day16', image: 'https://images.unsplash.com/photo-1655731357165-9a24731de642?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWh1bmdhbGxhfGVufDB8fDB8fHww', description: 'Known for its pristine beaches and traditional mask carving.' },
    { name: 'Mount Lavinia', latitude: 6.7324, longitude: 79.8575, day: 'day17', image: 'https://images.unsplash.com/photo-1593349232794-658903f4e611?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnQlMjBsYXZpbmlhfGVufDB8fDB8fHww', description: 'Famous for Mount Lavinia Beach and the historic Mount Lavinia Hotel.' },
    { name: 'Dehiwala-Mount Lavinia', latitude: 6.9497, longitude: 79.8649, day: 'day18', image: 'https://images.unsplash.com/photo-1618548493646-db4f4bc32523?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVoaXdhbGF8ZW58MHx8MHx8fDA%3D', description: 'A suburb of Colombo with a mix of urban and coastal attractions.' },
    { name: 'Pinnawala', latitude: 6.5761, longitude: 79.9585, day: 'day19', image: 'https://images.unsplash.com/photo-1649690451824-7e8618ab8bb3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGlubmF3YWxhfGVufDB8fDB8fHww', description: 'Famous for the Pinnawala Elephant Orphanage and scenic surroundings.' },
    { name: 'Trincomalee', latitude: 6.9271, longitude: 79.8612, day: 'day20', image: 'https://images.unsplash.com/photo-1558446791-ac5fec3caddf?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJpbmNvbWFsZWV8ZW58MHx8MHx8fDA%3D', description: 'A coastal city with pristine beaches, coral reefs, and historical sites.' },
];


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
            <div className={'w-3/5 border-l-2 border-r-2 px-2 h-80'}>
                <MultipleMapLocation locations={locations} height={400}/>
            </div>
            <div className={'w-1/5 px-2 flex items-center justify-center'}>
                <Clock />
            </div>
        </div>

        {/*<div>*/}
        {/*    <div className={'flex'}>*/}
        {/*        <div className={'w-2/3 pr-2'}>*/}
        {/*            <div>*/}
        {/*                <Line*/}
        {/*                    data={{*/}
        {/*                        labels: [*/}
        {/*                            "2023-01",*/}
        {/*                            "2023-02",*/}
        {/*                            "2023-03",*/}
        {/*                            "2023-04",*/}
        {/*                            "2023-05",*/}
        {/*                            "2023-06",*/}
        {/*                            "2023-07",*/}
        {/*                        ],*/}
        {/*                        datasets: [*/}
        {/*                            {*/}
        {/*                                data: [100, 120, 115, 134, 168, 132, 200,],*/}
        {/*                                backgroundColor: "purple",*/}
        {/*                            },*/}
        {/*                        ],*/}
        {/*                    }}*/}
        {/*                />*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*        <div className={'w-1/3 pl-2 border-l border-slate-900'}>*/}
        {/*            <h2 className={'text-2xl font-semibold capitalize mb-3'}>nearby hotels</h2>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}
    </div>
    )
}
