import type { ReactNode } from "react";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@src/shared/components/ui/form";

interface Props {
  label: string;
  children: ReactNode;
  description?: string;
}

export function FormGroup(props: Props) {
  return (
    <FormItem>
      <FormLabel>{props.label}</FormLabel>
      <FormControl>{props.children}</FormControl>
      {props.description && (
        <FormDescription>{props.description}</FormDescription>
      )}
      <FormMessage />
    </FormItem>
  );
}
