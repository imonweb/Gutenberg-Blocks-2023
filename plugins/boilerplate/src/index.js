
import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';
import metadata from './block.json';

// registerBlockType( metadata.name, {
registerBlockType( 'block-course/boilerplate', {
	edit: Edit,
	save,
} );
