# Pretext plugin

Pretext plugin will replace defined texts while typing with the replacement text. Developed for use in fast text entry in which standard text can be inserted easily.
Secondly, markers in the texts can be easily highlighted (selected) for replacement by a specified key.

## Plugin options

| texts   | An array of search/replace texts { key: 'search1', replacement: 'replacement2' }
Default: [{ key: 'p:t', replacement: 'Froala pretext plugin to automatically replace text with other text and highlight ***** martkers by pressing defined key'}], |
| marker  | The marker in the text that can be selected automatically
Default: '*****'                        |
| keycode | The key that is used to highlight the markers in the text
Default: 17 (Control)                        |
