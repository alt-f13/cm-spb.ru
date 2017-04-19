(function($){
       $.fn.shuffle = function() {
         var elements = this.get()
         var copy = [].concat(elements)
         var shuffled = []
         var placeholders = []
         // Shuffle the element array
         while (copy.length) {
           var rand = Math.floor(Math.random() * copy.length)
           var element = copy.splice(rand,1)[0]
           shuffled.push(element)
         }

         // replace all elements with a plcaceholder
         for (var i = 0; i < elements.length; i++) {
           var placeholder = document.createTextNode('')
           findAndReplace(elements[i], placeholder)
           placeholders.push(placeholder)
         }

         // replace the placeholders with the shuffled elements
         for (var i = 0; i < elements.length; i++) {
           findAndReplace(placeholders[i], shuffled[i])
         }

         return $(shuffled)
       }

       function findAndReplace(find, replace) {
         find.parentNode.replaceChild(replace, find)
       }

       })(jQuery);

       // I am displying the 6 elements currently rest elements are hide.

       function listsort(){
       jQuery('.listify_widget_recent_listings ul.job_listings').each(function(index){
         jQuery(this).find('li').shuffle();
         jQuery(this).find('li').each(function(index){
           jQuery(this).show();
           if(index>=6){
             jQuery(this).hide();
           }
         });
       });
       }
       // first time call to function ...
       listsort();
       // calling the function after the 15seconds..
       window.setInterval(function(){
         listsort();
         /// call your function here 5 seconds.
       }, 15000);
</script>


<script>
$.fn.randomize = function(selector){
    var $elems = selector ? $(this).find(selector) : $(this).children(),
        $parents = $elems.parent();

    $parents.each(function(){
        $(this).children(selector).sort(function(){
            return Math.round(Math.random()) - 0.5;
        // }). remove().appendTo(this); // 2014-05-24: Removed `random` but leaving for reference. See notes under 'ANOTHER EDIT'
        }).detach().appendTo(this);
    });

    return this;
};

$("#faces").shuffle();
$('#search').hideseek();
$('#faces').randomize();

$('#search').on("_after", function() {
	$("#diamondswrap").html($("#faces").html());

	$(".diamondswrap").diamonds({
	    size: 250, // Size of the squares
	    gap: 5, // Pixels between squares
	itemSelector : ".item:visible"
	});
});

$('.qsearch').click(function() {
	$('#search').val($(this).text());
  $('#search').trigger('keyup');
});

$("#diamondswrap").html($("#faces").html());

$(".diamondswrap").diamonds({
		size: 250, // Size of the squares
		gap: 5, // Pixels between squares
itemSelector : ".item:visible"
});
