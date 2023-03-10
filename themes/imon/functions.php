<?php
/**
 * imon functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package imon
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function imon_setup() {

	add_theme_support( "editor-styles" );
	add_editor_style('style-editor.css');

	add_theme_support( "responsive-embeds" );
	add_theme_support( "align-wide" );

	add_theme_support( 'editor-color-palette', array(
		array(
			'name'	=>	esc_attr__('strong magenta', 'themeLangDomain'),
			'slug'	=>	'strong-magenta',
			'color'	=>	'#a156b4',	
		),
		array(
			'name'	=>	esc_attr__('very light gray', 'themeLangDomain'),
			'slug'	=>	'very-light-gray',
			'color'	=>	'#eee',
		),
	));

	// add_theme_support( 'disable-custom-colors' );
	// add_theme_support( 'disable-custom-gradients' );

	add_theme_support( 'editor-gradient-presets',
		array(
			array(
				'name'	=>	esc_attr__( 'Red to Blue', 'themeLangDomain' ),
				'gradient'	=>	'linear-gradient(135deg,#e4064d 0%, #2c59ee 100%)',
				'slug'	=>	'red-to-blue'
			),
			array(
				'name'	=>	esc_attr__( 'Yellow to Green', 'themeLangDomain' ),
				'gradient'	=>	'linear-gradient(135deg,#3ce406 0%, #d6e029 100%)',
				'slug'	=>	'green-to-yellow'
			),
		)
	);

	add_theme_support( 'editor-font-sizes', array(
		array(
			'name'	=>	esc_attr__( 'Small', 'themeLangDomain' ),
			'size'	=>	12,
			'slug'	=>	'small'
		),
		array(
			'name'	=>	esc_attr__( 'Regular', 'themeLangDomain' ),
			'size'	=>	16,
			'slug'	=>	'regular'
		),
		array(
			'name'	=>	esc_attr__( 'Large', 'themeLangDomain' ),
			'size'	=>	36,
			'slug'	=>	'large'
		),
	));

	add_theme_support('custom-spacing');




	/*
		* Make theme available for translation.
		* Translations can be filed in the /languages/ directory.
		* If you're building a theme based on imon, use a find and replace
		* to change 'imon' to the name of your theme in all the template files.
		*/
	load_theme_textdomain( 'imon', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
		* Let WordPress manage the document title.
		* By adding theme support, we declare that this theme does not use a
		* hard-coded <title> tag in the document head, and expect WordPress to
		* provide it for us.
		*/
	add_theme_support( 'title-tag' );

	/*
		* Enable support for Post Thumbnails on posts and pages.
		*
		* @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		*/
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus(
		array(
			'menu-1' => esc_html__( 'Primary', 'imon' ),
		)
	);

	/*
		* Switch default core markup for search form, comment form, and comments
		* to output valid HTML5.
		*/
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		)
	);

	// Set up the WordPress core custom background feature.
	add_theme_support(
		'custom-background',
		apply_filters(
			'imon_custom_background_args',
			array(
				'default-color' => 'ffffff',
				'default-image' => '',
			)
		)
	);

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

	/**
	 * Add support for core custom logo.
	 *
	 * @link https://codex.wordpress.org/Theme_Logo
	 */
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		)
	);
}
add_action( 'after_setup_theme', 'imon_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function imon_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'imon_content_width', 640 );
}
add_action( 'after_setup_theme', 'imon_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function imon_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'imon' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'imon' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'imon_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function imon_scripts() {
	wp_enqueue_style( 'imon-style', get_stylesheet_uri(), array(), _S_VERSION );
	wp_style_add_data( 'imon-style', 'rtl', 'replace' );

	wp_enqueue_script( 'imon-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'imon_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

/*  Gutenberg Blocks Framework */
/*  https://wellmann.github.io/gutenberg-blocks-framework/setup.html */
// $frameworkLoader = new KWIO\GutenbergBlocksFramework\Loader(__FILE__);
// $frameworkLoader
//     ->loadBlocks('src/', __NAMESPACE__) // __NAMESPACE__ should match the namespace of your block classes.
//     ->init();

/* Then run: $ composer require kwio/gutenberg-blocks-framework */