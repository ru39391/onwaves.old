/* countdown */
const local = (number, titles) => {
  let cases = [2, 0, 1, 1, 1, 2];
  return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}
document.querySelectorAll('.counter').forEach(counter => {
  let counterHidden = counter.querySelector('.counter__hidden');
  let counterWrapper = counter.querySelector('.counter__wrapper');
  $(counterHidden).countdown({
      timestamp: new Date(counter.querySelector('.counter__date').textContent),
      callback: (days, hours, minutes, seconds) => {
          let message = '';
          let daysText, hoursText, minutesText, secondsText = '';
  
          daysText = local(days, ['день', 'дня', 'дней']);
          hoursText = local(hours, ['час', 'часа', 'часов']);
          minutesText = local(minutes, ['минута', 'минуты', 'минут']);
          secondsText = local(seconds, ['секунда', 'секунды', 'секунд']);

          if(days != 0){
              message += `<span class="counter__item"><span class="text-lg">${days}</span> ${daysText}</span>`;
          }            
          message += `<span class="counter__item"><span class="text-lg">${hours}</span> ${hoursText}</span>`;
          message += `<span class="counter__item"><span class="text-lg">${minutes}</span> ${minutesText}</span>`;
          message += `<span class="counter__item"><span class="text-lg">${seconds}</span> ${secondsText}</span>`;   
  
          counterWrapper.innerHTML = message;
      }
  });
});