/*https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_display_checkbox_text*/

function newWin() { /*https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_open3*/
    var myWindow = window.open("", "MsgWindow", "width=300,height=300");
    myWindow.document.write("<p>Notice: Shipping will be delyaled by 5-15 days due to the holidays. We appericate your patience. \n\n For more information, please checkout our support page, thank you and have a nice holiday! </p>");
  }

 /*https://www.includehelp.com/code-snippets/javascript-print-value-of-all-checked-selected-checkboxes.aspx accessed on 12/12/2022*/
 
function printChecked() {
    var items = document.getElementsByName("acs");
    var selectedItems = "";
    for (var i = 0; i < items.length; i++) {
        if (items[i].type == "checkbox" && items[i].checked == true) selectedItems += items[i].value + "\n";
    }
    alert(selectedItems);
}

/*https://www.includehelp.com/code-snippets/javascript-print-value-of-all-checked-selected-checkboxes.aspx accessed on 12/12/2022*/
function promptUp() {
    var fieldOutput = prompt("Please Enter Your Email"); //users input

    if (fieldOutput != null) {
      document.getElementById("output").innerHTML = "Thanks For Signing up! Enjoy Your Additional 10% off!";
      }
}