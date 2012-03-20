enyo.kind({
    name: "wine.Bottle",
    kind: enyo.Control,
    classes: "onyx",
    style: "padding: 10px;",
    published: {
        wineYear: "",
        wineName: ""
    },
    components: [
        { tag: "span", name: "wineYear", style: "margin-right: 5px" },
        { tag: "span", name: "wineName", style: "margin-right: 5px" },
        { kind: "onyx.Button", content: "getrunken", classes: "onyx-negative", ontap: "drinkWine" }
    ],
    create: function() {
        this.inherited(arguments);
        this.wineBottleChanged();
    },
    wineBottleChanged: function() {
        this.$.wineYear.setContent(this.wineYear); 
        this.$.wineName.setContent(this.wineName); 
    },
    drinkWine: function(inSource, inEvent) {
        this.destroy();
    }
});
