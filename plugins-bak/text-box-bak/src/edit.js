import { __ } from '@wordpress/i18n';
import { 
	useBlockProps, 
	RichText, 
	BlockControls, 
	AlignmentToolbar,
	InspectorControls
} from '@wordpress/block-editor';
import {__experimentalBoxControl as BoxControl, PanelBody} from '@wordpress/components';
import './editor.scss';

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	// console.log(attributes);
	const {text, alignment } = attributes;

	// console.log(attributes, props);

	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( { alignment: newAlignment } );
	}
	const onChangeText = (newText) => {
		setAttributes( {text: newText} )
	}

	return (
		<>
			{/* <InspectorControls>
				<PanelBody>
					<BoxControl onChange={(v) => console.log(v)}/>
				</PanelBody>
			</InspectorControls> */}
		  
			<BlockControls>
				<AlignmentToolbar
					value={alignment}
					onChange={onChangeAlignment}
				/>
			</BlockControls>
		 
			<RichText {...useBlockProps({
				className: `text-box-align-${alignment}`
			}) } 
				onChange={ onChangeText }
				value={text}
				placeholder={__("Your Text", 'text-box')} 
				tagName="h4"
				allowedFormats={[]}
			/>
		</>
		);
}

 