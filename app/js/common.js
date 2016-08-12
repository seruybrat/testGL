var jsonString = '                          \
{                                           \
  "itemSub": "Books",                       \
  "items": [                                \
    {                                       \
    	"targetId": "level1",                 \
      "itemTitle": "Clothing",              \
      "clickHandler": true,                 \
      "item": "Kobzar",                     \
      "disabled": true                      \
    },                                      \
    {                                       \
      "itemTitle": "Electronics",           \
      "clickHandler": true,                 \
      "item": "Kobzar",                     \
      "disabled": true                      \
    },                                      \
    {                                       \
      "itemTitle": "Music",                 \
      "clickHandler": true,                 \
      "item": "Kobzar",                     \
      "disabled": true                      \
    }                                       \
]                                           \
}                                           \
';

var menuList = JSON.parse ( jsonString );
console.log(menuList);

var element = document.getElementById(menuList.items[0].targetId);

var userHeight = document.documentElement.clientHeight,
    menuHeight = document.getElementById("mymenu").clientHeight,
       arrowUp = document.getElementsByClassName("menu__arrow_up")[0],
     arrowDown = document.getElementsByClassName("menu__arrow_down")[0];

if (menuHeight > userHeight) {
    arrowDown.classList.add("show"); 
    arrowUp.classList.add("show");
}

var container = document.getElementById("target"),
  contextMenu = document.getElementById("mymenu");

document.onclick = function clickListener(e) {
	  var el = e.srcElement || e.target;
    
    if ( el.classList.contains("task__item") ) {
      getPosition(e);
    } else {
      hideContextMenu();
    }
}

function getPosition(e) {
    contextMenu.style.top = e.clientY + "px";
    contextMenu.style.left = e.clientX + "px";
    showContextMenu();
}
function showContextMenu() {
	contextMenu.classList.add("show");
}
function hideContextMenu() {
	contextMenu.classList.remove("show");
}