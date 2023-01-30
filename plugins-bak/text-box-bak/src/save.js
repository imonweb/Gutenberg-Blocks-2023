import { useBlockProps, RichText } from '@wordpress/block-editor';
import classnamees from "classnames";

export default function save({attributes}) {
	const { text, alignment } = attributes;

	const classes = classnames(`text-box-align-${alignment}`)

	console.log(classes)

	return (
		<RichText.Content {...useBlockProps.save(
			{
				className: classes,
			}
		)} 
			tagName="h4" 
			value={text} 
		/>
	);
}
