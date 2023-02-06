(function (FroalaEditor) {

    FroalaEditor.DEFAULTS = Object.assign(FroalaEditor.DEFAULTS, {
        texts: [{ key: 'p:t', replacement: 'Froala pretext plugin to automatically replace text with other text and highlight ***** martkers by pressing defined key'}],
        marker: '*****',
        keycode: 17 // The control key
    });

    FroalaEditor.PLUGINS.pretext = function (editor) {
        var currentPosition = -1; // Last position of a selected parameter

        /**
         * Searches src for strings in findArray and replaces them with the matching strings in replaceArray
         * 
         * @param {String} src The source string
         * @param {Array<String>} findArray The strings to search in str
         * @param {Array<String>} replaceArray The replacement string
         * @returns String
         */
        function _replaceBulk(src, findArray, replaceArray) {
            var i, regex = [], map = {};
            for (i = 0; i < findArray.length; i++) {
                regex.push(findArray[i].replace(/([-[\]{}()*+?.\\^$|#,])/g, '\\$1'));
                map[findArray[i]] = replaceArray[i];
            }
            regex = regex.join('|');
            src = src.replace(new RegExp(regex, 'g'), function (matched) {
                return map[matched];
            });
            return src;
        }

        /**
         * Searches text for the plugin marker starting at position
         * 
         * @param {String} text The text to search in
         * @param {int} position The position to start searching
         * @returns int
         */
        function _searchMarker(text, position) {
            return text.indexOf(editor.opts.marker, position);
        }

        /**
         * Uses the editor to select a marker in text and returns the text to be shown in the editor
         * 
         * @param {string} text 
         * @returns string
         */
        function _selectParam(text) {
            currentPosition = Math.max(_searchMarker(text, 0), _searchMarker(text, currentPosition + 1));
            if (currentPosition !=-1) {
                return text.substring(0, currentPosition) +
                    FroalaEditor.START_MARKER +
                    editor.opts.marker +
                    FroalaEditor.END_MARKER + 
                    text.substring(currentPosition + editor.opts.marker.length);
            }
            return text;
        }

        function _init() {
            currentPosition = -1;
            editor.events.on('keydown', function (params) {
                console.log(params.keyCode);
                if (params.keyCode == editor.opts.keycode) {
                    editor.selection.save(); 
                    editor.html.set(_selectParam(editor.html.get()));
                    editor.selection.restore();
                }
            });
            editor.events.on('keyup', function (params) {
                let text = editor.html.get();
                let texts = editor.opts.texts;
                let replaced = _replaceBulk(text, texts.map(r => r.key), texts.map(r => r.replacement))
                if (replaced!=text) {
                    editor.selection.save();
                    editor.html.set(_selectParam(replaced));
                    editor.selection.restore();
                }
            });
        }

        return {
            _init: _init,
        }
    }
})(FroalaEditor);
