/**
 * Handles smooth scrolling for any one page websites no matter the language used.
 * Should be supported with every browser and also takes care of mobile devices
 * @version 1.0.1
 * @link https://github.com/DrixnFS/MK_smoothScroll
 * @license MIT
 */
(function ($) {

    /**
     * Library for smooth page scrolling made as small as possible
     * @namespace
     * @author Martin Krzyžanek
     */
    var MK_page_scroll = {
        //Holds elements marked to be taken as page scrollers
        _items: $('.mk_scroller_block'),
        //Holds the pagePanel circles holder
        _pagePanel: null,
        //Holds index of current selected "page"
        _active_item: 0,

        /**
         * Inicialization function of this library
         * @author Martin Krzyžanek
         */
        init: function () {
            var that = this;
            $('body').css({
                overflow: 'hidden'
            });
            if (that._items.length) {
                that._pagePanel = $('<div class="mk_scroller_panel"></div>');
                that._pagePanel.appendTo($('body'));
                that._items.each(function (index) {
                    var $target = $(this);
                    $('<a href="javascript:void(0);" class="mk_scroller_panel-item"></a>')
                        .appendTo(that._pagePanel)
                        .data('scroller-target', $target)
                        .on('click', function (e) {
                            e.preventDefault();
                            that.scrollTo(index);
                        });
                });
                that.fixPanelPosition();
            }
            that.update();
            $(window).on('resize', function () {
                that.update();
                that.fixPanelPosition();
            });
        },

        fixPanelPosition: function(){
            var position = ($('body').outerWidth() / 2) - (this._pagePanel.outerWidth() / 2) + 'px';
            this._pagePanel.css({
                left: position
            });
        },

        update: function () {
            this.scrollTo(this.getActiveItemIndex());
        },

        next: function () {
            this.scrollTo(this.getActiveItemIndex() + 1);
        },

        prev: function () {
            this.scrollTo(this.getActiveItemIndex() - 1);
        },

        getActiveItem: function () {
            var that = this;
            that._items.each(function () {
                var target_top = $(this).offset().top;
                if (that._getScrollY() + 1 >= target_top && that._getScrollY() + 1 <= target_top + $(this).outerHeight()) {
                    that._active_item = $(this);
                }
            });
            if (that._active_item) {
                $('.mk_scroller_panel-item.active', that._pagePanel).removeClass('active');
                $('.mk_scroller_panel-item', that._pagePanel).eq(that._items.index(that._active_item)).addClass('active');
            }
            return that._active_item;
        },

        getActiveItemIndex: function () {
            var index = this.getActiveItem();
            if (index) {
                index = this._items.index(index);
            }
            return index || index === 0 ? index : -1;
        },

        scrollTo: function (index) {
            var that = this;
            if (index == -1 || index >= that._items.length) return;
            target_top = that._items.eq(index).offset().top;
            if (!$('html, body').is(':animated')) {
                $('html, body').stop(true, true).animate({
                    scrollTop: target_top
                }, 1000, function () {
                    that.getActiveItem();
                });
            }
        },

        _getScrollY: function () {
            return window.pageYOffset || document.documentElement.scrollTop;
        },
    };

    /**
     * Anynymous function which inicializates this library and handles the listeners
     * @author Martin Krzyžanek
     */
    $(function () {
        MK_page_scroll.init();

        var wheel_indicator = new WheelIndicator({
            elem: document.querySelector('body'),
            callback: function (e) {
                if (e.direction == 'up') {
                    MK_page_scroll.prev();
                } else {
                    MK_page_scroll.next();
                }
            }
        });

        $(window).on('resize', function () {
            if (MK_page_scroll._pagePanel.is(':visible')) {
                wheel_indicator.turnOn();
            } else {
                wheel_indicator.turnOff();
            }
        });
    });

})(jQuery);