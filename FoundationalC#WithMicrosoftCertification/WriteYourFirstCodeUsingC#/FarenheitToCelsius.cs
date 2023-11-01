using System;

class Program {
  public static void Main (string[] args) {
    int farenheit = 94;
    float FtoC = (farenheit-32F)*(5F/9F);

    Console.WriteLine($"The temperature is {FtoC} celsius.");

    //Otra posible solucion
    decimal celsius = (fahrenheit - 32m) * (5m / 9m);
    Console.WriteLine("The temperature is " + celsius + " Celsius.");
  }
}
