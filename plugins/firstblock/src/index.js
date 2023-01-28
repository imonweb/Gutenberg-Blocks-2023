import { registerBlockType } from "@wordpress/blocks";
import Edit from './edit';
import Save from './save';

registerBlockType("blocks-course/firstblock", {
  edit: Edit,
  save: Save,
})