// utils/getFinancialAdvice.js
import { GoogleGenerativeAI } from "@google/generative-ai";

// Access the API key securely from environment variables
const apiKey = process.env.NEXT_PUBLIC_GEMENI_KEY;

if (!apiKey) {
  console.error("Error: GEMINI_KEY is not defined in the environment variables.");
  throw new Error("API key is missing. Check your .env.local configuration.");
}

// Initialize the Generative AI client
const genAI = new GoogleGenerativeAI(apiKey);

// Load the model once
let model;
try {
  model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
} catch (error) {
  console.error("Error initializing generative model:", error);
  throw new Error("Failed to initialize the generative AI model.");
}

// Function to generate personalized financial advice
const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
  try {
    const userPrompt = `
      Based on the following financial data:
      - Total Budget: ${totalBudget} Rupees 
      - Expenses: ${totalSpend} Rupees
      - Incomes: ${totalIncome} Rupees
      Provide detailed financial advice in 2 sentences to help the user manage their finances more effectively.
    `;

    // Send the prompt to the Gemini API using generateContent
    const result = await model.generateContent(userPrompt);
    const advice = result.response.text();

    console.log("Financial advice generated:", advice);
    return advice;
  } catch (error) {
    console.error("Error fetching financial advice:", error);
    return "Sorry, I couldn't fetch the financial advice at this moment. Please try again later.";
  }
};

export default getFinancialAdvice;
