window.onloadTurnstileCallback = function () {
		turnstile.render('#example-container', {
			sitekey: '0x4AAAAAAAiZBZ6AxETpP2Rz',
			callback: function(token) {
				console.log(`Challenge Success ${token}`);
			},
		});
	};
      document
        .getElementById("send-button")
        .addEventListener("click", function () {
		event.preventDefault();
          fetch("https://submit-form.com/C6uuhhwJE", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              message: "Hello, World",
              "cf-turnstile-response": "...",
            }),
          })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.error(error);
            });
        });