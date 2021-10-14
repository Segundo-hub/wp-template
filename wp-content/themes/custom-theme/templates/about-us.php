<?php
/* Template Name: About Us - Template */

$context = Timber::get_context();
$context['post'] = new TimberPost();

Timber::render('pages/about-us.twig', $context);
