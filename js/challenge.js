document.addEventListener("DOMContentLoaded", () => {

    // As a user, I should see the timer increment every second once the page has loaded.
    const counter = document.getElementById("counter");
    let isPaused = false;
    let seconds = 0;
    let t = setInterval(function() {
        if (!isPaused) {
            seconds++;
            counter.textContent = seconds;
        }
    }, 1000);

    // As a user, I can manually increment and decrement the counter using the plus and minus buttons.
    const plus = document.getElementById("plus");
    plus.addEventListener("click", function() {
        counter.textContent = ++seconds;
    });

    const minus = document.getElementById("minus");
    minus.addEventListener("click", function() {
        counter.textContent = --seconds;
    });

    // As a user, I can 'like' an individual number of the counter.
    const heart = document.getElementById("heart");
    heart.addEventListener("click", function() {
        const li = document.createElement("li");
        const likes = document.querySelector(".likes");
        let counterNum = document.querySelector("#counter").textContent;
        let heartClicks = 0;
        heartClicks++;
        li.textContent = `${counterNum} has been liked ${heartClicks} time`;
        likes.appendChild(li);
    });

    // As a user, I can pause the counter, which should:
    // - pause the counter
    // - disable all buttons except the pause button
    // - switch the label on the button from "pause" to "resume"
    const pause = document.getElementById("pause");
    pause.addEventListener("click", function(event) {
        if (event.target.textContent === "pause") {
            event.target.textContent = "resume";
            isPaused = true;
            plus.disabled = true;
            minus.disabled = true;
            heart.disabled = true;
        }
        // As a user, I should be able to click the "resume" button to restart the counter and re-enable the buttons.
        else {
            event.target.textContent = "pause";
            isPaused = false;
            plus.disabled = false;
            minus.disabled = false;
            heart.disabled = false;
        }
    });

    // As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        addComment(event.target.comment.value);
    })

    function addComment(newComment) {
        const p = document.createElement("p");
        p.textContent = newComment;
        document.getElementById("list").appendChild(p);
    }
});
