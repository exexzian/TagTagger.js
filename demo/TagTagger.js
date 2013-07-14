/* ===================================================
 * TagTagger.js v0.0.6
 * A jQuery plugin for tags creation and management.
 *
 *===============================================================================
 * The MIT License (MIT)
 * ========================================================================================
 * Requires: taggerStyles.css and jQuery.js
 * ======================================================================================= */

; (function($) {

	$.fn.TagTagger = function(options) {

		/*
		 * extend or modify default options with those provided.
		 * empty object{} – this is to keep from overriding our "defaults" object.
		 */
		var settings = $.extend({}, $.fn.TagTagger.defaults, options);

		var $this = this;

		var count = 0;

		/*
		 * plugin template
		 * @tags
		 * Div #outer - wrapper
		 * Div #inner - container of tags
		 * inputTag - textfield to enter tags
		 * button #doneEdit - changes between done and edit to modify and submit tags
		 */
		var txtArea = "  <div id='outer'> <div id='inner'></div> <input type='text' placeholder='Add Tag' id='inputTag'/> </div><button id='doneEdit'>Done</button>";

		/*
		 * alert template
		 */
		var alertClasslate = "<span id ='alertID' class='alertClass'>he</span>";

		/*
		 * add plugin templates after the callee
		 * append message template to the body
		 */
		decorate();
		function decorate() {
			$this.after(txtArea);
			$('#outer').css({
				'width' : settings.box.width,
				'min-height' : settings.box.minHeight
			});

			$('body').append(alertClasslate);
			$('#alertID').css({
				'background-color' : settings.duplicateMsg.bgColor,
				'color' : settings.duplicateMsg.fontColor
			});
		}

		/*
		 * keypress handler on inputTag input field
		 * pressing enter calls the create tag
		 */
		$('#outer').on('keypress', '#inputTag', function(e) {
			if ((e.which == 13) || (e.keyCode == 13)) {
				e.preventDefault();

				// Trim blankspaces and
				//No tag creation if text is just spaces
				var $tagData = $.trim($('#inputTag').val());
				if ($tagData.length === 0) {
					return;
				}
				// Only allocate from pool of available tags option
				// Note commented out console.log, perhaps a debugging == true flag?
				if (settings.tagPool.onlyAvailable == true) {
					//console.log('only available options to be input');
					var inList = $.inArray($tagData, settings.tagPool['tags']);
					if (inList < 0) {
						//console.log('value '+value+', not in array! '+this.options.availableTags);
						settings.events.onNotInPool($tagData);

						$('#inputTag').val("");
						return;
					}
				}
				if (tagNotPresent($tagData) || ($('#inner').children().length == 0)) {
					createTag();
					settings.events.onCreated($tagData);
				} else {

					if (settings.duplicateMsg.showMsg == 'true') {
						//display fade in-out message - Tag present
						var $msg = settings.duplicateMsg.message;

						$('#alertID').html($msg);
						$('#alertID').fadeIn('1000', 'swing', setTimeout(function() {
							$('#alertID').fadeOut('3000', 'swing');
						}, 3000));
					}
					settings.events.onDuplicate($tagData);
				}
				// clear text field after hitting enter
				$(this).val("");
			}
		});

		/*
		 * create tags
		 * span -> img
		 */
		function createTag() {
			var getData = $('#inputTag').val();
			$('#nputTag').css('z-index', '-1');
			$('#inner').append('<span class="spanTag">' + getData + '<img class="spanImg" title="Delete Tag" src="images/closegray.png"/></span>');

			$('#inputTag').val("");
			$('#inputTag').focus();
		}

		/*
		 * set focus on inputTag input field on outer div click
		 * since z-index of inputTag is -1
		 */
		$('#outer').click(function() {
			$('#inputTag').focus();
		});

		/*
		 * handle mouseout and mouseover event on img.spanImg
		 * to change images
		 */
		$('#inner').on({
			'mouseover' : function() {
				$(this).prop('src', 'images/closeicon.png');
			},

			'mouseout' : function() {
				$(this).prop('src', 'images/closegray.png');
			}
		}, 'img.spanImg');

		/*
		 * Remove tag on clicking red cross image
		 */

		/*
		 * check for duplicate tag
		 * if present dont create tag
		 * @params - $tagData - tag text
		 * @return - returns true if tag is not present else false
		 */
		function tagNotPresent($tagData) {
			var $flag = true;
			$('#inner span').each(function() {
				if ($tagData === $(this).text()) {
					$flag = false;
					return $flag;
				}
			});
			return $flag;
		}

		/*
		 * Let delete tags if done button hasn't been clicked yet
		 */
		if (count == 0) {
			$('#inner').on('click', 'img.spanImg', function() {
				console.log("tag removed");
				settings.events.onRemoved($(this).parent('span').text());
				$(this).parent('span').remove();
			});
		}

		/*
		 * Click Event handler on doneEdit button
		 * handles edit status of tags
		 */
		$('#doneEdit').on('click', function() {
			count++;

			/*
			 * if button text == Done -> disbale editing and hide input textfield and X image
			 * if button text == Edit -> enable editing and bring back input textfield and X iamge
			 */
			if ($(this).text() === 'Done') {
				$('#inner .spanImg').css('display', 'none');
				$('#inputTag').css('visibility', 'hidden');
				$('#inner').off('click', 'img.spanImg');
				$(this).text('Edit').css({
					'background-color' : '#84241a'
				});

			} else {
				$('#inner .spanImg').css('display', 'inline');
				$('#inputTag').css('visibility', 'visible');
				$('#inner').on('click', 'img.spanImg', function() {
					console.log("tag removed");
					$(this).parent('span').remove();
				});
				$(this).text('Done').css({
					'background-color' : '#008000'
				});
			}
		});

	}
	/*
	 * default settings for plugin
	 * @box key - sets box styling
	 * @tag key - sets tag styling
	 * @tagProperty - sets tag property like min length of tag
	 */
	$.fn.TagTagger.defaults = {
		'box' : {
			'width' : '500px',
			'minHeight' : '90px'
		},
		'tag' : {
			'bgColor' : '#161d6d',
			'fontColor' : '#ffffff'
		},
		'tagProperty' : {
			'minLength' : '1'
		},
		'duplicateMsg' : {
			'showMsg' : 'true',
			'message' : '<pre>         Oooppsss!!!       <br/>Seems You Already Have That Tag. </pre>',
			'bgColor' : '#e3e18a',
			'fontColor' : '#ff0000'
		},
		'tagPool' : {
			'onlyAvailable' : false,
			'tags' : []
		},
		'events' : {
			'onCreated' : function(data) {
			},
			'onRemoved' : function(data) {
			},
			'onDuplicate' : function(data) {
			},
			'onNotInPool' : function(data) {
			}
		}
	};
})(jQuery); 
