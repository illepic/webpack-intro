var $ = require('jquery');
//require('./doit.css');
require('./doit.scss');

module.exports = {
  labeoufFlex: function() {
    $(document).ready(function() {
      $('#doit').click(function() {
        alert("DON'T LET YOUR DREAMS BE DREAMS");
      });
    });
  }
};