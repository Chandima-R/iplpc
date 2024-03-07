'use client'

import {Label} from "@radix-ui/react-label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useState} from "react";

export default function NewTicket(){
    const [isLoading, setIsLoading] = useState(false)
    return (
        <div className={'flex items-start justify-between'}>
            <div className={'w-2/5'}>
                <div className={'p-4 shadow-sm mr-8'}>
                    <p className={'text-lg font-bold mb-4'}>Your Recent Tickets</p>

                    <div className={'border p-4'}>
                        <p className={'text-lg font-semibold'}>Ticket #12345</p>
                        <div className={'flex items-center justify-between'}>
                            <p>Closed</p>
                            <p className={'text-sm'}>Last updated: 2 hours ago</p>
                        </div>
                    </div>
                    <div className={'border p-4'}>
                        <p className={'text-lg font-semibold'}>#IPLPC-12345</p>
                        <div className={'flex items-center justify-between'}>
                            <p>Closed</p>
                            <p className={'text-sm'}>Last updated: 2 hours ago</p>
                        </div>
                    </div>
                    <div className={'border p-4'}>
                        <p className={'text-lg font-semibold'}>Ticket #12345</p>
                        <div className={'flex items-center justify-between'}>
                            <p>Closed</p>
                            <p className={'text-sm'}>Last updated: 2 hours ago</p>
                        </div>
                    </div>
                    <div className={'border p-4'}>
                        <p className={'text-lg font-semibold'}>Ticket #12345</p>
                        <div className={'flex items-center justify-between'}>
                            <p>Closed</p>
                            <p className={'text-sm'}>Last updated: 2 hours ago</p>
                        </div>
                    </div>
                    <div className={'border p-4'}>
                        <p className={'text-lg font-semibold'}>Ticket #12345</p>
                        <div className={'flex items-center justify-between'}>
                            <p>Closed</p>
                            <p className={'text-sm'}>Last updated: 2 hours ago</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'w-3/5'}>
                <div className={'w-full'}>
                    <p className={'text-xl font-bold mb-2'}>Open Ticket</p>
                </div>

                <hr className="my-2 w-full"/>

                <div className={'w-full'}>
                    {/*<div className={'bg-slate-100 rounded-md border grid grid-cols-2'}>*/}
                    {/*    <div>*/}
                    {/*        <InputField placeholder={'Name'} name={'name'} type={'text'} />*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <form onSubmit={() => {
                    }}>
                        <div>
                            <div className='bg-slate-100 rounded-md border p-4 mb-4'>
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
                                </div>
                            </div>

                            <div className='bg-slate-100 rounded-md border p-4 mb-4'>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="grid gap-1">
                                        <p className="capitalize text-sm">Department</p>
                                        <Label className="sr-only" htmlFor="suject">
                                            Department
                                        </Label>

                                        <Input
                                            id="department"
                                            placeholder="department"
                                            type="text"
                                            autoCapitalize="none"
                                            autoComplete="department"
                                            autoCorrect="off"
                                            disabled={isLoading}
                                        />
                                    </div>
                                    <div className="grid gap-1">
                                        <p className="capitalize text-sm">service</p>
                                        <Label className="sr-only" htmlFor="service">
                                            Service
                                        </Label>

                                        <Input
                                            id="service"
                                            placeholder="Service"
                                            type="text"
                                            autoCapitalize="none"
                                            autoComplete="text"
                                            autoCorrect="off"
                                            disabled={isLoading}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='bg-slate-100 rounded-md border p-4 mb-4'>
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="grid gap-1">
                                        <p className="capitalize text-sm">Subject</p>
                                        <Label className="sr-only" htmlFor="suject">
                                            Subject
                                        </Label>

                                        <Input
                                            id="suject"
                                            placeholder="suject"
                                            type="text"
                                            autoCapitalize="none"
                                            autoComplete="suject"
                                            autoCorrect="off"
                                            disabled={isLoading}
                                        />
                                    </div>
                                    <div className="grid gap-1">
                                        <p className="capitalize text-sm">description</p>
                                        <Label className="sr-only" htmlFor="description">
                                            Description
                                        </Label>

                                        <Input
                                            id="description"
                                            placeholder="Description"
                                            type="text"
                                            autoCapitalize="none"
                                            autoComplete="text"
                                            autoCorrect="off"
                                            disabled={isLoading}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='bg-slate-100 rounded-md border p-4'>
                                <div className="grid w-full  items-center gap-4">
                                    <Input id="picture" type="file"/>
                                </div>
                            </div>


                        </div>
                        <div className="w-full flex items-center justify-end mt-10">
                            <Button>Submit Ticket</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}