import $ from 'jquery';
import './doit.scss';

export default {
  labeoufFlex() {
    $(document).ready(() => {
      $('#doit').click(() => {
        alert("DON'T LET YOUR DREAMS BE DREAMS. DO IT. merp!");
      });
    });
  }
};
