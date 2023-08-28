// src/components/Tiptap.jsx
import { useEditor, EditorContent } from "@tiptap/react";
import { lowlight } from "lowlight/lib/core";
import StarterKit from "@tiptap/starter-kit";

// highlight syntax
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";

//initial content
import { initialContent } from "./initialContent";

import "highlight.js/styles/tokyo-night-dark.css";

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

	return <EditorContent editor={editor} className='p-20 w-full' />;
};

export default Tiptap;
