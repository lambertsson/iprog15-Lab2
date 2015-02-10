var HomeView = function (container, model) {

    var head = container.find("#headerDiv");
    var side = container.find("#sideDiv");
    var sideHead = container.find("#sHeadDiv");
    var sideBody = container.find("#sBodyDiv");
    var sideFooter = container.find("#sFooterDiv");

    head.find("#header").html("HOMELETTE");
    head.find("#subheader").html("From the best chefs in the world directly into your kitchen")
    sideHead.html("A Home Dinner Service")
    sideBody.html("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulllamaco laboris nisi ut aliquip ex ea commando consequat.")
    sideFooter.html("start quickly<br><button id='addDish' class='btn'><span class='glyphicon glyphicon-plus'></span></button>")
}