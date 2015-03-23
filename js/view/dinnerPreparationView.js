var DinnerPreparationView = function (container, model) {

    this.backBtn = container.find("#goBack2");

    model.addObserver(this);

    this.update = function (result) {
        container.find("#numberOfPeople").html(model.getNumberOfGuests());

        var menu = model.getFullMenu();
        for (item in menu) {
            if (menu[item].Category == 'Appetizers') {
                container.find("#appPicP").html("<img src='" + menu[item].ImageURL + "'height='120' width='120'>");
                container.find("#appTitleP").html(menu[item].Title);
                //container.find("#appDescP").html("Lorem ipsum");
                container.find("#prep1").html("Preparation");
                container.find("#appPrepP").html(menu[item].Description);
            }
            if (menu[item].Category == 'Main Dish') {
                container.find("#mainPicP").html("<img src='" + menu[item].ImageURL + "'height='120' width='120'>");
                container.find("#mainTitleP").html(menu[item].Title);
                //container.find("#mainDescP").html("Lorem ipsum");
                container.find("#prep2").html("Preparation");
                container.find("#mainPrepP").html(menu[item].Description);
            }
            if (menu[item].Category == 'Desserts') {
                container.find("#desPicP").html("<img src='" + menu[item].ImageURL + "'height='120' width='120'>");
                container.find("#desTitleP").html(menu[item].Title);
                //container.find("#desDescP").html("Lorem ipsum");
                container.find("#prep3").html("Preparation");
                container.find("#desPrepP").html(menu[item].Description);
            }
        }
    }
}