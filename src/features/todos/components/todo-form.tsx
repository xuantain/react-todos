import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@src/shared/components/ui/form";
import { Input } from "@src/shared/components/ui/input";
import { Button } from "@src/shared/components/ui/button";
import { z, useZodForm } from "@src/shared/hooks/use-zod-form";

export function TodoFrom() {
  const form = useZodForm({
    schema: z.object({
      todo: z.string({ message: "Todo is required" }),
      dueAt: z.string({ message: "Due At is required" }),
    }),
  });

  const onSubmit = form.handleSubmit((values) => {
    console.log(values);
  });

  console.log(form.watch());

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-8">
        <FormField
          control={form.control}
          name="todo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Todo</FormLabel>
              <FormControl>
                <Input placeholder="What do you want to do?" {...field} />
              </FormControl>
              <FormDescription>
                This is the description for `todo` field
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dueAt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Due At</FormLabel>
              <FormControl>
                <Input
                  placeholder="When will you finish this todo?"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is the description for `dueAt` field
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
