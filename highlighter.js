function getQueryStringValue(key) {  
    var elementPath = decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
    console.log('elementPath', elementPath);
    return elementPath;
} 

var elementPath = getQueryStringValue('element');
if(elementPath){
    var element = document.querySelector(elementPath)
    if(element){
        window.setInterval(function() {  
            element.classList.toggle('element-active');
        }, 500);
    }else{
        console.log('No element found with given path')
    }
}else{
    console.log('Please pass element in query params')
}
