/* Shared JSON syntax error locator.
 *
 * JSON.parse stopped reporting positions in recent V8 versions, so this tiny
 * strict parser walks the text and reports the offending token instead.
 */
(function () {
  "use strict";

  function position(text, index) {
    var pos = Math.max(0, Math.min(index, text.length));
    var before = text.slice(0, pos).split("\n");
    return { line: before.length, column: before[before.length - 1].length + 1 };
  }

  function find(text) {
    var i = 0, n = text.length;

    function fail(message, pos) {
      throw { jsonLocator: true, message: message, pos: pos === undefined ? i : pos };
    }
    function isDigit(c) { return c >= "0" && c <= "9"; }
    function ws() { while (i < n && /[ \t\n\r]/.test(text[i])) i++; }

    function parseString() {
      i++;
      while (i < n) {
        var c = text[i];
        if (c === '"') { i++; return; }
        if (c === "\\") {
          i++;
          if (i >= n) fail("Unterminated escape sequence");
          var e = text[i];
          if ('"\\/bfnrt'.indexOf(e) !== -1) { i++; continue; }
          if (e === "u") {
            for (var k = 1; k <= 4; k++) {
              if (!/[0-9a-fA-F]/.test(text[i + k] || "")) fail("Invalid unicode escape", i + k);
            }
            i += 5;
            continue;
          }
          fail('Invalid escape character "' + e + '"');
        }
        if (c === "\n" || c === "\r") fail("Unescaped newline in string");
        if (c.charCodeAt(0) < 0x20) fail("Control character in string");
        i++;
      }
      fail("Unterminated string");
    }

    function parseNumber() {
      if (text[i] === "-") i++;
      if (text[i] === "0") i++;
      else if (isDigit(text[i])) { while (i < n && isDigit(text[i])) i++; }
      else fail("Invalid number");
      if (text[i] === ".") {
        i++;
        if (!isDigit(text[i] || "")) fail("Invalid number");
        while (i < n && isDigit(text[i])) i++;
      }
      if (text[i] === "e" || text[i] === "E") {
        i++;
        if (text[i] === "+" || text[i] === "-") i++;
        if (!isDigit(text[i] || "")) fail("Invalid number");
        while (i < n && isDigit(text[i])) i++;
      }
    }

    function parseValue() {
      ws();
      if (i >= n) fail("Unexpected end of input");
      var c = text[i];
      if (c === "{") return parseObject();
      if (c === "[") return parseArray();
      if (c === '"') return parseString();
      if (c === "-" || isDigit(c)) return parseNumber();
      if (text.startsWith("true", i)) { i += 4; return; }
      if (text.startsWith("false", i)) { i += 5; return; }
      if (text.startsWith("null", i)) { i += 4; return; }
      fail("Unexpected character " + JSON.stringify(c));
    }

    function parseObject() {
      i++;
      ws();
      if (text[i] === "}") { i++; return; }
      while (true) {
        ws();
        if (text[i] !== '"') fail("Expected a string key");
        parseString();
        ws();
        if (text[i] !== ":") fail("Expected ':' after key");
        i++;
        parseValue();
        ws();
        if (text[i] === ",") { i++; continue; }
        if (text[i] === "}") { i++; return; }
        fail("Expected ',' or '}'");
      }
    }

    function parseArray() {
      i++;
      ws();
      if (text[i] === "]") { i++; return; }
      while (true) {
        parseValue();
        ws();
        if (text[i] === ",") { i++; continue; }
        if (text[i] === "]") { i++; return; }
        fail("Expected ',' or ']'");
      }
    }

    try {
      parseValue();
      ws();
      if (i < n) fail("Unexpected trailing content");
      return null;
    } catch (e) {
      if (e && e.jsonLocator) return { message: e.message, index: e.pos };
      throw e;
    }
  }

  window.JSONLocator = { find: find, position: position };
})();
