import { Aperture } from "lucide-react"

interface RegisterHeaderProps {
    title: string
}

export const RegisterHeader = ({title}: RegisterHeaderProps) => {
    return(
        <div className="flex items-center mb-8">
            <Aperture className="w-12 h-12 mr-4" />
            <h1 className="text-4xl uppercase font-semibold tracking-wider">{title}</h1>
        </div>
    )
}