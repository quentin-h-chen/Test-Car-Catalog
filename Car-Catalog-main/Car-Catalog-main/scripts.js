/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */

const BMW_M2_URL = "https://www.topgear.com/sites/default/files/cars-car/carousel/2018/07/bmw_m2_comp_002.jpg";
const TOYOTA_SUPRA_URL = "https://robbreport.com/wp-content/uploads/2020/10/1-22.jpg?w=1000";
const AUDI_R8_URL = "https://uploads.audi-mediacenter.com/system/production/media/70272/images/3c92d2acbf6ab5f85be8006f854786f0f0ff36be/A1813681_web_2880.jpg?1698341967";
const ASTON_MARTIN_VANTAGE_URL = "https://i.pinimg.com/originals/10/31/cc/1031ccf9608e63e3d0875890b853664c.jpg";
const HONDA_NSX_URL = "https://i.pinimg.com/originals/ae/d4/24/aed424513e515eda33ce5d3cfd560ef4.jpg";
const NISSAN_S15_URL = "https://cdn.dealeraccelerate.com/international/1/870/38851/1920x1440/1999-nissan-silvia";
const PORSCHE_TURBO_S_URL = "https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/teaser_720x406x1_5/dam/US-local/Press-Releases/2020/March-2020/20200303-911-Turbo-S/porsche_newsroom_20200309-(1)/high_911_turbo_s_coup%EF%BF%BD_2020_porsche_ag.jpeg/jcr:content/high_911_turbo_s_coup%EF%BF%BD_2020_porsche_ag.jpeg";
const MCLAREN_P1_URL = "https://hips.hearstapps.com/hmg-prod/images/2014-mclaren-p1-1111-charlie-magee-1531410060.jpg?crop=0.821xw:1.00xh;0.0401xw,0&resize=768:*";
const LEXUS_LC500_URL = "https://images.spot.im/v1/production/xnq8iuorodyipfx4q4sx";
const MERCEDES_AMG_GTR_URL = "https://reforma-uk.com/wp-content/uploads/2023/09/Mercedes-AMG-GTR-Full-Car-Wrap-06.webp";
const HONDA_S2000_URL = "https://www.motortrend.com/uploads/sites/11/2020/01/2000-2009-Honda-S2000-Market-Watch-01.jpg";
const AUDI_RS7_URL = "https://cdn.motor1.com/images/mgl/7ZmbmJ/402:0:7065:5304/audi-rs7-by-abt.webp";
const CHEVORLET_CORVETTE_Z06_URL = "https://www.corvsport.com/wp-content/uploads/2023/05/2019_chevrolet_callaway-z06-coupe_2019_chevrolet_callaway-z06-coupe_81c78b1c-d509-4a74-a56f-1ef149256805-yUfRnP-75862-75864-scaled-1.jpg";
const FERRARI_488_PISTA_URL = "https://cdn.motor1.com/images/mgl/vyjQb/s1/ferrari-488-pista-prova-sul-circuito-di-fiorano.jpg";
const PORSCHE_GT4_RS_URL = "https://www.cnet.com/a/img/resize/e20cedd9a2c0f3cf006ef58f241fe79c14cb739c/hub/2022/03/21/75e1a3d0-adf2-4d7e-8214-daaee63cf37b/ogi1-2022-porsche-cayman-gt4-rs-015.jpg?auto=webp&fit=crop&height=675&width=1200";
const MAZDA_RX7_URL = "https://cdn.motor1.com/images/mgl/6xWp7/s3/mazda-rx-7-fd.jpg";
const FORD_MUSTANG_MACH_1_URL = "https://i.ytimg.com/vi/pX7nDurCbHQ/maxresdefault.jpg";
const PORSCHE_918_SPYDER_URL = "https://robbreport.com/wp-content/uploads/2021/07/1-15.jpg?w=1000";
const FORD_GT40_URL = "https://www.motortrend.com/uploads/sites/5/2021/07/1969-Superformance-Ford-GT40-MKI-Tool-Room-Replica-73.jpg";
const MCLAREN_720S_URL = "https://www.cnet.com/a/img/resize/b5471c1f2f8ced824b01621f991dc8514011d209/hub/2018/12/12/1d693d42-6b74-447b-b486-6e2447be97d1/ogi1-mclaren-720s-track-pack-001.jpg?auto=webp&fit=crop&height=675&width=1200";
const BMW_M3_COMPETITION_URL = "https://www.daehler-tuning.com/wp-content/uploads/2023/05/bmw-M3-g80-tuning-dAHLer-Competition-Line-AG-1-scaled.jpg";
const ASTON_MARTIN_DB5_URL = "https://www.topgear.com/sites/default/files/images/cars-road-test/carousel/2020/09/dff4930d8cbfb911a91f742f02f2064c/aston-martin-db5-goldfinger-jason-barlow-photo-max-earey-38-jpg.jpg";




// This function adds cards the page to display the data in the array
// function showCards() {
//     const cardContainer = document.getElementById("card-container");
//     cardContainer.innerHTML = "";
//     const templateCard = document.querySelector(".card");
    
//     for (let i = 0; i < titles.length; i++) {
//         // This part of the code doesn't scale very well! After you add your
//         // own data, you'll need to do something totally different here.
//         let title = titles[i];
//         let imageURL = title.imageURL;

//         const nextCard = templateCard.cloneNode(true); // Copy the template card
//         editCardContent(nextCard, title, imageURL); // Edit title and image
//         cardContainer.appendChild(nextCard); // Add new card to the container
//     }
// }

let carList = [
    {
        make: "Audi",
        model: "R8",
        imageURL: AUDI_R8_URL,
        specifications: {
            engine: "5.2-liter V10",
            horsepower: 562,
            top_speed: 205,
            zero_to_sixty_in_seconds: 3.2,
            price: 158600
        }
    },
    {
        make: "BMW",
        model: "M2 Competition",
        imageURL: BMW_M2_URL,
        specifications: {
            engine: "3.0-liter inline six",
            horsepower: 405,
            top_speed: 174,
            zero_to_sixty_in_seconds: 4,
            price: 58900
        }
    },
    {
        make: "Toyota",
        model: "Supra",
        imageURL: TOYOTA_SUPRA_URL,
        specifications: {
            engine: "3.0-liter inline-six",
            horsepower: 382,
            top_speed: 155,
            zero_to_sixty_in_seconds: 3.9,
            price: 58550
        }
    },
    {
        make: "Honda",
        model: "NSX",
        imageURL: HONDA_NSX_URL,
        specifications: {
            engine: "3.0-liter V6",
            horsepower: 270,
            top_speed: 168,
            zero_to_sixty_in_seconds: 5.4,
            price: 61600
        }
    },
    {
        make: "Nissan",
        model: "Silvia S15",
        imageURL: NISSAN_S15_URL,
        specifications: {
            engine: "2.0-liter inline-4",
            horsepower: 247,
            top_speed: 156,
            zero_to_sixty_in_seconds: 5.5,
            price: 20000
        }
    },
    {
        make: "Porsche",
        model: "911 Turbo S",
        imageURL: PORSCHE_TURBO_S_URL,
        specifications: {
            engine: "3.7-liter twin-turbo flat-6",
            horsepower: 640,
            top_speed: 205,
            zero_to_sixty_in_seconds: 2.2,
            price: 203500
        }
    },
    {
        make: "McLaren",
        model: "P1",
        imageURL: MCLAREN_P1_URL,
        specifications: {
            engine: "3.8-liter twin-turbo V8",
            horsepower: 903,
            top_speed: 217,
            zero_to_sixty_in_seconds: 2.7,
            price: 1475000
        }
    },
    {
        make: "Lexus",
        model: "LC 500",
        imageURL: LEXUS_LC500_URL,
        specifications: {
            engine: "5.0-liter V8",
            horsepower: 471,
            top_speed: 168,
            zero_to_sixty_in_seconds: 4.4,
            price: 98450
        }
    },
    {
        make: "Mercedes-AMG",
        model: "GT R",
        imageURL: MERCEDES_AMG_GTR_URL,
        specifications: {
            engine: "4.0-liter twin-turbo V8",
            horsepower: 577,
            top_speed: 198,
            zero_to_sixty_in_seconds: 3.5,
            price: 157000
        }
    },
    {
        make: "Audi",
        model: "RS7",
        imageURL: AUDI_RS7_URL,
        specifications: {
            engine: "4.0-liter twin-turbo V8",
            horsepower: 627,
            top_speed: 190,
            zero_to_sixty_in_seconds: 3.3,
            price: 128895
        }
    },
    {
        make: "Chevorlet",
        model: "Corvette Z06",
        imageURL: CHEVORLET_CORVETTE_Z06_URL,
        specifications: {
            engine: "6.2-liter V8",
            horsepower: 650,
            top_speed: 196,
            zero_to_sixty_in_seconds: 3.2,
            price: 79995
        }
    },
    {
        make: "Ferrari",
        model: "488 Pista",
        imageURL: FERRARI_488_PISTA_URL,
        specifications: {
            engine: "Twin-turbo 3.9-liter V8",
            horsepower: 710,
            top_speed: 211,
            zero_to_sixty_in_seconds: 2.85,
            price: 330000
        }
    },
    {
        make: "Porsche",
        model: "2022 GT4 RS",
        imageURL: PORSCHE_GT4_RS_URL,
        specifications: {
            engine: "4.0-liter flat-six",
            horsepower: 493,
            top_speed: 193,
            zero_to_sixty_in_seconds: 3.4,
            price: 143000
        }
    },
    {
        make: "Mazda",
        model: "RX-7 FD",
        imageURL: MAZDA_RX7_URL,
        specifications: {
            engine: "1.3-liter twin-turbo rotary",
            horsepower: 252,
            top_speed: 155,
            zero_to_sixty_in_seconds: 5.3,
            price: 40000
        }
    },
    {
        make: "Ford",
        model: "Mustang Mach 1",
        imageURL: FORD_MUSTANG_MACH_1_URL,
        specifications: {
            engine: "5.8-liter V8",
            horsepower: 335,
            top_speed: 118,
            zero_to_sixty_in_seconds: 6.2,
            price: 3500
        }
    },
    {
        make: "Porsche",
        model: "918 Spyder",
        imageURL: PORSCHE_918_SPYDER_URL,
        specifications: {
            engine: "4.6-liter V8 hybrid",
            horsepower: 887,
            top_speed: 214,
            zero_to_sixty_in_seconds: 2.2,
            price: 845000
        }
    },
    {
        make: "Ford",
        model: "GT40",
        imageURL: FORD_GT40_URL,
        specifications: {
            engine: "4.7-liter V8",
            horsepower: 335,
            top_speed: 164,
            zero_to_sixty_in_seconds: 5.3,
            price: 2000000
        }
    },
    {
        make: "McLaren",
        model: "720S",
        imageURL: MCLAREN_720S_URL,
        specifications: {
            engine: "4.0-liter twin-turbo V8",
            horsepower: 710,
            top_speed: 212,
            zero_to_sixty_in_seconds: 2.8,
            price: 299000
        }
    },
    {
        make: "BMW",
        model: "M3 Competition",
        imageURL: BMW_M3_COMPETITION_URL,
        specifications: {
            engine: "3.0-liter inline-six",
            horsepower: 503,
            top_speed: 180,
            zero_to_sixty_in_seconds: 3.8,
            price: 72900
        }
    },
    {
        make: "Aston Martin",
        model: "DB5",
        imageURL: ASTON_MARTIN_DB5_URL,
        specifications: {
            engine: "4.0-liter inline-six",
            horsepower: 282,
            top_speed: 143,
            zero_to_sixty_in_seconds: 8.1,
            price: 12775
        }
    }
    
    
];


function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    for (let i = 0; i < carList.length; ++i) {
        const car = carList[i];
        const card = document.createElement("div");
        card.classList.add("card");

        const cardContent = `<div class="card-content"><h2>${car.make} ${car.model}</h2>
        <img src="${car.imageURL}" alt="${car.make} ${car.model} image"/>
        <ul>
            <li>Engine: ${car.specifications.engine}</li>
            <li>Horsepower: ${car.specifications.horsepower}</li>
            <li>Top Speed: ${car.specifications.top_speed}</li>
            <li>0-60 mph: ${car.specifications.zero_to_sixty_in_seconds} seconds</li>
            <li>Price: $${car.specifications.price}</li>
        </ul> 
        <input type="checkbox" class="select-car-checkbox"></>
        </div>`;

        card.innerHTML = cardContent;

        cardContainer.appendChild(card);
    }
}

function editCardContent(card, newTitle, newImageURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle.make + " " + newTitle.model;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle.make + " " + newTitle.model + " image";

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTitle.make + " " + newTitle.model, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
    carList.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}

// Car Comparison
function compareCars() {
    const selectedCars = Array.from(document.querySelectorAll(".card input[type='checkbox']:checked")).map(checkbox => checkbox.value);

    if (selectedCars.length !== 2) {
        alert("Please select exactly two cars to compare.");
        return;
    }

    const car1 = carList.find(car => car.make + " " + car.model === selectedCars[0]);
    const car2 = carList.find(car => car.make + " " + car.model === selectedCars[1]);

    if (!car1 || !car2) {
        alert("Error: Selected cars not found in the database.");
        return;
    }

    // Open a popup window or modal to display the comparison
    const comparisonWindow = window.open("", "Car Comparison", "width=600,height=400");
    comparisonWindow.document.write(`<h1>${car1.make} ${car1.model} vs ${car2.make} ${car2.model}</h1>`);
    comparisonWindow.document.write(`<h2>${car1.make} ${car1.model} Specifications:</h2>`);
    comparisonWindow.document.write(`<ul>${Object.entries(car1.specifications).map(([key, value]) => `<li>${key}: ${value}</li>`).join("")}</ul>`);
    comparisonWindow.document.write(`<h2>${car2.make} ${car2.model} Specifications:</h2>`);
    comparisonWindow.document.write(`<ul>${Object.entries(car2.specifications).map(([key, value]) => `<li>${key}: ${value}</li>`).join("")}</ul>`);
}
