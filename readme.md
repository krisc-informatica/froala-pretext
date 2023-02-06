# Pretext plugin

Pretext plugin will replace defined texts while typing with the replacement text. Developed for use in fast text entry in which standard text can be inserted easily.
Secondly, markers in the texts can be easily highlighted (selected) for replacement by a specified key.

## Plugin options

<table>
<tr><td> texts </td><td> An array of search/replace texts { key: 'search1', replacement: 'replacement2' }<br/>Default: [{ key: 'p:t', replacement: 'Froala pretext plugin to automatically replace text with other text and highlight ***** martkers by pressing defined key'}], </td></tr>
<tr><td> marker </td><td> The marker in the text that can be selected automatically<br/>Default: '*****' </td></tr>
<tr><td> keycode </td><td> The key that is used to highlight the markers in the text<br/>Default: 17 (Control)</td></tr>

## TAB key

Because the TAB key is a popular key to navigate in forms, a second branch is available that allows to use TAB for navigating through parameters in the text. This version will disable TAB default behaviour (navigating elements in the parent window/html page) if the keycode equals 9 (TAB).