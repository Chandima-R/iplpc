import { Button } from "../ui/button"

export const BottomBar = () => {
    return(
        <div className="absolute bottom-0 left-0 right-0 z-30 p-4 flex items-center justify-between">
            <Button variant={'ghost'}>Back</Button>
            <Button>Next</Button>
        </div>
    )
}