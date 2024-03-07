'use client'

import {AwardCategoryCard} from "@/components/categories/AwardCategoryCard";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {GET_ALL_CATEGORIES} from "@/graphql";
import { useSubscription} from "@apollo/client";
import Link from "next/link";
import {Spinner} from "@/components/shared/Spinner";

export default function AwardCategory() {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [selectedPage, setSelectedPage] = useState<number>(1);

    const {data, loading, error} = useSubscription(GET_ALL_CATEGORIES);
    const awardCategories = data?.awardCategory;

    const itemsPerPage = 9;

    const totalPages = Math.ceil(awardCategories?.length / itemsPerPage as number);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleCategories = awardCategories?.slice(startIndex, endIndex);

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            setSelectedPage(page); // Update selectedPage when navigating to a new page
        }
    };

    if(loading) return <Spinner/>

    return (
        <div className={'pb-8'}>
            <div className={'mb-2 flex items-start justify-between'}>
                <div>
                    <h1 className={'text-3xl uppercase font-bold tracking-wider'}>Award Categories</h1>
                    <p className={'text-base font-normal'}>See all the categories of photos.</p>
                </div>
                <div className={'flex items-center'}>
                    <p className={'text-xl font-bold'}>{awardCategories?.length}</p>
                    <p className={'ml-2 capitalize'}>award categories</p>
                </div>
            </div>

            <hr className="my-2 w-full"/>

            <div className={'flex justify-center'}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleCategories?.map((visibleCategory: { id: string ; name: string; cover: any; value: number; rules: string[] | undefined; description: string | undefined; characteristics: string[] | undefined; note: string | undefined; }) => (
                        <Link href={`/award-categories/${visibleCategory.id}`} key={visibleCategory.id}>
                            <AwardCategoryCard
                                key={visibleCategory?.id}
                                id={visibleCategory?.id}
                                label={visibleCategory?.name}
                                coverImage={visibleCategory?.cover || '/images/placeholder.png'}
                                value={visibleCategory?.value}
                                rules={visibleCategory?.rules}
                                description={visibleCategory?.description}
                                characteristics={visibleCategory?.characteristics}
                                note={visibleCategory?.note}
                            />
                        </Link>
                    ))}
                </div>
                <div
                    className={'p-5 h-full bg-primary/5 flex flex-col gap-2 justify-center items-center fixed right-0 top-0 bottom-0'}>
                    {Array.from({length: totalPages}, (_, index) => (
                        <Button
                            variant={'outline'}
                            key={index + 1}
                            onClick={() => goToPage(index + 1)}
                            className={`${selectedPage === index + 1 ? 'bg-primary text-white' : ''} hover:bg-primary hover:text-white transition-all ease-in-out duration-300 text-xs rounded-full w-8 h-8`}
                        >
                            {index + 1}
                        </Button>
                    ))}
                </div>
            </div>

        </div>
    )
}