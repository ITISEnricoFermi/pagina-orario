function getForm() {

    try {
        var location = window.location.href.split('?')[1].split('&')
    }
    catch(err) {
        console.log("no data")
    }
    console.log(location)

    $.ajax({
        type: 'get',
        url: 'data.xml?v=' + Math.floor((Math.random() * 100) + 1).toString() ,
        datatype: 'xml',
        success: function (response) {
            console.log("success")
        }})
}

$(document).ready(getForm)

