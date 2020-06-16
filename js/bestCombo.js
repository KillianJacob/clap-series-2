const CARDS = {
	as: "A",
	king: "K",
	queen: "Q",
	jack: "J",
	ten: "10",
	nine: "9",
	height: "8",
	seven: "7",
	six: "6",
	five: "5",
	four: "4",
	three: "3",
	two: "2"
}

function bestCombo(cards) {

	cards = orderCards(cards)
	let cardsValue = getCardsValue(cards)
	let cardsType = getCardsType(cards)
	
	// Check for a full
	let hand = []
	let occur = occurences(cards)
	let isAThree = false
	let isATwo = false
	for (let [key, value] of Object.entries(occur)) {
		if (value == 3 && isAThree == false) {
			isAThree = true
			for (var i = 0; i < cards.length; i++) {
				if (cardsValue[i] == CARDS[key]) hand.push(cards[i])
			}
		}
	}
	for (let [key, value] of Object.entries(occur)) {
		if (value == 2 && isATwo == false) {
			isATwo = true
			for (var i = 0; i < cards.length; i++) {
				if (cardsValue[i] == CARDS[key]) hand.push(cards[i])
			}
		}
	}
	if (isAThree && isATwo) {
		return ['Full',hand]
	}

	// Check for a flush
	if (isAFlush(cards)) {
		let hand = []
		let types = ["d", "c", "h", "s"]
		types.forEach(
			type => {
				let nbOcc = nbOccurences(cardsType, type)
				if (nbOcc > 4) {
					let indexes = allIndexOf(cardsType, type)
					for (let i = 0; i < 5; i++) {
						hand.push(cards[indexes[i]])
					}
					return
				}
			}
		)
		return ['Flush',hand]
	}

	if (isABrelan(cards)) {
		let hand = []
		let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]


		for (let i = 0; i < values.length; i++) {

			var value = values[i];

			let nbOcc = nbOccurences(cardsValue, value)
			if (nbOcc == 3) {
				let indexes = allIndexOf(cardsValue, value)
				for (let i = 0; i < 3; i++) {
					hand.push(cards[indexes[i]])
				}
				let i = 0
				let j = 0
				while (j < 2) {
					if (!indexes.includes(i)) {
						hand.push(cards[i])
						j++
					}
					i++
				}

				break;
			}			

		}

		return ['Brelan',hand]
	}

	// Check for a pair
	if (isAPair(cards)) {
		let hand = []
		let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]


		for (let i = 0; i < values.length; i++) {

			var value = values[i];

			let nbOcc = nbOccurences(cardsValue, value)
			if (nbOcc == 2) {
				let indexes = allIndexOf(cardsValue, value)
				for (let i = 0; i < 2; i++) {
					hand.push(cards[indexes[i]])
				}
				let i = 0
				let j = 0
				while (j < 3) {
					if (!indexes.includes(i)) {
						hand.push(cards[i])
						j++
					}
					i++
				}

				break;
			}			

		}

		return ['Pair',hand]
	}

	// Check for a hauteur
	hand = []
	for (let i = 0; i < 5; i++) {
		hand.push(cards[i])
	}
	return ['Hauteur',hand]

}
