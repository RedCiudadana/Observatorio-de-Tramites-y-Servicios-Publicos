const elasticlunr = require("elasticlunr");

module.exports = function (collection) {
    // what fields we'd like our index to consist of
    var index = elasticlunr(function () {
        this.addField("nombre_ins");
        this.addField("type");
        this.setRef("id");
    });

    // loop through each page and add it to the index
    collection.forEach(item => {
        index.addDoc({
            id: item.url,
            nombre_ins: item.data.instituciones.name,
            type: item.data.instituciones.type,
        });
    });

    return index.toJSON();
};