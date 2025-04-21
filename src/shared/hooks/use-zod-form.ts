import { useForm, type UseFormProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z, { ZodSchema } from "zod";

export { z };

interface Props<S extends ZodSchema>
  extends Omit<UseFormProps<z.infer<S>>, "resolver"> {
  schema: S;
}

export function useZodForm<S extends ZodSchema>(props: Props<S>) {
  const form = useForm<z.infer<S>>({
    ...props,
    resolver: zodResolver(props.schema),
  });

  return form;
}
