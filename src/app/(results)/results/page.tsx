import { FilterBar } from "@/components/results/FilterBar";
import { ResultsList } from "@/components/results/ResultsList";

export default function Results(){
    return(
        <div>
            <h1 className="text-4xl">Results</h1> 
            <hr />

            <FilterBar />

            <ResultsList />
        </div>
    )
}   