var MAX_FILES = 100;

function doGet() {
  var template = HtmlService.createTemplateFromFile('index');
  var filesIt = DriveApp.getFiles();
  var shareableByOthers = [];
  var userEmail = Session.getActiveUser().getEmail();
  for (var i = 0; i < MAX_FILES && filesIt.hasNext(); i ++) {
    var file = filesIt.next();
    if (file.getOwner().getEmail() == userEmail
        && file.isShareableByEditors() && file.getEditors().some(function(e) {
          return e.getEmail() != userEmail;
        })) {
      shareableByOthers.push(file);
    }
  }
  template['files'] = shareableByOthers;
  return template.evaluate();
}
