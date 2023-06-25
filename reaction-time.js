// Wait for the page to load before binding events.
window.addEventListener('DOMContentLoaded', () => {
    clickTest();
    //  arduinoTest();
    //  arduinoTriggerBotTest();
});

const clickTest = () => {
    const clickArea = document.querySelector('.click-test');
    const message = clickArea.querySelector('.message');
    let testActive = false;
    let responseTime = new Date();

    const reactionTest = () => {
        // Test is not running, start the test.
        if (testActive === false) {

            message.innerText = 'Test is starting...';
            // Function that the settimeout calls to start the test
            const startTest = () => {
                clickArea.style.backgroundColor = "red";
                // Timestamp in ms.
                responseTime = new Date();
                //Activate test state
                testActive = true;
            }

            // Get an integer between 3000 and 5000 for the set timeout.
            const testDelay = Math.floor((Math.random() * 3 + 3) * 1000);
            // Delay timer to start the test. Set timeout is the JS function to create a delay.
            setTimeout(startTest, testDelay);
        }

        // Handle the user's click to determine the timing and finish the test.
        else {

            const clickTime = new Date();
            clickArea.style.backgroundColor = "aqua";
            message.innerText = 'Click anywhere to start the test.';
            // Finish test
            testActive = false;
            // Show results;
            alert((clickTime - responseTime) + ' ms');

        }

    };


    // Button event to start test.
    clickArea.addEventListener('click', reactionTest);
};

// Hidden for later
// const arduinoTest = () => {

// };

// const arduinoTriggerBotTest = () => {

// };