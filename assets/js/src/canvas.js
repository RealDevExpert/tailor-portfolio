
( function( Tailor, Api, $ ) {

    'use strict';

	Api.Element.onRender( 'tailor_projects', function( atts, model ) {
		var $el = this.$el;
		var options;

		if ( 'carousel' == atts.layout ) {
			options = {
				autoplay : '1' == atts.autoplay,
				arrows : '1' == atts.arrows,
				dots : '1' == atts.dots,
				fade : ( '1' == atts.fade && '1' == atts.items_per_row ),
				infinite: false,
				slidesToShow : parseInt( atts.items_per_row, 10 ) || 2
			};

			this.$el.tailorSimpleCarousel( options ) ;
		}
		else if ( 'grid' == atts.layout && atts.masonry ) {
			$el.tailorMasonry();
		}

		Api.Setting( '_tailor_element_spacing', function( to, from ) {
			this.triggerAll( 'element:parent:change', this );
		} );
    } );

} ) ( window.Tailor, window.Tailor.Api, jQuery );