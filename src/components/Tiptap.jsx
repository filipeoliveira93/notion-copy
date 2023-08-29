// src/components/Tiptap.jsx
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
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
import { RxScissors } from "react-icons/rx/index.esm";
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

	return (
		<>
			<EditorContent editor={editor} className='p-20 w-full' />;
			{editor && (
				<BubbleMenu
					className='bg-zinc-700 text-zinc-100 shadow-lg border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-600'
					editor={editor}>
					<button className='p-2 text-zinc-200 hover:text-zinc-50 hover:bg-zinc-600 text-sm flex items-center  font-medium leading-none ease duration-150'>
						<RxFontBold className='w-4 h-4' />
					</button>
					<button className='p-2 text-zinc-200 hover:text-zinc-50 hover:bg-zinc-600 text-sm flex items-center  font-medium leading-none ease duration-150'>
						<RxFontItalic className='w-4 h-4' />
					</button>
					<button className='p-2 text-zinc-200 hover:text-zinc-50 hover:bg-zinc-600 text-sm flex items-center  font-medium leading-none ease duration-150'>
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
