'use client'

import { AdminImageCard } from "@/components/admin/AdminImageCard";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useState } from "react";
import {categoryData} from "@/components/admin/categoryData";
import {usePathname} from "next/navigation";

export default function SingleCategory(){
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const pathname = usePathname();
    const category = categoryData?.find((category) => category?.categoryId === Number(pathname?.split('/')[2]))?.categoryName
    const images = categoryData?.find((category) => category?.categoryId === Number(pathname?.split('/')[2]))?.images

    return(
        <div>
            <div className={'mb-2'}>
                <h1 className={'text-3xl uppercase font-bold tracking-wider'}>Results</h1>
                <p className={'text-base font-normal'}>See all the photos uploaded by users</p>

                <hr className="my-2 w-full"/>
            </div>

            <div className="grid grid-cols-4 gap-6">
                {
                    images?.map((result) => {
                        return(
                            <div key={result?.imageId}>
                                <div>
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <div className="cursor-pointer">
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
                                        </AlertDialogTrigger>
                                        <AlertDialogContent className={'w-full max-w-[1024px] max-h-[1000px]'}>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle className="capitalize text-2xl">{category}</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    <Image
                                                        src={result?.imageUrl}
                                                        alt="Placeholder"
                                                        width={1920}
                                                        height={1080}
                                                        className="rounded object-cover w-full h-[500px]"
                                                    />
                                                    <div className="grid grid-cols-1 gap-4 mt-4">
                                                        <div className="grid gap-1">
                                                            <p className="capitalize text-sm">comment</p>
                                                            <Label className="sr-only" htmlFor="comment">
                                                                comment
                                                            </Label>

                                                            <Textarea
                                                                id="comment"
                                                                placeholder="Add your review here"
                                                                autoCapitalize="none"
                                                                autoComplete=""
                                                                autoCorrect="off"
                                                                disabled={isLoading}

                                                            />
                                                        </div>

                                                        <div className="grid gap-1">
                                                            <p className="capitalize text-sm">score</p>
                                                            <Label className="sr-only" htmlFor="score">
                                                                score
                                                            </Label>

                                                            <Input
                                                                id="score"
                                                                placeholder="Score"
                                                                type="text"
                                                                autoCapitalize="none"
                                                                autoComplete=""
                                                                autoCorrect="off"
                                                                disabled={isLoading}
                                                            />
                                                        </div>
                                                    </div>
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction>Submit Review</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}