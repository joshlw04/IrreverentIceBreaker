




function emojiBurst(numHearts){
  let $emojis;
  const $body = $('body');
  for (let i = 0; i < numHearts; i++) {
    let emojiArray = ['😇','😄','☕',]
    let randomEmoji = emojiArray[Math.floor(Math.random() * emojiArray.length) + 0  ]
    $emojis = $('<p>').addClass('heart').html(randomEmoji);
    $body.append($emojis);
    $emojis.animate({
      top: Math.floor(Math.random() * 200) - 50 + '%',
      left: Math.floor(Math.random() * 200) - 50 + '%',
      opacity: 0,
    }, 1500, 'linear');
  }
}
emojiBurst(30)











// function emojiBurst(numHearts){
//
//   let $emojis;
//
//   const emojiContainer = document.getElementById('emoji');
//
//   for (let i = 0; i < numHearts; i++) {
//   let heart = document.createElement('h1');
//   heart.setAttribute('class', 'heart')
//   heart.innerHTML = `&hearts;`
//   emojiContainer.appendChild(heart)
//
//     heart.animate({
//       top: Math.floor(Math.random() * 200) - 50 + '%',
//       left: Math.floor(Math.random() * 200) - 50 + '%',
//       opacity: 0,
//     }, 2000, 'linear');
//   }
// }
//
//
// setInterval(() => {
//   emojiBurst(10)
// }, 1000);
// emojiBurst(10);
