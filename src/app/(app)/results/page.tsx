import { FilterBar } from "@/components/results/FilterBar";
import { ResultsList } from "@/components/results/ResultsList";
import { PageHeader } from "@/components/shared/PageHeader";

export default function Results(){
    return(
        <div>
            <PageHeader title="my results" subtitle="View all results of your uploaded photos."  image={'/'}/>

            <FilterBar />

            <ResultsList />
        </div>
    )
}   