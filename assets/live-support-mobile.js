        document.addEventListener('DOMContentLoaded', function() {

            let now = new Date();

            let pakistanTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Karachi" }));

            let hours = pakistanTime.getHours();

            let supportAvailable = (hours >= 11 && hours < 20);

            if (supportAvailable) {
                document.querySelectorAll(".live-chat-icon-wrapper").forEach(function(wrapper) {
                    wrapper.classList.add("support-available");
                    wrapper.classList.remove("hidden");
                });
                document.querySelectorAll(".live-chat-icon-wrapper-mobile").forEach(function(wrapper) {
                    wrapper.classList.add("support-available");
                    wrapper.classList.remove("hidden");
                });
            } else {
                 document.querySelectorAll(".live-chat-icon-wrapper").forEach(function(wrapper) {
                    wrapper.classList.remove("support-available");
                    wrapper.classList.remove("hidden");
                });
                document.querySelectorAll(".live-chat-icon-wrapper-mobile").forEach(function(wrapper) {
                    wrapper.classList.remove("support-available");
                    wrapper.classList.remove("hidden");
                });
            }
        });