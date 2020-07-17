<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
$days_remaining = apply_filters('date_expired_msg', __('0', 'backnow'));
if (wpcf_function()->get_date_remaining()){
    $days_remaining = apply_filters('date_remaining_msg', wpcf_function()->get_date_remaining() );
}

$wpneo_campaign_end_method = get_post_meta(get_the_ID(), 'wpneo_campaign_end_method', true);

if ($wpneo_campaign_end_method != 'never_end'){ ?>
    <div class="wpneo-time-remaining">
        <div class="wpneo-meta-desc"><?php echo esc_attr($days_remaining); ?></div>
        <div class="wpneo-meta-name float-left"><?php _e('Days to go', 'backnow'); ?></div>
    </div>
<?php } ?>