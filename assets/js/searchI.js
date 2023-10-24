(function (window, document) {
"use strict";
    
    const search = (e) => {
        const container = document.getElementById('container-all')  
        
        const results = window.searchIndex.search(e.target.value, {
        bool: "OR",
        expand: true,
        });
        
        const res = document.getElementById("row-results");

        res.innerHTML = "";
        if (results) {
            container.style.display = "none"
            results.map((r) => {
                const { id, nombre_ins } = r.doc;
                

                const col = document.createElement("div");
                col.classList.add("col-lg-6");
                col.classList.add("col-md-6");
                col.classList.add("col-12");
                col.classList.add("col-sm-6");

                const vendor_wrap = document.createElement("div");
                vendor_wrap.classList.add("vendor-wrap");
                vendor_wrap.classList.add("style-2");
                vendor_wrap.classList.add("mb-40");

                const tipo = document.createElement("div");
                tipo.classList.add("product-badges");
                tipo.classList.add("product-badges-position");
                tipo.classList.add("product-badges-mrg");

                const span = document.createElement("span");
                span.classList.add("hot");
                span.textContent = "Institución";

                const vendor_img_wrap = document.createElement("div");
                vendor_img_wrap.classList.add("vendor-img-action-wrap");

                const vendor_img = document.createElement("div");
                vendor_img.classList.add("vendor-img");

                const a_img = document.createElement("a");
                a_img.setAttribute("href", id);

                const img = document.createElement("img");
                img.classList.add("default-img");
                img.src ="/ELEMENTOS/ELEMENTOS MEJORAS/ICONOS/ICONOS-22.png";

                const vendor_content_wrap = document.createElement("div");
                vendor_content_wrap.classList.add("vendor-content-wrap");
                vendor_content_wrap.classList.add("w-100");

                const margin = document.createElement("div");
                margin.classList.add("mb-30");
                margin.classList.add("mt-30");

                const title = document.createElement("div");
                title.classList.add("overflow-hidden");
                title.style.height = "60px";

                const h4 = document.createElement("h4");
                h4.classList.add("mb-5");

                const a_title = document.createElement("a");
                a_title.setAttribute("href", id);
                a_title.textContent = nombre_ins;
                
                const vendor_info = document.createElement("div")
                vendor_info.classList.add("vendor-info")
                vendor_info.classList.add("d-flex")
                vendor_info.classList.add("justify-content-between")
                vendor_info.classList.add("align-items-end")
                vendor_info.classList.add("mt-30")

                const a_texto = document.createElement("a")
                a_texto.setAttribute("href", id);
                a_texto.classList.add("btn")
                a_texto.classList.add("btn-xs")
                a_texto.textContent = "Ver más";
                
                res.appendChild(col);
                col.appendChild(vendor_wrap);
                tipo.appendChild(span);
                vendor_wrap.appendChild(tipo);
                vendor_img_wrap.appendChild(vendor_img);
                vendor_img.appendChild(a_img);
                a_img.appendChild(img);
                vendor_wrap.appendChild(vendor_img_wrap);
                vendor_content_wrap.appendChild(margin);
                margin.appendChild(title);
                title.appendChild(h4);
                h4.appendChild(a_title);
                margin.appendChild(vendor_info)
                vendor_info.appendChild(a_texto)
                vendor_wrap.appendChild(vendor_content_wrap)

            });
        }
        if (results.length < 1){
            container.style.display = "block"
        }

    };

    fetch("/search-indexI.json").then((response) =>
        response.json().then((rawIndex) => {
            window.searchIndex = elasticlunr.Index.load(rawIndex);
            document.getElementById("search-instituciones").addEventListener("input", search );
            document.getElementById("keypress", function(event) {
                if (event.key === "Enter") {
                alert(event.key  + " " + event.which);
                event.preventDefault();
                }
          });
        })
    );
})(window, document);