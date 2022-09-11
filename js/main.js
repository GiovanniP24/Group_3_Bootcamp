(() => {
    let teamCard = document.querySelectorAll('.team-card'),
        detailP = document.querySelector('.detail-text p'),
        detailHd = document.querySelector('.detail-text span'),
        detailCard = document.querySelector('.detail-text'),
        serviceBlock = document.querySelectorAll('.block-hover'),
        lightbox = document.querySelector('.lightbox'),
        lightboxTitle = document.querySelector('.lightbox span'),
        lightboxPara = document.querySelector('.lightbox p')
        ;

    const memberData = [
        [`Tonya Oliver`,`My name is Tonya Oliver. I am a web Developer who specializes in graphic,video, and audio design. I have completed a wide variety of projects and have worked internationally with some of the industry's top clients. I love to take on new experiences and gain different perspectives as I grow everyday. Here at HelpUp, I work in the design department creating assets for businesses based on their vision and direction. I am adaptable to all styles. In the world of Web Development. Keeping an open mind is a top priority. The HelpUp team is knowledgeable in great design, suiting all circumstances. Ultimately, our team want to use our incredible line up of skills to bring your vision into reality. I know branding can be tough. Our team is diverse, fierce, and relentless when it comes to our craft. Whether or not you have a clear vision of your end goal, please reach out! We're here to answer any questions that you may have and give you a help!`],

        [`Giovanni Perruzzi`,`Hi, my name is Giovanni Perruzzi. I was born in London, Ontario. I have been coding since I was in High School. I took computer science courses throughout my time at school. Now I am a student at Fanshawe College, studying Interactive Media Design; this is my second year in the program, and I have learned lots of stuff about Web Development, Design, Branding, and marketing.`],

        [`Zeyin Lu`,`Zeyin is mostly focusing on daily tasks such as cleaning the office, getting lunches and coffee, and delivery meal to the right person in the morning. He is trying his best to help with the design part of the operation but there is not going around to say that his ability is rather limited. So he will be happy to contribute anyway possible.`],

        [`Gonzalo Martin`,`I'm 26 years old, I was born in Cali, Colombia, and raised in Palmira. Since I was a little kid I've always been really into artistic and manual stuff, my passion when I was a youngman was playing with clay, i used to do it everyday with my dad, he was the real artist at that time. Since then as any other human I have been going through different circumstances and now I'm a professional Visual Communication Designer from the Javeriana University in Cali, Colombia and nowadays I'm studying Interactive Media Design at Fanshawe College in London, Canada, hell a trip. `]
    ]

    const blockInfo = [
        [`Website Development`,`We will design and build the best website for that has all the flashy features and explosion that you can imagine.`],
        [`Brand/Visual Identity`,`Not just a logo, we will map out the entire branding system for your interesting business.`],
        [`Web/Mobile App`,`What an App, not a problem. We can take your next big idea into reality, into the hands of all users for them to enjoy your brilliant idea.`],
        [`E-commerce/Marketing`,`Let’s make that big money together with your products. We can help sell anything you want online. Let’s build that superstore online!`],
    ]

    function showData(el) {
        detailHd.textContent = memberData[el.dataset.offset][0];
        detailP.textContent = memberData[el.dataset.offset][1];
    }
    
    function showText() {
        lightboxTitle.textContent = blockInfo[this.dataset.offset][0];
        lightboxPara.textContent = blockInfo[this.dataset.offset][1];
    }


    function showHideCard(event) {
        if (event.target.parentNode.classList.contains('team-card')) { 
            detailCard.classList.remove('hidden');
 
            showData(event.target.parentNode)
         } else {
             detailCard.classList.add('hidden');
         }

    }

    function showLightBox () {
        lightbox.classList.remove('hidden')
    }

    function hideBox () {
        lightbox.classList.add('hidden')
    }



     document.body.addEventListener('click', showHideCard);
     serviceBlock.forEach(block => block.addEventListener('click',showLightBox));
     serviceBlock.forEach(block => block.addEventListener('click',showText));
     lightbox.addEventListener('click', hideBox);


})();