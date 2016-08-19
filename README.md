# How to reproduce

* Be on Desktop.

* Load `index.html` in Chrome.

* Open console.

* Toggle Device toolbar and make sure you have a device that simulates "touch", for example (iPhone 6).

* "Touch" document by clicking mouse.

* Notice how a deferred call never occurs before a 100 ms delay or when touchend is triggered.
