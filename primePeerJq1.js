
$(function(){
  $("#myList").on("submit", function(event){
      event.preventDefault();
      //console.log("it works");
      var list = $("#myList").serializeArray();
      // console.log(list);
      // console.log(list[0]);
      // console.log(list[0].value);

      for(var it = 0; it < list.length; it ++){
        $("ul").append("<li> Current index is " + list[it].value + "</li>")
      }
      $("#removeButton").on("click", function(){
        $("#employeeDiv").hide();
      })
// console.log(event);//inactive due to console log below
    });


// var employee = {
//   this.firstName = $("#firstname");
//   this.lastNmae = $("#lastname");
//   this.employeeNumber = $("#employeenumber");
//   this.title = $("#title");
//   this.lastReviewScore = $("#lastreviewscore");
//   this.salary = $("#salary");
// }

});
