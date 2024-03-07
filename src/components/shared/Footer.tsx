export const Footer = () => {
    const currentYear = new Date().getFullYear();
    console.log(10, currentYear)
    return(
        <footer className={'fixed bottom-0 left-0 right-0 p-2 flex items-center justify-center w-full bg-slate-100 text-xs'}>
            <p>Designed by
                &nbsp;
                <span className={'font-semibold'}>
                    Chandima Rathnayake
                </span>
                &nbsp;
                @ {currentYear}
            </p>
        </footer>
    )
}