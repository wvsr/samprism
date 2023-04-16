export const codeSnippets = [
  `
  // JavaScript code snippet that calculates the sum of all even numbers from 1 to 100
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
      if (i % 2 === 0) {
          sum += i;
      }
  }
  console.log(sum);
  `,
  `
  // Python code snippet that checks if a string is a palindrome
  def is_palindrome(s):
      return s == s[::-1]

  print(is_palindrome("racecar"))
  `,
  `
  // Java code snippet that finds the maximum number in an array
  int[] numbers = { 3, 7, 1, 8, 4, 2 };
  int max = numbers[0];
  for (int i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
          max = numbers[i];
      }
  }
  System.out.println(max);
  `,
  `
  // Ruby code snippet that generates a random password
  def generate_password(length)
    chars = ("a".."z").to_a + ("A".."Z").to_a + ("0".."9").to_a
    password = ""
    length.times do
      password += chars.sample
    end
    return password
  end

  puts generate_password(8)
  `,
  `
  // C# code snippet that calculates the factorial of a number
  int num = 5;
  int factorial = 1;
  for (int i = 1; i <= num; i++) {
      factorial *= i;
  }
  Console.WriteLine(factorial);
  `,
  `
  // PHP code snippet that reads data from a file and outputs it to the browser
  $file = fopen("data.txt", "r");
  if ($file) {
      while (($line = fgets($file)) !== false) {
          echo $line . "<br>";
      }
      fclose($file);
  }
  `,
  `
  // TypeScript code snippet that finds the longest word in a sentence
  const sentence = "The quick brown fox jumped over the lazy dog";
  const words = sentence.split(" ");
  let longestWord = "";
  for (const word of words) {
      if (word.length > longestWord.length) {
          longestWord = word;
      }
  }
  console.log(longestWord);
  `,
  `
  // Kotlin code snippet that calculates the area of a circle
  fun calculateArea(radius: Double): Double {
      return Math.PI * radius * radius
  }

  val radius = 5.0
  val area = calculateArea(radius)
  println("Area of the circle with radius $radius is $area")
  `,
  `
  // Go code snippet that calculates the sum of the first 50 Fibonacci numbers
  func fibonacci(n int) int {
      if n <= 1 {
          return n
      }
      return fibonacci(n-1) + fibonacci(n-2)
  }

  sum := 0
  for i := 0; i < 50; i++ {
      sum += fibonacci(i)
  }
  fmt.Println(sum)
  `,
]
