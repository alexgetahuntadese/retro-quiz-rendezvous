// Grade 12 Agriculture Questions Data
export interface Question {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const grade12AgricultureQuestions: { [key: string]: Question[] } = {
  "Unit 1: Crop Production": [
    {
      id: "agr12_crop_e1",
      question: "What is the primary purpose of tillage in crop production?",
      options: ["To add nutrients to soil", "To prepare soil for planting and improve structure", "To harvest crops", "To apply pesticides"],
      correct: "To prepare soil for planting and improve structure",
      explanation: "Tillage involves breaking up, loosening, and turning the soil to prepare it for planting and improve soil structure for better root development.",
      difficulty: "Easy"
    },
    {
      id: "agr12_crop_e2",
      question: "Which of the following is considered a cash crop in Ethiopia?",
      options: ["Teff", "Coffee", "Barley", "Wheat"],
      correct: "Coffee",
      explanation: "Coffee is Ethiopia's primary cash crop and major export commodity, generating significant foreign exchange revenue.",
      difficulty: "Easy"
    },
    {
      id: "agr12_crop_m1",
      question: "What is crop rotation and why is it important?",
      options: ["Growing the same crop yearly for consistency", "Growing different crops in sequence to maintain soil fertility", "Rotating fields annually", "Changing farming locations"],
      correct: "Growing different crops in sequence to maintain soil fertility",
      explanation: "Crop rotation involves growing different crops in planned sequence on the same field to maintain soil fertility, break pest cycles, and improve yields.",
      difficulty: "Medium"
    },
    {
      id: "agr12_crop_m2",
      question: "Which irrigation method is most water-efficient for crop production?",
      options: ["Flood irrigation", "Furrow irrigation", "Drip irrigation", "Sprinkler irrigation"],
      correct: "Drip irrigation",
      explanation: "Drip irrigation delivers water directly to plant roots, minimizing water loss through evaporation and ensuring efficient water use.",
      difficulty: "Medium"
    },
    {
      id: "agr12_crop_h1",
      question: "Analyze the impact of climate change on traditional crop production systems in Ethiopia.",
      options: ["No significant impact on traditional systems", "Requires adaptation strategies including drought-resistant varieties", "Only affects modern farming", "Eliminates need for traditional knowledge"],
      correct: "Requires adaptation strategies including drought-resistant varieties",
      explanation: "Climate change significantly impacts traditional farming through altered rainfall patterns, requiring adaptive strategies like drought-resistant crops and improved water management.",
      difficulty: "Hard"
    }
  ],
  "Unit 2: Livestock Management": [
    {
      id: "agr12_livestock_e1",
      question: "What is the primary function of vitamins in livestock nutrition?",
      options: ["Provide energy", "Build muscle tissue", "Regulate body functions and metabolism", "Provide structural support"],
      correct: "Regulate body functions and metabolism",
      explanation: "Vitamins are essential micronutrients that regulate various body functions, support metabolism, and maintain overall health in livestock.",
      difficulty: "Easy"
    },
    {
      id: "agr12_livestock_e2",
      question: "Which of the following is a common sign of good health in cattle?",
      options: ["Droopy ears", "Bright, alert eyes", "Rough coat", "Labored breathing"],
      correct: "Bright, alert eyes",
      explanation: "Bright, alert eyes indicate good health in cattle, while droopy ears, rough coats, and labored breathing may indicate health problems.",
      difficulty: "Easy"
    },
    {
      id: "agr12_livestock_m1",
      question: "What is the purpose of quarantine in livestock management?",
      options: ["To increase feed efficiency", "To prevent disease spread", "To improve breeding", "To reduce labor costs"],
      correct: "To prevent disease spread",
      explanation: "Quarantine isolates new or sick animals to prevent the spread of diseases to the healthy herd, protecting overall animal health.",
      difficulty: "Medium"
    },
    {
      id: "agr12_livestock_m2",
      question: "Which breeding system aims to combine the best traits of different breeds?",
      options: ["Inbreeding", "Line breeding", "Crossbreeding", "Outcrossing"],
      correct: "Crossbreeding",
      explanation: "Crossbreeding combines different breeds to capture hybrid vigor and combine desirable traits from both parent breeds.",
      difficulty: "Medium"
    },
    {
      id: "agr12_livestock_h1",
      question: "Evaluate the role of artificial insemination in improving livestock genetics in developing countries.",
      options: ["Limited impact due to infrastructure", "Revolutionizes genetic improvement through access to superior genetics", "Only useful for large commercial farms", "Replaces natural breeding completely"],
      correct: "Revolutionizes genetic improvement through access to superior genetics",
      explanation: "Artificial insemination provides access to superior genetics from proven sires, dramatically improving livestock productivity even in resource-limited settings.",
      difficulty: "Hard"
    }
  ],
  "Unit 3: Soil Science and Fertility": [
    {
      id: "agr12_soil_e1",
      question: "What are the three main components of soil texture?",
      options: ["Nitrogen, phosphorus, potassium", "Sand, silt, clay", "Organic matter, minerals, water", "Bacteria, fungi, insects"],
      correct: "Sand, silt, clay",
      explanation: "Soil texture is determined by the relative proportions of sand (largest particles), silt (medium particles), and clay (smallest particles).",
      difficulty: "Easy"
    },
    {
      id: "agr12_soil_e2",
      question: "Which soil pH range is generally considered optimal for most crops?",
      options: ["4.0-5.0", "6.0-7.0", "8.0-9.0", "3.0-4.0"],
      correct: "6.0-7.0",
      explanation: "Most crops grow best in slightly acidic to neutral soil with pH 6.0-7.0, where nutrients are most readily available.",
      difficulty: "Easy"
    },
    {
      id: "agr12_soil_m1",
      question: "What is soil organic matter and why is it important?",
      options: ["Only dead plant material", "Living and dead organisms that improve soil structure and fertility", "Inorganic minerals", "Chemical fertilizers"],
      correct: "Living and dead organisms that improve soil structure and fertility",
      explanation: "Soil organic matter includes living organisms, decomposing plant and animal materials that enhance soil structure, water retention, and nutrient availability.",
      difficulty: "Medium"
    },
    {
      id: "agr12_soil_m2",
      question: "How does soil erosion impact agricultural productivity?",
      options: ["Increases soil fertility", "Removes topsoil and reduces productivity", "Has no effect on crops", "Only affects appearance"],
      correct: "Removes topsoil and reduces productivity",
      explanation: "Soil erosion removes the nutrient-rich topsoil layer, reducing soil fertility and agricultural productivity while degrading the growing environment.",
      difficulty: "Medium"
    },
    {
      id: "agr12_soil_h1",
      question: "Design a comprehensive soil conservation strategy for sloped agricultural land in the Ethiopian highlands.",
      options: ["Use only chemical fertilizers", "Implement terracing, cover crops, and agroforestry systems", "Clear all vegetation", "Apply maximum tillage"],
      correct: "Implement terracing, cover crops, and agroforestry systems",
      explanation: "Effective soil conservation on slopes requires integrated approaches including terracing to reduce runoff, cover crops to protect soil, and agroforestry for long-term sustainability.",
      difficulty: "Hard"
    }
  ],
  "Unit 4: Agricultural Economics": [
    {
      id: "agr12_econ_e1",
      question: "What is the main goal of agricultural marketing?",
      options: ["To increase production costs", "To efficiently move products from producers to consumers", "To reduce crop yields", "To eliminate competition"],
      correct: "To efficiently move products from producers to consumers",
      explanation: "Agricultural marketing aims to efficiently transfer agricultural products from producers to consumers while adding value and ensuring fair prices.",
      difficulty: "Easy"
    },
    {
      id: "agr12_econ_e2",
      question: "What does 'value addition' mean in agriculture?",
      options: ["Reducing crop quality", "Processing raw materials to increase their market value", "Decreasing production", "Selling at lower prices"],
      correct: "Processing raw materials to increase their market value",
      explanation: "Value addition involves processing, packaging, or transforming raw agricultural products to increase their market value and profitability.",
      difficulty: "Easy"
    },
    {
      id: "agr12_econ_m1",
      question: "How do cooperatives benefit smallholder farmers?",
      options: ["Increase individual costs", "Provide collective bargaining power and shared resources", "Reduce production efficiency", "Eliminate market access"],
      correct: "Provide collective bargaining power and shared resources",
      explanation: "Cooperatives enable farmers to pool resources, access better prices through collective bargaining, share costs, and gain access to markets and services.",
      difficulty: "Medium"
    },
    {
      id: "agr12_econ_m2",
      question: "What factors influence agricultural commodity prices?",
      options: ["Only weather conditions", "Supply and demand, weather, transportation costs, and government policies", "Only government policies", "Only production costs"],
      correct: "Supply and demand, weather, transportation costs, and government policies",
      explanation: "Agricultural prices are influenced by multiple factors including supply-demand dynamics, weather patterns, transportation costs, storage facilities, and government policies.",
      difficulty: "Medium"
    },
    {
      id: "agr12_econ_h1",
      question: "Analyze the role of agricultural finance in transforming subsistence farming to commercial agriculture.",
      options: ["Finance has no role in transformation", "Access to credit enables investment in inputs, technology, and infrastructure", "Only large farms need finance", "Finance only increases debt burdens"],
      correct: "Access to credit enables investment in inputs, technology, and infrastructure",
      explanation: "Agricultural finance provides capital for farmers to invest in improved inputs, technology, and infrastructure, facilitating the transition from subsistence to commercial farming.",
      difficulty: "Hard"
    }
  ],
  "Unit 5: Agricultural Technology": [
    {
      id: "agr12_tech_e1",
      question: "What is precision agriculture?",
      options: ["Farming with hand tools only", "Using technology to optimize field-level management", "Growing only one crop", "Traditional farming methods"],
      correct: "Using technology to optimize field-level management",
      explanation: "Precision agriculture uses GPS, sensors, and data analysis to optimize field-level management regarding crop farming for maximum efficiency and sustainability.",
      difficulty: "Easy"
    },
    {
      id: "agr12_tech_e2",
      question: "Which technology helps farmers monitor soil moisture levels?",
      options: ["Tractors", "Soil moisture sensors", "Harvesting machines", "Storage facilities"],
      correct: "Soil moisture sensors",
      explanation: "Soil moisture sensors provide real-time data about soil water content, helping farmers optimize irrigation scheduling and water management.",
      difficulty: "Easy"
    },
    {
      id: "agr12_tech_m1",
      question: "How do drones benefit modern agriculture?",
      options: ["Only for entertainment", "Crop monitoring, pest detection, and precision spraying", "Replacing all farm workers", "Only for large farms"],
      correct: "Crop monitoring, pest detection, and precision spraying",
      explanation: "Agricultural drones provide aerial crop monitoring, early pest and disease detection, precision spraying, and field mapping capabilities.",
      difficulty: "Medium"
    },
    {
      id: "agr12_tech_m2",
      question: "What is the purpose of GPS technology in agriculture?",
      options: ["Entertainment only", "Precise field mapping and guided machinery operation", "Weather prediction", "Soil testing"],
      correct: "Precise field mapping and guided machinery operation",
      explanation: "GPS technology enables precise field mapping, automated machinery guidance, variable rate application of inputs, and accurate record keeping.",
      difficulty: "Medium"
    },
    {
      id: "agr12_tech_h1",
      question: "Evaluate the potential impact of artificial intelligence on sustainable agriculture practices.",
      options: ["AI has no agricultural applications", "AI can optimize resource use, predict outcomes, and enhance decision-making", "AI only increases costs", "AI replaces all human knowledge"],
      correct: "AI can optimize resource use, predict outcomes, and enhance decision-making",
      explanation: "AI enhances sustainable agriculture through predictive analytics, optimized resource allocation, automated monitoring, and data-driven decision making for improved efficiency and environmental stewardship.",
      difficulty: "Hard"
    }
  ],
  "Unit 6: Sustainable Agriculture": [
    {
      id: "agr12_sustain_e1",
      question: "What is sustainable agriculture?",
      options: ["Farming that depletes soil", "Farming that meets current needs without compromising future generations", "Using only chemicals", "Maximum production regardless of impact"],
      correct: "Farming that meets current needs without compromising future generations",
      explanation: "Sustainable agriculture meets present food needs while preserving environmental resources and maintaining farm profitability for future generations.",
      difficulty: "Easy"
    },
    {
      id: "agr12_sustain_e2",
      question: "Which practice helps reduce chemical pesticide use?",
      options: ["Monoculture farming", "Integrated pest management", "Increased tillage", "Removing all insects"],
      correct: "Integrated pest management",
      explanation: "Integrated pest management combines biological, cultural, and chemical methods to control pests while minimizing pesticide use and environmental impact.",
      difficulty: "Easy"
    },
    {
      id: "agr12_sustain_m1",
      question: "How does agroforestry contribute to sustainable agriculture?",
      options: ["Reduces biodiversity", "Combines trees with crops for multiple benefits", "Eliminates crop production", "Only provides timber"],
      correct: "Combines trees with crops for multiple benefits",
      explanation: "Agroforestry integrates trees with crops and/or livestock, providing soil conservation, biodiversity, carbon sequestration, and diversified income sources.",
      difficulty: "Medium"
    },
    {
      id: "agr12_sustain_m2",
      question: "What is the role of biodiversity in sustainable farming systems?",
      options: ["Biodiversity is unnecessary", "Enhances ecosystem stability and resilience", "Only complicates farming", "Reduces productivity"],
      correct: "Enhances ecosystem stability and resilience",
      explanation: "Biodiversity strengthens ecosystem stability, provides natural pest control, improves soil health, and increases system resilience to environmental stresses.",
      difficulty: "Medium"
    },
    {
      id: "agr12_sustain_h1",
      question: "Design a comprehensive sustainable farming system for smallholder farmers in semi-arid regions.",
      options: ["Focus only on irrigation", "Integrate water conservation, drought-resistant crops, and livestock", "Use maximum external inputs", "Abandon farming in dry areas"],
      correct: "Integrate water conservation, drought-resistant crops, and livestock",
      explanation: "Sustainable farming in semi-arid regions requires integrated approaches including rainwater harvesting, drought-tolerant crops, efficient irrigation, and complementary livestock systems.",
      difficulty: "Hard"
    }
  ]
};

// Helper function to get questions by difficulty for agriculture
export const getGrade12AgricultureQuestions = (unit: string, difficulty: 'Easy' | 'Medium' | 'Hard'): Question[] => {
  const unitQuestions = grade12AgricultureQuestions[unit] || [];
  return unitQuestions.filter(q => q.difficulty === difficulty);
};

// Export all agriculture questions as a flat array
export const allGrade12AgricultureQuestions = Object.values(grade12AgricultureQuestions).flat();