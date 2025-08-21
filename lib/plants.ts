export interface Plant {
  id: string
  name: string
  scientificName: string
  category: string
  careLevel: string
  shortDescription: string
  description: string
  image: string
  light: string
  water: string
  temperature: string
  careGuide: string[]
  propagation: {
    method: string
    description: string
  }[]
  benefits: {
    title: string
    description: string
  }[]
}

export const plants: Plant[] = [
  {
    id: "monstera-deliciosa",
    name: "Monstera Deliciosa",
    scientificName: "Monstera deliciosa",
    category: "Indoor",
    careLevel: "Easy",
    shortDescription: "Popular houseplant with unique split leaves",
    description:
      "The Monstera Deliciosa, also known as the Swiss Cheese Plant, is famous for its large, glossy, perforated leaves. It's a popular choice for indoor spaces due to its dramatic appearance and relatively easy care requirements.",
    image: "/images/monstera.jpeg",
    light: "Bright indirect",
    water: "Weekly",
    temperature: "65-85°F",
    careGuide: [
      "Place in bright, indirect light. Avoid direct sunlight as it can burn the leaves.",
      "Water when the top 1-2 inches of soil feels dry to the touch, typically once a week.",
      "Use well-draining soil and a pot with drainage holes.",
      "Maintain humidity around 60% if possible. Mist occasionally or use a humidifier.",
      "Feed with a balanced houseplant fertilizer during the growing season (spring and summer).",
    ],
    propagation: [
      {
        method: "Stem Cuttings",
        description:
          "Cut a stem with at least one node and one leaf. Place in water until roots develop (usually 2-3 weeks), then transfer to soil.",
      },
      {
        method: "Air Layering",
        description:
          "Make a small incision on the stem below a node, wrap with damp sphagnum moss, and cover with plastic. Once roots form, cut below the roots and pot.",
      },
    ],
    benefits: [
      {
        title: "Air Purification",
        description: "Monstera plants help filter indoor air by removing toxins like formaldehyde and benzene.",
      },
      {
        title: "Stress Reduction",
        description: "Studies show that indoor plants like Monstera can reduce stress levels and improve mood.",
      },
      {
        title: "Humidity Improvement",
        description: "Monstera plants release moisture through transpiration, which can improve air humidity levels.",
      },
    ],
  },
  {
    id: "snake-plant",
    name: "Snake Plant",
    scientificName: "Sansevieria trifasciata",
    category: "Indoor",
    careLevel: "Easy",
    shortDescription: "Nearly indestructible plant with upright leaves",
    description:
      "The Snake Plant, also known as Mother-in-Law's Tongue, is one of the most tolerant houseplants you can find. With its stiff, upright leaves and ability to survive in various conditions, it's perfect for beginners or busy plant owners.",
    image: "/images/snakeplant1.jpeg",
    light: "Low to bright indirect",
    water: "Every 2-3 weeks",
    temperature: "60-85°F",
    careGuide: [
      "Can tolerate low light but grows best in bright, indirect light.",
      "Allow soil to dry completely between waterings, typically every 2-3 weeks.",
      "Use well-draining soil, preferably a cactus or succulent mix.",
      "Tolerates low humidity, making it perfect for most indoor environments.",
      "Fertilize lightly 2-3 times per year during the growing season.",
    ],
    propagation: [
      {
        method: "Leaf Cuttings",
        description:
          "Cut a leaf into 2-3 inch sections, remembering which end was closest to the roots. Plant the bottom end about 1 inch deep in soil and keep slightly moist until new growth appears.",
      },
      {
        method: "Division",
        description:
          "When repotting, separate the plant into smaller sections, ensuring each has healthy roots and leaves. Replant in separate containers.",
      },
    ],
    benefits: [
      {
        title: "Air Purification",
        description:
          "One of the best plants for removing toxins like formaldehyde and benzene from indoor air, even at night.",
      },
      {
        title: "Oxygen Production",
        description: "Unlike most plants, snake plants release oxygen at night, making them excellent bedroom plants.",
      },
      {
        title: "Feng Shui Benefits",
        description:
          "In Feng Shui, snake plants are believed to bring protective energy and remove negative chi from spaces.",
      },
    ],
  },
  {
    id: "pothos",
    name: "Pothos",
    scientificName: "Epipremnum aureum",
    category: "Indoor",
    careLevel: "Easy",
    shortDescription: "Trailing vine with heart-shaped leaves",
    description:
      "Pothos, also known as Devil's Ivy, is a versatile trailing plant with heart-shaped leaves that come in various patterns including golden, marble, and neon. It's incredibly adaptable and can thrive in a variety of indoor conditions.",
    image: "/images/pothos.jpeg",
    light: "Low to bright indirect",
    water: "Every 1-2 weeks",
    temperature: "65-85°F",
    careGuide: [
      "Adaptable to various light conditions, from low light to bright indirect light.",
      "Allow the top inch of soil to dry out between waterings, typically every 1-2 weeks.",
      "Use a standard potting mix with good drainage.",
      "Tolerates normal household humidity but appreciates occasional misting.",
      "Fertilize monthly during the growing season with a balanced houseplant fertilizer.",
    ],
    propagation: [
      {
        method: "Stem Cuttings in Water",
        description:
          "Cut a stem below a node, ensuring there are 1-3 leaves attached. Place in water and wait for roots to develop (usually 1-2 weeks), then transfer to soil.",
      },
      {
        method: "Stem Cuttings in Soil",
        description:
          "Cut a stem with at least one node, dip in rooting hormone (optional), and plant directly in moist soil. Keep soil lightly moist until new growth appears.",
      },
    ],
    benefits: [
      {
        title: "Air Purification",
        description:
          "Pothos effectively removes indoor air pollutants like formaldehyde, benzene, and carbon monoxide.",
      },
      {
        title: "Stress Reduction",
        description:
          "The presence of indoor plants like Pothos has been linked to reduced stress levels and improved mood.",
      },
      {
        title: "Versatile Decor",
        description:
          "Can be displayed in hanging baskets, trained to climb, or allowed to trail along shelves, adding greenery to any space.",
      },
    ],
  },
  {
    id: "peace-lily",
    name: "Peace Lily",
    scientificName: "Spathiphyllum",
    category: "Indoor",
    careLevel: "Moderate",
    shortDescription: "Elegant flowering plant with glossy leaves",
    description:
      "The Peace Lily is a popular flowering houseplant known for its elegant white blooms and glossy green leaves. It's valued not only for its beauty but also for its air-purifying qualities and ability to thrive in lower light conditions.",
    image: "/images/peacelily.jpeg",
    light: "Low to medium indirect",
    water: "Weekly",
    temperature: "65-80°F",
    careGuide: [
      "Thrives in low to medium indirect light. Can tolerate fluorescent lighting.",
      "Keep soil consistently moist but not soggy. Water when the top of the soil feels dry.",
      "Use a well-draining potting mix rich in organic matter.",
      "Prefers higher humidity. Mist regularly or place on a pebble tray with water.",
      "Fertilize every 6-8 weeks during the growing season with a balanced houseplant fertilizer.",
    ],
    propagation: [
      {
        method: "Division",
        description:
          "When repotting, gently separate the plant into smaller sections, ensuring each has healthy roots and leaves. Replant in separate containers with fresh potting mix.",
      },
    ],
    benefits: [
      {
        title: "Air Purification",
        description:
          "One of NASA's top air-purifying plants, removing toxins like ammonia, benzene, formaldehyde, and trichloroethylene.",
      },
      {
        title: "Humidity Improvement",
        description: "Releases moisture into the air, helping to improve humidity levels in dry indoor environments.",
      },
      {
        title: "Indicator Plant",
        description:
          "Visibly droops when it needs water, making it an excellent indicator plant for watering schedules.",
      },
    ],
  },
  {
    id: "fiddle-leaf-fig",
    name: "Fiddle Leaf Fig",
    scientificName: "Ficus lyrata",
    category: "Indoor",
    careLevel: "Moderate",
    shortDescription: "Trendy plant with large, violin-shaped leaves",
    description:
      "The Fiddle Leaf Fig is a popular indoor tree known for its large, violin-shaped leaves. It makes a dramatic statement in any space and has become a staple in interior design. While beautiful, it requires consistent care to thrive.",
    image: "/images/fiddlefig.jpeg",
    light: "Bright indirect",
    water: "Every 7-10 days",
    temperature: "65-75°F",
    careGuide: [
      "Place in bright, indirect light. Some direct morning sun is beneficial, but avoid harsh afternoon sun.",
      "Water when the top 1-2 inches of soil are dry, typically every 7-10 days. Ensure even moisture throughout the pot.",
      "Use well-draining soil, preferably a mix designed for indoor trees or ficus plants.",
      "Prefers moderate to high humidity. Mist leaves regularly or use a humidifier.",
      "Fertilize monthly during the growing season with a balanced houseplant fertilizer.",
    ],
    propagation: [
      {
        method: "Stem Cuttings",
        description:
          "Take a 6-8 inch cutting with at least two leaves. Remove the bottom leaf and place the cutting in water or moist soil. Keep warm and humid until roots develop.",
      },
      {
        method: "Air Layering",
        description:
          "Make a small incision on the stem, apply rooting hormone, wrap with damp sphagnum moss, and cover with plastic. Once roots form, cut below the roots and pot.",
      },
    ],
    benefits: [
      {
        title: "Air Purification",
        description: "Helps filter indoor air pollutants, improving air quality in your home or office.",
      },
      {
        title: "Visual Impact",
        description: "Creates a dramatic focal point in interior spaces, adding height and architectural interest.",
      },
      {
        title: "Biophilic Connection",
        description:
          "Large-leaved plants like the Fiddle Leaf Fig help create a stronger connection to nature, reducing stress and improving wellbeing.",
      },
    ],
  },
  {
    id: "zz-plant",
    name: "ZZ Plant",
    scientificName: "Zamioculcas zamiifolia",
    category: "Indoor",
    careLevel: "Easy",
    shortDescription: "Low-maintenance plant with glossy leaves",
    description:
      "The ZZ Plant is known for its glossy, dark green leaves and extremely forgiving nature. It can survive in low light and with infrequent watering, making it perfect for beginners, offices, or anyone with a busy lifestyle.",
    image: "/images/zzplant.jpeg",
    light: "Low to bright indirect",
    water: "Every 2-3 weeks",
    temperature: "65-85°F",
    careGuide: [
      "Tolerates low light conditions but grows best in medium to bright indirect light.",
      "Allow soil to dry completely between waterings, typically every 2-3 weeks. It's better to underwater than overwater.",
      "Use well-draining soil, preferably a cactus or succulent mix.",
      "Adapts to normal household humidity levels.",
      "Fertilize lightly 2-3 times per year during the growing season.",
    ],
    propagation: [
      {
        method: "Leaf Cuttings",
        description:
          "Remove a healthy leaf with a small portion of the stem attached. Let it callus for a day, then plant in well-draining soil. Be patient, as it can take several months for new growth to appear.",
      },
      {
        method: "Division",
        description:
          "When repotting, carefully separate the rhizomes (underground stems) and plant in separate containers. Ensure each division has healthy roots and stems.",
      },
    ],
    benefits: [
      {
        title: "Air Purification",
        description: "Removes toxins like xylene, toluene, and benzene from indoor air.",
      },
      {
        title: "Stress Reduction",
        description:
          "Low-maintenance nature means less stress about plant care, while still providing the psychological benefits of indoor greenery.",
      },
      {
        title: "Drought Tolerance",
        description:
          "Stores water in its rhizomes, allowing it to survive extended periods without watering—perfect for travelers or forgetful plant owners.",
      },
    ],
  },
]
