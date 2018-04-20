(function() {
  var codeEditorElem = document.getElementById("code-editor");
  var initialValue = {
    count: 2,
    fields: {
      id: "random.uuid",
      firstName: "name.firstName",
      lastName: "name.lastName",
      email: "internet.email",
      phone: "phone.phoneNumberFormat"
    }
  };

  var codeEditor = CodeMirror.fromTextArea(codeEditorElem, {
    lineNumbers: true,
    mode: CodeMirror.mimeModes["application/json"],
    theme: "oceanic-next"
  });

  codeEditor.setValue(JSON.stringify(initialValue, null, 2));
  codeEditor.setSize(500, 500);

  var responseEditorElem = document.getElementById("response-editor");
  var responseEditor = CodeMirror.fromTextArea(responseEditorElem, {
    mode: CodeMirror.mimeModes["application/json"],
    theme: "oceanic-next"
  });

  responseEditor.setSize(500, 500);
  responseEditor.setValue("/*\n Response will appear here\n*/");

  function setResponseResults() {
    if (this.readyState == 4) {
      if (this.status == 200) {
        var response = JSON.parse(this.responseText);
        responseEditor.setValue(JSON.stringify(response, null, 2));
      } else {
        var response = JSON.parse(this.responseText);
        alert(response.message);
      }
    }
  }

  var fetchBtn = document.getElementById("fetch-btn");
  fetchBtn.addEventListener("click", function() {
    var payload = codeEditor.getValue();

    var request = new XMLHttpRequest();
    request.onload = setResponseResults;
    request.open("get", "/users?data=" + payload);
    request.send();
  });
})();
