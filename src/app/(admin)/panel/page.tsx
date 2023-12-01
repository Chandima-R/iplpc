'use client'

import { AdminCategoryCard } from "@/components/admin/AdminCategoryCard";
import Link from "next/link";
import {categoryData} from "@/components/admin/categoryData";

export default function Admin(){
    return(
        <div>
            <div className={'mb-2'}>
                <h1 className={'text-3xl uppercase font-bold tracking-wider'}>Categories</h1>
                <p className={'text-base font-normal'}>See all the categories of photos uploaded by users</p>

                <hr className="my-2 w-full"/>
            </div>
            
            <div className="grid grid-cols-4 gap-6">
            {
                categoryData?.map((category) => {
                    return(
                        <Link href={`panel/${category?.categoryId}`} key={category?.categoryId}>
                            <AdminCategoryCard
                                image={category?.categoryImage}
                                category={category?.categoryName}
                                description={category?.categoryDescription}
                                count={category?.imageCount}
                            />
                        </Link>
                    )
                })
            }
            </div>
        </div>
    )
}