<?php
/**
 * Plugin Name: firstblock
 * Plugin URI: https://github.com/imonweb/firstblock
 * Description: Gutenberg Block
 * Author: Imon
 * Author URI: https://www.imonweb.co.uk
 * Text-Domain: firstblock
 * Version: 0.1.0
 * License: GPL2
 * License URL: https://www.gnu.org/licenses/gpl-2.0.txt
 * text-domain: firstblock
 **/

function blocks_course_firstblock_init() {
  //Registers a block type from the metadata stored in the block.json file.
  // register_block_type_from_metadata is now redundant and the shorter register_block_type is preferred. The only reason to use register_block_type_from_metadata is for supporting sites on WordPress versions 5.5 – 5.7.
  //It’s worth noting that when registering blocks using this method, you can not register scripts and styles from block.json if you include it in a theme.
  // register_block_type_from_metadata( __DIR__ );
  register_block_type( __DIR__ );
  
}

add_action( "init", "blocks_course_firstblock_init" );