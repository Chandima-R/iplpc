import Link from "next/link"
import { ResultsCard } from "./ResultsCard"
import { results } from "./results"

export const ResultsList = () => {
    return(
        <div className="grid grid-cols-4 gap-6">
            {
                results?.map((result) => {
                    return(
                        <div key={result?.resultId}>
                            <Link href={`/results/${result?.resultId}`}>
                                <ResultsCard 
                                    image={result?.image}
                                    category={result?.category}
                                    user={result?.userId}
                                    date={result?.date}
                                    time={result?.time}
                                    score={result?.score}
                                />
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}