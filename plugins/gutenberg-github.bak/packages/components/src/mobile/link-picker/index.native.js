/**
 * External dependencies
 */
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

/**
 * WordPress dependencies
 */
import { useEffect, useState } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { BottomSheet, Icon } from '@wordpress/components';
import { getProtocol, isURL, prependHTTP } from '@wordpress/url';
import { link, cancelCircleFilled } from '@wordpress/icons';
import { usePreferredColorSchemeStyle } from '@wordpress/compose';

/**
 * Internal dependencies
 */
import LinkPickerResults from './link-picker-results';
import NavBar from '../bottom-sheet/nav-bar';
import styles from './styles.scss';

// This creates a search suggestion for adding a url directly.
export const createDirectEntry = ( value ) => {
	let type = 'URL';

	const protocol = getProtocol( value )?.toLowerCase() || '';

	if ( protocol.includes( 'mailto' ) ) {
		type = 'mailto';
	}

	if ( protocol.includes( 'tel' ) ) {
		type = 'tel';
	}

	if ( value?.startsWith( '#' ) ) {
		type = 'internal';
	}

	return {
		isDirectEntry: true,
		title: value,
		url: type === 'URL' ? prependHTTP( value ) : value,
		type,
	};
};

const getURLFromClipboard = async () => {
	const text = await Clipboard.getString();
	return !! text && isURL( text ) ? text : '';
};

export const LinkPicker = ( {
	value: initialValue,
	onLinkPicked,
	onCancel: cancel,
} ) => {
	const [ { value, clipboardUrl }, setValue ] = useState( {
		value: initialValue,
		clipboardUrl: '',
	} );
	const directEntry = createDirectEntry( value );

	// The title of a direct entry is displayed as the raw input value, but if we
	// are replacing empty text, we want to use the generated url.
	const pickLink = ( { title, url, isDirectEntry } ) => {
		onLinkPicked( { title: isDirectEntry ? url : title, url } );
	};

	const onSubmit = () => {
		pickLink( directEntry );
	};

	const clear = () => {
		setValue( { value: '', clipboardUrl } );
	};

	const omniCellStyle = usePreferredColorSchemeStyle(
		styles.omniCell,
		styles.omniCellDark
	);

	const iconStyle = usePreferredColorSchemeStyle(
		styles.icon,
		styles.iconDark
	);

	useEffect( () => {
		getURLFromClipboard()
			.then( ( url ) => setValue( { value, clipboardUrl: url } ) )
			.catch( () => setValue( { value, clipboardUrl: '' } ) );
		// Disable reason: deferring this refactor to the native team.
		// see https://github.com/WordPress/gutenberg/pull/41166
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [] );

	// TODO: Localize the accessibility label.
	// TODO: Decide on if `LinkSuggestionItemCell` with `isDirectEntry` makes sense.
	return (
		<SafeAreaView style={ styles.safeArea }>
			<NavBar>
				<NavBar.DismissButton onPress={ cancel } />
				<NavBar.Heading>{ __( 'Link to' ) }</NavBar.Heading>
				<NavBar.ApplyButton onPress={ onSubmit } />
			</NavBar>
			<View style={ styles.contentContainer }>
				<BottomSheet.Cell
					icon={ link }
					style={ omniCellStyle }
					valueStyle={ styles.omniInput }
					value={ value }
					placeholder={ __( 'Search or type URL' ) }
					autoCapitalize="none"
					autoCorrect={ false }
					keyboardType="url"
					onChangeValue={ ( newValue ) => {
						setValue( { value: newValue, clipboardUrl } );
					} }
					onSubmit={ onSubmit }
					/* eslint-disable-next-line jsx-a11y/no-autofocus */
					autoFocus
					separatorType="none"
				>
					{ value !== '' && (
						<TouchableOpacity
							onPress={ clear }
							style={ styles.clearIcon }
						>
							<Icon
								icon={ cancelCircleFilled }
								fill={ iconStyle.color }
								size={ 24 }
							/>
						</TouchableOpacity>
					) }
				</BottomSheet.Cell>
				{ !! clipboardUrl && clipboardUrl !== value && (
					<BottomSheet.LinkSuggestionItemCell
						accessible
						accessibilityLabel={ sprintf(
							/* translators: Copy URL from the clipboard, https://sample.url */
							__( 'Copy URL from the clipboard, %s' ),
							clipboardUrl
						) }
						suggestion={ {
							type: 'clipboard',
							url: clipboardUrl,
							isDirectEntry: true,
						} }
						onLinkPicked={ pickLink }
					/>
				) }
				{ !! value && (
					<LinkPickerResults
						query={ value }
						onLinkPicked={ pickLink }
						directEntry={ directEntry }
					/>
				) }
			</View>
		</SafeAreaView>
	);
};
