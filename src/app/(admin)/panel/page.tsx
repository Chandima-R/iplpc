'use client'

import { AdminResultsCard } from "@/components/admin/AdminResultsCard";
import { results } from "@/components/admin/results";
import { PageHeader } from "@/components/shared/PageHeader";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useState } from "react";

export default function Admin(){
    const [isLoading, setIsLoading] = useState<boolean>(false)

    return(
        <div>
            <PageHeader title="Results" subtitle="See all the uploaded photos by users."/>
            
            <div className="grid grid-cols-4 gap-6">
            {
                results?.map((result) => {
                    return(
                        <div key={result?.resultId}>    
                            <div>
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <div className="cursor-pointer">
                                            <AdminResultsCard 
                                                image={result?.image}
                                                category={result?.category}
                                                date={result?.date}
                                                time={result?.time}
                                                score={result?.score}
                                            />
                                        </div>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent >
                                        <AlertDialogHeader>
                                        <AlertDialogTitle className="capitalize text-2xl">{result?.category}</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            <Image 
                                                src={result?.image}
                                                alt="Placeholder"
                                                width={1920}
                                                height={1080}
                                                className="rounded"
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