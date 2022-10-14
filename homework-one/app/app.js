import * as MODEL from "./model.js";
// import { getName, getLastName } from "./model";

function initListeners() {
  $("nav a").click((e) => {
    //this prevent web broswer to load specific html page.
    e.preventDefault();
    let btnID = e.currentTarget.id;
    // console.log(btnID);

    MODEL.setCurrentPageContent(btnID);
  });
}

$(document).ready(function () {
  //   MODEL.setCurrentPageContent("home");
  initListeners();
});
