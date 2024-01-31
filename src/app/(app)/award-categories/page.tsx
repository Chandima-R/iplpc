'use client'

import {photographyCategories} from "@/components/categories/categoryData"
import {AwardCategoryCard} from "@/components/categories/AwardCategoryCard";
import {useState} from "react";
import {Button} from "@/components/ui/button";
export default function AwardCategory(){
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [selectedPage, setSelectedPage] = useState<number>(1);

    const itemsPerPage = 10;
    // @ts-ignore
    const totalPages = Math.ceil( photographyCategories?.length / itemsPerPage as number);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleCategories = photographyCategories?.slice(startIndex, endIndex);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            setSelectedPage(page); // Update selectedPage when navigating to a new page
        }
    };

    return (
        <div className={'pb-8'}>
            <div className={'mb-2'}>
                <h1 className={'text-3xl uppercase font-bold tracking-wider'}>Award Categories</h1>
                <p className={'text-base font-normal'}>See all the categories of photos.</p>

                <hr className="my-2 w-full"/>
            </div>
            <div className={'flex justify-center'}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {visibleCategories?.map((category) => (
                        <AwardCategoryCard
                            key={category.id}
                            id={category.id}
                            label={category.label}
                            coverImage={category.cover || ''}
                            value={category.value}
                            rules={category.rules}
                            description={category.description}
                            characteristics={category.characteristics}
                            note={category.note}
                        />
                    ))}
                </div>
                <div className={'p-5 h-full bg-primary/5 flex flex-col gap-2 justify-center items-center fixed right-0 top-0 bottom-0'}>
                    {/*<Button variant={'outline'} onClick={handlePrevPage} disabled={currentPage === 1} className={'text-xs w-8 h-8'}>*/}
                    {/*    <ChevronUp className={'w-4 h-4'}/>*/}
                    {/*</Button>*/}
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
                    {/*<Button variant={'outline'} onClick={handleNextPage} className={'text-xs w-8 h-8'}>*/}
                    {/*    <ChevronDown className={'w-4 h-4'}/>*/}
                    {/*</Button>*/}
                </div>
            </div>

        </div>
    )
}