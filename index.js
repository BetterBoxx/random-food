import fs from "fs";

// Constants
let randomFoodItem = "";
const ketoFoodList = JSON.parse(
	fs.readFileSync("./node_modules/random-food/ketoDB.json", "utf8")
);
const foodList = JSON.parse(
	fs.readFileSync("./node_modules/random-food/foodDB.json", "utf8")
);
const suffixList = JSON.parse(
	fs.readFileSync("./node_modules/random-food/suffixDB.json", "utf8")
);

export function randomFood(msg) {
	if (
		msg.content.startsWith(process.env.RANDOM_FOOD_1) ||
		msg.content.startsWith(process.env.RANDOM_FOOD_2)
	) {
		if (msg.room.startsWith("KETO")) {
			const randomKetoFoodIndex = Math.floor(Math.random() * ketoFoodList.length);
			randomFoodItem = ketoFoodList[randomKetoFoodIndex].name;
		} else {
			const randomFoodIndex = Math.floor(Math.random() * foodList.length);
			randomFoodItem = foodList[randomFoodIndex].name;
		}

		const randomSuffixIndex = Math.floor(Math.random() * suffixList.length);
		const randomSuffix = suffixList[randomSuffixIndex].name;
		const generatedMessage = randomFoodItem + randomSuffix;

		msg.reply(generatedMessage);
	}
}
