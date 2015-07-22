// inspired by the excellent - https://github.com/LeaVerou/animatable/blob/gh-pages/index.js
(function(document){

    var sheet = document.styleSheets[0];
    var transitionElements = document.querySelectorAll('[data-yo]');

    // loop through elements
    for (var i = 0; i < transitionElements.length; i++) {

        var options = transitionElements[i].getAttribute('data-yo').split('|');

        var property = options[0],
            from = options[1],
            to =  options[2],
            eventType =  options[3] || 'hover',
            settings =  options[4] || '.3s',
            id = property, 
            j = 1;
        
        // unique id
        while(document.getElementById(id)) {
            id = property + ++j;
        }
        
        transitionElements[i].id = id;

        // insert style rules
        sheet.insertRule('#' + id + ':' +  eventType + "{" +   property + ':' + to + "}", 0); // state
        sheet.insertRule('#' + id + "{" + 'transition:' + property + ' ' + settings + ';' + property + ':' + from + "}", 0); // from

    };

})(document);