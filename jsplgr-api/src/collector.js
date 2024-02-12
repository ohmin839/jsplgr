// Generated by Peggy 3.0.2.
//
// https://peggyjs.org/

"use strict";

function peg$subclass(child, parent) {
  function C() { this.constructor = child; }
  C.prototype = parent.prototype;
  child.prototype = new C();
}

function peg$SyntaxError(message, expected, found, location) {
  var self = Error.call(this, message);
  // istanbul ignore next Check is a necessary evil to support older environments
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(self, peg$SyntaxError.prototype);
  }
  self.expected = expected;
  self.found = found;
  self.location = location;
  self.name = "SyntaxError";
  return self;
}

peg$subclass(peg$SyntaxError, Error);

function peg$padEnd(str, targetLength, padString) {
  padString = padString || " ";
  if (str.length > targetLength) { return str; }
  targetLength -= str.length;
  padString += padString.repeat(targetLength);
  return str + padString.slice(0, targetLength);
}

peg$SyntaxError.prototype.format = function(sources) {
  var str = "Error: " + this.message;
  if (this.location) {
    var src = null;
    var k;
    for (k = 0; k < sources.length; k++) {
      if (sources[k].source === this.location.source) {
        src = sources[k].text.split(/\r\n|\n|\r/g);
        break;
      }
    }
    var s = this.location.start;
    var offset_s = (this.location.source && (typeof this.location.source.offset === "function"))
      ? this.location.source.offset(s)
      : s;
    var loc = this.location.source + ":" + offset_s.line + ":" + offset_s.column;
    if (src) {
      var e = this.location.end;
      var filler = peg$padEnd("", offset_s.line.toString().length, ' ');
      var line = src[s.line - 1];
      var last = s.line === e.line ? e.column : line.length + 1;
      var hatLen = (last - s.column) || 1;
      str += "\n --> " + loc + "\n"
          + filler + " |\n"
          + offset_s.line + " | " + line + "\n"
          + filler + " | " + peg$padEnd("", s.column - 1, ' ')
          + peg$padEnd("", hatLen, "^");
    } else {
      str += "\n at " + loc;
    }
  }
  return str;
};

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
    literal: function(expectation) {
      return "\"" + literalEscape(expectation.text) + "\"";
    },

    class: function(expectation) {
      var escapedParts = expectation.parts.map(function(part) {
        return Array.isArray(part)
          ? classEscape(part[0]) + "-" + classEscape(part[1])
          : classEscape(part);
      });

      return "[" + (expectation.inverted ? "^" : "") + escapedParts.join("") + "]";
    },

    any: function() {
      return "any character";
    },

    end: function() {
      return "end of input";
    },

    other: function(expectation) {
      return expectation.description;
    }
  };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, "\\\\")
      .replace(/"/g,  "\\\"")
      .replace(/\0/g, "\\0")
      .replace(/\t/g, "\\t")
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/[\x00-\x0F]/g,          function(ch) { return "\\x0" + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return "\\x"  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, "\\\\")
      .replace(/\]/g, "\\]")
      .replace(/\^/g, "\\^")
      .replace(/-/g,  "\\-")
      .replace(/\0/g, "\\0")
      .replace(/\t/g, "\\t")
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/[\x00-\x0F]/g,          function(ch) { return "\\x0" + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return "\\x"  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = expected.map(describeExpectation);
    var i, j;

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== undefined ? options : {};

  var peg$FAILED = {};
  var peg$source = options.grammarSource;

  var peg$startRuleFunctions = { start: peg$parsestart };
  var peg$startRuleFunction = peg$parsestart;

  var peg$c0 = "'";

  var peg$r0 = /^[\u0391\u1F08\u1F0C\u1F8C\u1F0A\u1F8A\u1F0E\u1F8E\u1F88\u1F09\u1F0D\u1F8D\u1F0B\u1F8B\u1F8B\u1F0F\u1F89\u1FBB\u1FBA\u1FBC]/;
  var peg$r1 = /^[\u0395\u1F18\u1F1C\u1F1A\u1F19\u1F1D\u1F1B\u1FC9\u1FC8]/;
  var peg$r2 = /^[\u0397\u1F28\u1F2C\u1F9C\u1F2A\u1F9A\u1F2E\u1F9E\u1F98\u1F29\u1F2D\u1F9D\u1F2B\u1F9B\u1F9B\u1F2F\u1F99\u1FCB\u1FCA\u1FCC]/;
  var peg$r3 = /^[\u0399\u1F38\u1F3C\u1F3A\u1F3E\u1F39\u1F3D\u1F3B\u1F3F\u1FDB\u1FDA\u03AA]/;
  var peg$r4 = /^[\u039F\u1F48\u1F4C\u1F4A\u1F49\u1F4D\u1F4B\u1FF9\u1FF8]/;
  var peg$r5 = /^[\u03A5\u1F59\u1F5D\u1F5B\u1F5F\u1FEB\u1FEA\u03AB]/;
  var peg$r6 = /^[\u03A9\u1F68\u1F6C\u1FAC\u1F6A\u1FAA\u1F6E\u1FAE\u1FA8\u1F69\u1F6D\u1FAD\u1F6B\u1FAB\u1FAB\u1F6F\u1FA9\u1FFB\u1FFA\u1FFC]/;
  var peg$r7 = /^[\u03A1\u1FEC]/;
  var peg$r8 = /^[\u0392\u0393\u0394\u0396\u0398\u039A\u039B\u039C\u039D\u039E\u03A0\u03A3\u03A4\u03A6\u03A7\u03A8]/;
  var peg$r9 = /^[\u03B1\u1F00\u1F04\u1F84\u1F02\u1F82\u1F06\u1F86\u1F80\u1F01\u1F05\u1F85\u1F03\u1F83\u1F83\u1F07\u1F81\u1F71\u1FB4\u1F70\u1FB2\u1FB6\u1FB7\u1FB3]/;
  var peg$r10 = /^[\u03B5\u1F10\u1F14\u1F12\u1F11\u1F15\u1F13\u1F73\u1F72]/;
  var peg$r11 = /^[\u03B7\u1F20\u1F24\u1F94\u1F22\u1F92\u1F26\u1F96\u1F90\u1F21\u1F25\u1F95\u1F23\u1F93\u1F93\u1F27\u1F91\u1F75\u1FC4\u1F74\u1FC2\u1FC6\u1FC7\u1FC3]/;
  var peg$r12 = /^[\u03B9\u1F30\u1F34\u1F32\u1F36\u1F31\u1F35\u1F33\u1F37\u1F77\u1F76\u1FD6\u03CA\u1FD3\u1FD2\u1FD7]/;
  var peg$r13 = /^[\u03BF\u1F40\u1F44\u1F42\u1F41\u1F45\u1F43\u1F79\u1F78]/;
  var peg$r14 = /^[\u03C5\u1F50\u1F54\u1F52\u1F56\u1F51\u1F55\u1F53\u1F57\u1F7B\u1F7A\u1FE6\u03CB\u1FE3\u1FE2\u1FE7]/;
  var peg$r15 = /^[\u03C9\u1F60\u1F64\u1FA4\u1F62\u1FA2\u1F66\u1FA6\u1FA0\u1F61\u1F65\u1FA5\u1F63\u1FA3\u1FA3\u1F67\u1FA1\u1F7D\u1FF4\u1F7C\u1FF2\u1FF6\u1FF7\u1FF3]/;
  var peg$r16 = /^[\u03C1\u1FE4\u1FE5]/;
  var peg$r17 = /^[\u03B2\u03B3\u03B4\u03B6\u03B8\u03BA\u03BB\u03BC\u03BD\u03BE\u03C0\u03C3\u03C2\u03C4\u03C6\u03C7\u03C8]/;

  var peg$e0 = peg$literalExpectation("'", false);
  var peg$e1 = peg$classExpectation(["\u0391", "\u1F08", "\u1F0C", "\u1F8C", "\u1F0A", "\u1F8A", "\u1F0E", "\u1F8E", "\u1F88", "\u1F09", "\u1F0D", "\u1F8D", "\u1F0B", "\u1F8B", "\u1F8B", "\u1F0F", "\u1F89", "\u1FBB", "\u1FBA", "\u1FBC"], false, false);
  var peg$e2 = peg$classExpectation(["\u0395", "\u1F18", "\u1F1C", "\u1F1A", "\u1F19", "\u1F1D", "\u1F1B", "\u1FC9", "\u1FC8"], false, false);
  var peg$e3 = peg$classExpectation(["\u0397", "\u1F28", "\u1F2C", "\u1F9C", "\u1F2A", "\u1F9A", "\u1F2E", "\u1F9E", "\u1F98", "\u1F29", "\u1F2D", "\u1F9D", "\u1F2B", "\u1F9B", "\u1F9B", "\u1F2F", "\u1F99", "\u1FCB", "\u1FCA", "\u1FCC"], false, false);
  var peg$e4 = peg$classExpectation(["\u0399", "\u1F38", "\u1F3C", "\u1F3A", "\u1F3E", "\u1F39", "\u1F3D", "\u1F3B", "\u1F3F", "\u1FDB", "\u1FDA", "\u03AA"], false, false);
  var peg$e5 = peg$classExpectation(["\u039F", "\u1F48", "\u1F4C", "\u1F4A", "\u1F49", "\u1F4D", "\u1F4B", "\u1FF9", "\u1FF8"], false, false);
  var peg$e6 = peg$classExpectation(["\u03A5", "\u1F59", "\u1F5D", "\u1F5B", "\u1F5F", "\u1FEB", "\u1FEA", "\u03AB"], false, false);
  var peg$e7 = peg$classExpectation(["\u03A9", "\u1F68", "\u1F6C", "\u1FAC", "\u1F6A", "\u1FAA", "\u1F6E", "\u1FAE", "\u1FA8", "\u1F69", "\u1F6D", "\u1FAD", "\u1F6B", "\u1FAB", "\u1FAB", "\u1F6F", "\u1FA9", "\u1FFB", "\u1FFA", "\u1FFC"], false, false);
  var peg$e8 = peg$classExpectation(["\u03A1", "\u1FEC"], false, false);
  var peg$e9 = peg$classExpectation(["\u0392", "\u0393", "\u0394", "\u0396", "\u0398", "\u039A", "\u039B", "\u039C", "\u039D", "\u039E", "\u03A0", "\u03A3", "\u03A4", "\u03A6", "\u03A7", "\u03A8"], false, false);
  var peg$e10 = peg$classExpectation(["\u03B1", "\u1F00", "\u1F04", "\u1F84", "\u1F02", "\u1F82", "\u1F06", "\u1F86", "\u1F80", "\u1F01", "\u1F05", "\u1F85", "\u1F03", "\u1F83", "\u1F83", "\u1F07", "\u1F81", "\u1F71", "\u1FB4", "\u1F70", "\u1FB2", "\u1FB6", "\u1FB7", "\u1FB3"], false, false);
  var peg$e11 = peg$classExpectation(["\u03B5", "\u1F10", "\u1F14", "\u1F12", "\u1F11", "\u1F15", "\u1F13", "\u1F73", "\u1F72"], false, false);
  var peg$e12 = peg$classExpectation(["\u03B7", "\u1F20", "\u1F24", "\u1F94", "\u1F22", "\u1F92", "\u1F26", "\u1F96", "\u1F90", "\u1F21", "\u1F25", "\u1F95", "\u1F23", "\u1F93", "\u1F93", "\u1F27", "\u1F91", "\u1F75", "\u1FC4", "\u1F74", "\u1FC2", "\u1FC6", "\u1FC7", "\u1FC3"], false, false);
  var peg$e13 = peg$classExpectation(["\u03B9", "\u1F30", "\u1F34", "\u1F32", "\u1F36", "\u1F31", "\u1F35", "\u1F33", "\u1F37", "\u1F77", "\u1F76", "\u1FD6", "\u03CA", "\u1FD3", "\u1FD2", "\u1FD7"], false, false);
  var peg$e14 = peg$classExpectation(["\u03BF", "\u1F40", "\u1F44", "\u1F42", "\u1F41", "\u1F45", "\u1F43", "\u1F79", "\u1F78"], false, false);
  var peg$e15 = peg$classExpectation(["\u03C5", "\u1F50", "\u1F54", "\u1F52", "\u1F56", "\u1F51", "\u1F55", "\u1F53", "\u1F57", "\u1F7B", "\u1F7A", "\u1FE6", "\u03CB", "\u1FE3", "\u1FE2", "\u1FE7"], false, false);
  var peg$e16 = peg$classExpectation(["\u03C9", "\u1F60", "\u1F64", "\u1FA4", "\u1F62", "\u1FA2", "\u1F66", "\u1FA6", "\u1FA0", "\u1F61", "\u1F65", "\u1FA5", "\u1F63", "\u1FA3", "\u1FA3", "\u1F67", "\u1FA1", "\u1F7D", "\u1FF4", "\u1F7C", "\u1FF2", "\u1FF6", "\u1FF7", "\u1FF3"], false, false);
  var peg$e17 = peg$classExpectation(["\u03C1", "\u1FE4", "\u1FE5"], false, false);
  var peg$e18 = peg$classExpectation(["\u03B2", "\u03B3", "\u03B4", "\u03B6", "\u03B8", "\u03BA", "\u03BB", "\u03BC", "\u03BD", "\u03BE", "\u03C0", "\u03C3", "\u03C2", "\u03C4", "\u03C6", "\u03C7", "\u03C8"], false, false);
  var peg$e19 = peg$anyExpectation();

  var peg$f0 = function(vs) {
    return vs.filter(function(v) {
        return v;
    });
};
  var peg$f1 = function(alphabet, apostroph) {
    if (apostroph) {
        return alphabet + apostroph;
    } else {
        return alphabet;
    }
};
  var peg$f2 = function() {
    return null;
};
  var peg$currPos = 0;
  var peg$savedPos = 0;
  var peg$posDetailsCache = [{ line: 1, column: 1 }];
  var peg$maxFailPos = 0;
  var peg$maxFailExpected = [];
  var peg$silentFails = 0;

  var peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function offset() {
    return peg$savedPos;
  }

  function range() {
    return {
      source: peg$source,
      start: peg$savedPos,
      end: peg$currPos
    };
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== undefined
      ? location
      : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== undefined
      ? location
      : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos];
    var p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line: details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;

      return details;
    }
  }

  function peg$computeLocation(startPos, endPos, offset) {
    var startPosDetails = peg$computePosDetails(startPos);
    var endPosDetails = peg$computePosDetails(endPos);

    var res = {
      source: peg$source,
      start: {
        offset: startPos,
        line: startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line: endPosDetails.line,
        column: endPosDetails.column
      }
    };
    if (offset && peg$source && (typeof peg$source.offset === "function")) {
      res.start = peg$source.offset(res.start);
      res.end = peg$source.offset(res.end);
    }
    return res;
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$parsestart() {
    var s0;

    s0 = peg$parsewords();

    return s0;
  }

  function peg$parsewords() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parseword();
    if (s2 === peg$FAILED) {
      s2 = peg$parseanyChar();
    }
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parseword();
      if (s2 === peg$FAILED) {
        s2 = peg$parseanyChar();
      }
    }
    peg$savedPos = s0;
    s1 = peg$f0(s1);
    s0 = s1;

    return s0;
  }

  function peg$parseword() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = [];
    s3 = peg$parsealphabet();
    if (s3 !== peg$FAILED) {
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsealphabet();
      }
    } else {
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      s1 = input.substring(s1, peg$currPos);
    } else {
      s1 = s2;
    }
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 39) {
        s2 = peg$c0;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e0); }
      }
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      peg$savedPos = s0;
      s0 = peg$f1(s1, s2);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsealphabet() {
    var s0;

    s0 = peg$parselargeAlpha();
    if (s0 === peg$FAILED) {
      s0 = peg$parselargeEpsilon();
      if (s0 === peg$FAILED) {
        s0 = peg$parselargeEta();
        if (s0 === peg$FAILED) {
          s0 = peg$parselargeIota();
          if (s0 === peg$FAILED) {
            s0 = peg$parselargeOmicron();
            if (s0 === peg$FAILED) {
              s0 = peg$parselargeUpsilon();
              if (s0 === peg$FAILED) {
                s0 = peg$parselargeOmega();
                if (s0 === peg$FAILED) {
                  s0 = peg$parselargeRho();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parselargeConsonant();
                    if (s0 === peg$FAILED) {
                      s0 = peg$parsesmallAlpha();
                      if (s0 === peg$FAILED) {
                        s0 = peg$parsesmallEpsilon();
                        if (s0 === peg$FAILED) {
                          s0 = peg$parsesmallEta();
                          if (s0 === peg$FAILED) {
                            s0 = peg$parsesmallIota();
                            if (s0 === peg$FAILED) {
                              s0 = peg$parsesmallOmicron();
                              if (s0 === peg$FAILED) {
                                s0 = peg$parsesmallUpsilon();
                                if (s0 === peg$FAILED) {
                                  s0 = peg$parsesmallOmega();
                                  if (s0 === peg$FAILED) {
                                    s0 = peg$parsesmallRho();
                                    if (s0 === peg$FAILED) {
                                      s0 = peg$parsesmallConsonant();
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parselargeAlpha() {
    var s0;

    if (peg$r0.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e1); }
    }

    return s0;
  }

  function peg$parselargeEpsilon() {
    var s0;

    if (peg$r1.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e2); }
    }

    return s0;
  }

  function peg$parselargeEta() {
    var s0;

    if (peg$r2.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e3); }
    }

    return s0;
  }

  function peg$parselargeIota() {
    var s0;

    if (peg$r3.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e4); }
    }

    return s0;
  }

  function peg$parselargeOmicron() {
    var s0;

    if (peg$r4.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e5); }
    }

    return s0;
  }

  function peg$parselargeUpsilon() {
    var s0;

    if (peg$r5.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e6); }
    }

    return s0;
  }

  function peg$parselargeOmega() {
    var s0;

    if (peg$r6.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e7); }
    }

    return s0;
  }

  function peg$parselargeRho() {
    var s0;

    if (peg$r7.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e8); }
    }

    return s0;
  }

  function peg$parselargeConsonant() {
    var s0;

    if (peg$r8.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e9); }
    }

    return s0;
  }

  function peg$parsesmallAlpha() {
    var s0;

    if (peg$r9.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e10); }
    }

    return s0;
  }

  function peg$parsesmallEpsilon() {
    var s0;

    if (peg$r10.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e11); }
    }

    return s0;
  }

  function peg$parsesmallEta() {
    var s0;

    if (peg$r11.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e12); }
    }

    return s0;
  }

  function peg$parsesmallIota() {
    var s0;

    if (peg$r12.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e13); }
    }

    return s0;
  }

  function peg$parsesmallOmicron() {
    var s0;

    if (peg$r13.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e14); }
    }

    return s0;
  }

  function peg$parsesmallUpsilon() {
    var s0;

    if (peg$r14.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e15); }
    }

    return s0;
  }

  function peg$parsesmallOmega() {
    var s0;

    if (peg$r15.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e16); }
    }

    return s0;
  }

  function peg$parsesmallRho() {
    var s0;

    if (peg$r16.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e17); }
    }

    return s0;
  }

  function peg$parsesmallConsonant() {
    var s0;

    if (peg$r17.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e18); }
    }

    return s0;
  }

  function peg$parseanyChar() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.length > peg$currPos) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e19); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f2();
    }
    s0 = s1;

    return s0;
  }

  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}

module.exports = {
  SyntaxError: peg$SyntaxError,
  parse: peg$parse
};