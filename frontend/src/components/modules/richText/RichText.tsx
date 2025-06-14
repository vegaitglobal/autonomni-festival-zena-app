'use client';

import React from 'react';

export type RichTextNode = {
	type: string;
	children?: RichTextNode[];
	text?: string;
	bold?: boolean;
	italic?: boolean;
	underline?: boolean;
	url?: string;
};

type Props = {
	content: RichTextNode[];
};

export default function RichTextRenderer({ content }: Props) {
	const renderNode = (node: RichTextNode, index: number): React.ReactNode => {
		const { type, children, text, bold, italic, underline, url } = node;

		if (text !== undefined) {
			let formattedText: React.ReactNode = text;

			if (underline) formattedText = <u>{formattedText}</u>;
			if (italic) formattedText = <em>{formattedText}</em>;
			if (bold) formattedText = <strong>{formattedText}</strong>;

			return <span key={index}>{formattedText}</span>;
		}

		const renderedChildren = children?.map(renderNode);

		switch (type) {
			case 'paragraph':
				return <p key={index}>{renderedChildren}</p>;
			case 'heading':
				return <h2 key={index}>{renderedChildren}</h2>;
			case 'list':
				return <ul key={index}>{renderedChildren}</ul>;
			case 'list-item':
				return <li key={index}>{renderedChildren}</li>;
			case 'link':
				return (
					<a key={index} href={url} target="_blank" rel="noopener noreferrer">
						{renderedChildren}
					</a>
				);
			default:
				return <span key={index}>{renderedChildren}</span>;
		}
	};

	return <div>{content.map(renderNode)}</div>;
}
