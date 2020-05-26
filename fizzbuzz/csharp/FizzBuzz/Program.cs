using System;

namespace FizzBuzz
{
    class Program
    {
        static void Main(string[] args)
        {
            for (int n = 1; n <= 100; n++)
            {
                // if the remainder of n divided by 15 is 0
                if (n % 15 == 0)
                {
                    Console.WriteLine("fizzbuzz");
                }
                else if (n % 3 == 0)
                {
                    Console.WriteLine("fizz");
                }
                else if (n % 5 == 0)
                {
                    Console.WriteLine("buzz");
                }
                else
                {
                    Console.WriteLine(n);
                }
            }
        }


    }
}
