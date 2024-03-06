'use client'

import {useParams} from "next/navigation";
import {useQuery} from "@apollo/client";
import {GET_CATEGORY_BY_ID} from "@/graphql";
import {Spinner} from "@/components/shared/Spinner";
import Image from "next/image";

export default function ViewIndividualCategory(){
    const params = useParams()
    const {data, loading, error} = useQuery(GET_CATEGORY_BY_ID, {
        variables: {
            _eq: params?.categoryId
        }
    })

    if(loading) return <Spinner />

    return (
        <div>
            <div className={'mb-4 w-full'}>
                <h1 className={'text-3xl uppercase font-bold tracking-wider flex items-center'}>{data?.awardCategory[0]?.name}</h1>
            </div>

            <hr className="my-2 mb-4 w-full"/>

            <div className={'w-full flex items-start justify-between'}>
                <div className={'w-3/5'}>
                    <Image
                        src={data?.awardCategory[0]?.cover || '/images/placeholder.png'}
                        alt={data?.awardCategory[0]?.name}
                        width={1920}
                        height={1080}
                        className={'w-full object-cover h-auto rounded mb-4'}
                    />

                    <p>{data?.awardCategory[0]?.description}</p>
                </div>
                <div className={'w-2/5 px-4'}>
                    <p className={'font-bold text-xl mb-2'}>Tips for the best shot</p>
                    <ol className={'list-decimal pl-2'}>
                        {
                            data?.awardCategory[0]?.tips?.map((tip: { id: string; tip: string }) => (
                                <li key={tip.id} className={'text-sm mb-2'}>{tip.tip}</li>
                            ))
                        }
                    </ol>
                </div>
            </div>
        </div>
    )
}