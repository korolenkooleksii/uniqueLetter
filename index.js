const givenText =
  "The Tao gave birth to machine language.  Machine language gave birth to the assembler. The assembler gave birth to the compiler.  Now there are ten thousand languages. Each language has its purpose, however humble.  Each language expresses the Yin and Yang of software.  Each language has its place within the Tao. But do not program in COBOL if you can avoid it.";

// const givenText = "C makes it easy for you to shoot yourself in the foot. C++ makes that harder, but when you do, it blows away your whole leg. (с) Bjarne Stroustrup";

// const givenText = "c cmakes cit"

const func = (text) => {
  let uniqueLetters = [];
  let uniqueLetter = null;

  const words = text.split(" ");

  words.forEach((word) => {
    const currentWord = word;

    if (!currentWord.length > 0) return;

    if (currentWord.slice(1, currentWord.length).includes(currentWord[0])) {
      return;
    }

    uniqueLetters.push(currentWord[0]);
  });

  for (const letter of uniqueLetters) {
    const fo = uniqueLetters.filter((el) => el === letter);

    if (fo.length === 1) {
      uniqueLetter = letter;

      console.log("Unique letter 🚀  => ", uniqueLetter);

      return;
    }
  }

  if (!uniqueLetter) {
  console.log("No unique letter");
}
};


func(givenText);
