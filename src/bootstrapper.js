import { greeting } from "./greeter";
import * as _ from "lodash";

let message = greeting('bubu');

window.onload = function () {    
    var html = document.getElementById('nativecontent');
    html.innerText = 'native content: ' + message;
};

$(function () {    
    $('#jquerycontent').text('jquery content ' + message);

    _.map([4, 8], (n) => console.log(n * n));
});

if (module.hot) {    
    module.hot.accept();
}

