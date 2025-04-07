        // window.onload = function() {
        //     const min = 7;
        //     const max = 30;
        //     const thirtyMinutesInMillis = 30 * 60 * 1000;
        //     const productId = document.querySelector("[viewed-by-product-id]").getAttribute("viewed-by-product-id"); // Replace with the actual product ID

        //     function generateRandomNumber(min, max) {
        //         return Math.floor(Math.random() * (max - min + 1)) + min;
        //     }

        //     const storedTimestampKey = `timestamp-${productId}`;
        //     const storedRandomNumberKey = `randomNumber-${productId}`;

        //     const storedTimestamp = sessionStorage.getItem(storedTimestampKey);
        //     const currentTime = Date.now();

        //     const badgeElement = document.querySelector(".viewed-by-badge");

        //     if (!storedTimestamp || (currentTime - storedTimestamp >= thirtyMinutesInMillis)) {
        //         const randomNumber = generateRandomNumber(min, max);
        //         sessionStorage.setItem(storedRandomNumberKey, randomNumber);
        //         sessionStorage.setItem(storedTimestampKey, currentTime);
        //         console.log('Generated number: ' + randomNumber);
        //         badgeElement.textContent = `${randomNumber} viewed this in past 24 hours.`;
        //         badgeElement.classList.remove("visually-hidden");
        //     } else {
        //         const storedNumber = sessionStorage.getItem(storedRandomNumberKey);
        //         console.log('Stored number: ' + storedNumber);
        //         badgeElement.textContent = `${storedNumber} viewed this in past 24 hours.`;
        //         badgeElement.classList.remove("visually-hidden");
        //     }

        //     setInterval(function() {
        //         const randomNumber = generateRandomNumber(min, max);
        //         sessionStorage.setItem(storedRandomNumberKey, randomNumber);
        //         sessionStorage.setItem(storedTimestampKey, Date.now());
        //         console.log('Updated number: ' + randomNumber);
        //         badgeElement.textContent = `${randomNumber} viewed this in past 24 hours.`;
        //         badgeElement.classList.remove("visually-hidden");
        //     }, thirtyMinutesInMillis);
        // };




// REQUEST A CALL BACK POP UP



document.querySelector(".main-product-section .request-a-call-back").addEventListener("click", async function handleRequestCallBack(event) {
        event.preventDefault();
        const request_button_href = this.getAttribute("href");
        // console.log(request_button_href);

        try {
            const response = await fetch('https://sehgalmotorsports.pk/pages/request-a-call-back');
            if (!response.ok) {
                throw new Error(
                    `Network response was not ok: ${response.status} ${response.statusText}`
                );
            }

            const htmlContent = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlContent, "text/html");

            const newContent = doc.querySelector("#section-id-request-a-call-back");
            
            if (!newContent) {
                throw new Error("Error: New content not found in the fetched HTML.");
            }
            
            document.querySelector(".request-a-call-back-pop-up-container .request-a-callback-form-wrapper").innerHTML = newContent.innerHTML;
            document.querySelector(".request-a-call-back-pop-up-container").style.display = "block";
            document.querySelector(".request-a-call-back-pop-up-container .request-a-callback-form-wrapper").style.display = "block";


        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
                document.querySelector(".request-modal-close-link").addEventListener("click",function modalClose(event) {
        event.preventDefault();
                    document.querySelector(".request-a-call-back-pop-up-container").style.display = "none";
            document.querySelector(".request-a-call-back-pop-up-container .request-a-callback-form-wrapper").style.display = "none";

    });
        }
    });