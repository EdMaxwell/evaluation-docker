import { Control, Controller } from "react-hook-form";
import { z } from "zod";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type FormInputProps<T> = {
  control: Control<z.infer<typeof T>>;
  name: string;
  label: string;
  placeholder: string;
  description?: string;
  error?: string;
  mandatory: boolean;
};

export function FormInput<T extends z.ZodType<any, any>>({
  control,
  name,
  label,
  placeholder,
  description,
  error,
  mandatory,
}: FormInputProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {label} {mandatory && <span>*</span>}
          </FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} className="w-64" />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          {error && <FormMessage>{error}</FormMessage>}
        </FormItem>
      )}
    />
  );
}
