<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
?>
<?php  if (wpcf_function()->campaign_location()){  ?>
    <div class="wpneo-location-wrapper">
        <i class="wpneo-icon wpneo-icon-location"></i>
        <span><?php echo wpcf_function()->campaign_location(); ?></span>
    </div>
<?php  } ?>