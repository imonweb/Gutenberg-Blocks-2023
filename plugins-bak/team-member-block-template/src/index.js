
import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType( 'blocks-course/team-members', {
	edit: Edit,
	save,
} );
