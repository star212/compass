var historyEl = document.getElementById('history');
var scanCode = function() {
    window.plugins.barcodeScanner.scan(
        function(result) {
        alert("Scanned Code: " + result.text 
                + ". Format: " + result.format
                + ". Cancelled: " + result.cancelled);
        var a = document.createElement("a");
        a.href = result.text;
        a.innerHTML = "访问： " + result.text;
        a.target = "_blank";
        historyEl.appendChild(a);
    }, function(error) {
        alert("Scan failed: " + error);
    });
}

var encodeText = function() {
    window.plugins.barcodeScanner.encode(
            BarcodeScanner.Encode.TEXT_TYPE,
            document.getElementById('text').value, 
            function(success) {
                alert("Encode success: " + success);
            }, function(fail) {
                alert("Encoding failed: " + fail);
            });
}

var encodeEmail = function() {
    window.plugins.barcodeScanner.encode(
        BarcodeScanner.Encode.EMAIL_TYPE,
        document.getElementById('email').value, function(success) {
            alert("Encode success: " + success);
        }, function(fail) {
            alert("Encoding failed: " + fail);
        });
}

var encodePhone = function() {
    window.plugins.barcodeScanner.encode(
        BarcodeScanner.Encode.PHONE_TYPE,
        document.getElementById('phone').value, function(success) {
            alert("Encode success: " + success);
        }, function(fail) {
            alert("Encoding failed: " + fail);
        });
}

var encodeSMS = function() {
    window.plugins.barcodeScanner.encode(
        BarcodeScanner.Encode.SMS_TYPE,
        document.getElementById('sms').value, function(success) {
            alert("Encode success: " + success);
        }, function(fail) {
            alert("Encoding failed: " + fail);
        });
}
