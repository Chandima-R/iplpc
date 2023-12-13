'use client';

import { AdminImageCard } from "@/components/admin/AdminImageCard";
import { useState } from "react";
import { categoryData } from "@/components/admin/categoryData";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function SingleCategory() {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [selectedPage, setSelectedPage] = useState<number>(1);

    const pathname = usePathname();
    const category = categoryData?.find((category) => category?.categoryId === Number(pathname?.split('/')[3]))?.categoryName;
    const categoryLength = categoryData?.find((category) => category?.categoryId === Number(pathname?.split('/')[3]))?.images?.length;
    const images = categoryData?.find((category) => category?.categoryId === Number(pathname?.split('/')[3]))?.images;

    const itemsPerPage = 2;
    // @ts-ignore
    const totalPages = Math.ceil( images?.length / itemsPerPage as number);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const visibleImages = images?.slice(startIndex, endIndex);


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
        <div>
            <div className={'mb-4 pb-2 border-b-[1px] flex items-start justify-between w-full'}>
                <div>
                    <h1 className={'text-3xl uppercase font-bold tracking-wider flex items-center'}>Results <span className={'text-2xl font-bold ml-4'}>{categoryLength}</span></h1>
                    <p className={'text-base font-normal'}>See all the photos uploaded by users</p>
                </div>
                {/* <div>
                    <Link href={`/panel/panel-award-categories/favorites}`}>Favorites </Link>
                </div> */}
            </div>

            <div className={'flex items-start justify-between'}>
                <div className="grid grid-cols-4 gap-6">
                    {visibleImages?.map((result) => {
                        return (
                            <div className="cursor-pointer" key={result?.imageId}>
                                <AdminImageCard
                                    imageId={result?.imageId}
                                    imageUrl={result?.imageUrl}
                                    date={result?.date}
                                    location={result?.location}
                                    iso={result?.iso}
                                    shutterSpeed={result?.shutterSpeed}
                                    aperture={result?.aperture}
                                    whiteBalance={result?.whiteBalance}
                                    exposure={result?.exposure}
                                    focus={result?.focus}
                                    meteringMode={result?.meteringMode}
                                    fileFormat={result?.fileFormat}
                                    resolution={result?.resolution}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className={'p-2 flex flex-col gap-2'}>
                    {/*<Button variant={'outline'} onClick={handlePrevPage} disabled={currentPage === 1} className={'text-xs'}>*/}
                    {/*    <ChevronUp />*/}
                    {/*</Button>*/}
                    {Array.from({ length: totalPages }, (_, index) => (
                        <Button
                            variant={'outline'}
                            key={index + 1}
                            onClick={() => goToPage(index + 1)}
                            className={`${selectedPage === index + 1 ? 'bg-primary text-white' : ''} hover:bg-primary hover:text-white transition-all ease-in-out duration-300 text-xs rounded-full w-8 h-8`}
                        >
                            {index + 1}
                        </Button>
                    ))}
                    {/*<Button variant={'outline'} onClick={handleNextPage} className={'text-xs'}>*/}
                    {/*    <ChevronDown />*/}
                    {/*</Button>*/}
                </div>
            </div>
        </div>
    );
}