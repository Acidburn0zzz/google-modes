(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
	typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
	(factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

var e = [/^if(?![a-zA-Z¡-￿_0-9_])/, /^(?:while|elif)(?![a-zA-Z¡-￿_0-9_])/, /^else(?![a-zA-Z¡-￿_0-9_])/, /^(?:try|finally)(?![a-zA-Z¡-￿_0-9_])/, /^for(?![a-zA-Z¡-￿_0-9_])/, /^except(?![a-zA-Z¡-￿_0-9_])/, /^async(?![a-zA-Z¡-￿_0-9_])/, /^in(?![a-zA-Z¡-￿_0-9_])/, /^as(?![a-zA-Z¡-￿_0-9_])/, /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*/, /^with(?![a-zA-Z¡-￿_0-9_])/, /^def(?![a-zA-Z¡-￿_0-9_])/, /^class(?![a-zA-Z¡-￿_0-9_])/, /^(?:pass|break|continue)(?![a-zA-Z¡-￿_0-9_])/, /^del(?![a-zA-Z¡-￿_0-9_])/, /^(?:return|assert)(?![a-zA-Z¡-￿_0-9_])/, /^raise(?![a-zA-Z¡-￿_0-9_])/, /^import(?![a-zA-Z¡-￿_0-9_])/, /^from(?![a-zA-Z¡-￿_0-9_])/, /^(?:global|nonlocal)(?![a-zA-Z¡-￿_0-9_])/, /^[\*\+\-\~]/, /^(?:not|await)(?![a-zA-Z¡-￿_0-9_])/, /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*(?= *(?:\, *[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]* *)*(?:\=|in(?![a-zA-Z¡-￿_0-9_])))/, /^(?:(?:0b|OB)[01_]+|(?:0o|0O)[0-7_]+|(?:0x|OX)[0-9a-fA-F_]+|(?:[0-9][0-9_]*(?:\.[0-9_]+)?|\.[0-9_]+)(?:[eE][\+\-]?[0-9_]+)?[jJ]?)/, /^(?:None|True|False)(?![a-zA-Z¡-￿_0-9_])/, /^self(?![a-zA-Z¡-￿_0-9_])/, /^yield(?![a-zA-Z¡-￿_0-9_])/, /^lambda(?![a-zA-Z¡-￿_0-9_])/, /^(?:abs|all|any|bin|bool|bytearray|callable|chr|classmethod|compile|complex|delattr|dict|dir|divmod|enumerate|eval|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|isinstance|issubclass|iter|len|list|locals|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|vars|zip|__import__|NotImplemented|Ellipsis|__debug__|ascii|bytes|exec|print)(?![a-zA-Z¡-￿_0-9_])/, /^(?:(?:\^|\&|\||\<\<|\>\>|\+|\-|\*\*?|\@|\/|\%|\/)\=?|\=|\<|\>|\=\=|\>\=|\<\=|\<\>|\!\=)/, /^(?:or|and|in|is(?: +not)?|not(?: +in)?)(?![a-zA-Z¡-￿_0-9_])/, /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*(?=\()/, /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*(?= *\=)/, [0, /^[a-zA-Z¡-￿__]/, /^[a-zA-Z¡-￿_0-9_]*/, [7, "isCompLocal"]], /^(?:\*|\*\*)/];
var nodes = [
  [1, 6, 2],
  [/^[^]/, 0],
  [1, 6, 3],
  ["\n", 4,
   2, 8, 4, {"name":"Statement"},
   0, 1],
  [1, 6, 3],
  [3, "keyword", e[0], -1,
   3, "keyword", e[1], -1,
   3, "keyword", e[2], -1,
   3, "keyword", e[3], -1,
   3, "keyword", e[4], -1,
   3, "keyword", e[7], -1,
   3, "keyword", e[8], -1,
   3, "keyword", e[6], -1,
   3, "keyword", e[11], -1,
   3, "keyword", e[5], -1,
   3, "keyword", e[12], -1,
   3, "keyword", e[10], -1,
   3, "keyword", e[27], -1,
   3, "keyword", e[14], -1,
   3, "keyword", e[26], -1,
   3, "keyword", e[16], -1,
   3, "keyword", e[18], -1,
   3, "keyword", e[17], -1,
   3, "keyword", e[13], -1,
   3, "keyword", e[19], -1,
   3, "keyword", e[15], -1,
   3, "keyword", e[21], -1,
   3, "atom", e[24], -1,
   3, "atom", e[25], -1,
   3, "keyword", e[30], -1,
   3, "builtin", e[28], -1,
   3, "operator", e[29], -1,
   3, "operator", e[20], -1,
   3, "number", e[23], -1,
   2, 50, -1, {"name":"string","token":"string"},
   3, "variable", e[9], -1,
   3, "comment", /^\#.*/, -1,
   /^[^]/, -1],
  [/^[ \t]/, 6,
   3, "comment", /^\#.*/, 6,
   "\\\n", 6,
   [0, /^(?=\n)/, [7, "maySkipNewline"]], 7,
   0, -1],
  ["\n", 6],
  [3, "keyword", e[0], 9,
   3, "keyword", e[1], 9,
   3, "keyword", e[2], 15,
   3, "keyword", e[3], 15,
   3, "keyword", e[4], 19,
   3, "keyword", e[5], 29,
   3, "keyword", e[6], 39,
   1, 52, -1,
   2, 65, 41, {"name":"Annotation","token":"meta"},
   1, 73, 45],
  [1, 6, 10],
  [1, 103, 11],
  [1, 6, 12],
  [":", 13],
  [1, 6, 14],
  [1, 110, -1],
  [1, 6, 16],
  [":", 17],
  [1, 6, 18],
  [1, 110, -1],
  [1, 6, 20],
  [1, 116, 21],
  [1, 6, 22],
  [3, "keyword", e[7], 23],
  [1, 6, 24],
  [1, 122, 25],
  [1, 6, 26],
  [":", 27],
  [1, 6, 28],
  [1, 110, -1],
  [1, 6, 30],
  [1, 103, 31],
  [1, 6, 32],
  [3, "keyword", e[8], 33,
   0, 34],
  [1, 6, 35],
  [1, 6, 36],
  [3, "def", e[9], 34],
  [":", 37],
  [1, 6, 38],
  [1, 110, -1],
  [1, 6, 40],
  [1, 52, -1],
  [1, 6, 42],
  [2, 128, 43, {"name":"ArgList"},
   0, 43],
  [1, 6, 44],
  ["\n", -1],
  [1, 6, 46],
  [";", 47,
   "\n", -1],
  [1, 6, 48],
  [1, 73, 49,
   0, 49],
  [1, 6, 46],
  [/^[uUrRfFbB]+(?=[\'\"])/, 51,
   1, 133, -1],
  [1, 133, -1],
  [3, "keyword", e[10], 53,
   3, "keyword", e[11], 59,
   3, "keyword", e[12], 63],
  [1, 6, 54],
  [1, 138, 55],
  [1, 6, 56],
  [":", 57],
  [1, 6, 58],
  [1, 110, -1],
  [1, 6, 60],
  [3, "def", e[9], 61],
  [1, 6, 62],
  [2, 152, -1, {"name":"FuncDef"}],
  [1, 6, 64],
  [2, 161, -1, {"name":"ClassDef"}],
  ["@", 66],
  [1, 6, 67],
  [e[9], 68],
  [1, 6, 69],
  [".", 70,
   0, -1],
  [1, 6, 71],
  [e[9], 72],
  [1, 6, 69],
  [3, "keyword", e[13], -1,
   3, "keyword", e[14], 74,
   3, "keyword", e[15], 76,
   3, "keyword", e[16], 78,
   3, "keyword", e[17], 84,
   3, "keyword", e[18], 86,
   3, "keyword", e[19], 97,
   1, 168, 99,
   1, 122, -1],
  [1, 6, 75],
  [1, 122, -1],
  [1, 6, 77],
  [1, 122, -1,
   0, -1],
  [1, 6, 79],
  [1, 122, 80],
  [1, 6, 81],
  [3, "keyword", e[18], 82,
   0, -1],
  [1, 6, 83],
  [1, 103, -1],
  [1, 6, 85],
  [1, 138, -1],
  [1, 6, 87],
  [".", 88,
   1, 103, 89,
   0, 89],
  [1, 6, 87],
  [1, 6, 90],
  [3, "keyword", e[17], 91],
  [1, 6, 92],
  ["*", -1,
   "(", 93,
   1, 174, -1],
  [1, 6, 94],
  [1, 188, 95,
   0, 95],
  [1, 6, 96],
  [")", -1],
  [1, 6, 98],
  [1, 202, -1],
  [1, 6, 100],
  [3, "operator", "=", 101],
  [1, 6, 102],
  [1, 103, -1],
  [3, "operator", e[20], 104,
   3, "keyword", e[21], 104,
   1, 208, 105],
  [1, 6, 103],
  [1, 6, 106],
  [1, 218, 107,
   3, "keyword", e[7], 108,
   0, -1],
  [1, 6, 106],
  [1, 6, 109],
  [1, 103, 107],
  [1, 73, 111,
   2, 229, -1, {"name":"indentedBody"}],
  [1, 6, 112],
  [";", 113,
   "\n", -1],
  [1, 6, 114],
  [1, 73, 115,
   0, 115],
  [1, 6, 112],
  [3, "def", e[22], 117,
   1, 234, 117],
  [1, 6, 118],
  [",", 119,
   0, -1],
  [1, 6, 120],
  [3, "def", e[22], 121,
   1, 234, 121,
   0, 121],
  [1, 6, 118],
  [1, 103, 123],
  [1, 6, 124],
  [",", 125,
   0, -1],
  [1, 6, 126],
  [1, 103, 127,
   0, 127],
  [1, 6, 124],
  ["(", 129],
  [1, 6, 130],
  [1, 239, 131,
   0, 131],
  [1, 6, 132],
  [")", -1],
  ["'''", 134,
   "\"\"\"", 136,
   /^(?:\'(?:\\.|(?!\').)*\'|\"(?:\\.|(?!\").)*\")/, -1],
  ["\\", 135,
   [0, /^(?!\'\'\')/, /^[^]/], 134,
   "'''", -1],
  [/^[^]/, 134],
  ["\\", 137,
   [0, /^(?!\"\"\")/, /^[^]/], 136,
   "\"\"\"", -1],
  [/^[^]/, 136],
  [1, 103, 139],
  [1, 6, 140],
  [3, "keyword", e[8], 141,
   0, 143],
  [1, 6, 142],
  [3, "def", e[9], 143],
  [1, 6, 144],
  [",", 145,
   0, -1],
  [1, 6, 146],
  [1, 103, 147,
   0, 148],
  [1, 6, 149],
  [1, 6, 144],
  [3, "keyword", e[8], 150,
   0, 148],
  [1, 6, 151],
  [3, "def", e[9], 148],
  [2, 253, 153, {"name":"ParamList"}],
  [1, 6, 154],
  ["->", 155,
   0, 157],
  [1, 6, 156],
  [1, 103, 157],
  [1, 6, 158],
  [":", 159],
  [1, 6, 160],
  [1, 110, -1],
  [3, "def", e[9], 162],
  [1, 6, 163],
  [2, 128, 164, {"name":"ArgList"},
   0, 164],
  [1, 6, 165],
  [":", 166],
  [1, 6, 167],
  [1, 110, -1],
  [3, "def", e[22], 169],
  [1, 6, 170],
  [",", 171,
   0, -1],
  [1, 6, 172],
  [3, "def", e[22], 173,
   0, 173],
  [1, 6, 170],
  [e[9], 175],
  [1, 6, 176],
  [3, "keyword", e[8], 177,
   0, 179],
  [1, 6, 178],
  [3, "def", e[9], 179],
  [1, 6, 180],
  [",", 181,
   0, -1],
  [1, 6, 182],
  [e[9], 183,
   0, 184],
  [1, 6, 185],
  [1, 6, 180],
  [3, "keyword", e[8], 186,
   0, 184],
  [1, 6, 187],
  [3, "def", e[9], 184],
  [e[9], 189],
  [1, 6, 190],
  [3, "keyword", e[8], 191],
  [1, 6, 192],
  [3, "def", e[9], 193,
   0, 193],
  [1, 6, 194],
  [",", 195,
   0, -1],
  [1, 6, 196],
  [e[9], 197,
   0, 198],
  [1, 6, 199],
  [1, 6, 194],
  [3, "keyword", e[8], 200],
  [1, 6, 201],
  [3, "def", e[9], 198,
   0, 198],
  [3, "variable", e[9], 203],
  [1, 6, 204],
  [",", 205,
   0, -1],
  [1, 6, 206],
  [3, "variable", e[9], 207,
   0, 207],
  [1, 6, 204],
  [2, 258, -1, {"name":"ParenExpr"},
   2, 267, -1, {"name":"ArrayLiteral"},
   2, 276, -1, {"name":"ObjectLiteral"},
   3, "number", e[23], -1,
   0, 209,
   3, "operator", "...", -1,
   3, "atom", e[24], -1,
   3, "atom", e[25], -1,
   3, "keyword", e[26], 212,
   3, "keyword", e[27], 216,
   3, "builtin", e[28], -1,
   3, "variable callee", e[31], -1,
   3, "variable", e[9], -1],
  [2, 50, 210, {"name":"string","token":"string"}],
  [1, 6, 211],
  [0, 209,
   0, -1],
  [1, 6, 213],
  [3, "keyword", e[18], 214,
   1, 122, -1,
   0, -1],
  [1, 6, 215],
  [1, 103, -1],
  [1, 6, 217],
  [2, 283, -1, {"name":"LambdaDef"}],
  [3, "operator", e[29], 219,
   3, "keyword", e[30], 219,
   2, 128, -1, {"name":"ArgList"},
   2, 288, -1, {"name":"Subscript"},
   ".", 221,
   3, "keyword", e[0], 223],
  [1, 6, 220],
  [1, 103, -1],
  [1, 6, 222],
  [3, "property callee", e[31], -1,
   3, "property", e[9], -1],
  [1, 6, 224],
  [1, 103, 225],
  [1, 6, 226],
  [3, "keyword", e[2], 227,
   0, -1],
  [1, 6, 228],
  [1, 103, -1],
  ["\n", 230],
  [/^[ \t]/, 230,
   3, "comment", /^\#.*/, 230,
   "\n", 230,
   0, 231],
  [[7, "stillIndented"], 232,
   0, -1],
  [2, 8, 233, {"name":"Statement"}],
  [/^[ \t]/, 233,
   3, "comment", /^\#.*/, 233,
   "\n", 233,
   0, 231],
  [3, "operator", e[20], 235,
   3, "keyword", e[21], 235,
   1, 208, 236],
  [1, 6, 234],
  [1, 6, 237],
  [1, 293, 238,
   0, -1],
  [1, 6, 237],
  [3, "operator", "**", 240,
   3, "meta", e[32], 241,
   0, 240],
  [1, 6, 242],
  [1, 6, 243],
  [1, 103, 244],
  ["=", 240],
  [1, 6, 245],
  [",", 246,
   0, -1],
  [1, 6, 247],
  [3, "operator", "**", 248,
   3, "meta", e[32], 249,
   0, 248,
   0, 250],
  [1, 6, 251],
  [1, 6, 252],
  [1, 6, 245],
  [1, 103, 250],
  ["=", 248],
  ["(", 254],
  [1, 6, 255],
  [1, 304, 256,
   0, 256],
  [1, 6, 257],
  [")", -1],
  ["(", 259],
  [1, 6, 260],
  [3, "variable-2", e[33], 261,
   1, 103, 261,
   0, 265],
  [1, 6, 262],
  [",", 263,
   1, 330, 265,
   0, 265],
  [1, 6, 264],
  [1, 122, 265,
   0, 265],
  [1, 6, 266],
  [")", -1],
  ["[", 268],
  [1, 6, 269],
  [3, "variable-2", e[33], 270,
   1, 103, 270,
   0, 274],
  [1, 6, 271],
  [",", 272,
   1, 330, 274,
   0, 274],
  [1, 6, 273],
  [1, 122, 274,
   0, 274],
  [1, 6, 275],
  ["]", -1],
  ["{", 277],
  [1, 6, 278],
  [1, 341, 279,
   0, 281],
  [1, 6, 280],
  [1, 330, 281,
   0, 281],
  [1, 6, 282],
  ["}", -1],
  [1, 347, 284,
   0, 284],
  [1, 6, 285],
  [":", 286],
  [1, 6, 287],
  [1, 103, -1],
  ["[", 289],
  [1, 6, 290],
  [1, 365, 291],
  [1, 6, 292],
  ["]", -1],
  [3, "operator", e[29], 294,
   3, "keyword", e[30], 294,
   2, 128, -1, {"name":"ArgList"},
   2, 288, -1, {"name":"Subscript"},
   ".", 296,
   3, "keyword", e[0], 298],
  [1, 6, 295],
  [1, 234, -1],
  [1, 6, 297],
  [3, "property callee", e[31], -1,
   3, "property", e[9], -1],
  [1, 6, 299],
  [1, 234, 300],
  [1, 6, 301],
  [3, "keyword", e[2], 302,
   0, -1],
  [1, 6, 303],
  [1, 234, -1],
  [2, 391, 305, {"name":"op","token":"operator"},
   0, 305],
  [1, 6, 306],
  [3, "atom", e[25], 307,
   3, "def", e[9], 307],
  [1, 6, 308],
  [":", 309,
   0, 310],
  [1, 6, 311],
  [1, 6, 312],
  [1, 103, 310],
  [3, "operator", "=", 313,
   0, 315],
  [1, 6, 314],
  [1, 103, 315],
  [1, 6, 316],
  [",", 317,
   0, -1],
  [1, 6, 318],
  [2, 391, 319, {"name":"op","token":"operator"},
   0, 319,
   0, 320],
  [1, 6, 321],
  [1, 6, 316],
  [3, "atom", e[25], 322,
   3, "def", e[9], 322],
  [1, 6, 323],
  [":", 324,
   0, 325],
  [1, 6, 326],
  [1, 6, 327],
  [1, 103, 325],
  [3, "operator", "=", 328,
   0, 320],
  [1, 6, 329],
  [1, 103, 320],
  [3, "keyword", e[6], 331,
   0, 331],
  [1, 6, 332],
  [3, "keyword", e[4], 333],
  [1, 6, 334],
  [1, 116, 335],
  [1, 6, 336],
  [3, "keyword", e[7], 337],
  [1, 6, 338],
  [1, 103, 339],
  [1, 6, 340],
  [1, 330, -1,
   1, 394, -1,
   0, -1],
  [2, 399, 342, {"name":"DictProp"}],
  [1, 6, 343],
  [",", 344,
   0, -1],
  [1, 6, 345],
  [2, 399, 346, {"name":"DictProp"},
   0, 346],
  [1, 6, 343],
  [3, "operator", e[34], 348,
   0, 348],
  [1, 6, 349],
  [3, "def", e[9], 350],
  [1, 6, 351],
  [3, "operator", "=", 352,
   0, 354],
  [1, 6, 353],
  [1, 103, 354],
  [1, 6, 355],
  [",", 356,
   0, -1],
  [1, 6, 357],
  [3, "operator", e[34], 358,
   0, 358,
   0, 359],
  [1, 6, 360],
  [1, 6, 355],
  [3, "def", e[9], 361],
  [1, 6, 362],
  [3, "operator", "=", 363,
   0, 359],
  [1, 6, 364],
  [1, 103, 359],
  [1, 103, 366,
   ":", 367],
  [1, 6, 368],
  [1, 6, 369],
  [":", 370,
   0, 376],
  [1, 103, 371,
   0, 371],
  [1, 6, 372],
  [1, 6, 373],
  [1, 103, 376,
   0, 376],
  [":", 374,
   0, 376],
  [1, 6, 375],
  [1, 103, 376,
   0, 376],
  [1, 6, 377],
  [",", 378,
   0, -1],
  [1, 6, 379],
  [1, 103, 380,
   ":", 381,
   0, 382],
  [1, 6, 383],
  [1, 6, 384],
  [1, 6, 377],
  [":", 385,
   0, 382],
  [1, 103, 386,
   0, 386],
  [1, 6, 387],
  [1, 6, 388],
  [1, 103, 382,
   0, 382],
  [":", 389,
   0, 382],
  [1, 6, 390],
  [1, 103, 382,
   0, 382],
  ["*", 392],
  [1, 6, 393],
  [/^\*?/, -1],
  [3, "keyword", e[0], 395],
  [1, 6, 396],
  [1, 103, 397],
  [1, 6, 398],
  [1, 330, -1,
   1, 394, -1,
   0, -1],
  [3, "operator", "**", 400,
   1, 103, 402],
  [1, 6, 401],
  [1, 103, -1],
  [1, 6, 403],
  [":", 404,
   0, -1],
  [1, 6, 405],
  [1, 103, -1]
];
var start = 0;
var token = 5;


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

var scopes = ["LambdaDef", "FuncDef", "ClassDef"];
var allowNewline = ["ArgList", "ParamList", "ParenExpr", "ArrayLiteral", "ObjectLiteral", "SubScript", "DictProp"];

function maySkipNewline(_line, _pos, cx) {
  return cx && allowNewline.indexOf(cx.name) > -1
}

function countIndent(line, pos) {
  var count = 0;
  for (var i = pos - 1; i >= 0; i--) {
    var ch = line.charCodeAt(i);
    if (ch === 32) { count++; }
    else if (ch === 9) { count += 4; }
    else { break }
  }
  return count
}

function stillIndented(line, pos, cx) {
  while (cx && cx.name != "Statement") { cx = cx.parent; }
  return cx && countIndent(line, pos) > countIndent(cx.startLine, cx.startPos)
}

function isCompLocal(line, pos) {
  var id = /\w*$/.exec(line.slice(0, pos))[0];
  var forDecl = /\s*for\s*(\w+)/.exec(line.slice(pos));
  return forDecl ? forDecl[1] == id : false
}

function aligned(cx) {
  return !/^\s*((#.*)?$)/.test(cx.startLine.slice(cx.startPos + 1))
}

var bracketed = {
  ObjectLiteral: "}",
  ArrayLiteral: "]", SubScript: "]",
  ParamList: ")", ArgList: ")", ParenExpr: ")"
};

function findIndent(cx, textAfter, curLine, config) {
  if (!cx) { return 0 }
  if (cx.name == "string") { return CodeMirror.Pass }

  var brack = bracketed[cx.name];
  if (brack) {
    if (curLine != cx.startLine && aligned(cx))
      { return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + 1 }

    var closed = textAfter && textAfter.charAt(0) == brack;
    var flat = closed && brack == "}" || curLine == cx.startLine;
    return findIndent(cx.parent, closed ? null : textAfter, cx.startLine, config) + (flat ? 0 : 2 * config.indentUnit)
  } else if (cx.name == "indentedBody") {
    for (;; cx = cx.parent) {
      if (!cx) { return config.indentUnit }
      if (cx.name == "Statement") { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) + config.indentUnit }
    }
  } else {
    return findIndent(cx.parent, textAfter, curLine, config) +
      ((cx.name == "DictProp" || cx.name == "Statement") && cx.startLine != curLine ? 2 * config.indentUnit : 0)
  }
}

var PythonMode = (function (superclass) {
  function PythonMode(conf) {
    superclass.call(this, grammar, {
      predicates: {maySkipNewline: maySkipNewline, stillIndented: stillIndented, isCompLocal: isCompLocal}
    });
    this.conf = conf;
  }

  if ( superclass ) PythonMode.__proto__ = superclass;
  PythonMode.prototype = Object.create( superclass && superclass.prototype );
  PythonMode.prototype.constructor = PythonMode;

  PythonMode.prototype.token = function token$$1 (stream, state) {
    return markLocals(superclass.prototype.token.call(this, stream, state), scopes, stream, state, true)
  };

  PythonMode.prototype.indent = function indent (state, textAfter, line) {
    return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, null, this.conf)
  };

  return PythonMode;
}(CodeMirror.GrammarMode));

PythonMode.prototype.electricInput = /^\s*[\}\]\)]$/;
PythonMode.prototype.closeBrackets = {triples: "'\""};
PythonMode.prototype.lineComment = "#";
PythonMode.prototype.fold = "indent";

CodeMirror.defineMode("google-python", function (conf) { return new PythonMode(conf); });

})));
