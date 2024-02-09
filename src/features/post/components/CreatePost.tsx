import {FC, useRef, useState} from "react";
import {Editor} from "tinymce";
import {RichTextEditor} from "@/features/wisiwig";
import {Post} from "@/services/api/gen";

export interface CreatePostProps {
  post: Post;
}

export const CreatePost: FC<CreatePostProps> = ({post}) => {
  const [editor, setEditor] = useState<Editor | null>(null);

  return (
    <div className="mx-auto my-0 flex h-full w-[75rem] justify-center">
      {/* paper */}
      <div className="h-full w-[50rem] space-y-2">
        <div className="flex flex-col space-y-2">
          <div className="flex h-[3.75rem] items-center justify-between gap-3 font-medium">
            <span className="text-2xl">Write</span>
          </div>
        </div>

        <div
          style={{height: "calc(100% - 3.75rem)" /* accounting title */}}
          className="rounded border border-gray-200 p-2"
        >
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
    </div>
  );
};
