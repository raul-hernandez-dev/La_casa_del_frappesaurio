export const milkOptions = [
  "Entera",
  "Deslactosada",
  "Deslactosada light",
  "Almendra",
  "Coco"
];

export const coffeeMenu = [
  {
    name: "Espresso",
    temperature: "hot",
    milk: false,
    sizes: [
      { label: "Sencillo 2oz", price: 36 },
      { label: "Doble 4oz", price: 42 },
      { label: "Triple 6oz", price: 48 }
    ]
  },
  {
    name: "Espresso cubano",
    temperature: "hot",
    milk: false,
    sizes: [
      { label: "Sencillo 2oz", price: 38 },
      { label: "Doble 4oz", price: 44 },
      { label: "Triple 6oz", price: 50 }
    ]
  },
  {
    name: "Espresso cortado",
    temperature: "hot",
    milk: true,
    sizes: [
      { label: "Sencillo 2oz", price: 42 },
      { label: "Doble 4oz", price: 46 },
      { label: "Triple 6oz", price: 52 }
    ]
  },
  {
    name: "Americano",
    description:
      "Clásico café negro, puede incluir crema, puedes cortarlo con leche por $6.00 pesos +",
    temperature: "both",
    milk: false,
    sizes: [
      { label: "12oz", price: 38 },
      { label: "16oz", price: 52 }
    ]
  },
  {
    name: "Capuccino",
    description: "Espumoso, intenso sabor a café",
    temperature: "hot",
    milk: true,
    sizes: [
      { label: "12oz", price: 55 },
      { label: "16oz", price: 66 }
    ]
  },
  {
    name: "Latte",
    description: "Espuma sedosa, suave sabor a café",
    temperature: "both",
    milk: true,
    sizes: [
      { label: "12oz", price: 55 },
      { label: "16oz", price: 66 }
    ]
  },
  {
    name: "Latte de sabor",
    description:
      "Amaretto, avellanas, almendras, crema irlandesa, caramelo, cajeta, choco menta, red velvet, rompope",
    recommended: true,
    temperature: "both",
    milk: true,
    sizes: [
      { label: "12oz", price: 60 },
      { label: "16oz", price: 72 }
    ]
  },
  {
    name: "Latte de Baileys",
    temperature: "both",
    milk: true,
    sizes: [
      { label: "12oz", price: 68 },
      { label: "16oz", price: 76 }
    ]
  },
  {
    name: "Moka",
    description: "Chocolate artesanal chiapaneco con café",
    recommended: true,
    temperature: "both",
    milk: true,
    sizes: [
      { label: "12oz", price: 68 },
      { label: "16oz", price: 76 }
    ]
  },
  {
    name: "Moka blanco",
    description: "Chocolate blanco con café",
    temperature: "both",
    milk: true,
    sizes: [
      { label: "12oz", price: 68 },
      { label: "16oz", price: 76 }
    ]
  }
];