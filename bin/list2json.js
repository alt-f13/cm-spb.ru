_list($('ul.tree > li'));


//  {href: $(this).attr(href), title: $(this).parent().text()}

function _list($list) {
  var _foo={};
  $list.each(function() {
    if($(this).attr('class')=='branch') {
      console.log(_list($(this).children('li')));
    }
    console.log($(this).find('a.link-icon').text());
  })
}


function serializeUL(ul){
    var children = {};
    _bar=0;
    $(ul).children().each(function(){
        var li = $(this),
            sub = li.children('ul');
        children[_bar] = sub.length > 0  ? serializeUL(sub) : sub.text();
        _bar++;
    })
    return children;
}


console.log(serializeUL('ut.tree>li'));


<li><a class="link-icon" href="(.*)">([а-яА-Я\s]*)</a></li>
