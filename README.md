# How to reproduce

* Be on Desktop.

* Server `index.html` from a local webserver and open in Chrome.
  (This is because fetch does not allow file:/// `Fetch API cannot load file:///..../chrome-touchstart-delay/index.html. URL scheme must be "http" or "https" for CORS request.`)

* Open console.

* Toggle Device toolbar and make sure you have a device that simulates "touch", for example iPhone 6.

1) Trigger `touchstart` by holding left mouse button on document. Notice how network request never finishes before a 100 ms delay.

or

2) Trigger `touchstart` + `touchend` by clicking quick with left mouse button on document. Notice how network request occurs immediately on ´touchend`.
