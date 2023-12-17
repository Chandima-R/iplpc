'use client'

import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";

export default function Profile(){
    const [isLoading, setIsLoading] = useState<boolean>(false)
    
    return(
        <div>
            <PageHeader title="edit profile" subtitle="Update your profile to show your latest status."/>


            <div>
                <form onSubmit={() => {}}>
                    <div className="">
                        <p className="text-lg font-semibold tracking-wide mb-2">Personal Information</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="grid gap-1">
                                <p className="capitalize text-sm">name</p>
                                <Label className="sr-only" htmlFor="name">
                                    Name
                                </Label>
                                
                                <Input
                                id="name"
                                placeholder="name"
                                type="text"
                                autoCapitalize="none"
                                autoComplete="surname"
                                autoCorrect="off"
                                disabled={isLoading}
                                />
                            </div>

                            <div className="grid gap-1">
                                <p className="capitalize text-sm">surname</p>
                                <Label className="sr-only" htmlFor="surname">
                                Surname
                                </Label>
                                <Input
                                id="surname"
                                placeholder="Surname"
                                type="text"
                                autoCapitalize="none"
                                autoComplete="surname"
                                autoCorrect="off"
                                disabled={isLoading}
                                />
                            </div>
                            <div className="grid gap-1">
                                <p className="capitalize text-sm">email</p>
                                <Label className="sr-only" htmlFor="email">
                                    Email
                                </Label>
                                
                                <Input
                                id="email"
                                placeholder="email@example.com"
                                type="email"
                                autoCapitalize="none"
                                autoComplete="email"
                                autoCorrect="off"
                                disabled={isLoading}
                                />
                            </div>

                            <div className="grid gap-1">
                                <p className="capitalize text-sm">confirmation email</p>
                                <Label className="sr-only" htmlFor="confirmEmail">
                                Email Confirmation
                                </Label>
                                <Input
                                id="confirmEmail"
                                placeholder="confirmationemail@example.com"
                                type="email"
                                autoCapitalize="none"
                                autoComplete="email"
                                autoCorrect="off"
                                disabled={isLoading}
                                />
                            </div>
                            <div className="grid gap-1">
                                <p className="capitalize text-sm">password</p>
                                <Label className="sr-only" htmlFor="password">
                                    Password Confirmation
                                </Label>
                                
                                <Input
                                id="password"
                                placeholder="Password"
                                type="password"
                                autoCapitalize="none"
                                autoComplete="password"
                                autoCorrect="off"
                                disabled={isLoading}
                                />
                            </div>

                            <div className="grid gap-1">
                                <p className="capitalize text-sm">password confirmation</p>
                                <Label className="sr-only" htmlFor="confirmPassword">
                                password confirmation
                                </Label>
                                <Input
                                id="confirmPassword"
                                placeholder="Password Confirmation"
                                type="password"
                                autoCapitalize="none"
                                autoComplete="password"
                                autoCorrect="off"
                                disabled={isLoading}
                                />
                            </div>
                        </div>

                        <p className="text-lg font-semibold tracking-wide my-2 mt-4">Passport Information</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="grid gap-1">
                                <p className="capitalize text-sm">name on passport</p>
                                <Label className="sr-only" htmlFor="passportName">
                                    Name on Passport
                                </Label>
                                
                                <Input
                                id="passportName"
                                placeholder="Name on passport"
                                type="text"
                                autoCapitalize="none"
                                autoComplete=""
                                autoCorrect="off"
                                disabled={isLoading}
                                />
                            </div>

                            <div className="grid gap-1">
                                <p className="capitalize text-sm">passport number</p>
                                <Label className="sr-only" htmlFor="passportNumber">
                                Passport Number
                                </Label>
                                <Input
                                id="passportNumber"
                                placeholder="Passport Number"
                                type="text"
                                autoCapitalize="none"
                                autoComplete=""
                                autoCorrect="off"
                                disabled={isLoading}
                                />
                            </div>
                            <div className="grid gap-1">
                                <p className="capitalize text-sm">photo</p>
                                <Label className="sr-only" htmlFor="photo">
                                    photo
                                </Label>
                                
                                <Input
                                id="photo"
                                placeholder="Upload photo"
                                type="text"
                                autoCapitalize="none"
                                autoComplete=""
                                autoCorrect="off"
                                disabled={isLoading}
                                />
                            </div>

                            <div className="grid gap-1">
                                <p className="capitalize text-sm">created date</p>
                                <Label className="sr-only" htmlFor="createdDate">
                                created date
                                </Label>
                                <Input
                                id="createdDate"
                                placeholder="Created Date"
                                type="text"
                                autoCapitalize="none"
                                autoComplete=""
                                autoCorrect="off"
                                disabled={isLoading}
                                />
                            </div>
                            <div className="grid gap-1">
                                <p className="capitalize text-sm">expiry date</p>
                                <Label className="sr-only" htmlFor="expiryDate">
                                    expiry date
                                </Label>
                                
                                <Input
                                id="expiryDate"
                                placeholder="Expiry Date"
                                type="text"
                                autoCapitalize="none"
                                autoComplete=""
                                autoCorrect="off"
                                disabled={isLoading}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-end mt-10">
                        <Button>Update Profile</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}