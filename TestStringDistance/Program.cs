using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestStringDistance
{
    class Program
    {
        static void Main(string[] args)
        {

            List<string> x;
            x = new List<string>();
            x.Add("test2");
            x.Add("test");
            var sd = new StringDistance.StringDistance("tes", x);
            foreach(string s in sd.Results)
            {
                Console.WriteLine(s);
            }

            Console.ReadKey();
        }

    }
}
