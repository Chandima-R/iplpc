import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Textarea} from "@/components/ui/textarea";

interface MultiLineInputFieldProps {
    placeholder: string;
    description?: string;
    label: string;
    name: string;
    required?: boolean;

}
export const MultiLineInputField = ({placeholder, description, label, name, required}: MultiLineInputFieldProps) => {
    return (
        <FormField
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel className={'capitalize text-sm font-normal'}>
                        {label}
                        {required && <span className="text-red-500"> *</span>}
                    </FormLabel>
                    <FormControl>
                        <Textarea placeholder={placeholder} {...field} />
                    </FormControl>
                    <FormDescription>
                        {description}
                    </FormDescription>
                    <FormMessage className={'text-xs font-normal'}/>
                </FormItem>
            )}
        />
    );
}