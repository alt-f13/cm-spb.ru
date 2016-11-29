/**
 *  BootTree Treeview plugin for Bootstrap.
 *
 *  Based on BootSnipp TreeView Example by Sean Wessell
 *  URL:	http://bootsnipp.com/snippets/featured/bootstrap-30-treeview
 *
 *	Revised code by Leo "LeoV117" Myers
 *
 */
// $.fn.extend({
// 	treeview:	function() {
// 		return this.each(function() {
// 			// Initialize the top levels;
// 			var tree = $(this);
//
// 			tree.addClass('treeview-tree');
// 			tree.find('li').each(function() {
// 				var stick = $(this);
// 			});
// 			tree.find('li').has("ul").each(function () {
// 				var branch = $(this); //li with children ul
//
// 				branch.prepend("<i class='tree-indicator glyphicon glyphicon-chevron-right'></i>");
// 				branch.addClass('tree-branch');
// 				branch.on('click', function (e) {
// 					if (this == e.target) {
// 						var icon = $(this).children('i:first');
//
// 						icon.toggleClass("glyphicon-chevron-down glyphicon-chevron-right");
// 						$(this).children().children().toggle();
// 					}
// 				})
// 				branch.children().children().toggle();
//
// 				/**
// 				 *	The following snippet of code enables the treeview to
// 				 *	function when a button, indicator or anchor is clicked.
// 				 *
// 				 *	It also prevents the default function of an anchor and
// 				 *	a button from firing.
// 				 */
// 				branch.children('.tree-indicator, button, a').click(function(e) {
// 					branch.click();
//
// 					e.preventDefault();
// 				});
// 			});
// 		});
// 	}
// });
//
// /**
//  *	The following snippet of code automatically converst
//  *	any '.treeview' DOM elements into a treeview component.
//  */
// $(window).on('load', function () {
// 	$('.treeview').each(function () {
// 		var tree = $(this);
// 		tree.treeview();
// 	})
// })

	$.fn.extend({
		treed: function(o) {

			var openedClass = 'fa-minus';
			var closedClass = 'fa-plus';

			if (typeof o != 'undefined') {
				if (typeof o.openedClass != 'undefined') {
					openedClass = o.openedClass;
				}
				if (typeof o.closedClass != 'undefined') {
					closedClass = o.closedClass;
				}
			};

			//initialize each of the top levels
			var tree = $(this);
			tree.addClass("tree");
			tree.find('li').has("ul").each(function() {
				var branch = $(this); //li with children ul
				branch.prepend("<i class='fa " + closedClass + "'></i>");
				branch.addClass('branch');
				branch.on('click', function(e) {
					if (this == e.target) {
						var icon = $(this).children('i:first');
						icon.toggleClass(openedClass + " " + closedClass);
						$(this).children().children().toggle();
					}
				})
				branch.children().children().toggle();
			});
			//fire event from the dynamically added icon
			tree.find('.branch .indicator').each(function() {
				$(this).on('click', function() {
					$(this).closest('li').click();
				});
			});
			//fire event to open branch if the li contains an anchor instead of text
			tree.find('.branch>a').each(function() {
				$(this).on('click', function(e) {
					$(this).closest('li').click();
					e.preventDefault();
				});
			});
			//fire event to open branch if the li contains a button instead of text
			tree.find('.branch>button').each(function() {
				$(this).on('click', function(e) {
					$(this).closest('li').click();
					e.preventDefault();
				});
			});
		}
	});

	//Initialization of treeviews

//	$('.tree1').treed();

	$('.tree').treed({
		openedClass: 'fa-folder-open',
		closedClass: 'fa-folder'
	});

	// $('.tree2').treed({
	// 	openedClass: 'glyphicon-chevron-right',
	// 	closedClass: 'glyphicon-chevron-down'
	// });
