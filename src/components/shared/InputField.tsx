import {Input} from "@/components/ui/input";
import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";

interface InputFieldProps {
    placeholder: string;
    description?: string;
    label?: string;
    name: string;
    type: string;
    autocomplete?: string;
    disabled?: boolean;
    required?: boolean;
}
export const InputField = ({placeholder, description, label, name, autocomplete, type, disabled, required}: InputFieldProps) => {
    return (
        <FormField
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel className={'capitalize text-sm'}>
                        {label}
                        {required && <span className="text-red-500"> *</span>}
                    </FormLabel>
                    <FormControl>
                        <Input
                            placeholder={placeholder}
                            {...field}
                            type={type}
                            autoComplete={autocomplete}
                            disabled={disabled}
                        />
                    </FormControl>
                    <FormDescription>
                        {description}
                    </FormDescription>
                    <FormMessage className={'text-xs'}/>
                </FormItem>
            )}
        />
    );
}