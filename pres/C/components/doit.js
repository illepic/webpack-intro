const $ = require('jquery');

export default {
  labeoufFlex: function() {
    $(document).ready(function() {
      $('#doit').click(function() {
        alert("DON'T LET YOUR DREAMS BE DREAMS. DO IT.");
      });
    });
  }
};
