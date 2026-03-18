const sizes = (p12, p16) => [
  { label: "12oz", price: p12 },
  { label: "16oz", price: p16 }
];

export const frappesClasicos = [
  { name: "Capuccino", temperature: "cold", milk: true, sizes: sizes(67, 75) },
  { name: "Moka", temperature: "cold", milk: true, sizes: sizes(70, 78) },
  { name: "Moka blanco", temperature: "cold", milk: true, sizes: sizes(70, 78) },
  { name: "Crema irlandesa", temperature: "cold", milk: true, sizes: sizes(70, 78) },
  { name: "Mazapán", temperature: "cold", milk: true, sizes: sizes(70, 78) },
  { name: "Oreo", temperature: "cold", milk: true, sizes: sizes(70, 78) },
  { name: "Caramelo", temperature: "cold", milk: true, sizes: sizes(70, 78) },
  { name: "Almendras", temperature: "cold", milk: true, sizes: sizes(70, 78) },
  { name: "Avellana", temperature: "cold", milk: true, sizes: sizes(70, 78) },
  { name: "Amaretto", temperature: "cold", milk: true, sizes: sizes(70, 78) },
  { name: "Cajeta", temperature: "cold", milk: true, sizes: sizes(70, 78) },
  { name: "Chocolate", temperature: "cold", milk: true, sizes: sizes(70, 78) },
  { name: "Red velvet", temperature: "cold", milk: true, sizes: sizes(70, 78) },
  {
    name: "Xocolatl",
    description: "Natural, menta, avellana, almendras, cardamomo",
    temperature: "cold",
    milk: true,
    recommended: true,
    sizes: sizes(70, 78)
  },
  { name: "Chocolate blanco", temperature: "cold", milk: true, sizes: sizes(70, 78) },
  { name: "Chocomenta blanco", temperature: "cold", milk: true, sizes: sizes(70, 78) },
  { name: "Chocoplátano", temperature: "cold", milk: true, sizes: sizes(70, 78) },
  {
    name: "Tisana",
    description: "Mora azul, fresa, kiwi, mango durazno, lichi con pétalos de rosa",
    temperature: "cold",
    milk: false,
    sizes: sizes(70, 78)
  },
  { name: "Coco", temperature: "cold", milk: true, sizes: sizes(70, 78) }
];

export const frappesEspeciales = [
  { 
    name: "Tradicional", 
    alias: "Clásicoraptor Vainilla", 
    recommended: true, 
    temperature: "cold", 
    milk: true, 
    sizes: sizes(82, 92) 
  },
  { 
    name: "Blanco", 
    alias: "Albasaurio Chocolate", 
    temperature: "cold", 
    milk: true, 
    sizes: sizes(82, 92) 
  },
  { 
    name: "Vainilla francesa", 
    alias: "Galisaurio Crema", 
    recommended: true, 
    temperature: "cold", 
    milk: true, 
    sizes: sizes(82, 92) 
  },
  { 
    name: "Chai / chai sucio", 
    alias: "T-Chai Rex", 
    description: "Especias orientales con un toque de té negro", 
    temperature: "both", 
    milk: true, 
    sizes: sizes(82, 92) 
  },
  { 
    name: "Matcha", 
    alias: "Veloci-Matcha-Raptor", 
    description: "Té verde japonés premium", 
    temperature: "both", 
    milk: true, 
    sizes: sizes(82, 92) 
  },
  { 
    name: "Taro", 
    alias: "Tarosintatops Morado", 
    description: "Sabor dulce y cremoso de raíz de taro", 
    temperature: "both", 
    milk: true, 
    sizes: sizes(82, 92) 
  },
  { 
    name: "Ferrero", 
    alias: "Ferrerosaurio Rex", 
    recommended: true, 
    temperature: "cold", 
    milk: true, 
    sizes: sizes(82, 92) 
  },
  { 
    name: "Gansito", 
    alias: "Gansitodáctilo Dulce", 
    description: "El clásico pastelito hecho frappé", 
    temperature: "cold", 
    milk: true, 
    sizes: sizes(82, 92) 
  },
  { 
    name: "Pingüino", 
    alias: "Pinguisaurio Choco-Nieve", 
    temperature: "cold", 
    milk: true, 
    sizes: sizes(82, 92) 
  },
  { 
    name: "Rompope", 
    alias: "Rompopesaurio Navideño", 
    temperature: "cold", 
    milk: true, 
    sizes: sizes(82, 92) 
  },
  { 
    name: "Cookies and cream", 
    alias: "Oreo-Saurio Oreo-Smash", 
    temperature: "cold", 
    milk: true, 
    sizes: sizes(82, 92) 
  },
  { 
    name: "Cookies and taro", 
    alias: "Taro-Cookie-Saurio Mix", 
    temperature: "cold", 
    milk: true, 
    sizes: sizes(82, 92) 
  },
  { 
    name: "Danonino", 
    alias: "Dino-Danonino Fresa", 
    recommended: true, 
    temperature: "cold", 
    milk: true, 
    sizes: sizes(82, 92) 
  },
  { 
    name: "Espresso", 
    alias: "Espressosaurio Cafeinado", 
    temperature: "cold", 
    milk: true, 
    sizes: sizes(82, 92) 
  },
  { 
    name: "Baileys", 
    alias: "Baileysaurus Cream", 
    temperature: "both", 
    milk: true, 
    sizes: sizes(82, 92) 
  }
];