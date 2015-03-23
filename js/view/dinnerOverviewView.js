var DinnerOverviewView = function (container, model) {

    this.backBtn = container.find("#goBack");
    this.printBtn = container.find("#print");

    model.addObserver(this);

    this.update = function (result) {
        var item = model.getSelectedDish('Appetizers');
        if (item != undefined) {
            container.find("#appPic").html("<img src='" + item.ImageURL + "' height='120' width='120'>");
            container.find("#appTitle").html(item.Title.substring(0,15)+"...");
        }
        item = model.getSelectedDish('Main Dish');
        if (item != undefined) {
            container.find("#mainPic").html("<img src='" + item.ImageURL + "' height='120' width='120'>");
            container.find("#mainTitle").html(item.Title.substring(0,15)+"...");
        }
        item = model.getSelectedDish('Desserts');
        if (item != undefined) {
            container.find("#desPic").html("<img src='" + item.ImageURL + "' height='120' width='120'>");
            container.find("#desTitle").html(item.Title.substring(0,15)+"...");
        }

        container.find("#numberOfPeople").html(model.getNumberOfGuests());
        container.find("#totalSum").html(model.getTotalMenuPrice());
        container.find("#appSum").html(model.getTotalMenuPrice('Appetizers'));
        container.find("#mainSum").html(model.getTotalMenuPrice('Main Dish'));
        container.find("#desSum").html(model.getTotalMenuPrice('Desserts'));

    }
}
