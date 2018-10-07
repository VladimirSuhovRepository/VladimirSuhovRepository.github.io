var myScripts = {};
myScripts.moveNextHeaderCat = function () {
    var main = document.getElementById('main-nav');
    var ul = main.querySelector('ul');
    var first = ul.getElementsByTagName('li')[0];
    ul.removeChild(first);
    ul.appendChild(first);
};
myScripts.movePrevHeaderCat = function () {
    var main = document.getElementById('main-nav');
    var ul = main.querySelector('ul');
    var last = ul.getElementsByTagName('li')[ul.getElementsByTagName('li').length - 1];
    ul.removeChild(last);
    ul.prepend(last);
};
