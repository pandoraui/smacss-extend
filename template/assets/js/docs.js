
console.log('渲染侧边栏列表');

$(function(){


var docsNavbarDom = $('#docsNavbarContent');
var docsNavArr = [];

$.getJSON('/docsNav.json', function(data){
  docsNavArr = data; //_.groupBy(data, 'group');
  renderNavbar(docsNavArr);
});

function renderNavbar(docsNavArr){
  var navList = [
    'getting-started',
    'layout',
    'content',
    'components',
    'about',
    'migration'
  ];

  var docsNavbarContent = '';
  navList.forEach(function(nav){
    var navItem = docsNavArr[nav];
    if(navItem){
      var itemHtml = '<div class="bd-toc-item">';
      itemHtml = itemHtml + '<a class="bd-toc-link" href="'+ navItem.href +'">' + navItem.title + ' <small>' + navItem.titleEn + '</small></a>';
      var navItemList = navItem.list;
      var ulHtml = '';
      if(navItemList.length){
        ulHtml = '<ul class="nav bd-sidenav">';
        navItemList.forEach(function(item){
          var liHtml = '<li><a href="' + item.href + '">' + item.title + ' <small>' + item.titleEn + '</small></li>';
          ulHtml += liHtml;
        });
        ulHtml += '</ul>';
      }
      itemHtml += ulHtml + '</div>';
      docsNavbarContent += itemHtml;
    }

  });

  docsNavbarContent += '</div>';

  docsNavbarDom.html(docsNavbarContent);
}
});
