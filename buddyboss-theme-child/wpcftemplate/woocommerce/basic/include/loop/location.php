<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
$location = wpcf_function()->campaign_location();
?>
<div class="wpneo-location">
    <i class="wpneo-icon wpneo-icon-location"></i>
    <div class="wpneo-meta-desc"><?php echo esc_attr($location); ?></div>
</div>
