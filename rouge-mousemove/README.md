# How to reproduce

* Be on Desktop.

* Load `index.html` in Chrome.

* Open Developer Tools.

* Toggle Device toolbar and make sure you have a device that simulates "touch", for example (iPhone 6).

* Trigger `touchstart` by holding left mouse button on document. Notice how a mousemove event is fired after ~680 ms.


Repoduced on:
* 60.0.3080.6
* 60.0.3088.4