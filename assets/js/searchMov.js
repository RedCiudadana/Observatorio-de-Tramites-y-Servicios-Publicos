(function (window, document) {
"use strict";
    
    const search = (e) => {
        const cuadro = document.getElementById('searchResultsMov')  
        const results = window.searchIndex.search(e.target.value, {
        bool: "OR",
        expand: true,
        });

        const resEl = document.getElementById("searchResultsMov");


        resEl.innerHTML = "";
        if (results) {
            cuadro.style.display = "block"
            cuadro.classList.add("search-border");
            results.map((r) => {
                const { id, nombre } = r.doc;
                const el = document.createElement("li");
                resEl.appendChild(el);

                const p = document.createElement("p");
                el.appendChild(p);

                const a = document.createElement("a");
                a.setAttribute("href", id);
                a.textContent = nombre;
                p.appendChild(a);

            });
        }
        if(cuadro.childNodes.length < 1){
            cuadro.classList.remove("search-border");
        }

    };

    fetch("/search-index.json").then((response) =>
        response.json().then((rawIndex) => {
            window.searchIndex = elasticlunr.Index.load(rawIndex);
            document.getElementById("searchinputMov").addEventListener("input", search );
            document.getElementById("keypress", function(event) {
                if (event.key === "Enter") {
                alert(event.key  + " " + event.which);
                event.preventDefault();
                }
          });
        })
    );
})(window, document);