$(function(){function e(){{var e=$("#sidebar-collapse")[0],n=$("#cl-wrapper");$(".cl-sidebar")}n.hasClass("sb-collapsed")?($(".fa",e).addClass("fa-angle-left").removeClass("fa-angle-right"),n.removeClass("sb-collapsed"),$.cookie("FLATDREAM_sidebar","open",{expires:365,path:"/"})):($(".fa",e).removeClass("fa-angle-left").addClass("fa-angle-right"),n.addClass("sb-collapsed"),$.cookie("FLATDREAM_sidebar","closed",{expires:365,path:"/"}))}function n(){var e=$("#cl-wrapper .collapse-button"),n=e.outerHeight(),a=($("#head-nav").height(),$(window).height()-(e.is(":visible")?n:0));t.css("height",a),$("#cl-wrapper .nscroller").nanoScroller({preventPageScrolling:!0})}function a(e){if(($("#cl-wrapper").hasClass("sb-collapsed")||$(window).width()>755&&$(window).width()<963)&&$("ul",e).length>0){$(e).removeClass("ocult");var n=$("ul",e);if(!$(".dropdown-header",e).length){var a='<li class="dropdown-header">'+$(e).children().html()+"</li>";n.prepend(a)}o.appendTo("body");var t=$(e).offset().top+8-$(window).scrollTop(),i=$(e).width();o.css({top:t,left:i+8}),o.html('<ul class="sub-menu">'+n.html()+"</ul>"),o.show(),n.css("top",t)}else o.hide()}if($(".cl-vnavigation li ul").each(function(){$(this).parent().addClass("parent")}),$(".cl-vnavigation li ul li.active").each(function(){$(this).parent().css({display:"block"}),$(this).parent().parent().addClass("open")}),$(".cl-vnavigation").delegate(".parent > a","click",function(e){$(".cl-vnavigation .parent.open > ul").not($(this).parent().find("ul")).slideUp(300,"swing",function(){$(this).parent().removeClass("open")});var n=$(this).parent().find("ul");n.slideToggle(300,"swing",function(){var e=$(this).parent();e.hasClass("open")?e.removeClass("open"):e.addClass("open"),$("#cl-wrapper .nscroller").nanoScroller({preventPageScrolling:!0})}),e.preventDefault()}),$(".cl-toggle").click(function(e){var n=$(".cl-vnavigation");n.slideToggle(300,"swing",function(){}),e.preventDefault()}),$("#sidebar-collapse").click(function(){e()}),$("#cl-wrapper").hasClass("fixed-menu")){var t=$("#cl-wrapper .menu-space");t.addClass("nano nscroller"),$(window).resize(function(){n()}),n(),$("#cl-wrapper .nscroller").nanoScroller({preventPageScrolling:!0})}else $(window).resize(function(){});var o=$("<div id='sub-menu-nav' style='position:fixed;z-index:9999;'></div>");$(".cl-vnavigation li").hover(function(e){a(this,e)},function(){o.removeClass("over"),setTimeout(function(){!o.hasClass("over")&&!$(".cl-vnavigation li:hover").length>0&&o.hide()},500)}),o.hover(function(){$(this).addClass("over")},function(){$(this).removeClass("over"),o.fadeOut("fast")}),$(document).click(function(){o.hide()}),$(document).on("touchstart click",function(){o.fadeOut("fast")}),o.click(function(e){e.stopPropagation()}),$(".cl-vnavigation li").click(function(e){($("#cl-wrapper").hasClass("sb-collapsed")||$(window).width()>755&&$(window).width()<963)&&$("ul",this).length>0&&!($(window).width()<755)&&(a(this,e),e.stopPropagation())}),$(".cl-vnavigation li").on("touchstart click",function(){}),$(window).resize(function(){});$("#pcont").height();$(document).bind("DOMSubtreeModified",function(){$("#pcont").height()});var i=220,l=500,s=$('<a href="#" class="back-to-top"><i class="fa fa-angle-up"></i></a>');s.appendTo("body"),jQuery(window).scroll(function(){jQuery(this).scrollTop()>i?jQuery(".back-to-top").fadeIn(l):jQuery(".back-to-top").fadeOut(l)}),jQuery(".back-to-top").click(function(e){return e.preventDefault(),jQuery("html, body").animate({scrollTop:0},l),!1}),$(".toggle-menu").jPushMenu(),$(".ui-datepicker").datepicker(),$('.ttip, [data-toggle="tooltip"]').tooltip(),$('[data-popover="popover"]').popover(),$(".nscroller").nanoScroller(),$(".dropdown").on("shown.bs.dropdown",function(){$(".nscroller").nanoScroller()}),$(".nav-tabs").on("shown.bs.tab",function(){$(".nscroller").nanoScroller()})}),$(function(){function e(e){var n=e.val(),a=e.parents("#chat-box").find(".content .conversation");""!=n&&(e.val(""),a.append('<li class="text-right"><p>'+n+"</p></li>"),$("#chat-box .nano .content").animate({scrollTop:$("#chat-box .nano .content .conversation").height()},1e3))}$("body").hasClass("animated")&&$("#cl-wrapper").css({opacity:1,"margin-left":0}),$(".minimize").click(function(e){var n=$(this).parents(".header"),a=n.next(".content"),t=n.parent();a.slideToggle(),t.toggleClass("closed"),e.preventDefault()}),$(".refresh").click(function(e){var n=$(this).parents(".header"),a=n.parent(),t=$('<div class="loading"><i class="fa fa-refresh fa-spin"></i></div>');t.appendTo(a),t.fadeIn(),setTimeout(function(){t.fadeOut()},1e3),e.preventDefault()}),$(".close-down").click(function(e){var n=$(this).parents(".header"),a=n.parent();a.fadeOut(function(){$(this).remove()}),e.preventDefault()}),$(".side-chat .content .contacts li a").click(function(e){var n=$("<span>"+$(this).html()+"</span>");n.find("i").remove(),$("#chat-box").fadeIn(),$("#chat-box .header span").html(n.html()),$("#chat-box .nano").nanoScroller(),$("#chat-box .nano").nanoScroller({scroll:"top"}),e.preventDefault()}),$("#chat-box .header .close").click(function(e){var n=$(this).parents(".header"),a=n.parent();a.fadeOut(),e.preventDefault()}),$(".chat-input .input-group button").click(function(){e($(this).parents(".input-group").find("input"))}),$(".chat-input .input-group input").keypress(function(n){13==n.which&&e($(this))}),$(document).click(function(){$("#chat-box").fadeOut()}),$.cookie("FLATDREAM_sidebar")&&"closed"==$.cookie("FLATDREAM_sidebar")&&($("#cl-wrapper").addClass("sb-collapsed"),$(".fa",$("#sidebar-collapse")[0]).addClass("fa-angle-right").removeClass("fa-angle-left"))});