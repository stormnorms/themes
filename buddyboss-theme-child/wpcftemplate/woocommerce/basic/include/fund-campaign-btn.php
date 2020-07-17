<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit; # Exit if accessed directly
} ?>
    <?php
    global $post, $woocommerce, $product;
    $currency = '$';
    if ($product->get_type() == 'crowdfunding') {
        if (wpcf_function()->is_campaign_valid()) {
            $recomanded_price = get_post_meta($post->ID, 'wpneo_funding_recommended_price', true);
            $min_price = get_post_meta($post->ID, 'wpneo_funding_minimum_price', true);
            $max_price = get_post_meta($post->ID, 'wpneo_funding_maximum_price', true);
            if(function_exists( 'get_woocommerce_currency_symbol' )){
                $currency = get_woocommerce_currency_symbol();
            }

            if (! empty($_GET['reward_min_amount'])){
                $recomanded_price = (int) esc_html($_GET['reward_min_amount']);
            } ?>

            <div id="backnow_project">
               <!-- <span><?php //_e('Make a pledge without a reward', 'backnow'); ?> </span>-->
                <span class="wpneo-tooltip">
                    <span class="wpneo-tooltip-min"><?php _e('Minimum amount is ','backnow'); echo esc_attr($currency.$min_price); ?></span>
                    <span class="wpneo-tooltip-max"><?php _e('Maximum amount is ','backnow'); echo esc_attr($currency.$max_price); ?></span>
                </span>
                <form enctype="multipart/form-data" method="post" class="cart">
                    <?php do_action('before_wpneo_donate_field'); ?>
                    <input type="number" min="0" placeholder="" name="wpneo_donate_amount_field" class="input-text amount wpneo_donate_amount_field text" value="<?php echo esc_attr($recomanded_price); ?>" data-min-price="<?php echo esc_attr($min_price) ?>" data-max-price="<?php echo esc_attr($max_price) ?>" >
                    <?php do_action('after_wpneo_donate_field'); ?>
                    <input type="hidden" value="<?php echo esc_attr($post->ID); ?>" name="add-to-cart">
                    <button type="submit" class="q<?php echo apply_filters('add_to_donate_button_class', 'wpneo_donate_button'); ?>">
                    	<!--<i class="fa fa-long-arrow-right">--><?php _e('Back This Campaign', 'backnow'); ?></i></button>
                </form>
            </div>
            
        <?php } 
    }
?>
<!-- Quantity Box End -->

<!--<div class="wpneo-single-sidebar">
	 <a href="#backnow_project"><span class="wpneo_donate_button"><?php //_e('Back This Project', 'backnow'); ?></span></a> -->
	<!-- <button class="backnow-remind-me"><?php// _e('Remind me', 'backnow'); ?></button> 
</div>-->