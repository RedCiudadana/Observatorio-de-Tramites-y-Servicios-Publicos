const elasticlunr = require("elasticlunr");

module.exports = function (collection) {
    // what fields we'd like our index to consist of
    var index = elasticlunr(function () {
        this.addField("institucion");
        this.addField("url");
        this.addField("nombre");
        this.addField("obtenible");
        this.setRef("id");
    });

    // loop through each page and add it to the index
    collection.forEach(item => {
        index.addDoc({
            id: item.url,
            institucion: item.data.servicio.institution.name,
            url: item.data.servicio.url,
            nombre: item.data.servicio.name,
            obtenible: item.data.servicio.typeOfDocumentObtainable
        });
    });

    return index.toJSON();
};