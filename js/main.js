"use strict";

window.SheetsTemplate = {
    init: function(params) {
        // callback when we get sheets data
        window._sheets_load_finish_cb = function(response) {
            // map sheets cells to contents
            var contents = {};
            response.feed.entry.forEach(function(entry) {
                var key = [entry.gs$cell.row, entry.gs$cell.col].join(':');
                contents[key] = entry.content.$t;
            });

            // do replacements
            for (var selector in params.mappings) {
                var attributes = params.mappings[selector];
                // replace specific attributes
                for (var attribute in attributes) {
                    var content = contents[attributes[attribute]];
                    if (attribute === 'html') {
                        $(selector).html(content);
                    }
                    else {
                        $(selector).attr(attribute, content);
                    }
                }
            }

            // do callbacks
            params.callbacks.forEach(function(cb) {
                cb(contents);
            });
        };

        // load data via JSONP
        var script = document.createElement('script');
        script.src = [
            'https://spreadsheets.google.com/feeds/cells',
            params.id,
            params.tab,
            'public/values?alt=json-in-script&callback=_sheets_load_finish_cb',
        ].join('/');
        document.getElementsByTagName('head')[0].appendChild(script);
    },
};

// (function () {
// $('.navbar-collapse ul li a:not(.dropdown-toggle)').bind('click touchstart', function () {
//   setTimeout($('.navbar-toggler:visible').click(), 500);
// });
// })();

