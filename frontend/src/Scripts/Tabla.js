var jData = '[{"fname":"Mark", "lname":"Wood", "company":"Apple"},' +
  '{"fname":"Steve", "lname":"Jones", "company":"Amazon"},' +
  '{"fname":"Bill", "lname":"Peterson", "company":"HP"},' +
  '{"fname":"Peter", "lname":"Jacobs", "company":"Dell"}]';

var seperator = ',';
$('#json').html(jData);
$('#btnConvert').click(function() {
  ConvertToTable(jData);
});

function ConvertToTable(jData) {
  var arrJSON = typeof jData != 'object' ? JSON.parse(jData) : jData;
  var $table = $('<table/>');
  var $headerTr = $('<tr/>');
  
  for (var index in arrJSON[0]) {
    $headerTr.append($('<th/>').html(index));
  }
  $table.append($headerTr);
  for (var i = 0; i < arrJSON.length; i++) {
   var $tableTr = $('<tr/>');
    for (var index in arrJSON[i]) {
      $tableTr.append($('<td/>').html(arrJSON[i][index]));
    }
    $table.append($tableTr);
  }
  $('body').append($table);
}
