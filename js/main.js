(() => {
	let teamCard = document.querySelectorAll(".team-card"),
		detailP = document.querySelector(".detail-text p"),
		detailHd = document.querySelector(".detail-text span"),
		detailCard = document.querySelector(".detail-text");

	const memberData = [
		[
			`Tonya Oliver`,
			`This person does this in this company. This person specialize in this and have this many years of experience in the industry`,
		],

		[
			`Giovanni Perruzzi`,
			`This person does this in this company. This person specialize in this and have this many years of experience in the industry`,
		],

		[
			`Zeyin Lu`,
			`Zeyin is mostly focusing on daily tasks such as cleaning the office, getting lunches and coffee, and delivery meal to the right person in the morning. He is trying his best to help with the design part of the operation but there is not going around to say that his ability is rather limited. So he will be happy to contribute anyway possible.`,
		],

		[
			`Gonzalo Martin`,
			`I'm 26 years old, I was born in Cali, Colombia, and raised in Palmira. Since I was a little kid I've always been really into artistic and manual stuff, my passion when I was a youngman was playing with clay, i used to do it everyday with my dad, he was the real artist at that time. Since then as any other human I have been going through different circumstances and now I'm a professional Visual Communication Designer from the Javeriana University in Cali, Colombia and nowadays I'm studying Interactive Media Design at Fanshawe College in London, Canada, hell a trip. `,
		],
	];

	function showData(el) {
		detailHd.textContent = memberData[el.dataset.offset][0];
		detailP.textContent = memberData[el.dataset.offset][1];
	}

	function showHideCard(event) {
		if (event.target.parentNode.classList.contains("team-card")) {
			detailCard.classList.remove("hidden");

			showData(event.target.parentNode);
		} else {
			detailCard.classList.add("hidden");
		}
	}

	document.body.addEventListener("click", showHideCard);
})();
