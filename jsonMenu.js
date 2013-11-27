$.getJSON('data2.json',function(data){

	items = [];
	dialist="";
	item = '<div data-role="collapsible" data-mini="true" class="ui-collapsible ui-collapsible-inset ui-first-child">';
	$.each(data, function(index, val) {
       /* 카테고리 분류 */
       item += '<h3 id="clear_style" class="ui-collapsible-heading"><a href="#" class="ui-collapsible-heading-toggle ui-btn ui-mini ui-btn-icon-right ui-btn-up-c" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-icon="arrow-l" data-iconpos="right" data-theme="c" data-mini="true">';
       item += val['category'];
       item += '</a></h3>';
       item +='<ul data-role="listview" data-inset="false">';
       list = "";
       console.log(val['category']);
	       $.each(val['list'] , function(index, val) {
	         /* 세부카테고리 메뉴리스트 */
		         $.each(this, function(index, val){
		          list += "<div id='float_style'>";
		          list += '<a href="#';
		          list += val.id;
		          list += '" data-rel="dialog">';
		          list += "<img src=";
		          list += val.picture;
		          list += ">";
		          list += "<br>";
		          list += val.name;
		          list += "</a>";
		          list += "</div>";
		          /*다이얼로그 창 생성*/
		          dialist += "<div data-role='page' data-overlay-theme='e' id=";
		          dialist += val.id;
		          dialist += ">"
		          dialist += '<div data-role="header" data-theme="b"><h1>';
		          dialist += val.name;
		          dialist += "</h1></div>";
		          dialist += '<div data-role="content" data-theme="d"><img src=';
		          dialist += val.picture;
		          dialist += "><p>";
		          dialist += val.about;
		          dialist += '</p></div></div>';
		         });
	       });
       item += list;
       console.log(item);
       item+='</ul>';
    });
    item += "</div>";
    items.push(item);
    $("body").append(dialist);
	$("#menucategory").append(items);
	});