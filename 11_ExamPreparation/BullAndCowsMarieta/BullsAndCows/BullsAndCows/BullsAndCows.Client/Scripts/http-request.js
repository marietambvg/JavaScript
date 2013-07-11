/// <reference path="jquery-2.0.2.intellisense.js" />
/// <reference path="jquery-2.0.2.js" />
/// <reference path="class.js" />

var httpRequester = (function () {

    function getJSON(url, success, error) {
        $.ajax({
            url: url,
            type: "GET",
            timeout: 5000,
            contentType: "application/json",
            success: success,
            error: error
        });
    };

    function postJSON(url, data, success, error) {
        $.ajax({
            url: url,
            type: "POST",
            timeout: 5000,
            contentType: "application/json",
            data:JSON.stringify(data),
            success: success,
            error: error
        });
    }
   
    return {
        getJSON: getJSON,
        postJSON:postJSON
    };

}());

//var zuzana={
//    "username":"Zuzana",
//    "authCode":"e36a1ed88cb465561cc48b95889a43b8b908c1a4"
//}
////httpRequester.getJSON("http://localhost:40643/api/register", successCB, errorCB);

//httpRequester.postJSON("http://localhost:40643/api/user/login",
//    zuzana,
//    function () {
//        alert("success");

//    }, function () {
//        alert("error");

//    });