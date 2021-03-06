(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
	typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
	(factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

var e = [/^const(?![a-zA-Z¡-￿_0-9_])/, /^var(?![a-zA-Z¡-￿_0-9_])/, /^type(?![a-zA-Z¡-￿_0-9_])/, /^import(?![a-zA-Z¡-￿_0-9_])/, /^package(?![a-zA-Z¡-￿_0-9_])/, /^func(?![a-zA-Z¡-￿_0-9_])/, /^go(?![a-zA-Z¡-￿_0-9_])/, /^defer(?![a-zA-Z¡-￿_0-9_])/, /^return(?![a-zA-Z¡-￿_0-9_])/, /^break(?![a-zA-Z¡-￿_0-9_])/, /^continue(?![a-zA-Z¡-￿_0-9_])/, /^default(?![a-zA-Z¡-￿_0-9_])/, /^case(?![a-zA-Z¡-￿_0-9_])/, /^select(?![a-zA-Z¡-￿_0-9_])/, /^goto(?![a-zA-Z¡-￿_0-9_])/, /^fallthrough(?![a-zA-Z¡-￿_0-9_])/, /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*/, [1, "\n", "\t", " "], /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_])/, /^\@[a-zA-Z¡-￿_]+/, /^[a-zA-Z¡-￿_]+/, [0, /^(?!\*\/|\@[a-zA-Z¡-￿_]|\{)/, /^[^]/], /^if(?![a-zA-Z¡-￿_0-9_])/, /^else(?![a-zA-Z¡-￿_0-9_])/, /^switch(?![a-zA-Z¡-￿_0-9_])/, /^for(?![a-zA-Z¡-￿_0-9_])/, /^(?:\!|\+|\-|\*|\^|\&|\<\-)/, /^range(?![a-zA-Z¡-￿_0-9_])/, /^struct(?![a-zA-Z¡-￿_0-9_])/, /^interface(?![a-zA-Z¡-￿_0-9_])/, /^map(?![a-zA-Z¡-￿_0-9_])/, /^chan(?![a-zA-Z¡-￿_0-9_])/, /^(?=\{)/, /^(?:(?:0o|0O)[0-7]+|(?:0x|OX)[0-9a-fA-F]+|(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)(?:[eE][\+\-]?[0-9]+)?i?)/, /^(?:true|false|nil|iota)(?![a-zA-Z¡-￿_0-9_])/, /^make(?![a-zA-Z¡-￿_0-9_])/, /^(?:append|cap|close|complex|copy|delete|imag|len|new|panic|print|println|real|recover)(?![a-zA-Z¡-￿_0-9_])/, /^(?:\+\+|\-\-)/, /^(?:(?:\+|\&\^?|\-|\||\*|\^|\/|\<\<?|\>\>?|\%|\=)\=?|\<\-|\=|\:\=|\!\=)/, /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*(?=\()/, [1, ";", "\n"], /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*(?= *\:)/, /^(?:\.\.\.)?/];
var nodes = [
  [1, 4, 2],
  [/^[^]/, 0],
  [1, 6, 1],
  [3, "keyword", e[9], -1,
   3, "keyword", e[11], -1,
   3, "keyword", e[5], -1,
   3, "keyword", e[29], -1,
   3, "keyword", e[13], -1,
   3, "keyword", e[12], -1,
   3, "keyword", e[7], -1,
   3, "keyword", e[6], -1,
   3, "keyword", e[30], -1,
   3, "keyword", e[28], -1,
   3, "keyword", e[31], -1,
   3, "keyword", e[23], -1,
   3, "keyword", e[14], -1,
   3, "keyword", e[4], -1,
   3, "keyword", e[24], -1,
   3, "keyword", e[0], -1,
   3, "keyword", e[15], -1,
   3, "keyword", e[22], -1,
   3, "keyword", e[27], -1,
   3, "keyword", e[2], -1,
   3, "keyword", e[10], -1,
   3, "keyword", e[25], -1,
   3, "keyword", e[3], -1,
   3, "keyword", e[8], -1,
   3, "keyword", e[1], -1,
   3, "builtin", e[35], -1,
   3, "atom", e[34], -1,
   3, "builtin", e[36], -1,
   3, "operator", e[38], -1,
   3, "operator", e[26], -1,
   3, "operator", e[37], -1,
   3, "number", e[33], -1,
   2, 9, -1, {"name":"string","token":"string"},
   3, "variable", e[16], -1,
   2, 11, -1, {"name":"comment","token":"comment"},
   /^[^]/, -1],
  [/^[ \t]/, 4,
   2, 11, 4, {"name":"comment","token":"comment"},
   [0, /^(?=\n)/, [7, "skippableNewline"]], 5,
   0, -1],
  ["\n", 4],
  [/^[ \t]/, 6,
   2, 11, 6, {"name":"comment","token":"comment"},
   "\n", 6,
   0, 7],
  [2, 17, 8, {"name":"Statement"},
   0, -1],
  [/^[ \t]/, 8,
   2, 11, 8, {"name":"comment","token":"comment"},
   e[40], 8,
   0, 7],
  [/^(?:\'(?:\\.(?:(?!\').)*|.)\'|\"(?:\\.|(?!\").)*\")/, -1,
   "`", 10],
  [[0, /^(?!\`)/, /^[^]/], 10,
   "`", -1],
  [/^\/\*\*(?!\/)/, 12,
   "/*", 16,
   /^\/\/.*/, -1],
  [0, 13,
   2, 55, 12, {"name":"doccomment.braced"},
   0, 14],
  [e[21], 15],
  [2, 63, 14, {"name":"doccomment.tagGroup"},
   "*/", -1],
  [0, 13,
   0, 12],
  [[0, /^(?!\*\/)/, /^[^]/], 16,
   "*/", -1],
  [3, "keyword", e[0], 18,
   3, "keyword", e[1], 18,
   3, "keyword", e[2], 20,
   3, "keyword", e[3], 24,
   3, "keyword", e[4], 28,
   2, 71, -1, {"name":"IfStatement"},
   2, 93, -1, {"name":"SwitchStatement"},
   2, 102, -1, {"name":"ForStatement"},
   3, "keyword", e[5], 30,
   3, "keyword", e[6], 32,
   3, "keyword", e[7], 32,
   3, "keyword", e[8], 34,
   3, "keyword", e[9], 36,
   3, "keyword", e[10], 36,
   3, "keyword", e[11], 38,
   3, "keyword", e[12], 39,
   /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*(?= *\:(?!\=))/, 38,
   2, 114, -1, {"name":"Block"},
   3, "keyword", e[13], 42,
   3, "keyword", e[14], 44,
   3, "keyword", e[15], -1,
   3, "keyword", e[12], 46,
   1, 119, 50],
  [1, 4, 19],
  [1, 130, -1],
  [1, 4, 21],
  [2, 140, -1, {"name":"Set"},
   3, "def", e[16], 22],
  [1, 4, 23],
  [1, 145, -1],
  [1, 4, 25],
  [2, 180, -1, {"name":"Set"},
   ".", 26,
   3, "def", e[16], 26,
   0, 26],
  [1, 4, 27],
  [2, 9, -1, {"name":"string","token":"string"}],
  [1, 4, 29],
  [3, "variable", e[16], -1],
  [1, 4, 31],
  [2, 185, -1, {"name":"FunctionDecl"}],
  [1, 4, 33],
  [1, 119, -1],
  [1, 4, 35],
  [1, 200, -1],
  [1, 4, 37],
  [/^(?:[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*)?/, -1],
  [1, 4, 40],
  [1, 4, 41],
  [":", -1],
  [1, 200, 38],
  [1, 4, 43],
  [2, 114, -1, {"name":"Block"}],
  [1, 4, 45],
  [e[16], -1],
  [1, 4, 47],
  [2, 17, 48, {"name":"Statement"}],
  [1, 4, 49],
  [":", -1],
  [1, 4, 51],
  [",", 52,
   0, -1],
  [1, 4, 53],
  [1, 119, 54],
  [1, 4, 51],
  ["{", 56],
  [3, "tag", e[18], 57,
   3, "tag", e[19], 58,
   2, 206, 62, {"name":"doccomment.type","token":"type"}],
  [e[17], 57,
   "{", 59,
   0, 58],
  [[0, /^(?!\}|\*\/)/, /^[^]/], 58,
   0, 62],
  [2, 206, 60, {"name":"doccomment.type","token":"type"}],
  ["}", 61],
  [e[17], 61,
   3, "def", e[20], 58,
   0, 58],
  ["}", -1],
  [3, "tag", e[18], 64,
   3, "tag", e[19], 68],
  [e[17], 64,
   "{", 65,
   0, 68],
  [2, 206, 66, {"name":"doccomment.type","token":"type"}],
  ["}", 67],
  [e[17], 67,
   3, "def", e[20], 68,
   0, 68],
  [0, 69,
   2, 55, 68, {"name":"doccomment.braced"},
   0, -1],
  [e[21], 70],
  [0, 69,
   0, 68],
  [3, "keyword", e[22], 72],
  [1, 4, 73],
  [1, 207, 74],
  [1, 4, 75],
  [";", 76,
   0, 78],
  [1, 4, 77],
  [1, 207, 78],
  [1, 4, 79],
  [2, 114, 80, {"name":"Block"}],
  [1, 4, 81],
  [3, "keyword", e[23], 82,
   0, -1],
  [1, 4, 83],
  [3, "keyword", e[22], 84,
   0, 85],
  [1, 4, 86],
  [1, 4, 87],
  [1, 207, 88],
  [2, 114, 89, {"name":"Block"}],
  [1, 4, 90],
  [1, 4, 81],
  [";", 91,
   0, 85],
  [1, 4, 92],
  [1, 207, 85],
  [3, "keyword", e[24], 94],
  [1, 4, 95],
  [1, 207, 96,
   0, 100],
  [1, 4, 97],
  [";", 98,
   0, 100],
  [1, 4, 99],
  [1, 207, 100,
   0, 100],
  [1, 4, 101],
  [2, 114, -1, {"name":"Block"}],
  [3, "keyword", e[25], 103],
  [1, 4, 104],
  [1, 215, 105,
   1, 207, 106,
   0, 112],
  [1, 4, 107],
  [1, 4, 108],
  [1, 207, 106],
  [";", 109,
   0, 112],
  [1, 4, 110],
  [1, 207, 111,
   0, 111],
  [1, 4, 108],
  [1, 4, 113],
  [2, 114, -1, {"name":"Block"}],
  ["{", 115],
  [1, 4, 116],
  [1, 6, 117],
  [1, 4, 118],
  ["}", -1],
  [1, 215, 120,
   0, 122],
  [1, 4, 121],
  [1, 119, -1],
  [3, "operator", e[26], 123,
   3, "keyword", e[27], 123,
   [0, [6, 222], [5, 223]], 124,
   1, 226, 125],
  [1, 4, 122],
  [1, 145, 126],
  [1, 4, 127],
  [1, 4, 128],
  [1, 235, 129,
   2, 244, 129, {"name":"LiteralBody"},
   0, -1],
  [e[32], 125],
  [1, 4, 127],
  [2, 249, -1, {"name":"Set"},
   3, "def", e[16], 131],
  [1, 4, 132],
  [",", 133,
   1, 145, 134,
   0, 134],
  [1, 4, 135],
  [1, 4, 136],
  [3, "def", e[16], 137],
  [3, "operator", "=", 138,
   0, -1],
  [1, 4, 132],
  [1, 4, 139],
  [1, 200, -1],
  ["(", 141],
  [1, 4, 142],
  [1, 254, 143],
  [1, 4, 144],
  [")", -1],
  ["[", 146,
   3, "keyword", e[28], 152,
   3, "keyword", e[29], 154,
   "*", 156,
   3, "keyword", e[5], 158,
   3, "keyword", e[30], 162,
   3, "operator", "<-", 170,
   3, "keyword", e[31], 171,
   "(", 174,
   0, 178],
  [1, 4, 147],
  [1, 119, 148,
   0, 148],
  [1, 4, 149],
  ["]", 150],
  [1, 4, 151],
  [1, 145, -1],
  [1, 4, 153],
  [2, 259, -1, {"name":"StructBody"}],
  [1, 4, 155],
  [2, 264, -1, {"name":"InterfaceBody"}],
  [1, 4, 157],
  [1, 145, -1],
  [1, 4, 159],
  [2, 269, 160, {"name":"ParamList"}],
  [1, 4, 161],
  [2, 269, -1, {"name":"ParamList"},
   1, 145, -1,
   0, -1],
  [1, 4, 163],
  ["[", 164],
  [1, 4, 165],
  [1, 145, 166],
  [1, 4, 167],
  ["]", 168],
  [1, 4, 169],
  [1, 145, -1],
  [1, 4, 172],
  [1, 4, 173],
  [1, 145, -1],
  [3, "operator", "<-", 170,
   0, 170],
  [1, 4, 175],
  [1, 145, 176],
  [1, 4, 177],
  [")", -1],
  [3, "meta", /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*\./, 179,
   3, "type", e[16], -1],
  [1, 4, 178],
  ["(", 181],
  [1, 4, 182],
  [1, 274, 183],
  [1, 4, 184],
  [")", -1],
  ["(", 186,
   0, 192],
  [1, 4, 187],
  [3, "def", e[16], 188],
  [1, 4, 189],
  [1, 145, 190],
  [1, 4, 191],
  [")", 192],
  [1, 4, 193],
  [3, "def", e[16], 194,
   0, 194],
  [1, 4, 195],
  [2, 269, 196, {"name":"ParamList"}],
  [1, 4, 197],
  [2, 269, 198, {"name":"ParamList"},
   1, 145, 198,
   0, 198],
  [1, 4, 199],
  [2, 114, -1, {"name":"Block"},
   0, -1],
  [1, 119, 201,
   0, -1],
  [1, 4, 202],
  [",", 203,
   0, -1],
  [1, 4, 204],
  [1, 119, 205,
   0, 205],
  [1, 4, 202],
  [1, 279, -1],
  [1, 215, 208,
   0, 210],
  [1, 4, 209],
  [1, 119, -1],
  [3, "operator", e[26], 211,
   3, "keyword", e[27], 211,
   1, 226, 212],
  [1, 4, 210],
  [1, 4, 213],
  [1, 283, 214,
   0, -1],
  [1, 4, 213],
  [[5, 292], 216],
  [3, "def", e[16], 217],
  [1, 4, 218],
  [",", 219,
   3, "operator", ":=", -1],
  [1, 4, 220],
  [3, "def", e[16], 221],
  [1, 4, 218],
  [3, "keyword", e[5], -1],
  [1, 145, 224],
  [1, 4, 225],
  [e[32], -1],
  [3, "number", e[33], -1,
   2, 9, -1, {"name":"string","token":"string"},
   3, "atom", e[34], -1,
   3, "keyword", e[5], 227,
   3, "builtin", e[35], 229,
   3, "builtin", e[36], -1,
   3, "variable callee", e[39], -1,
   3, "variable", e[16], -1,
   2, 298, 231, {"name":"Bracketed"},
   "*", 233,
   2, 306, -1, {"name":"ParenExpr"}],
  [1, 4, 228],
  [2, 311, -1, {"name":"FunctionExpr"}],
  [1, 4, 230],
  [2, 316, -1, {"name":"TypeList"}],
  [1, 4, 232],
  [1, 145, -1,
   0, -1],
  [1, 4, 234],
  [1, 145, -1],
  [".(", 236,
   ".", 240,
   3, "operator", e[37], -1,
   3, "operator", e[38], 242,
   2, 321, -1, {"name":"ArgList"},
   2, 298, -1, {"name":"Bracketed"}],
  [1, 4, 237],
  [1, 145, 238],
  [1, 4, 239],
  [")", -1],
  [1, 4, 241],
  [3, "property callee", e[39], -1,
   3, "property", e[16], -1],
  [1, 4, 243],
  [1, 119, -1],
  ["{", 245],
  [1, 4, 246],
  [1, 328, 247],
  [1, 4, 248],
  ["}", -1],
  ["(", 250],
  [1, 4, 251],
  [1, 342, 252],
  [1, 4, 253],
  [")", -1],
  [/^[ \t]/, 254,
   2, 11, 254, {"name":"comment","token":"comment"},
   "\n", 254,
   0, 255],
  [3, "def", e[16], 256,
   0, -1],
  [1, 4, 257],
  [1, 145, 258],
  [/^[ \t]/, 258,
   2, 11, 258, {"name":"comment","token":"comment"},
   e[40], 258,
   0, 255],
  ["{", 260],
  [1, 4, 261],
  [1, 354, 262],
  [1, 4, 263],
  ["}", -1],
  ["{", 265],
  [1, 4, 266],
  [1, 367, 267],
  [1, 4, 268],
  ["}", -1],
  ["(", 270],
  [1, 4, 271],
  [1, 374, 272],
  [1, 4, 273],
  [")", -1],
  [/^[ \t]/, 274,
   2, 11, 274, {"name":"comment","token":"comment"},
   "\n", 274,
   0, 275],
  [".", 276,
   3, "def", e[16], 276,
   0, 276,
   0, -1],
  [1, 4, 277],
  [2, 9, 278, {"name":"string","token":"string"}],
  [/^[ \t]/, 278,
   2, 11, 278, {"name":"comment","token":"comment"},
   e[40], 278,
   0, 275],
  [/^(?!\}|\*\/)/, 280,
   0, -1],
  ["{", 281,
   /^[^]/, 279],
  [1, 279, 282],
  [/^\}?/, 279],
  [".(", 284,
   ".", 288,
   3, "operator", e[37], -1,
   3, "operator", e[38], 290,
   2, 321, -1, {"name":"ArgList"},
   2, 298, -1, {"name":"Bracketed"}],
  [1, 4, 285],
  [1, 145, 286],
  [1, 4, 287],
  [")", -1],
  [1, 4, 289],
  [3, "property callee", e[39], -1,
   3, "property", e[16], -1],
  [1, 4, 291],
  [1, 207, -1],
  [e[16], 293],
  [1, 4, 294],
  [",", 295,
   ":=", -1],
  [1, 4, 296],
  [e[16], 297],
  [1, 4, 294],
  ["[", 299],
  [1, 4, 300],
  [1, 200, 301],
  [1, 4, 302],
  [":", 303,
   "]", -1],
  [1, 4, 304],
  [1, 119, 305,
   0, 305],
  [1, 4, 302],
  ["(", 307],
  [1, 4, 308],
  [1, 200, 309],
  [1, 4, 310],
  [")", -1],
  [2, 269, 312, {"name":"ParamList"}],
  [1, 4, 313],
  [2, 269, 314, {"name":"ParamList"},
   1, 145, 314,
   0, 314],
  [1, 4, 315],
  [2, 114, -1, {"name":"Block"}],
  ["(", 317],
  [1, 4, 318],
  [1, 398, 319],
  [1, 4, 320],
  [")", -1],
  ["(", 322],
  [1, 4, 323],
  [1, 200, 324],
  [1, 4, 325],
  [e[42], 326],
  [1, 4, 327],
  [")", -1],
  [3, "property", e[41], 329,
   2, 244, 329, {"name":"LiteralBody"},
   1, 119, 329,
   0, -1],
  [1, 4, 330],
  [":", 331,
   0, 332],
  [1, 4, 333],
  [1, 4, 334],
  [2, 244, 332, {"name":"LiteralBody"},
   1, 119, 332],
  [",", 335,
   0, -1],
  [1, 4, 336],
  [3, "property", e[41], 337,
   2, 244, 337, {"name":"LiteralBody"},
   1, 119, 337,
   0, 338],
  [1, 4, 339],
  [1, 4, 334],
  [":", 340,
   0, 338],
  [1, 4, 341],
  [2, 244, 338, {"name":"LiteralBody"},
   1, 119, 338],
  [/^[ \t]/, 342,
   2, 11, 342, {"name":"comment","token":"comment"},
   "\n", 342,
   0, 343],
  [3, "def", e[16], 344,
   0, -1],
  [1, 4, 345],
  [",", 346,
   1, 145, 347,
   0, 347],
  [1, 4, 348],
  [1, 4, 349],
  [3, "def", e[16], 350],
  [3, "operator", "=", 351,
   0, 352],
  [1, 4, 345],
  [1, 4, 353],
  [/^[ \t]/, 352,
   2, 11, 352, {"name":"comment","token":"comment"},
   e[40], 352,
   0, 343],
  [1, 200, 352],
  [/^[ \t]/, 354,
   2, 11, 354, {"name":"comment","token":"comment"},
   "\n", 354,
   0, 355],
  [[5, 404], 356,
   "*", 357,
   0, 357,
   0, -1],
  [3, "def", e[16], 358],
  [1, 4, 359],
  [1, 4, 360],
  [1, 145, 361],
  [",", 362,
   0, 357],
  [1, 4, 363],
  [1, 4, 364],
  [2, 9, 365, {"name":"string","token":"string"},
   0, 365],
  [3, "def", e[16], 366],
  [/^[ \t]/, 365,
   2, 11, 365, {"name":"comment","token":"comment"},
   e[40], 365,
   0, 355],
  [1, 4, 360],
  [/^[ \t]/, 367,
   2, 11, 367, {"name":"comment","token":"comment"},
   "\n", 367,
   0, 368],
  [3, "property", /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*(?= *\()/, 369,
   1, 145, 370,
   0, -1],
  [1, 4, 371],
  [/^[ \t]/, 370,
   2, 11, 370, {"name":"comment","token":"comment"},
   e[40], 370,
   0, 368],
  [2, 269, 372, {"name":"ParamList"}],
  [1, 4, 373],
  [2, 269, 370, {"name":"ParamList"},
   1, 145, 370,
   0, 370],
  [3, "def", e[16], 375,
   0, 376,
   0, -1],
  [1, 4, 377],
  [1, 4, 378],
  [",", 379,
   0, 376],
  [e[42], 380],
  [1, 4, 381],
  [1, 4, 382],
  [3, "def", e[16], 383],
  [1, 145, 384,
   0, 384],
  [1, 4, 377],
  [1, 4, 385],
  [",", 386,
   0, -1],
  [1, 4, 387],
  [3, "def", e[16], 388,
   0, 389,
   0, 390],
  [1, 4, 391],
  [1, 4, 392],
  [1, 4, 385],
  [",", 393,
   0, 389],
  [e[42], 394],
  [1, 4, 395],
  [1, 4, 396],
  [3, "def", e[16], 397],
  [1, 145, 390,
   0, 390],
  [1, 4, 391],
  [1, 145, 399,
   0, -1],
  [1, 4, 400],
  [",", 401,
   0, -1],
  [1, 4, 402],
  [1, 145, 403,
   0, 403],
  [1, 4, 400],
  [e[16], 405],
  [1, 4, 406],
  [/^[a-zA-Z¡-￿__\[\,\*\<\(]/, -1]
];
var start = 0;
var token = 3;


var grammar = Object.freeze({
	nodes: nodes,
	start: start,
	token: token
});

function getScope(context, scopes) {
  for (var cx = context; cx; cx = cx.parent)
    { if (scopes.indexOf(cx.name) > -1) { return cx } }
}
function isLocal(context, name) {
  for (var cx = context; cx; cx = cx.parent)
    { if (cx.locals && cx.locals.indexOf(name) > -1) { return true } }
  return false
}
var varRE = /(^|\s)variable($|\s)/;

function markLocals(type, scopes, stream, state, once) {
  if (type == "def") {
    var scope = getScope(state.context, scopes), name = stream.current();
    if (scope) {
      if (!scope.locals) { scope.locals = []; }
      if (once && scope.locals.indexOf(name) > -1)
        { return "variable-2" }
      scope.locals.push(name);
    }
  } else if (varRE.test(type) && !/qualified/.test(type) &&
             isLocal(state.context, stream.current())) {
    type = type.replace(varRE, "$1variable-2$2");
  }
  return type
}

var scopes = ["Block", "FunctionDecl", "FunctionExpr", "IfStatement", "ForStatement", "SwitchStatement"];
var allowNewline = ["LiteralBody", "Bracketed", "ArgList", "ParamList", "ParenExpr"];

function skippableNewline(line, pos, cx) {
  if (cx && allowNewline.indexOf(cx.name) > -1) { return true }
  var match = /(?:(\w+)|[\d"'\)\]\}:]|\+\+|--)\s*(?:\/\/.*)?$/.exec(line.slice(0, pos));
  return !match ||
    (match[1] ? /^(?:func|interface|select|case|defer|go|map|struct|chan|else|goto|package|switch|const|if|range|type|for|import|var)$/.test(match[1]) : false)
}

var bracketed = {
  Block: "}", LiteralBody: "}", StructBody: "}", InterfaceBody: "}",
  Bracketed: "]",
  Set: ")", ParamList: ")", ArgList: ")", ParenExpr: ")"
};

function findIndent(cx, textAfter, curLine, config) {
  if (!cx) { return 0 }
  if (cx.name == "string" || cx.name == "comment") { return CodeMirror.Pass }

  var brack = bracketed[cx.name];
  if (brack) {
    var closed = textAfter && textAfter.charAt(0) == brack;
    var flat = closed || curLine == cx.startLine;
    if (cx.name == "Block") {
      curLine = cx.parent.startLine;
      if (/^(case|default)\b/.test(textAfter)) { flat = true; }
    } else {
      curLine = cx.startLine;
    }
    return findIndent(cx.parent, closed ? null : textAfter, curLine, config) + (flat ? 0 : config.tabSize)
  } else if (cx.name == "Statement") {
    return CodeMirror.countColumn(cx.startLine, null, config.tabSize) +
      (curLine == cx.startLine ? 0 : config.tabSize)
  } else {
    return findIndent(cx.parent, textAfter, curLine, config)
  }
}

var GoMode = (function (superclass) {
  function GoMode(conf) {
    superclass.call(this, grammar, {
      predicates: {skippableNewline: skippableNewline}
    });
    this.conf = conf;
  }

  if ( superclass ) GoMode.__proto__ = superclass;
  GoMode.prototype = Object.create( superclass && superclass.prototype );
  GoMode.prototype.constructor = GoMode;

  GoMode.prototype.token = function token$$1 (stream, state) {
    return markLocals(superclass.prototype.token.call(this, stream, state), scopes, stream, state)
  };

  GoMode.prototype.indent = function indent (state, textAfter, line) {
    return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, null, this.conf)
  };

  return GoMode;
}(CodeMirror.GrammarMode));

GoMode.prototype.electricInput = /^\s*(?:case .*?:|default:|\{\}?|\})$/;
GoMode.prototype.closeBrackets = "()[]{}''\"\"``";
GoMode.prototype.blockCommentStart = "/*";
GoMode.prototype.blockCommentEnd = "*/";
GoMode.prototype.blockCommentContinue = " * ";
GoMode.prototype.lineComment = "//";
GoMode.prototype.fold = "brace";

CodeMirror.defineMode("google-go", function (conf) { return new GoMode(conf); });

})));
