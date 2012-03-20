enyo.kind({
    name: "wine.Cellar",
    classes: "onyx",
    style: "padding: 10px;",
    components: [
        { kind: "onyx.Input", name: "inputWineYear", placeholder: "Jahr", classes: "center" },
        { kind: "onyx.Input", name: "inputWineName", placeholder: "Name", classes: "center" },
        { kind: "onyx.Button", content: "hinzufügen", classes: "onyx-affirmative center", ontap: "addWine", style: "margin-top: 10px;" },
        { name: "groupbox", style: "padding-top: 10px;", kind: "onyx.Groupbox", showing: false, components: [
            {kind: "onyx.GroupboxHeader", content: "Weinliste"},
            { name: "cellar" }
        ]},      
    ],
    create: function() {
        this.inherited(arguments);
    },
    addWine: function(inSource, inEvent) {
        if (this.$.inputWineYear.getNodeProperty("value") !== "" && this.$.inputWineYear.getNodeProperty("value") !== "") {
            this.createComponent({
                kind: wine.Bottle,
                container: this.$.cellar,
                wineYear: this.$.inputWineYear.getNodeProperty("value"),
                wineName: this.$.inputWineName.getNodeProperty("value")
            });
            // neu rendern
            this.$.cellar.render();
            // gruppe sichtbar machen 
            if (this.$.groupbox.getShowing() === false) {
                this.$.groupbox.setShowing(true);
            }
            // inputfelder zurücksetzen
            this.$.inputWineName.setNodeProperty("value", "");
            this.$.inputWineYear.setNodeProperty("value", "");
        }
    }
});
