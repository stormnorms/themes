<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
$author_name = wpcf_function()->get_author_name();
?>
<p class="wpneo-author"><?php _e('by','backnow'); ?> 
	<a href="<?php echo wpcf_function()->get_author_url( get_the_author_meta( 'user_login' ) ); ?>"><?php echo esc_attr($author_name); ?></a>
</p>
