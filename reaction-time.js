window.addEventListener('DOMContentLoaded', () =>{
 clickTest();
 arduinoTest();
 arduinoTriggerBotTest();
});

const clickTest = () => {
  const clickArea = document.querySelector('.click-test');
  const title = clickArea.querySelector('h2');  
  const message = clickArea.querySelector('.message');
  let testActive = false;
  let responseTime = new Date();

  const reactionTest = () => {
    //Start the test.
    if (testActive === false) {
        const testDelay = Math.floor(Math.random() * 3 + 3);
        message.innerText = 'Test is starting...';
        //Delay timer to start the test.
        setTimeout(() => {
            
            clickArea.style.backgroundColor = "red";
            responseTime = new Date();
            
            //Activate test
            testActive = true;

        }, testDelay * 1000);
    }

    //Finish the test
    else {
    
        const clickTime = new Date();
        clickArea.style.backgroundColor = "aqua";
        message.innerText = 'Click anywhere to start the test.';
        //Finish test
        testActive = false;
        //Show results;
        alert((clickTime - responseTime) + ' ms');

    }
    
  };


  // Button event to start test.
  clickArea.addEventListener('click', reactionTest);
};

const arduinoTest = () => {

};

const arduinoTriggerBotTest = () => {

};