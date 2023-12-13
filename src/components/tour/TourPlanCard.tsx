import {MapComponent} from "@/components/shared/Map";
import {TruncateString} from "@/lib/truncateString";

export const TourPlanCard = () => {
    return(
        <div className='rounded shadow max-w-[350px] w-full group cursor-pointer'>
            <div className={'my-4'}>
                <MapComponent
                    latitude={7.9570}
                    longitude={80.7603}
                />
            </div>
            <div className={'px-4 h-[250px]'}>
                <div className={'my-2 flex items-center justify-between'}>
                    <div>
                        <p className={'text-2xl capitalize font-semibold'}>date: 02-12-2023</p>
                        <p className={'text-lg capitalize'}>Location: sigiriya</p>
                    </div>
                </div>

                <div className={'my-2 flex items-center justify-between'}>
                    <div>
                        <p className={'text-md capitalize font-semibold'}>Landscape photography</p>
                        <p className={'text-xs'}>{TruncateString({str: 'Sigiriya is an ancient rock fortress and palace built by King Kashyapa during the reign of 473 – 495 which is standing majestically 660 feet straight up. It is located in the northern Matale district near the town of Dambulla in central province of Sri Lanka. The word Sigiriya or the Sinhagiri means the Lion’s Rock where you have to climb up 1200 steps before you reach the Lion Rock Fortress on top of Sigiriya. There are several platforms that break up the steps and allow for a little break if you need it. Today Sigiriya rock fortress is one of the most famous Archeological Treasure and UNESCO named Sigiriya rock as a World Heritage in 1982 under the name “Ancient City of Sigiriya Sri Lanka”. ', maxLength:450})}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}