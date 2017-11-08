function doGet(e) {
  
  //  Get properties.
  var prop =  PropertiesService.getScriptProperties().getProperties();
  
  Logger.log(e);
  var user = e.parameter.user_name;
  var user_id = e.parameter.user_id;
  var randnum = Math.floor( Math.random() * 1000 ); 
  var payload = {
    "response_type": "in_channel",
    "text" : "ダイス！<@" + user_id +"|" + user + ">は、 *" + randnum + "* を出した！" ,
    "mrkdwn": true,
  };
  Logger.log(payload);  
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}