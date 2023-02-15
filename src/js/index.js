document.addEventListener('DOMContentLoaded', function () {

    // Lazy-load for map

    if (document.querySelector(".map-container")) {
        let map_container = document.querySelectorAll(".map-container");
        let map_section = document.querySelectorAll(".map");
        let options_map = {
            once: true,//запуск один раз, и удаление наблюдателя сразу
            passive: true,
            capture: true
        };
        
        let map_loaded = [];
        map_section.forEach((el, i) => {
            map_loaded.push(false);
        });

        map_section.forEach((element, i) => {
            let map_block = element.querySelector('[data-map-lazy]');
            if (map_block.getAttribute("id") === "noScrollMapLoading") {
                if (!map_loaded[i] ) {
                    map_loaded[i] = true;
                    map_block.setAttribute('src', map_block.getAttribute('data-src'));
                    map_block.removeAttribute('data_src');
                }

            }
        });

        function startLazyMap() {
            let windowCenter = window.innerHeight + window.scrollY;
            map_section.forEach((element, i) => {
                let scrollOffset = element.offsetTop + (element.offsetHeight / 5);
                if (windowCenter >= scrollOffset) {
                    if (!map_loaded[i]) {
                        let map_block = element.querySelector('[data-map-lazy]');
                        map_loaded[i] = true;
                        map_block.setAttribute('src', map_block.getAttribute('data-src'));
                        map_block.removeAttribute('data_src');
                    }
                }
                
            });
        }
    }

    // Input mask

    $(".phoneMask").mask('+7 (999) 999-99-99', {placeholder: '+7 (___) ___-__-__'});
    
    const scrollEvent = () => {
        if (document.querySelector(".map-container")) {
            startLazyMap();
        }
        if (document.querySelector(".parallax__item")) {
            parallax();
        }
    }
    if (document.scrollHeight === document.offsetHeight) {
        window.addEventListener("scroll", scrollEvent);
    } else {
        scrollEvent();
    }

    // Breadcrumbs link to h1

    if (document.querySelector(".breadcrumbs")) {
        const breadcrumbsList = document.querySelector(".breadcrumbs__list");
        const breadcrumbsItems = document.querySelectorAll('.breadcrumbs__item');
        const breadcrumbLast = breadcrumbsItems[breadcrumbsItems.length - 1];
    
        const newBreadcrumb = document.createElement('li');
        breadcrumbLast.className.split(' ').forEach(element => newBreadcrumb.classList.add(element));
        newBreadcrumb.innerHTML = `
            <h1>
                ${breadcrumbLast.innerText}
            </h1>
        `;
        breadcrumbsList.append(newBreadcrumb);
    }

});