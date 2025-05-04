const coffees = [
    {
      name: "Affogato",
      image: "affogato.png"
    },
    {
      name: "Black Coffee",
      image: "blackcoffee.png"
    },
    {
      name: "Cappuccino",
      image: "cappuccino.png"
    },
    {
      name: "Cold Brew",
      image: "coldbrew.png"
    },
    {
      name: "Frappuccino",
      image: "frappuccino.png"
    },
    {
      name: "Latte",
      image: "latte.png"
    },
    {
      name: "Mocha",
      image: "mocha.png"
    }
  ];
  
  const coffeeBtn = document.getElementById("coffeeBtn");
  const coffeeName = document.getElementById("coffeeName");
  const coffeeImage = document.getElementById("coffeeImage");
  const previousList = document.getElementById("previousList");
  const toggleHistory = document.getElementById("toggleHistory");
  
  let previousCoffees = [];
  
  coffeeBtn.addEventListener("click", () => {
    const roll = Math.floor(Math.random() * coffees.length);
    const selected = coffees[roll];
  
    coffeeName.textContent = selected.name;
    coffeeImage.src = selected.image;
    coffeeImage.style.display = "block";
    coffeeImage.alt = selected.name;
  
    // Store in previous list
    previousCoffees.push(selected);
    updatePreviousList();
  });
  
  toggleHistory.addEventListener("click", () => {
    const isVisible = previousList.style.display === "block";
    previousList.style.display = isVisible ? "none" : "block";
    toggleHistory.textContent = isVisible ? "Show Previous Coffees" : "Hide Previous Coffees";
  });
  
  function updatePreviousList() {
    previousList.innerHTML = "";
    previousCoffees.forEach((coffee, index) => {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${index + 1}. ${coffee.name}</strong>`;
      previousList.appendChild(div);
    });
  }