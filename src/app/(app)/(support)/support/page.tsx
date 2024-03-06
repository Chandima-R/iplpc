import Link from "next/link";

export default function SupportPage(){
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

                    <p>
                        If you can&rsquo;t find a solution to your problems in our knowledge base, you can submit a
                        ticket by selecting the appropriate department below.
                    </p>
                </div>

                <hr className="my-2 w-full"/>

                <div className={'w-full'}>
                    <p className={'text-xl font-semibold my-8'}>Choose Department</p>

                    <div className={'border '}>
                        <Link href={'/support/new-ticket'}>
                            <div className={'border-b px-4 py-8'}>
                                <p className={'text-xl font-semibold text-secondary'}>General Enquiries</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur atque
                                    autem
                                    cumque
                                </p>
                            </div>
                        </Link>

                        <Link href={'/support/new-ticket'}>
                            <div className={'border-b px-4 py-8'}>
                                <p className={'text-xl font-semibold text-secondary'}>General Enquiries</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur atque
                                    autem
                                    cumque
                                </p>
                            </div>
                        </Link>

                        <Link href={'/support/new-ticket'}>
                            <div className={'border-b px-4 py-8'}>
                                <p className={'text-xl font-semibold text-secondary'}>General Enquiries</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur atque
                                    autem
                                    cumque
                                </p>
                            </div>
                        </Link>

                        <Link href={'/support/new-ticket'}>
                            <div className={'px-4 py-8'}>
                                <p className={'text-xl font-semibold text-secondary'}>General Enquiries</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur atque
                                    autem
                                    cumque
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}