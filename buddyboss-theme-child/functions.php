<?php
/**
 * @package BuddyBoss Child
 * The parent theme functions are located at /buddyboss-theme/inc/theme/functions.php
 * Add your own functions at the bottom of this file.
 */


/****************************** THEME SETUP ******************************/

/**
 * Sets up theme for translation
 *
 * @since BuddyBoss Child 1.0.0
 */
function buddyboss_theme_child_languages()
{
  /**
   * Makes child theme available for translation.
   * Translations can be added into the /languages/ directory.
   */

  // Translate text from the PARENT theme.
  load_theme_textdomain( 'buddyboss-theme', get_stylesheet_directory() . '/languages' );

  // Translate text from the CHILD theme only.
  // Change 'buddyboss-theme' instances in all child theme files to 'buddyboss-theme-child'.
  // load_theme_textdomain( 'buddyboss-theme-child', get_stylesheet_directory() . '/languages' );

}
add_action( 'after_setup_theme', 'buddyboss_theme_child_languages' );

/**
 * Enqueues scripts and styles for child theme front-end.
 *
 * @since Boss Child Theme  1.0.0
 */
function buddyboss_theme_child_scripts_styles()
{
  /**
   * Scripts and Styles loaded by the parent theme can be unloaded if needed
   * using wp_deregister_script or wp_deregister_style.
   *
   * See the WordPress Codex for more information about those functions:
   * http://codex.wordpress.org/Function_Reference/wp_deregister_script
   * http://codex.wordpress.org/Function_Reference/wp_deregister_style
   **/

  // Styles
  wp_enqueue_style( 'buddyboss-child-css', get_stylesheet_directory_uri().'/assets/css/custom.css', '', '1.0.0' );
wp_enqueue_style( 'main', get_stylesheet_directory_uri().'/assets/css/main.css', '', '1.0.0' );
wp_enqueue_style( 'magnific-popup', get_stylesheet_directory_uri().'/assets/css/magnific-popup.css', '', '1.0.0' );
wp_enqueue_style( 'jssocials', get_stylesheet_directory_uri().'/assets/css/jssocials.css', '', '1.0.0' );
wp_enqueue_style( 'font-awesome-min', get_stylesheet_directory_uri().'/assets/css/font-awesome.min.css', '', '1.0.0' );
wp_enqueue_style( 'backnow-font-style', get_stylesheet_directory_uri().'/assets/css/backnow-font-style.css', '', '1.0.0' );
wp_enqueue_style( 'backnow-font', get_stylesheet_directory_uri().'/assets/css/backnow-font.css', '', '1.0.0' );
wp_enqueue_style( 'responsive', get_stylesheet_directory_uri().'/assets/css/responsive.css', '', '1.0.0' );
wp_enqueue_style( 'woocommerce', get_stylesheet_directory_uri().'/assets/css/woocommerce.css', '', '1.0.0' );
wp_enqueue_style( 'bootstrap-rtl-min', get_stylesheet_directory_uri().'/assets/css/bootstrap-rtl.min', '', '1.0.0' );
wp_enqueue_style( 'bootstrap-min', get_stylesheet_directory_uri().'/assets/css/bootstrap.min', '', '1.0.0' );
wp_enqueue_style( 'bootstrap', get_stylesheet_directory_uri().'/assets/css/bootstrap', '', '1.0.0' );

    // wp_enqueue_style( 'bootstrap-min-css', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css', '', '3.4.1' );  

  // Javascript

wp_enqueue_script( 'main', get_stylesheet_directory_uri().'/assets/js/main.js', '', '1.0.0' );
wp_enqueue_script( 'jssocials.min', get_stylesheet_directory_uri().'/assets/js/jssocials.min.js', '', '1.0.0' );
wp_enqueue_script( 'loopcounter', get_stylesheet_directory_uri().'/assets/js/loopcounter.js', '', '1.0.0' );
wp_enqueue_script( 'jquery-magnific-popup-min', get_stylesheet_directory_uri().'/assets/js/jquery.magnific-popup.min.js', '', '1.0.0' );

  wp_enqueue_script( 'buddyboss-child-js', get_stylesheet_directory_uri().'/assets/js/custom.js', '', '1.0.0' );
    wp_enqueue_script( 'bootstrap-min-js', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js', '', '3.4.1' );
}
add_action( 'wp_enqueue_scripts', 'buddyboss_theme_child_scripts_styles', 9999 );


/****************************** CUSTOM FUNCTIONS ******************************/

// Add your own custom functions here

// Add your own custom functions here

if(!function_exists('crowdfunding_excerpt_max_charlength')):
    function crowdfunding_excerpt_max_charlength($str,$charlength) {
        $excerpt = $str;
        $charlength++;
        if ( mb_strlen( $excerpt ) > $charlength ) {
            $subex = mb_substr( $excerpt, 0, $charlength - 5 );
            $exwords = explode( ' ', $subex );
            $excut = - ( mb_strlen( $exwords[ count( $exwords ) - 1 ] ) );
            if ( $excut < 0 ) {
                return mb_substr( $subex, 0, $excut );
            } else {
                return $subex;
            }
        } else {
            return $excerpt;
        }
    }
endif;

/* -------------------------------------------
 *   Love it Action
 * ------------------------------------------- */
add_action( 'wp_ajax_thm_campaign_action','themeum_campaign_action' );
add_action( 'wp_ajax_nopriv_thm_campaign_action', 'themeum_campaign_action' );
function themeum_campaign_action(){
    if ( ! is_user_logged_in()){
        die(json_encode(array('success'=> 0, 'message' => __('Please Sign In first', 'backnow') )));
    }

    $loved_campaign_ids  = array();
    $user_id             = get_current_user_id();
    $campaign_id         = sanitize_text_field($_POST['campaign_id']);
	$prev_campaign_ids   = get_user_meta($user_id, 'loved_campaign_ids', true);
	$postid 			 = get_post_meta( $campaign_id, 'loved_campaign_ids', true );

    if ($prev_campaign_ids){
        $loved_campaign_ids = json_decode( $prev_campaign_ids, true );
	}
	
    if (in_array($campaign_id, $loved_campaign_ids)){
        if(($key = array_search($campaign_id, $loved_campaign_ids)) !== false) {
            unset( $loved_campaign_ids[$key] );
        }
        $json_update_campaign_ids = json_encode($loved_campaign_ids);
		update_user_meta($user_id, 'loved_campaign_ids', $json_update_campaign_ids);
		if( $postid ){
			$postid = (int)$postid - 1;
			update_post_meta( $campaign_id, 'loved_campaign_ids', $postid );
		}else{
			$postid = 0;
			update_post_meta( $campaign_id, 'loved_campaign_ids', 0 );
		}
		die(json_encode(array('success'=> 1, 'number' => $postid, 'message' => 'delete' )));
    }else{
        $loved_campaign_ids[] = $campaign_id;
		update_user_meta($user_id, 'loved_campaign_ids', json_encode($loved_campaign_ids) );
		if( $postid ){
			$postid = (int)$postid + 1;
			update_post_meta( $campaign_id, 'loved_campaign_ids', $postid );
		}else{
			$postid = 1;
			update_post_meta( $campaign_id, 'loved_campaign_ids', 1 );
		}
        die(json_encode(array('success'=> 1, 'number' => $postid , 'message' => 'love' )));
    }
}
wp_enqueue_script( 'ajax_custom_script',  get_stylesheet_directory_uri() . '/assets/js/custom.js', array('jquery') );
wp_localize_script( 'ajax_custom_script', 'ajax_objects', array( 'ajaxurl' => admin_url( 'admin-ajax.php' )));

function product_loop_columns() {
  return 4;  
}
add_filter('loop_shop_columns', 'product_loop_columns'); // Set Number of rows in Shop

?>
