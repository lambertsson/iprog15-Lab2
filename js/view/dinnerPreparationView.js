var DinnerPreparationView = function (container, model) {

    this.backBtn = container.find("#goBack2");

    model.addObserver(this);

    this.update = function () {
        container.find("#numberOfPeople").html(model.getNumberOfGuests());

        var item = model.getFullMenu('starter');
        if (item != undefined) {
            container.find("#appPicP").html("<img src='images/" + item.image + "'>");
            container.find("#appTitleP").html(item.name);
            container.find("#appDescP").html("Lorem ipsum");
            container.find("#prep1").html("Preparation");
            container.find("#appPrepP").html(item.description);
        }
        item = model.getFullMenu('main dish');
        if (item != undefined) {
            container.find("#mainPicP").html("<img src='images/" + item.image + "'>");
            container.find("#mainTitleP").html(item.name);
            container.find("#mainDescP").html("Lorem ipsum");
            container.find("#prep2").html("Preparation");
            container.find("#mainPrepP").html(item.description);
        }
        item = model.getFullMenu('dessert');
        if (item != undefined) {
            container.find("#desPicP").html("<img src='images/" + item.image + "'>");
            container.find("#desTitleP").html(item.name);
            container.find("#desDescP").html("Lorem ipsum");
            container.find("#prep3").html("Preparation");
            container.find("#desPrepP").html(item.description);
        }
    }
}