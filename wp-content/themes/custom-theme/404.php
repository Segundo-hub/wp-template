<?php
/**
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context = Timber::context();
Timber::render( '404.twig', $context );
