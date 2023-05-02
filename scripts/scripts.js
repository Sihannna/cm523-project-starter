/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */
// get the input field
const startBtn = document.querySelector('#start')
const nextBtn = document.querySelectorAll('.next')
const backBtn = document.querySelectorAll('.back')
const description = document.querySelector('#description')
const submitBtn = document.querySelector('#submit')
const questions = [
  document.getElementById('question1'),
  document.getElementById('question2'),
  document.getElementById('question3'),
  document.getElementById('question4'),
  document.getElementById('question5'),
]

let currentQuestion = 0;

//submit result
startBtn.addEventListener('click', startQuestion)
nextBtn[0].addEventListener('click', showNextQuestion);
backBtn[0].addEventListener('click', backToStart);
nextBtn[1].addEventListener('click', showNextQuestion);
backBtn[1].addEventListener('click', showPreviousQuestion);
nextBtn[2].addEventListener('click', showNextQuestion);
backBtn[2].addEventListener('click', showPreviousQuestion);
nextBtn[3].addEventListener('click', showNextQuestion);
backBtn[3].addEventListener('click', showPreviousQuestion);
backBtn[4].addEventListener('click', showPreviousQuestion);

function backToStart(){
  questions[0].style.display = 'none';
  description.style.display = 'block';
}

function startQuestion(){
  description.style.display = 'none';
  questions[currentQuestion].style.display = 'block';
}

function showNextQuestion(){
  questions[currentQuestion].style.display = 'none';
  currentQuestion++;
  questions[currentQuestion].style.display = 'block';
  
}

function showPreviousQuestion(){
  questions[currentQuestion].style.display = 'none';
  currentQuestion--;
  questions[currentQuestion].style.display = 'block';
}


const allVideos = [
  {
    name: '10 MIN BEGINNER AB WORKOUT // No Equipment | Pamela Reif',
    goal: ['buildingMuscles','losingWeight'],
    intensity: 'medium',
    duration: 'under30',
    bodyPart:['abs'] ,
    equipment: 'yogaMat',
    img:'https://i.ytimg.com/vi/1f8yoFFdkcY/maxresdefault.jpg',
    url:'https://www.youtube.com/watch?v=1f8yoFFdkcY',
  },
  {
    name: '10 MIN STANDING ABS WORKOUT | Get Ab Lines & Slim Waist ~ Emi',
    goal: ['buildingMuscles'],
    intensity: 'low',
    duration: 'under30',
    bodyPart: ['abs'],
    equipment: 'none',
    img:'https://i.ytimg.com/vi/QKCkO9fy9O4/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=QKCkO9fy9O4',
  },
  {
    name: 'DAY 3 of EPIC | Bodyweight Core & Abs Workout',
    goal: ['buildingMuscles','losingWeight'],
    intensity: 'hard',
    duration: '_30to60',
    bodyPart: ['abs'],
    equipment: 'yogaMat',
    img:' https://i.ytimg.com/vi/OuBMFYx5ncE/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=OuBMFYx5ncE',
  },
  {
    name: 'Best Home Ab Workout | 10 Minutes (GUARANTEED!)',
    goal: ['buildingMuscles','losingWeight'],
    intensity: 'hard',
    duration: 'under30',
    bodyPart: ['abs'],
    equipment: 'none',
    img:'https://i.ytimg.com/vi/zzD80vCLq0Y/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=zzD80vCLq0Y',
  },
  {
    name: '30 MIN ABS & HIIT CARDIO AT HOME WORKOUT - NO EQUIPMENT | 6 WEEK SHRED – DAY 18',
    goal: ['buildingMuscles','losingWeight'],
    intensity: 'hard',
    duration: '_30to60',
    bodyPart: ['abs', 'fullBody'],
    equipment: 'yogaMat',
    img:' https://i.ytimg.com/vi/yz4u_pklMQ0/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=yz4u_pklMQ0',
  },
  {
    name: '20 min Fat Burning Workout for TOTAL BEGINNERS',
    goal: ['buildingMuscles','losingWeight'],
    intensity: 'low',
    duration: 'under30',
    bodyPart: ['fullBody'],
    equipment: 'yogaMat',
    img:'https://i.ytimg.com/vi/IT94xC35u6k/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=IT94xC35u6k&t=623s',
  },
  {
    name: '30 MIN WALKING CARDIO WORKOUT',
    goal: ['losingWeight'],
    intensity: 'medium',
    duration: '_30to60',
    bodyPart: ['fullBody'],
    equipment: 'none',
    img:'https://i.ytimg.com/vi/ow3hpYJqYEI/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=ow3hpYJqYEI',
  },
  {
    name: '3 MILE FAST Walking to Lose Belly Fat (burns 600 calories!)',
    goal: ['buildingMuscles','losingWeight'],
    intensity: ['medium','hard'],
    duration: '_30to60',
    bodyPart: ['fullBody','abs'],
    equipment: 'none',
    img:'https://i.ytimg.com/vi/vJS9a1mpYGw/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=vJS9a1mpYGw',
  },
  {
    name: '10 MIN BEGINNER LEG WORKOUT .. with breaks! Booty, Thighs & Hamstrings / No Equipment I Pamela Reif',
    goal: ['buildingMuscles','losingWeight'],
    intensity: ['medium','low'],
    duration: 'under30',
    bodyPart: ['legs','lowerBody','booty'],
    equipment: 'yogaMat',
    img:'https://i.ytimg.com/vi/nG69wuXHwxg/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=nG69wuXHwxg',
  },
  {
    name: '20 Min Complete Home Leg Workout | Follow Along',
    goal: ['buildingMuscles','losingWeight'],
    intensity: 'hard',
    duration: 'under30',
    bodyPart: ['legs','lowerBody','booty'],
    equipment: 'yogaMat',
    img:'https://i.ytimg.com/vi/q7rCeOa_m58/sddefault.jpg',
    url: 'https://www.youtube.com/watch?v=q7rCeOa_m58',
  },
  {
    name: '45 MIN BOOTY, ABS + FAT BURN - intense combo for the ultimate burn I LIVE Workout I Pamela Reif',
    goal: ['buildingMuscles','losingWeight'],
    intensity: 'hard',
    duration: '_30to60',
    bodyPart: ['legs','lowerBody','fullBody','booty','abs'],
    equipment: 'yogaMat',
    img:'https://i.ytimg.com/vi/VddSvgcmBz0/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=VddSvgcmBz0',
  },
  {
    name:'15 Min. Full Body Stretch | Daily Routine for Flexibility, Mobility & Relaxation | DAY 7',
    goal:['stretching'],
    intensity:'low',
    duration:'under30',
    bodyPart:['fullBody','arms','back','abs','lowerBody','upperBody'],
    equipment: 'yogaMat',
    img:'https://i.ytimg.com/vi/g_tea8ZNk5A/maxresdefault.jpg',
    url:'https://www.youtube.com/watch?v=g_tea8ZNk5A',
  },
  {
    name:'Back Pain Relief Stretches | 10 min. Yoga for Relaxation & Recovery',
    goal:['stretching'],
    intensity:'low',
    duration:'under30',
    bodyPart:['fullBody','back','abs','lowerBody','upperBody'],
    equipment: 'yogaMat',
    img:'https://i.ytimg.com/vi/2eA2Koq6pTI/maxresdefault.jpg',
    url:'https://www.youtube.com/watch?v=2eA2Koq6pTI',
  },
  {
    name:'10 MIN UPPER BODY WORKOUT - Back, Arms & Chest / No Equipment I Pamela Reif',
    goal:['buildingMuscles','losingWeight'],
    intensity:'medium',
    duration:'under30',
    bodyPart:['fullBody','arms','back','abs','upperBody'],
    equipment: 'yogaMat',
    img:'https://i.ytimg.com/vi/DHOPWvO3ZcI/maxresdefault.jpg',
    url:'https://www.youtube.com/watch?v=DHOPWvO3ZcI',
  },
  {
    name:'20 MINUTE UPPER BODY WORKOUT(NO EQUIPMENT)',
    goal:['buildingMuscles','losingWeight'],
    intensity:'hard',
    duration:'under30',
    bodyPart:['arms','back','abs','upperBody'],
    equipment: 'yogaMat',
    img:'https://i.ytimg.com/vi/mm47bCaCzpQ/maxresdefault.jpg',
    url:'https://www.youtube.com/watch?v=mm47bCaCzpQ',
  },
  {
    name:'1 Hour FULL BODY WORKOUT at Home | No Jumping, No Equipment, No Repeat',
    goal:['buildingMuscles','losingWeight'],
    intensity:'medium',
    duration:'_30to60',
    bodyPart:['fullBody'],
    equipment: 'yogaMat',
    img:'https://i.ytimg.com/vi/BHNtFY-MSnU/maxresdefault.jpg',
    url:'https://www.youtube.com/watch?v=BHNtFY-MSnU',
  },
  {
    name:'1 HOUR FULL BODY WORKOUT at home - No Jumping - No Repeat - No Equipment - Low Impact HIIT',
    goal:['buildingMuscles','losingWeight'],
    intensity:'low',
    duration:'_30to60',
    bodyPart:['fullBody'],
    equipment:'yogaMat',
    img:'https://i.ytimg.com/vi/aXuKc8KlQ5w/maxresdefault.jpg',
    url:'https://www.youtube.com/watch?v=TfK0ylCoGMo',
  },
  {
    name:'40 Minute LEG DAY SMASHER to BUILD MUSCLE|No Repeats|No Equipment|#CrockFitApp',
    goal:['buildingMuscles'],
    intensity:'hard',
    duration:'_30to60',
    bodyPart:['legs','booty','lowerBody'],
    equipment: 'none',
    img:'https://i.ytimg.com/vi/I88jaPCdFus/maxresdefault.jpg',
    url:'https://www.youtube.com/watch?v=I88jaPCdFus',
  },
  {
    name:'10 MIN SITTING ARM & SHOULDER WORKOUT (ON COUCH / BED WHILE WATCHING TV) ~ Emi',
    goal:['buildingMuscles'],
    intensity:'low',
    duration:'under30',
    bodyPart:['arms','back','upperBody'],
    equipment: 'none',
    img:'https://i.ytimg.com/vi/uNILu4KSHQM/maxresdefault.jpg',
    url:'https://www.youtube.com/watch?v=uNILu4KSHQM'
  },
  {name:'DAY 4: 30 MIN UPPER BODY BURNER Workout - No Equipment, No Repeat - 7 DAY HIIT CHALLENGE',
  goal:['buildingMuscles','losingWeight'],
  intensity:'medium',
  duration:'_30to60',
  bodyPart:['arms','back','upperBody','fullBody'],
  equipment:'none',
  img:'https://i.ytimg.com/vi/4q8TBBNzjoc/maxresdefault.jpg',
  url:'https://www.youtube.com/watch?v=4q8TBBNzjoc',
  },
  {
    name:'30 minute Full Body Yoga Stretch for STRESS & ANXIETY Relief',
    goal:['stretching'],
    intensity:'medium',
    duration:'_30to60',
    bodyPart:['fullBody','arms','back','upperBody','lowerBody','abs','booty','legs'],
    equipment:'yogaMat',
    img:'https://i.ytimg.com/vi/B682hNNuPng/maxresdefault.jpg',
    url:'https://www.youtube.com/watch?v=B682hNNuPng',
  },
  {
    name:'LOW IMPACT BOOTY & LEG WORKOUT - no squats, no lunges, no equipment (16 min)',
    goal:['buildingMuscles','losingWeight'],
    intensity:'medium',
    duration:'under30',
    bodyPart:['lowerBody','booty','legs'],
    img:'https://i.ytimg.com/vi/WI4K1g7JfZI/maxresdefault.jpg',
    url:'https://www.youtube.com/watch?v=WI4K1g7JfZI&t=175s',
  },
  {
    name:'45 min Slow Flow DEEP STRETCH Yoga for Flexibility - STRETCH & RELAX',
    goal:['stretching'],
    intensity:['medium','hard'],
    duration:'_30to60',
    bodyPart:['fullBody','arms','back','upperBody','lowerBody','abs','booty','legs'],
    img:'https://i.ytimg.com/vi/X4MchDHkJWw/maxresdefault.jpg',
    url:'https://www.youtube.com/watch?v=X4MchDHkJWw',
  },
  {
    name:'[6 minutes] Make a beautiful back, shoulders and neck! Easy exercise that you can sit down',
    goal:['buildingMuscles','losingWeight'],
    intensity:'low',
    duration:'under30',
    bodyPart:['upperBody','back','arms'],
    img:'https://i.ytimg.com/vi/SEzrLNj63UI/maxresdefault.jpg',
    url:'https://www.youtube.com/watch?v=SEzrLNj63UI'
  }

]

const goalChoices = Array.from(document.getElementsByName('goals'));
const intensityChoices = Array.from(document.getElementsByName('intensity'));
const durationChoices = Array.from(document.getElementsByName('duration'));
const bodyPartChoices = Array.from(document.getElementsByName('bodyParts'));
const equipmentChoices = Array.from(document.getElementsByName('equipment'));
const submit = document.getElementById('submit');

submit.addEventListener("click", collectUserInput);

function collectUserInput() {
  let input = {};

  goalChoices.forEach(goal => {
    if (goal.checked) {
      input.goal = goal.value;
    }
  });
  intensityChoices.forEach(intensity => {
    if (intensity.checked) {
      input.intensity = intensity.value;
    }
  });
  durationChoices.forEach(duration => {
    if (duration.checked) {
      input.duration = duration.value;
    }
  });
  bodyPartChoices.forEach(bodyPart => {
    if (bodyPart.checked) {
      input.bodyPart = bodyPart.value;
    }
  });
  equipmentChoices.forEach(equipment => {
    if (equipment.checked) {
      input.equipment = equipment.value;
    }
  });
  console.log(input);
  findVideos(input);
}

function findVideos(input) {
  let videoFound = [];

  allVideos.forEach(video => {
    if (video.goal.includes(input.goal) && video.intensity === input.intensity && 
    video.duration === input.duration && video.bodyPart.includes(input.bodyPart) && video.equipment === input.equipment) {
      videoFound.push(video);
    }
  });

  if (videoFound.length === 0) {
    allVideos.forEach(video => {
      if (video.goal.includes(input.goal) &&
        video.duration === input.duration && video.bodyPart.includes(input.bodyPart)) {
        videoFound.push(video);
      }
      else if(video.goal.includes(input.goal) && video.bodyPart.includes(input.bodyPart)){
        videoFound.push(video);
      }
    });
  }
  console.log(videoFound);
  displayVideos(videoFound);
}


function displayVideos(videos) {
  questions[currentQuestion].style.display = 'none';
  document.querySelector('#result').style.display = 'block';


  let html= '';
  videos.forEach(video => {
    html += `
    <div class="pngbox">
    <a target="_blank" href="${video.url}" class="png">
    <img src="${video.img}" alt="" id="thumbnail">
    <p><a target="_blank" href="${video.url}"><span class="name">${video.name}</span></a></p>
    </div>
    </div>

  </a>
`
  })


  document.querySelector('.resultbox').innerHTML = html;
}

document.querySelector('#return').addEventListener('click', function () {
  window.location.reload();
})