import fs from "fs";

export function randomFood(msg) {
	let randomFoodItem = "";
	const ketoFoodList = JSON.parse(
		fs.readFileSync("./plugins/random-food/ketoDB.json", "utf8")
	);
	const foodList = JSON.parse(
		fs.readFileSync("./plugins/random-food/foodDB.json", "utf8")
	);
	const suffixList = JSON.parse(
		fs.readFileSync("./plugins/random-food/suffixDB.json", "utf8")
	);

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
