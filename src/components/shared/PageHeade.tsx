interface PageHeaderProps {
    title: string;
    subtitle?: string;
}

export const PageHeader = ({ title, subtitle}: PageHeaderProps) => {
    return(
        <div>
            <div>
                <h1 className="text-3xl font-semibold capitalize">{title}</h1> 
                <p className="text-base font-light">{subtitle}</p>
            </div>

            <hr className="my-2"/>
        </div>
    )
}