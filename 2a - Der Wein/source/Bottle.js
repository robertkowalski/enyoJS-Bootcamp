enyo.kind({
    name: "wine.Bottle",
    kind: enyo.Control,
    classes: "onyx",
    style: "padding: 10px",
    published: {
        wineYear: "",
        wineName: ""
    },
    components: [
        { tag: "span", name: "wineYear", style: "margin-right: 10px" },
        { tag: "span", name: "wineName", style: "margin-right: 10px" },
    ],
    create: function() {
        this.inherited(arguments);
        this.wineBottleChanged();
    },
    wineBottleChanged: function() {
        this.$.wineYear.setContent(this.wineYear); 
        this.$.wineName.setContent(this.wineName); 
    }
});
