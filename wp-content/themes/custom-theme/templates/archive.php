<?php
/* Template Name: Archive - Template */

$context = Timber::get_context();
$term = new Timber\Term();
$posts = Timber::get_posts(array(
   'post_type' => 'service',
   'post_status' => 'publish',
   'posts_per_page' => -1,
   'orderBY' => 'menu_order',
   'order' => 'ASC',
   'tax_query' => array(array(
      'taxonomy' => 'categoria',
      'field' => 'term_id',
      'terms' => $term->term_id,
   ))
));
$context['term'] = $term;
$context['services'] = $posts; 

Timber::render('pages/archive.twig', $context);
