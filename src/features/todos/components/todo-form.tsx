import { Form, FormField } from "@src/shared/components/ui/form";
import { Input } from "@src/shared/components/ui/input";
import { Button } from "@src/shared/components/ui/button";
import { z, useZodForm } from "@src/shared/hooks/use-zod-form";
import { FormGroup } from "@src/shared/components/form-group";

const schema = z.object({
  todo: z.string({ message: "Todo is required" }),
  dueAt: z.string({ message: "Due At is required" }),
});

export function TodoFrom() {
  const form = useZodForm({ schema });

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
            <FormGroup
              label="Todo"
              description="This is the description for `todo` field"
            >
              <Input placeholder="What do you want to do?" {...field} />
            </FormGroup>
          )}
        />

        <FormField
          control={form.control}
          name="todo"
          render={({ field }) => (
            <FormGroup
              label="Due At"
              description="This is the description for `dueAt` field"
            >
              <Input placeholder="When will you finish this todo?" {...field} />
            </FormGroup>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
