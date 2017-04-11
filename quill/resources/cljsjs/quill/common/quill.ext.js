/**
 * @fileoverview Closure Compiler externs for Quill 1.1.10
 * @see http://quilljs.com
 * @externs
 *
 * Hand generated from
 * - https://github.com/quilljs/quill/blob/v1.1.10/docs/docs/api/contents.md
 * - https://github.com/quilljs/quill/blob/v1.1.10/docs/docs/api/formatting.md
 * - https://github.com/quilljs/quill/blob/v1.1.10/docs/docs/api/events.md
 * - https://github.com/quilljs/quill/blob/v1.1.10/docs/docs/api/selection.md
 * - https://github.com/quilljs/quill/blob/v1.1.10/docs/docs/api/extension.md
 */

/**
 * @constructor
 * @param {string | Element} container
 * @param {Object=} options
 */
function Quill(container, options) {};

/**
 * Deletes text from the editor, returing a Delta representing the
 * change. Source may be "user", "api", or "silent". Calls where the
 * source is "user" when the editor is disabled are ignored.
 *
 * @param {number} index
 * @param {number} length
 * @param {string=} source defaults to 'api'
 * @return {Quill.Delta}
 */
Quill.prototype.deleteText = function(index, length, source) {};

/**
 * Shorthand for enable(false).
 */
Quill.prototype.disable = function() {};

/**
 * Set ability for user to edit, via input devices like the mouse or
 * keyboard. Does not affect capabilities of API calls, when the source
 * is "api" or `"silent".
 *
 * @param {boolean=} enabled defaults to true
  */
Quill.prototype.enable = function(enabled) {};


/**
 * Retrieves contents of the editor, with formatting data, represented
 * by a Delta object.
 *
 * @param {number=} index defaults to 0
 * @param {number=} length defaults to remaining
 * @return {Quill.Delta}
 */
Quill.prototype.getContents = function(index, length) {};


/**
 * @return {number}
 */
Quill.prototype.getLength = function() {};


/**
 * Retrieves the string contents of the editor. Non-string content are
 * omitted, so the returned string's length may be shorter than the
 * editor's as returned by getLength. Note even when Quill is empty,
 * there is still a blank line in the editor, so in these cases getText
 * will return '\n'.
 * The length parameter defaults to the length of the remaining document.
 *
 * @param {number=} index defaults to 0
 * @param {number=} length defaults to remaining
 * @return {string}
 */
Quill.prototype.getText = function(index, length) {};


/**
 * Insert embedded content into the editor, returing a Delta
 * representing the change. Source may be "user", "api", or "silent".
 * Calls where the source is "user" when the editor is disabled are
 * ignored.
 *
 * @param {number} index
 * @param {string} type
 * @param {*} value
 * @param {string=} source defaults to 'api'
 * @return {Quill.Delta}
 */
Quill.prototype.insertEmbed = function(index, type, value, source) {};


/**
 * Inserts text into the editor, optionally with a specified format or
 * multiple formats. Returns a Delta representing the change. Source
 * may be "user", "api", or "silent". Calls where the source is "user"
 * when the editor is disabled are ignored.
 *
 * You can call this function in the following ways:
 * - insertText(index: Number, text: String, source: String = 'api'): Delta
 * - insertText(index: Number, text: String, format: String, value: any, source: String = 'api'): Delta
 * - insertText(index: Number, text: String, formats: { [String]: any }, source: String = 'api'): Delta
 *
 * @type {(function(number, string, string=): Quill.Delta|function(number, string, string, *, string=): Quill.Delta|function(number, string, Object, string=): Quill.Delta)}
 */
Quill.prototype.insertText = function() {};


/**
 * This API has been moved into Clipboard and renamed. It will be
 * removed as a top level API in 2.0.
 *
 * @deprecated
 */
Quill.prototype.pasteHTML = function() {};


/**
 * Overwrites editor with given contents. Contents should end with a
 * newline. Returns a Delta representing the change. This will be the
 * same as the Delta passed in, if given Delta had no invalid
 * operations. Source may be "user", "api", or "silent". Calls where
 * the source is "user" when the editor is disabled are ignored.
 *
 * @param {Quill.Delta} delta
 * @param {string=} source defaults to 'api'
 * @return {Quill.Delta}
 */
Quill.prototype.setContents = function(delta, source) {};

/**
 * Sets contents of editor with given text, returing a Delta
 * representing the change. Note Quill documents must end with a
 * newline so one will be added for you if omitted. Source may be
 * "user", "api", or "silent". Calls where the source is "user" when
 * the editor is disabled are ignored.
 *
 * @param {string} text
 * @param {string=} source defaults to 'api'
 * @return {Quill.Delta}
 */
Quill.prototype.setText = function(text, source) {};


/**
 * Synchronously check editor for user updates and fires events, if
 * changes have occurred. Useful for collaborative use cases during
 * conflict resolution requiring the latest up to date state. Source
 * may be "user", "api", or "silent".
 *
 * @param {string=} source defaults to 'user'
 */
Quill.prototype.update = function(source) {};


/**
 * Applies Delta to editor contents, returing a Delta representing the
 * change. These Deltas will be the same if the Delta passed in had no
 * invalid operations. Source may be "user", "api", or "silent". Calls
 * where the source is "user" when the editor is disabled are ignored.
 *
 * @param {Quill.Delta} delta
 * @param {string=} source defaults to 'api'
 * @return {Quill.Delta}
 */
Quill.prototype.updateContents = function(delta, source) {};

/**
 *Format text at user's current selection, returing a Delta
 * representing the change. If the user's selection length is 0, i.e.
 * it is a cursor, the format will be set active, so the next character
 * the user types will have that formatting. Source may be "user",
 * "api", or "silent". Calls where the source is "user" when the editor
 * is disabled are ignored.
 *
 * @param {string} name
 * @param {*} value
 * @param {string=} source defaults to 'api'
 * @return {Quill.Delta}
 */
Quill.prototype.format = function(name, value, source) {};

/**
 * Formats all lines in given range, returing a Delta representing the
 * change. See formats for a list of available formats. Has no effect
 * when called with inline formats. To remove formatting, pass false
 * for the value argument. The user's selection may not be preserved.
 * Source may be "user", "api", or "silent". Calls where the source is
 * "user" when the editor is disabled are ignored.
 *
 * You can call this function in the following ways:
 * - formatLine(index: Number, length: Number, source: String = 'api'): Delta
 * - formatLine(index: Number, length: Number, format: String, value: any, source: String = 'api'): Delta
 * - formatLine(index: Number, length: Number, formats: { [String]: any }, source: String = 'api'): Delta
 *
 * @type {(function(number, number, string=): Quill.Delta|function(number, number, string, *, string=): Quill.Delta|function(number, number, Object, string=): Quill.Delta)}
 */
Quill.prototype.formatLine = function() {};

/**
 * Formats text in the editor, returing a Delta representing the
 * change. For line level formats, such as text alignment, target the
 * newline character or use the formatLine helper. See formats for a
 * list of available formats. To remove formatting, pass false for the
 * value argument. The user's selection may not be preserved. Source
 * may be "user", "api", or "silent". Calls where the source is "user"
 * when the editor is disabled are ignored.
 *
 * You can call this function in the following ways:
 * - formatText(index: Number, length: Number, source: String = 'api'): Delta
 * - formatText(index: Number, length: Number, format: String, value: any, source: String = 'api'): Delta
 * - formatText(index: Number, length: Number, formats: { [String]: any }, source: String = 'api'): Delta
 *
 * @type {(function(number, number, string=): Quill.Delta|function(number, number, string, *, string=): Quill.Delta|function(number, number, Object, string=): Quill.Delta)}
 */
Quill.prototype.formatText = function() {};

/**
 * Retrieves common formatting of the text in the given range. For a
 * format to be reported, all text within the range must have a truthy
 * value. If there are different truthy values, an array with all
 * truthy values will be reported. If no range is supplied, the user's
 * current selection range is used. May be used to show which formats
 * have been set on the cursor. If called with no arguments, the user's
 * current selection range will be used.
 *
 * You can call this function in the following ways:
 * - getFormat(range: Range = current): { [String]: any }
 * - getFormat(index: Number, length: Number = 0): { [String]: any }
 *
 * @type {(function({index: number, length: number}=): *|function(number, number=): *)}
 */
Quill.prototype.getFormat = function() {};

/**
 * Removes all formatting and embeds within given range, returing a
 * Delta representing the change. Line formatting will be removed if
 * any part of the line is included in the range. The user's selection
 * may not be preserved. Source may be "user", "api", or "silent".
 * Calls where the source is "user" when the editor is disabled are
 * ignored.
 *
 * @param {number} index
 * @param {number} length
 * @param {string=} source defaults to 'api'
 * @return {Quill.Delta}
 */
Quill.prototype.removeFormat = function(index, length, source) {};

/**
 * Adds event handler. See text-change or selection-change for more
 * details on the events themselves.
 *
 * @param {string} name
 * @param {Function} handler
 * @return {Quill}
 */
Quill.prototype.on = function(name, handler) {};

/**
 * Adds handler for one emission of an event. See text-change or
 * selection-change for more details on the events themselves.
 *
 * @param {string} name
 * @param {Function} handler
 * @return {Quill}
 */
Quill.prototype.once = function(name, handler) {};

/**
 * Removes event handler.
 *
 * @param {string} name
 * @param {Function} handler
 * @return {Quill}
 */
Quill.prototype.off = function(name, handler) {};

/**
 * Removes focus from the editor.
 */
Quill.prototype.blur = function() {};

/**
 * Focuses the editor and restores its last range
 */
Quill.prototype.focus = function() {};

/**
 * Retrieves the pixel position (relative to the editor container) and
 * dimensions of a selection at a given location. The user's current
 * selection need not be at that index. Useful for calculating where to
 * place tooltips.
 *
 * @param {number} index
 * @param {number=} length defaults to 0
 * @return {{ left: number, top: number, height: number, width: number }}
 */
Quill.prototype.getBounds = function(index, length) {};

/**
 * Retrieves the user's selection range, optionally to focus the editor
 * first. Otherwise null may be returned if editor does not have focus.
 *
 * @param {boolean=} focus defaults to false
 * @return {{ index: number, length: number }}
 */
Quill.prototype.getSelection = function(focus) {};

/**
 * Checks if editor has focus. Note focus on toolbar, tooltips, does
 * not count as the editor.
 *
 * @return {boolean}
 */
Quill.prototype.hasFocus = function() {};

/**
 * Sets user selection to given range, which will also focus the editor.
 * Providing null as the selection range will blur the editor. Source
 * may be "user", "api", or "silent".
 *
 * You can call this function in the following ways:
 * - setSelection(index: Number, length: Number, source: String = 'api')
 * - setSelection(range: { index: Number, length: Number }, souce: String = 'api')
 *
 * @type {(function(number, number, string=)|function({index: number, length: number}, string=))}
 */
Quill.prototype.setSelection = function() {};

/**
 * Static method enabling logging messages at a given level: 'error',
 * 'warn', 'log', or 'info'. Passing true is equivalent to passing
 * 'log'. Passing false disables all messages.
 *
 * @param {(string|boolean)} level
 */
Quill.debug = function(level) {};

/**
 * Static method returning Quill library, format, module, or theme. In
 * general the path should map exactly to Quill source code directory
 * structure. Unless stated otherwise, modification of returned
 * entities may break required Quill functionality and is strongly
 * discouraged.
 *
 * @param {string} path
 * @return {*}
 */
Quill.import = function(path) {};

/**
 * Registers a module, theme, or format(s), making them available to be
 * added to an editor. Can later be retrieved with Quill.import. Use
 * the path prefix of 'formats/', 'modules/', or 'themes/' for
 * registering formats, modules or themes, respectively. Will overwrite
 * existing definitions with the same path.
 *
 * You can call this function in the following ways:
 * - register(path: String, def: any, supressWarning: Boolean = false)
 * - register(defs: { [String]: any }, supressWarning: Boolean = false)
 * @type {(function(string, *, boolean=)|function(*, boolean=))}
 */
Quill.register = function() {};

/**
 * Adds and returns a container element inside the Quill container,
 * sibling to the editor itself. By convention, Quill modules should
 * have a class name prefixed with ql-. Optionally include a refNode
 * where container should be inserted before.
 *
 * @param {(string|Node)} classNameOrDomNode
 * @param {Node=} refNode
 * @return {Element}
 */
Quill.prototype.addContainer = function(classNameOrDomNode, refNode) {};

/**
 * Retrieves a module that has been added to the editor.
 *
 * @param {string} name
 * @return {*}
 */
Quill.prototype.getModule = function(name) {};

/**
 * @typedef {
 *  {ops: Array<({insert}|{insert, attributes: Object}|{delete: number}|{retain: number}|{retain: number, attributes: Object})>}
 * }
 */
Quill.Delta;

