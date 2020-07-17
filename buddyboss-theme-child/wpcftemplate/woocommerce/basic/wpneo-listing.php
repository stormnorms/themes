<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
$col_num = get_option('number_of_collumn_in_row', 3);
$number = array( "2"=>"two","3"=>"three","4"=>"four" );

$column             = get_theme_mod( 'shop_column', 4 );
$enable_shop_desc   = get_theme_mod( 'enable_shop_desc' );
$enable_shop_admin  = get_theme_mod( 'enable_shop_admin' );
$product_cat_list   = get_theme_mod( 'product_cat_list' ); 
?>

<div class="wpneo-wrapper">
    <div class="wpneo-container">
        <?php do_action('wpcf_campaign_listing_before_loop'); ?>
        <div class="row wpneo-wrapper-inner">
            <?php if (have_posts()): ?>
                <?php
                $i = 1;
                while (have_posts()) : the_post();
                        $class = '';
                        if( $i == $col_num ){
                            $class = 'last';
                            $i = 0;
                        }
                        if($i == 1){ $class = 'first'; }
                    ?>
                    <div class="col-12 col-sm-6 thm-post-grid-col col-lg-<?php echo esc_attr($column); ?>">
                        <div class="themeum-campaign-post d-flex flex-wrap">
                            <div class="clearfix">
                                <?php if ( has_post_thumbnail() ){ ?>
                                <div class="themeum-campaign-img">
                                    <a class="review-item-image" href="<?php the_permalink(); ?>"><?php the_post_thumbnail('backnow-medium', array('class' => 'img-fluid')); ?></a>
                                    <div class="thm-camp-hvr">
                                        <div class="thm-ch-icon">
                                            <i class="fa fa-heart-o"></i>
                                        </div>
                                        <h4><?php _e('Project You Love','backnow'); ?></h4>
                                    </div>
                                </div>
                                <?php } ?>
                                <div class="themeum-campaign-post-content clearfix">
                                    <?php
                                        $active = '';
                                        if ( is_user_logged_in() ) {
                                            $campaign_id = get_user_meta( get_current_user_id() , 'loved_campaign_ids', true);
                                            if( $campaign_id ){
                                                $campaign_id = json_decode( $campaign_id, true );
                                                if (in_array( get_the_ID() , $campaign_id )){
                                                    $active = 'active';
                                                }
                                            }
                                        }
                                    ?>
                                    <a href="#" class="thm-love-btn <?php echo esc_attr($active); ?>" data-campaign="<?php echo get_the_ID(); ?>" data-user="<?php echo get_current_user_id(); ?>">
                                        <i class="fa fa-heart-o"></i>
                                    </a>
                                    <span class="entry-category"><?php echo get_the_term_list( get_the_ID(), 'product_cat', '', ', ' ); ?></span>
                                    <h3 class="entry-title">
                                        <a href="<?php the_permalink(); ?>">
                                            <?php the_title(); ?>
                                        </a>
                                    </h3>
                                    <!-- <p><?php //echo backnow_excerpt_max_charlength( $textlimit ); ?></p> -->
                                </div>
                            </div>
                            <div class="clearfix w-100 align-self-end">
                                <div class="progressbar-content-wrapper">
                                    <div class="thm-progress-bar">
                                        <div class="lead">
                                            <span class="thm-Price-amount">
                                                <?php echo wpcf_function()->price( wpcf_function()->fund_raised() ); ?>
                                            </span>
                                            <span class="thm-raise-sp">
                                                <?php _e('Raised','backnow'); ?> 
                                            </span>
                                            <div class="thm-meta-desc pull-right text-right">
                                                <span class="thm-Price-amount">
                                                    <?php echo wpcf_function()->price( wpcf_function()->total_goal(get_the_ID()) ); ?> 
                                                </span>
                                                <span class="thm-raise-sp">
                                                    <?php _e('Goal','backnow'); ?> 
                                                </span>
                                            </div>
                                        </div>
                                        <div class="progress">
                                            <?php $css_width = wpcf_function()->get_raised_percent(); if( $css_width >= 100 ){ $css_width = 100; } ?>
                                            <div class="progress-bar progress-bar-primary six-sec-ease-in-out" role="progressbar" data-valuetransitiongoal="<?php echo esc_attr($css_width); ?>" style="width: <?php echo esc_attr($css_width); ?>%;"></div>
                                        </div>
                                    </div>
                                </div>

                                <div class="themeum-campaign-author">
                                    <div class="themeum-camp-author clearfix">
                                        <div class="themeum-author-img float-left">
                                            <?php echo get_avatar( get_the_author_meta( 'ID' ) , 40 ); ?>
                                        </div>
                                        <div class="themeum-author-dsc pull-left">
                                            <a href="<?php echo get_author_posts_url( get_the_author_meta( 'ID' ) ); ?>">
                                                <?php echo get_the_author_meta('display_name'); ?>
                                            </a>
                                            <span><?php echo get_post_meta(get_the_ID(), '_nf_location', true); ?></span>
                                        </div>
                                        <div class="themeum-author-funded pull-right">
                                            <h6>
                                                <?php echo esc_attr($css_width).'%'; ?>
                                            </h6>
                                            <span><?php _e('Funded','backnow'); ?></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php $i++; endwhile; ?>
            <?php
            else:
                wpcf_function()->template('include/loop/no-campaigns-found');
            endif;
            ?>
        </div>
        <?php do_action('wpcf_campaign_listing_after_loop'); ?>
        <?php wpcf_function()->template('include/pagination'); ?>
    </div>
</div>

