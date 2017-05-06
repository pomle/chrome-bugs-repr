# How to reproduce

* Be on Desktop.

* Load `index.html` in Chrome.

* Open Developer Tools.

* Toggle Device toolbar and make sure you have a device that simulates "touch", for example (iPhone 6).

1) Trigger `touchstart` by holding left mouse button on document. Notice how the deferred call never occurs before a 100 ms delay.

or

2) Trigger `touchstart` + `touchend` by clicking quick with left mouse button on document. Notice how the deferred call occurs immediately on ´touchend`.


This bug was filed at https://bugs.chromium.org/p/chromium/issues/detail?id=639300
