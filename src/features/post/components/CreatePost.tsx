import {FC, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Editor} from "tinymce";
import {RichTextEditor} from "@/features/wisiwig";
import {
  FormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/shadcn-ui/form.tsx";
import {Input} from "@/components/shadcn-ui/input.tsx";
import {Button} from "@/components/shadcn-ui/button.tsx";
import {
  CreatePost as CreatePostData,
  createPostSchema,
} from "@/features/post/schema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {Post} from "@/services/api/gen";
import {PostProvider} from "@/services/api";
import {useToast} from "@/hooks";

export interface CreatePostProps {
  post: Post;
}

export const CreatePost: FC<CreatePostProps> = ({post}) => {
  const [editor, setEditor] = useState<Editor | null>(null);
  const toast = useToast();
  const form = useForm<CreatePostData>({
    resolver: zodResolver(createPostSchema),
  });

  const createPost: SubmitHandler<CreatePostData> = async (data) => {
    try {
      const toCreate: Post = {
        ...data,
        content:
          editor?.getContent() ??
          `<h1>Planning to launch ${data.title} project</h1>`,
        creation_datetime: new Date(),
        categories: [],
      };
      await PostProvider.crupdate(toCreate);
    } catch (e) {
      toast({
        variant: "destructive",
        message: "Unable to create post. please try again",
      });
    }
  };

  return (
    <Form {...form}>
      <div className="mx-auto my-0 flex h-full w-full justify-center py-6">
        {/* paper */}
        <div className="flex h-full w-[60rem] flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <div className="flex h-[3.75rem] items-center justify-between gap-3 py-2 font-medium">
              <span className="text-4xl font-bold text-purple-400">
                Launch your startup
              </span>
            </div>
          </div>

          <div className="flex h-full w-full flex-col space-y-6">
            <FormField
              name="title"
              control={form.control}
              render={({field}) => (
                <FormItem data-testid="email-field" className="text-md">
                  <FormLabel className="text-md font-bold text-gray-600">
                    How would you name it
                  </FormLabel>
                  <FormControl className="h-12">
                    <Input {...field} className="text-bold text-md" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="description"
              control={form.control}
              render={({field}) => (
                <FormItem data-testid="email-field" className="text-md">
                  <FormLabel className="text-md font-bold text-gray-600">
                    Add an attractive description
                  </FormLabel>
                  <FormControl className="h-12">
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col space-y-3">
              <span className="text-md font-bold text-gray-600">
                Tell more about your projects
              </span>
              <div className="h-[20rem] rounded border border-gray-200 p-2">
                <RichTextEditor
                  onImageUpload={async (blobInfo) => {
                    // const picId = nanoid();
                    // we don't need lastModified and webkitRelativePath anyway
                    // const file = blobInfo.blob() as File;
                    // uploaded.url
                    return blobInfo.base64();
                  }}
                  disabled={!editor}
                  onInit={(_, e) => {
                    setEditor(e);
                  }}
                >
                  {post.content ?? ""}
                </RichTextEditor>
              </div>
            </div>

            <FormField
              name="amount_required"
              control={form.control}
              render={({field}) => (
                <FormItem data-testid="email-field" className="text-md">
                  <FormLabel className="text-md font-bold text-gray-600">
                    How much do you need to launch it
                  </FormLabel>
                  <FormControl className="h-12">
                    <Input {...field} type="number" />
                  </FormControl>
                  <FormMessage />

                  <FormDescription className="mb-2 flex space-x-3">
                    <Button
                      className="bg-purple-400"
                      onClick={() => {
                        form.setValue("amount_required", 5_000);
                      }}
                    >
                      5000$
                    </Button>
                    <Button
                      className="bg-purple-400"
                      onClick={() => {
                        form.setValue("amount_required", 10_000);
                      }}
                    >
                      10.000$
                    </Button>
                    <Button
                      className="bg-purple-400"
                      onClick={() => {
                        form.setValue("amount_required", 50_000);
                      }}
                    >
                      50.000$
                    </Button>
                  </FormDescription>
                </FormItem>
              )}
            />

            <FormField
              name="deadline"
              render={() => (
                <FormItem data-testid="email-field" className="text-md">
                  <FormLabel className="text-md font-bold text-gray-600">
                    When do you expect getting those funds ?
                  </FormLabel>
                  <FormControl className="h-12">
                    <Input
                      name="deadline"
                      type="date"
                      onChange={(ev) => {
                        const date = new Date(ev.target.value);
                        form.setValue("deadline", date);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="mb-6">
              <Button
                className="bg-neutral-700"
                size="lg"
                onClick={form.handleSubmit(createPost)}
              >
                Launch now
              </Button>
            </div>

            <hr />
          </div>
        </div>
      </div>
    </Form>
  );
};
