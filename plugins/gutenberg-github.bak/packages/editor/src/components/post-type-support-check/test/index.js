/**
 * External dependencies
 */
import { render } from '@testing-library/react';

/**
 * Internal dependencies
 */
import { PostTypeSupportCheck } from '../';

describe( 'PostTypeSupportCheck', () => {
	it( 'renders its children when post type is not known', () => {
		const { container } = render(
			<PostTypeSupportCheck postType={ undefined } supportKeys="title">
				Supported
			</PostTypeSupportCheck>
		);

		expect( container ).toHaveTextContent( 'Supported' );
	} );

	it( 'does not render its children when post type is known and not supports', () => {
		const postType = {
			supports: {},
		};
		const { container } = render(
			<PostTypeSupportCheck postType={ postType } supportKeys="title">
				Supported
			</PostTypeSupportCheck>
		);

		expect( container ).not.toHaveTextContent( 'Supported' );
	} );

	it( 'renders its children when post type is known and supports', () => {
		const postType = {
			supports: {
				title: true,
			},
		};
		const { container } = render(
			<PostTypeSupportCheck postType={ postType } supportKeys="title">
				Supported
			</PostTypeSupportCheck>
		);

		expect( container ).toHaveTextContent( 'Supported' );
	} );

	it( 'renders its children if some of keys supported', () => {
		const postType = {
			supports: {
				title: true,
			},
		};
		const { container } = render(
			<PostTypeSupportCheck
				postType={ postType }
				supportKeys={ [ 'title', 'thumbnail' ] }
			>
				Supported
			</PostTypeSupportCheck>
		);

		expect( container ).toHaveTextContent( 'Supported' );
	} );

	it( 'does not render its children if none of keys supported', () => {
		const postType = {
			supports: {},
		};
		const { container } = render(
			<PostTypeSupportCheck
				postType={ postType }
				supportKeys={ [ 'title', 'thumbnail' ] }
			>
				Supported
			</PostTypeSupportCheck>
		);

		expect( container ).not.toHaveTextContent( 'Supported' );
	} );
} );
