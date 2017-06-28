[meta #include <iostream>]
[meta #include <vector>]
[keyword using] [keyword namespace] [variable std];

[type int] [def main]() {
  [comment // create a vector to store int]
  [type vector]<[type int]> [def vec];
  [type int] [def i];

  [comment // display the original size of vec]
  [variable cout] [operator <<] [string "vector size = "] [operator <<] [variable-2 vec].[builtin size]() [operator <<] [variable endl];

  [comment // push 5 values into the vector]
  [keyword for] ([variable-2 i] [operator =] [number 0]; [variable-2 i] [operator <] [number 5]; [variable-2 i][operator ++]) {
    [variable-2 vec].[builtin push_back]([variable-2 i]);
  }

  [comment // display extended size of vec]
  [variable cout] [operator <<] [string "extended vector size = "] [operator <<] [variable-2 vec].[builtin size]() [operator <<] [variable endl];

  [comment // access 5 values from the vector]
  [keyword for] ([variable-2 i] [operator =] [number 0]; [variable-2 i] [operator <] [number 5]; [variable-2 i][operator ++]) {
    [variable cout] [operator <<] [string "value of vec [["] [operator <<] [variable-2 i] [operator <<] [string "]] = "] [operator <<] [variable-2 vec][[ [variable-2 i] ]] [operator <<] [variable endl];
  }

  [comment // use iterator to access the values]
  [type vector]<[type int]>::[type iterator] [def v] [operator =] [variable-2 vec].[builtin begin]();
  [keyword while] ([variable-2 v] [operator !=] [variable-2 vec].[builtin end]()) {
    [variable cout] [operator <<] [string "value of v = "] [operator <<] [operator *][variable-2 v] [operator <<] [variable endl];
    [variable-2 v][operator ++];
  }

  [keyword return] [number 0];
}
