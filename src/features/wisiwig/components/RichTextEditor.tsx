import {FC} from "react";
import {Editor as TinyMCE, IAllProps} from "@tinymce/tinymce-react";
import {TINY_MCE_API_KEY} from "@/config/env.ts";
import {NOOP_FN} from "@/lib/noop.ts";

// FIXME: Doesn't apply since tiny_mce style is scoped in a shadow host
// import "@/features/wisiwig/themes/poimandres.css";

// Plugins to enable.
// Refer to https://www.tiny.cloud/docs/tinymce/latest/plugins for more info.
const ACTIVE_PLUGINS = [
  "advlist",
  "autolink",
  "lists",
  "quickbars",
  "link",
  "image",
  "charmap",
  "preview",
  "anchor",
  "searchreplace",
  "visualblocks",
  "code",
  "fullscreen",
  "insertdatetime",
  "media",
  "table",
];

// Intentionally type as any for simplicity
// Refer to https://www.tiny.cloud/docs/tinymce/latest/editor-important-options/ for more info.
const TINY_MCE_CONFIGURATION: IAllProps["init"] = {
  plugins: ACTIVE_PLUGINS,
  toolbar: false,
  skin: "borderless",
  // word count, watermark (!)
  statusbar: false,
  // show ctx menu for basic cmd on select
  quickbars_insert_toolbar: false,
  menubar: false,
  // control its height by element's height wrapping it
  content_css: "writer",
  images_upload_handler: () => {
    return Promise.resolve("");
  },
};

export interface RichTextEditorProps {
  children?: string;
  id?: string;
  disabled?: boolean;
  onInit: IAllProps["onInit"];
  height?: string;
  onImageUpload?: (typeof TINY_MCE_CONFIGURATION)["images_upload_handler"];
}

/**
 * TinyMCE wrapper that has our configuration.
 */
export const RichTextEditor: FC<RichTextEditorProps> = ({
  onInit,
  id,
  children = "",
  disabled = false,
  onImageUpload = NOOP_FN,
  height = "100%",
}) => {
  const onEditorInit: IAllProps["onInit"] = (ev, editor) => {
    onInit && onInit(ev, editor);
  };

  return (
    <div className="h-full w-full" data-testid="rich-text-editor">
      <TinyMCE
        id={id}
        initialValue={children}
        disabled={disabled}
        onInit={onEditorInit}
        apiKey={TINY_MCE_API_KEY}
        init={{
          ...TINY_MCE_CONFIGURATION,
          height,
          images_upload_handler: onImageUpload,
        }}
      />
    </div>
  );
};
