// src/components/Tiptap.jsx
import {
  useEditor,
  EditorContent,
  BubbleMenu,
  FloatingMenu,
} from "@tiptap/react";
import { lowlight } from "lowlight/lib/core";
import StarterKit from "@tiptap/starter-kit";

import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
} from "react-icons/rx";

// highlight syntax
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";

//initial content
import { initialContent } from "./initialContent";

import "highlight.js/styles/tokyo-night-dark.css";
import {
  RxChatBubble,
  RxChevronDown,
  RxScissors,
} from "react-icons/rx/index.esm";
// Register languages used for syntax highlighting
lowlight.registerLanguage("html", html);
lowlight.registerLanguage("css", css);
lowlight.registerLanguage("js", js);
lowlight.registerLanguage("ts", ts);

// define your extension array
const extensions = [
  StarterKit,
  CodeBlockLowlight.configure({
    lowlight,
  }),
];
const content = initialContent;

const Tiptap = () => {
  const editor = useEditor({
    extensions,
    content,
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
  });

  //consider implementing radix ui

  return (
    <>
      <EditorContent editor={editor} className='p-20 w-full' />;
      {editor && (
        <FloatingMenu
          className='bg-zinc-700 py-1 px-1  text-zinc-100 shadow-lg border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex flex-col '
          editor={editor}
          shouldShow={({ state }) => {
            const { $from } = state.selection;
            const currentLineText = $from.nodeBefore?.textContent;
            return currentLineText === "/";
          }}
        >
          <button className=' flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600'>
            <img
              className=' w-12 border border-zinc-600 rounded my-1'
              src='http://www.notion.so/images/blocks/text/en-US.png'
            />
            <div className='flex flex-col text-left '>
              <span className=' text-sm font-semibold'>Text</span>
              <span className=' text-xs text-zinc-400'>
                Just start writing with plain text.
              </span>
            </div>
          </button>
          <button
            className=' flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600'
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
          >
            <img
              className=' w-12 border border-zinc-600 rounded my-1'
              data-active
              src='http://www.notion.so/images/blocks/header.57a7576a.png'
            />
            <div className='flex flex-col text-left '>
              <span className=' text-sm font-semibold'>Heading 1</span>
              <span className=' text-xs text-zinc-400'>
                Big Section Heading
              </span>
            </div>
          </button>
        </FloatingMenu>
      )}
      {editor && (
        <BubbleMenu
          className='bg-zinc-700 text-zinc-100 shadow-lg border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-600'
          editor={editor}
        >
          <button
            // onClick={() => editor.chain().focus().toggleBold().run()}
            className='  p-2 text-zinc-200 hover:text-zinc-50 hover:bg-zinc-600 text-sm flex items-center  font-medium leading-none ease duration-150'
          >
            <RxChevronDown className='w-4 h-4 mx-1' />
            Text
          </button>
          <button
            // onClick={() => editor.chain().focus().toggleBold().run()}
            // data-active={editor.isActive("bold")}
            className='  p-2 text-zinc-200 hover:text-zinc-50 hover:bg-zinc-600 text-sm flex items-center  font-medium leading-none ease duration-150'
          >
            <RxChatBubble className='w-4 h-4 mx-1' />
            Comment
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            data-active={editor.isActive("bold")}
            className=' data-[active=true]:text-violet-400 p-2 text-zinc-200 hover:text-zinc-50 hover:bg-zinc-600 text-sm flex items-center  font-medium leading-none ease duration-150'
          >
            <RxFontBold className='w-4 h-4' />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            data-active={editor.isActive("italic")}
            className='data-[active=true]:text-violet-400 p-2 text-zinc-200 hover:text-zinc-50 hover:bg-zinc-600 text-sm flex items-center  font-medium leading-none ease duration-150'
          >
            <RxFontItalic className='w-4 h-4' />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            data-active={editor.isActive("strike")}
            className='data-[active=true]:text-violet-400 p-2 text-zinc-200 hover:text-zinc-50 hover:bg-zinc-600 text-sm flex items-center  font-medium leading-none ease duration-150'
          >
            <RxScissors className='w-4 h-4' />
          </button>
          <button className='p-2 text-zinc-200 hover:text-zinc-50 hover:bg-zinc-600 text-sm flex items-center  font-medium leading-none ease duration-150'>
            <RxCode className='w-4 h-4' />
          </button>
        </BubbleMenu>
      )}
    </>
  );
};

export default Tiptap;
