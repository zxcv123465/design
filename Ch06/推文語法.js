//���� twitter ���S//
void(window.open('http://twitter.com/home/?status='.concat(encodeURIComponent(document.title)) .concat(' ') .concat (encodeURIComponent(location.href))));


//���� plurk �P��//
void(window.open('http://www.plurk.com/?qualifier=shares&status=' .concat(encodeURIComponent(location.href)) .concat(' ') .concat('(') .concat(encodeURIComponent(document.title)) .concat(')')));

//���� facebook �y��//
void(window.open('http://www.facebook.com/share.php?u='.concat(encodeURIComponent(location.href))));
