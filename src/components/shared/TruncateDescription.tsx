import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "../ui/tooltip";

interface TruncateDescriptionProps {
    str: string;
    maxLength: number;
}

export const TruncateDescription = ({
    str,
    maxLength
}: TruncateDescriptionProps) => {
    let truncatedContent = str;

    if (str.length > maxLength) {
        truncatedContent = `${str.slice(0, maxLength)}...`;
    }

    return(
        <TooltipProvider>
            <Tooltip >
                <TooltipTrigger asChild>
                    <h1 className="text-sm font-medium capitalize text-secondary-light-700">
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