(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
	typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
	(factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

var e = [/^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^try(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^assert(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^throw(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^import(?![a-zA-Z¡-￿_0-9])/, /^catch(?![a-zA-Z¡-￿_0-9])/, /^finally(?![a-zA-Z¡-￿_0-9])/, /^(?:public|protected|private|abstract|static|final|transient|volatile|synchronized|native|strictfp|const)(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^else(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-|\!|\~|\&|\*)/, /^(?:true|false|null)(?![a-zA-Z¡-￿_0-9])/, /^this(?![a-zA-Z¡-￿_0-9])/, /^super(?![a-zA-Z¡-￿_0-9])/, /^(?:(?:0x|0X)[0-9_a-fA-F]+|(?:0b|0B)[01_]+|(?:[0-9][0-9_]*(?:\.[0-9_]*)?|\.[0-9_]+)(?:[eE][\+\-]?[0-9_]+)?)[LlDdFf]?/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?=\()/, /^(?:\+\+|\-\-)/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, /^instanceof(?![a-zA-Z¡-￿_0-9])/, /^(?:boolean|char|byte|short|int|long|float|double|void)(?![a-zA-Z¡-￿_0-9])/, /^[A-Z][a-zA-Z¡-￿_0-9]*/, /^enum(?![a-zA-Z¡-￿_0-9])/, /^(?:class|interface)(?![a-zA-Z¡-￿_0-9])/, /^package(?![a-zA-Z¡-￿_0-9])/, /^implements(?![a-zA-Z¡-￿_0-9])/, /^extends(?![a-zA-Z¡-￿_0-9])/, [1, "\n", "\t", " "], /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_])/, /^\@[a-zA-Z¡-￿_]+/, /^[a-zA-Z¡-￿_]+/, [0, /^(?!\*\/|\@[a-zA-Z¡-￿_]|\{)/, /^[^]/], /^new(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]* *\.(?!\.)/, [0, [5, 382], /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/], /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/, /^throws(?![a-zA-Z¡-￿_0-9])/, /^(?:\.\.\.)?/];
var nodes = [
  [1, 5, 2],
  [/^[^]/, 0],
  [2, 6, 3, {"name":"Statement"}],
  [0, 0,
   0, 1],
  [3, "keyword", e[29], -1,
   3, "keyword", e[8], -1,
   3, "keyword", e[4], -1,
   3, "keyword", e[17], -1,
   3, "keyword", e[0], -1,
   3, "keyword", e[1], -1,
   3, "keyword", e[3], -1,
   3, "keyword", e[6], -1,
   3, "keyword", e[10], -1,
   3, "keyword", e[11], -1,
   3, "keyword", e[5], -1,
   3, "keyword", e[15], -1,
   3, "keyword", e[33], -1,
   3, "keyword", e[32], -1,
   3, "keyword", e[20], -1,
   3, "keyword", e[39], -1,
   3, "keyword", e[21], -1,
   3, "keyword", e[7], -1,
   3, "keyword", e[9], -1,
   3, "keyword", e[43], -1,
   3, "keyword", e[2], -1,
   3, "keyword", e[13], -1,
   3, "keyword", e[14], -1,
   3, "keyword", e[31], -1,
   3, "keyword", e[12], -1,
   3, "keyword", e[30], -1,
   3, "keyword", e[26], -1,
   3, "type", e[27], -1,
   3, "type", e[28], -1,
   3, "atom", e[19], -1,
   3, "variable callee", e[23], -1,
   3, "variable", e[16], -1,
   3, "number", e[22], -1,
   2, 102, -1, {"name":"string","token":"string"},
   3, "operator", e[18], -1,
   3, "operator", e[24], -1,
   3, "operator", e[25], -1,
   2, 105, -1, {"name":"comment","token":"comment"},
   /^[^]/, -1],
  [[1, " ", "\t", "\n"], 5,
   2, 105, 5, {"name":"comment","token":"comment"},
   0, -1],
  [3, "keyword", e[0], 7,
   3, "keyword", e[1], 21,
   3, "keyword", e[2], 25,
   3, "keyword", e[3], 43,
   3, "keyword", e[4], 51,
   3, "keyword", e[5], 59,
   3, "keyword", e[6], 63,
   3, "keyword", e[7], 67,
   3, "keyword", e[8], 75,
   3, "keyword", e[9], 79,
   3, "keyword", e[10], 83,
   3, "keyword", e[11], 84,
   [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 111]], 83,
   3, "keyword", e[12], 87,
   ";", -1,
   2, 112, 94, {"name":"BeforeStatement"},
   1, 114, 96],
  [1, 5, 8],
  ["(", 9],
  [1, 5, 10],
  [2, 6, 11, {"name":"Statement"}],
  [1, 5, 12],
  [1, 114, 13,
   0, 13],
  [1, 5, 14],
  [";", 15],
  [1, 5, 16],
  [1, 114, 17,
   0, 17],
  [1, 5, 18],
  [")", 19],
  [1, 5, 20],
  [2, 6, -1, {"name":"Statement"}],
  [1, 5, 22],
  [2, 140, 23, {"name":"CondExpr"}],
  [1, 5, 24],
  [2, 6, -1, {"name":"Statement"}],
  [1, 5, 26],
  [2, 145, 27, {"name":"Block"}],
  [1, 5, 28],
  [3, "keyword", e[13], 29,
   3, "keyword", e[14], 30,
   0, -1],
  [1, 5, 31],
  [1, 5, 32],
  ["(", 33],
  [2, 145, -1, {"name":"Block"}],
  [1, 5, 34],
  [3, "keyword", e[15], 35,
   1, 149, 35,
   1, 156, 36],
  [1, 5, 34],
  [1, 5, 37],
  [3, "def", e[16], 38],
  [1, 5, 39],
  [")", 40],
  [1, 5, 41],
  [2, 145, 42, {"name":"Block"}],
  [1, 5, 28],
  [1, 5, 44],
  [2, 6, 45, {"name":"Statement"}],
  [1, 5, 46],
  [3, "keyword", e[1], 47],
  [1, 5, 48],
  [2, 140, 49, {"name":"CondExpr"}],
  [1, 5, 50],
  [";", -1],
  [1, 5, 52],
  [2, 140, 53, {"name":"CondExpr"}],
  [1, 5, 54],
  [2, 6, 55, {"name":"Statement"}],
  [1, 5, 56],
  [3, "keyword", e[17], 57,
   0, -1],
  [1, 5, 58],
  [2, 6, -1, {"name":"Statement"}],
  [1, 5, 60],
  [2, 140, 61, {"name":"CondExpr"}],
  [1, 5, 62],
  [2, 145, -1, {"name":"Block"}],
  [1, 5, 64],
  [/^(?:[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*)?/, 65],
  [1, 5, 66],
  [";", -1],
  [1, 5, 68],
  [1, 114, 69],
  [1, 5, 70],
  [":", 71,
   0, 72],
  [1, 5, 73],
  [1, 5, 74],
  [1, 114, 72],
  [";", -1],
  [1, 5, 76],
  [1, 114, 77,
   0, 77],
  [1, 5, 78],
  [";", -1],
  [1, 5, 80],
  [1, 114, 81],
  [1, 5, 82],
  [";", -1],
  [1, 5, 85],
  [1, 5, 86],
  [":", -1],
  [1, 114, 83],
  [1, 5, 88],
  [3, "keyword", /^static(?![a-zA-Z¡-￿_0-9])/, 89,
   0, 89],
  [1, 5, 90],
  [/^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]* *\./, 91,
   /^(?:\*|[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*)/, 92],
  [1, 5, 90],
  [1, 5, 93],
  [";", -1],
  [1, 5, 95],
  [1, 167, -1],
  [1, 5, 97],
  [",", 98,
   1, 5, 99],
  [1, 5, 100],
  [";", -1],
  [1, 114, 101],
  [1, 5, 97],
  [/^\'(?:\\.(?:(?!\').)*|.)\'/, -1,
   "\"", 103],
  ["\\", 104,
   /^(?!\")./, 103,
   "\"", -1],
  [/^[^]/, 103],
  [/^\/\*\*(?!\/)/, 106,
   "/*", 110,
   /^\/\/.*/, -1],
  [0, 107,
   2, 213, 106, {"name":"doccomment.braced"},
   0, 108],
  [e[38], 109],
  [2, 221, 108, {"name":"doccomment.tagGroup"},
   "*/", -1],
  [0, 107,
   0, 106],
  [[0, /^(?!\*\/)/, /^[^]/], 110,
   "*/", -1],
  [e[34], 111,
   /^\:(?!\:)/, -1],
  [3, "keyword", e[15], 113,
   1, 149, 113,
   0, -1],
  [1, 5, 112],
  [3, "operator", e[18], 115,
   3, "atom", e[19], 123,
   3, "keyword", e[20], 123,
   3, "keyword", e[21], 123,
   3, "number", e[22], 123,
   2, 102, 123, {"name":"string","token":"string"},
   2, 229, 123, {"name":"NewExpr"},
   2, 249, 123, {"name":"Lambda"},
   3, "variable callee", e[23], 123,
   3, "variable", e[16], 123,
   "(", 116,
   2, 258, 123, {"name":"ParenExpr"}],
  [1, 5, 114],
  [1, 5, 117],
  [[5, 263], 118],
  [1, 156, 119],
  [1, 5, 120],
  [")", 121],
  [1, 5, 122],
  [1, 114, 123],
  [1, 5, 124],
  [2, 266, 125, {"name":"ArgList"},
   "[", 126,
   ".", 127,
   3, "operator", e[24], 125,
   3, "operator", e[25], 128,
   3, "keyword", e[26], 128,
   3, "operator", "?", 129,
   0, -1],
  [1, 5, 124],
  [1, 5, 130],
  [1, 5, 131],
  [1, 5, 132],
  [1, 5, 133],
  [1, 114, 134],
  [2, 271, 125, {"name":"TypeArgs"},
   3, "property callee", e[42], 125,
   3, "property", e[16], 125],
  [1, 114, 125],
  [1, 114, 135],
  [1, 5, 136],
  [1, 5, 137],
  ["]", 125],
  [3, "operator", ":", 138],
  [1, 5, 139],
  [1, 114, 125],
  ["(", 141],
  [1, 5, 142],
  [1, 114, 143,
   0, 143],
  [1, 5, 144],
  [")", -1],
  ["{", 146],
  [1, 5, 147],
  [2, 6, 148, {"name":"Statement"},
   "}", -1],
  [1, 5, 147],
  [2, 276, 150, {"name":"AnnotationHead","token":"meta"}],
  [1, 5, 151],
  ["(", 152,
   0, -1],
  [1, 5, 153],
  [1, 284, 154],
  [1, 5, 155],
  [")", -1],
  [1, 149, 157,
   3, "type", e[27], 160,
   0, 158,
   3, "type", e[28], 160],
  [1, 5, 156],
  [3, "meta", e[40], 159],
  [0, 158,
   2, 298, 160, {"name":"qualifiedClassName","token":"qualified"}],
  [1, 5, 161],
  ["[", 162,
   2, 271, 163, {"name":"TypeArgs"},
   0, -1],
  [1, 5, 164],
  [1, 5, 161],
  [1, 114, 165,
   0, 165],
  [1, 5, 166],
  ["]", 163],
  [2, 145, -1, {"name":"Block"},
   3, "keyword", e[29], 168,
   3, "keyword", e[30], 176,
   3, "keyword", e[31], 190,
   [5, 299], 197],
  [1, 5, 169],
  [3, "def", e[16], 170],
  [1, 5, 171],
  [3, "keyword", e[32], 172,
   0, 173],
  [1, 5, 174],
  [1, 5, 175],
  [1, 305, 173],
  [2, 311, -1, {"name":"EnumBody"}],
  [1, 5, 177],
  [3, "def", e[16], 178],
  [1, 5, 179],
  [2, 321, 180, {"name":"TypeParams"},
   0, 180],
  [1, 5, 181],
  [3, "keyword", e[33], 182,
   0, 183],
  [1, 5, 184],
  [1, 5, 185],
  [1, 156, 183],
  [3, "keyword", e[32], 186,
   0, 187],
  [1, 5, 188],
  [1, 5, 189],
  [1, 305, 187],
  [2, 326, -1, {"name":"ClassBody"}],
  [1, 5, 191],
  [e[16], 192],
  [1, 5, 193],
  [".", 194,
   ";", -1],
  [1, 5, 195],
  [e[16], 196],
  [1, 5, 193],
  [1, 156, 198],
  [1, 5, 199],
  [1, 330, 200],
  [1, 5, 201],
  [2, 335, -1, {"name":"FunctionDef"},
   3, "operator", "=", 202,
   0, 203],
  [1, 5, 204],
  [1, 5, 205],
  [1, 114, 203],
  [",", 206,
   ";", -1],
  [1, 5, 207],
  [1, 330, 208],
  [1, 5, 209],
  [3, "operator", "=", 210,
   0, 211],
  [1, 5, 212],
  [1, 5, 205],
  [1, 114, 211],
  ["{", 214],
  [3, "tag", e[35], 215,
   3, "tag", e[36], 216,
   2, 340, 220, {"name":"doccomment.type","token":"type"}],
  [e[34], 215,
   "{", 217,
   0, 216],
  [[0, /^(?!\}|\*\/)/, /^[^]/], 216,
   0, 220],
  [2, 340, 218, {"name":"doccomment.type","token":"type"}],
  ["}", 219],
  [e[34], 219,
   3, "def", e[37], 216,
   0, 216],
  ["}", -1],
  [3, "tag", e[35], 222,
   3, "tag", e[36], 226],
  [e[34], 222,
   "{", 223,
   0, 226],
  [2, 340, 224, {"name":"doccomment.type","token":"type"}],
  ["}", 225],
  [e[34], 225,
   3, "def", e[37], 226,
   0, 226],
  [0, 227,
   2, 213, 226, {"name":"doccomment.braced"},
   0, -1],
  [e[38], 228],
  [0, 227,
   0, 226],
  [3, "keyword", e[39], 230],
  [1, 5, 231],
  [2, 271, 232, {"name":"TypeArgs"},
   0, 232],
  [1, 5, 233],
  [1, 149, 234,
   3, "type", e[27], 235,
   0, 236,
   3, "type", e[28], 235],
  [1, 5, 233],
  [1, 5, 237],
  [3, "meta", e[40], 238],
  [2, 271, 239, {"name":"TypeArgs"},
   1, 5, 240],
  [0, 236,
   2, 298, 235, {"name":"qualifiedClassName","token":"qualified"}],
  [1, 5, 237],
  ["[", 241,
   2, 266, 242, {"name":"ArgList"},
   0, 242],
  [1, 5, 243],
  [1, 5, 244],
  [1, 114, 245,
   0, 245],
  [2, 326, -1, {"name":"ClassBody"},
   0, -1],
  [1, 5, 246],
  ["]", 247],
  [1, 5, 248],
  [2, 341, -1, {"name":"ArrayInitializer"},
   0, -1],
  [[5, 346], 250,
   [5, 349], 251],
  [3, "def", e[16], 252,
   2, 352, 252, {"name":"ParamList"}],
  [2, 357, 253, {"name":"SimpleParamList"}],
  [1, 5, 254],
  [1, 5, 255],
  [3, "operator", "->", 256],
  [3, "operator", "->", 256],
  [1, 5, 257],
  [2, 145, -1, {"name":"Block"},
   1, 114, -1],
  ["(", 259],
  [1, 5, 260],
  [1, 114, 261,
   0, 261],
  [1, 5, 262],
  [")", -1],
  [3, "type", e[27], -1,
   0, 264,
   3, "type", e[28], -1],
  [3, "meta", e[40], 265],
  [0, 264,
   2, 298, -1, {"name":"qualifiedClassName","token":"qualified"}],
  ["(", 267],
  [1, 5, 268],
  [1, 362, 269],
  [1, 5, 270],
  [")", -1],
  ["<", 272],
  [1, 5, 273],
  [1, 368, 274],
  [1, 5, 275],
  [">", -1],
  ["@", 277],
  [1, 5, 278],
  [e[16], 279],
  [1, 5, 280],
  [".", 281,
   0, -1],
  [1, 5, 282],
  [e[16], 283],
  [1, 5, 280],
  [e[41], 285,
   0, 286,
   0, -1],
  [1, 5, 287],
  [1, 5, 288],
  ["=", 286],
  [1, 149, 289,
   1, 114, 289],
  [1, 5, 290],
  [",", 291,
   0, -1],
  [1, 5, 292],
  [e[41], 293,
   0, 294],
  [1, 5, 295],
  [1, 5, 296],
  ["=", 294],
  [1, 149, 297,
   1, 114, 297],
  [1, 5, 290],
  [3, "type", e[28], -1],
  [1, 149, 300,
   2, 321, 301, {"name":"TypeParams"},
   0, 301],
  [1, 5, 299],
  [1, 5, 302],
  [3, "type", e[27], -1,
   0, 303],
  [3, "meta", e[40], 304,
   3, "type", e[28], -1],
  [1, 5, 303],
  [1, 156, 306,
   0, -1],
  [1, 5, 307],
  [",", 308,
   0, -1],
  [1, 5, 309],
  [1, 156, 310],
  [1, 5, 307],
  ["{", 312],
  [1, 5, 313],
  [1, 385, 314],
  [1, 5, 315],
  [";", 316,
   0, 319],
  [1, 5, 317],
  [2, 403, 318, {"name":"ClassItem"},
   0, 319],
  [1, 5, 317],
  [1, 5, 320],
  ["}", -1],
  ["<", 322],
  [1, 5, 323],
  [1, 410, 324],
  [1, 5, 325],
  [">", -1],
  ["{", 327],
  [1, 5, 328],
  [2, 403, 329, {"name":"ClassItem"},
   "}", -1],
  [1, 5, 328],
  [3, "def", e[16], 331],
  [1, 5, 332],
  ["[", 333,
   0, -1],
  [1, 5, 334],
  ["]", -1],
  [2, 352, 336, {"name":"ParamList"}],
  [1, 5, 337],
  [2, 426, 338, {"name":"ThrowsClause"},
   0, 338],
  [1, 5, 339],
  [";", -1,
   2, 145, -1, {"name":"Block"}],
  [1, 429, -1],
  ["{", 342],
  [1, 5, 343],
  [1, 362, 344],
  [1, 5, 345],
  ["}", -1],
  [3, "def", e[16], 347,
   2, 352, 347, {"name":"ParamList"}],
  [1, 5, 348],
  [3, "operator", "->", -1],
  [2, 357, 350, {"name":"SimpleParamList"}],
  [1, 5, 351],
  [3, "operator", "->", -1],
  ["(", 353],
  [1, 5, 354],
  [1, 433, 355],
  [1, 5, 356],
  [")", -1],
  ["(", 358],
  [1, 5, 359],
  [1, 449, 360],
  [1, 5, 361],
  [")", -1],
  [1, 114, 363,
   0, -1],
  [1, 5, 364],
  [",", 365,
   0, -1],
  [1, 5, 366],
  [1, 114, 367],
  [1, 5, 364],
  [1, 156, 369,
   "?", 370,
   0, -1],
  [1, 5, 371],
  [1, 5, 372],
  [",", 373,
   0, -1],
  [3, "keyword", e[33], 374,
   3, "keyword", e[21], 374,
   0, 369],
  [1, 5, 375],
  [1, 5, 376],
  [1, 156, 377,
   "?", 378],
  [1, 156, 369],
  [1, 5, 371],
  [1, 5, 379],
  [3, "keyword", e[33], 380,
   3, "keyword", e[21], 380,
   0, 377],
  [1, 5, 381],
  [1, 156, 377],
  [e[16], 383],
  [1, 5, 384],
  ["=", -1],
  [1, 149, 386,
   0, 386,
   0, -1],
  [1, 5, 387],
  [3, "def", e[16], 388],
  [1, 5, 389],
  [2, 266, 390, {"name":"ArgList"},
   0, 390],
  [1, 5, 391],
  [2, 145, 392, {"name":"Block"},
   0, 392],
  [1, 5, 393],
  [",", 394,
   0, -1],
  [1, 5, 395],
  [1, 149, 396,
   0, 396],
  [1, 5, 397],
  [3, "def", e[16], 398],
  [1, 5, 399],
  [2, 266, 400, {"name":"ArgList"},
   0, 400],
  [1, 5, 401],
  [2, 145, 402, {"name":"Block"},
   0, 402],
  [1, 5, 393],
  [2, 112, 404, {"name":"BeforeStatement"}],
  [1, 5, 405],
  [2, 321, 406, {"name":"TypeParams"},
   0, 406],
  [1, 5, 407],
  [3, "def", e[42], 408,
   1, 167, -1],
  [1, 5, 409],
  [2, 335, -1, {"name":"FunctionDef"}],
  [1, 149, 411,
   3, "type def", e[16], 412,
   0, -1],
  [1, 5, 410],
  [1, 5, 413],
  [3, "keyword", e[33], 414,
   1, 5, 415],
  [1, 5, 416],
  [",", 417,
   0, -1],
  [1, 156, 418],
  [1, 5, 419],
  [1, 5, 413],
  [1, 149, 420,
   3, "type def", e[16], 421],
  [1, 5, 419],
  [1, 5, 422],
  [3, "keyword", e[33], 423,
   1, 5, 415],
  [1, 5, 424],
  [1, 156, 425],
  [1, 5, 422],
  [3, "keyword", e[43], 427],
  [1, 5, 428],
  [1, 305, -1],
  [/^(?!\}|\*\/)/, 430,
   0, -1],
  ["{", 431,
   /^[^]/, 429],
  [1, 429, 432],
  [/^\}?/, 429],
  [1, 149, 434,
   3, "keyword", e[15], 434,
   1, 149, 434,
   1, 156, 435,
   0, -1],
  [1, 5, 433],
  [1, 5, 436],
  [e[44], 437],
  [1, 5, 438],
  [3, "keyword", e[20], 439,
   1, 330, 439],
  [1, 5, 440],
  [",", 441,
   0, -1],
  [1, 5, 442],
  [1, 149, 443,
   3, "keyword", e[15], 443,
   1, 149, 443,
   1, 156, 444],
  [1, 5, 442],
  [1, 5, 445],
  [e[44], 446],
  [1, 5, 447],
  [3, "keyword", e[20], 448,
   1, 330, 448],
  [1, 5, 440],
  [3, "def", e[16], 450,
   0, -1],
  [1, 5, 451],
  [",", 452,
   0, -1],
  [1, 5, 453],
  [3, "def", e[16], 454],
  [1, 5, 451]
];
var start = 0;
var token = 4;


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
function isLocalType(context, name) {
  for (var cx = context; cx; cx = cx.parent)
    { if (cx.localTypes && cx.localTypes.indexOf(name) > -1) { return true } }
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

var typeRE = /(^|\s)type($|\s)/;

function markTypeLocals(type, scopes, stream, state) {
  if (type == "type def") {
    var scope = getScope(state.context, scopes);
    if (scope) {
      if (!scope.localTypes) { scope.localTypes = []; }
      scope.localTypes.push(stream.current());
    }
  } else if (typeRE.test(type) && !/qualified/.test(type) &&
             isLocalType(state.context, stream.current())) {
    type += " local";
  }
  return type
}

function hasSubStatement(context) {
  var m = /^(if|for|do|while)\b/.exec(context.startLine.slice(context.startPos));
  return m && m[1]
}

function isSwitch(context) {
  return context && context.name == "Statement" &&
    /^switch\b/.test(context.startLine.slice(context.startPos))
}

function isNamespace(context) {
  return context && context.name == "Statement" &&
    /^namespace\b/.test(context.startLine.slice(context.startPos))
}

function isLabel(text) {
  return text && /^\s*(case|default)\b/.test(text)
}

function aligned(cx) {
  return !/^\s*((\/\/.*)?$|.*=>)/.test(cx.startLine.slice(cx.startPos + 1))
}

var bracketed = {
  Block: "}", BlockOf: "}", ClassBody: "}", ObjectLiteral: "}", EnumBody: "}", ArrayInitializer: "}",
  ArrayLiteral: "]",
  ParamList: ")", SimpleParamList: ")", ArgList: ")", ParenExpr: ")", CondExpr: ")", TemplateArgs: ")", ForSpec: ")",
  TypeParams: ">", TypeArgs: ">"
};

function statementIndent(cx, config) {
  for (;; cx = cx.parent) {
    if (!cx) { return 0 }
    if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "NewExpr")
      { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) }
  }
}

function plus(result, add) {
  return typeof result == "number" ? result + add : result
}

function findIndent(cx, textAfter, curLine, config) {
  if (!cx) { return 0 }
  if (cx.name == "string" || cx.name == "comment") { return CodeMirror.Pass }

  var brack = bracketed[cx.name];
  if (brack) {
    var closed = textAfter && textAfter.charAt(0) == brack;
    if (config.align !== false && curLine != cx.startLine && aligned(cx))
      { return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + (closed ? 0 : 1) }

    if (cx.name == "Block" || cx.name == "ClassBody" || cx.name == "BlockOf" || cx.name == "EnumBody") {
      // Skip wrapping statement context
      var skipCx = cx;
      if (cx.parent && cx.parent.name == "Statement" && cx.parent.parent &&
          cx.parent.parent.name == "Statement" && hasSubStatement(cx.parent.parent))
        { skipCx = cx.parent.parent; }
      return statementIndent(skipCx, config) + (
        /^(public|private|protected)\s*:/.test(textAfter) ? 1 :
        closed || isNamespace(cx.parent) ? 0 :
        isSwitch(cx.parent) && !isLabel(textAfter) ? 2 * config.indentUnit
        : config.indentUnit
      )
    }

    var flat = closed && brack != ")" || curLine == cx.startLine && cx.name != "CondExpr";
    return findIndent(cx.parent, closed ? null : textAfter, cx.startLine, config) +
      (flat ? 0 : config.indentUnit * (brack == ")" || brack == ">" ? 2 : 1))
  } else if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem") {
    var base = statementIndent(cx, config);
    if (!curLine && hasSubStatement(cx))
      { return base + (/^else\b/.test(textAfter) ? 0 : config.indentUnit) }
    var flat$1 = curLine == cx.startLine ||
        curLine && CodeMirror.countColumn(curLine, null, config.tabSize) <= base;
    return base + (flat$1 ? 0 : 2 * config.indentUnit)
  } else if (cx.name == "ArrowRest") {
    return plus(findIndent(cx.parent, textAfter, cx.startLine, config), config.indentUnit)
  } else {
    return plus(findIndent(cx.parent, textAfter, curLine, config),
                cx.name == "InitializerList" ? 2 :
                cx.name == "ThrowsClause" && !/throws\s*$/.test(cx.startLine.slice(cx.startPos)) ? 2 * config.indentUnit :
                0)
  }
}

function indent(state, textAfter, line, config) {
  if (textAfter.charAt(0) == "#") { return 0 }
  var top = state.context && state.context.name;
  if (top == "DeclType" || top == "BeforeStatement" || top == "AnnotationHead" || top == "Template")
    { return statementIndent(state.context, config) }
  if ((top == "doccomment.braced" || top == "doccomment.tagGroup") && !/^\s*(@|\*\/)/.test(textAfter))
    { return CodeMirror.countColumn(state.context.startLine, null, config.tabSize) + 2 * config.indentUnit }

  return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, null, config)
}

var scopes = ["Block", "FunctionDef", "Lambda"];
var typeScopes = ["ClassItem", "Statement"];

var JavaMode = (function (superclass) {
  function JavaMode(conf) {
    superclass.call(this, grammar);
    this.indentConf = {align: false, tabSize: conf.tabSize, indentUnit: conf.indentUnit};
  }

  if ( superclass ) JavaMode.__proto__ = superclass;
  JavaMode.prototype = Object.create( superclass && superclass.prototype );
  JavaMode.prototype.constructor = JavaMode;

  JavaMode.prototype.token = function token$$1 (stream, state) {
    return markTypeLocals(markLocals(superclass.prototype.token.call(this, stream, state), scopes, stream, state), typeScopes, stream, state)
  };

  JavaMode.prototype.indent = function indent$1 (state, textAfter, line) {
    return indent(state, textAfter, line, this.indentConf)
  };

  return JavaMode;
}(CodeMirror.GrammarMode));

JavaMode.prototype.electricInput = /^\s*(?:case .*?:|default:|\{\}?|\})$/;
JavaMode.prototype.blockCommentStart = "/*";
JavaMode.prototype.blockCommentEnd = "*/";
JavaMode.prototype.blockCommentContinue = " * ";
JavaMode.prototype.lineComment = "//";
JavaMode.prototype.fold = "brace";

CodeMirror.defineMode("google-java", function (conf) { return new JavaMode(conf); });

})));
