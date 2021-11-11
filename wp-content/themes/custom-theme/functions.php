<?php

/** 
 * @package  Functions
 * @subpackage  Timber
 * @since   Timber 0.1
 */

$composer_autoload = __DIR__ . '/vendor/autoload.php';
if (file_exists($composer_autoload)) {
	require_once $composer_autoload;
	$timber = new Timber\Timber();
}

acf_add_options_page(array(
	'page_title'    => 'Configuración General',
	'menu_title'    => 'Configuraciones',
	'menu_slug'     => 'theme-general-settings',
	'capability'    => 'edit_posts',
	'redirect'      => false,
	'position'      => '2.1',
	'icon_url'      => 'dashicons-admin-settings',
));


add_action('init', function() {
	register_rest_route('message', '/get-all/', array(
		'methods' => "GET",
		'callback' => 'get_all_messages'
	));
});

function get_all_messages( $request ){
	$response['status'] = true;
	$response['name'] = 'Junior';
	return new WP_REST_Response( $response );
}


/** ============================================================================================
 *  					Wordpress insert javascript and css files compiling
  ============================================================================================== */

Timber::$dirname = array('templates', 'views');
Timber::$autoescape = false;

class StarterSite extends Timber\Site
{
	public function __construct()
	{
		add_action('after_setup_theme', array($this, 'theme_supports'));
		add_filter('timber/context', array($this, 'add_to_context'));
		add_filter('timber/twig', array($this, 'add_to_twig'));
		// add_filter('body_class', array($this, 'body_classes'));
		add_action('init', array($this, 'register_post_types'));
		add_action('init', array($this, 'register_taxonomies'));
		add_action('init', array($this, 'register_polylang'));
		add_action('init', array($this, 'remove_editor'));
		add_action('wp_enqueue_scripts', array($this, 'set_styles'));
		add_action('wp_footer', array($this, 'set_scripts'));

		parent::__construct();
	}

	// public function body_classes($classes){
	// 	return array(0 => $classes[2], 1 => $classes[0]);
	// }
	public function register_post_types()
	{
	}
	public function register_taxonomies()
	{
	}
	public function add_to_context($context)
	{
		$context['menu']  = new Timber\Menu();
		$context['options'] = get_fields('option');
		$context['site']  = $this;
		return $context;
	}

	public function set_scripts(){
		wp_register_script('scripts', get_template_directory_uri() . '/dist/js/bundle.js', 1, true);
		wp_enqueue_script('scripts');
		wp_register_script('manifest', get_template_directory_uri() . '/dist/public/manifest.js', 1, true);
		wp_enqueue_script("manifest");
		wp_register_script('vendor', get_template_directory_uri() . '/dist/public/vendor.js', 1, true);
		wp_enqueue_script('vendor');
		wp_register_script('vue', get_template_directory_uri() . '/dist/public/chuck.js', 1, true);
		wp_enqueue_script('vue');
	}

	public function set_styles(){
		wp_register_style('main-styles', get_stylesheet_directory_uri() . '/dist/css/bundle.css',  [], 1, 'all');
		wp_enqueue_style('main-styles');
		wp_register_style('vendor', get_stylesheet_directory_uri() . '/dist/css/vendor.css',  [], 1, 'all');
		// wp_enqueue_style('vendor');
	}

	public function theme_supports()
	{
		add_theme_support('automatic-feed-links');
		add_theme_support('title-tag');
		add_theme_support('post-thumbnails');
		add_theme_support(
			'html5',
			array(
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
			)
		);

		add_theme_support(
			'post-formats',
			array(
				'aside',
				'image',
				'video',
				'quote',
				'link',
				'gallery',
				'audio',
			)
		);

		add_theme_support('menus');
	}

	public function myfoo($text)
	{
		$text .= ' bar!';
		return $text;
	}

	public function remove_editor(){
		remove_post_type_support('page', 'editor');
	}

	public function add_to_twig($twig)
	{
		$twig->addExtension(new Twig\Extension\StringLoaderExtension());
		$twig->addFilter(new Twig\TwigFilter('myfoo', array($this, 'myfoo')));
		return $twig;
	}

	public function register_polylang(){

	}
}

new StarterSite();
