 const images = [

            {
                title:"Nature",
                category:"Nature",
                image:"assets/images/nature.jpg"
            },
            
            {
                title: "Forest",
                category: "nature",
                image: "assets/images/forest.jpg"
            },

            {
                title: "Mountain",
                category: "nature",
                image: "assets/images/mountain.jpg"
            },

            {
                title: "River",
                category: "nature",
                image: "assets/images/river.jpg"
            },

            {
                title:"Technology",
                category:"Tech",
                image:"assets/images/tech.jpg"
            },

            {
                title: "AI Robot",
                category: "tech",
                image: "assets/images/ai.jpg"
            },

            {
                title: "Laptop Setup",
                category: "tech",
                image: "assets/images/laptop.jpg"
            },

            {
                title: "Circuit Board",
                category: "tech",
                image: "assets/images/circuit.jpg"
            },

            {
                title:"Space",
                category:"Space",
                image:"assets/images/space.jpg"
            },

            {
                title: "Galaxy",
                category: "space",
                image: "assets/images/galaxy.jpg"
            },

            {
                title: "Moon",
                category: "space",
                image: "assets/images/moon.jpg"
            },

            {
                title: "Stars",
                category: "space",
                image: "assets/images/stars.jpg"
            }

        ];
        
         if(!document.querySelector("h1")){
         const heading = document.createElement("h1");
          heading.innerText = "Dynamic Image Gallery";
           document.body.prepend(heading);
        }

        const gallery = document.getElementById("gallery");

        for(let i = 0; i < images.length; i++){

            const card = document.createElement("div");
            card.classList.add("card");

            const img = document.createElement("img");
            img.src = images[i].image;

            const title = document.createElement("h2");
            title.innerText = images[i].title;

            const category = document.createElement("p");
            category.innerText = images[i].category;


            card.appendChild(img);
            card.appendChild(title);
            card.appendChild(category);

            gallery.appendChild(card);

            

        }
