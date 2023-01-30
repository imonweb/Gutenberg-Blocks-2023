import { __ } from '@wordpress/i18n';
import { 
	useBlockProps, 
	RichText, 
	BlockControls, 
	AlignmentToolbar,
	InspectorControls
} from '@wordpress/block-editor';
import {__experimentalBoxControl as BoxControl, PanelBody, RadioControl, RangeControl} from '@wordpress/components';
import classnames from 'classnames';
import './editor.scss';

export default function Edit(props) {
	const { attributes, setAttributes} = props;
	// console.log(attributes);
	const {text, alignment, shadow, shadowOpacity } = attributes;

	// console.log(attributes, props);

	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( { alignment: newAlignment } );
	}
	const onChangeText = (newText) => {
		setAttributes( {text: newText} )
	}

	const onChangeShadowOpacity = (newShadowOpacity) => {
		setAttributes( {shadowOpacity: newShadowOpacity});
	}

	const toggleShadow = () => {
		setAttributes( {shadow: ! shadow} )
	}

	const classes = classnames(`text-box-align-${ alignment }`, {
		'has-shadow': shadow,
	})

	return (
		<>
			<InspectorControls>
				{ shadow && (
				<PanelBody
					title={__('Shadow Setting', 'text-box')}
				>
					<RangeControl 
						label={__('Shadow Setting', 'text-box')}
						val={shadowOpacity}
						min={10}
						max={40}
						step={10}
						onChange={ onChangeShadowOpacity }
					/>
					{/* <BoxControl onChange={(v) => console.log(v)}/> */}
				</PanelBody>
				)}
			</InspectorControls>
		  
			<BlockControls controls={[
				{
					icon: "admin-page",
					title: __("Shadow", "text-box"),
					onClick: toggleShadow,
					isActive: shadow,
				},
			]}>
				<AlignmentToolbar
					value={alignment}
					onChange={onChangeAlignment}
				/>
			</BlockControls>
		 
			<RichText {...useBlockProps({
				className: classes,
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

 