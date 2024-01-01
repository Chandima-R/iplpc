import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "../ui/tooltip";

interface TruncateTitleProps {
    str: string;
    maxLength: number;
}

export const TruncateTitle = ({
                                        str,
                                        maxLength
                                    }: TruncateTitleProps) => {
    let truncatedContent = str;

    if (str.length > maxLength) {
        truncatedContent = `${str.slice(0, maxLength)}...`;
    }

    return(
        <TooltipProvider>
            <Tooltip >
                <TooltipTrigger asChild>
                    <h1 className="text-xl font-bold ml">
                        {truncatedContent}
                    </h1>
                </TooltipTrigger>
                <TooltipContent className="bg-primary text-white w-[300px] border-none">
                    <p>{str}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}