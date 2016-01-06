using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace StringDistance
{
    public class StringDistance
    {
        public StringDistance(string input, IEnumerable<string> list)
        {
            dl = new List<larray>();
            foreach(var l in list)
            {
                var la = new larray { s = l, d = Compute(input, l) };
                dl.Add(la);
            }
            Results = dl.OrderBy(m => m.d).Select(m => m.s);
        }
        struct larray
        {
            public string s;
            public int d;
        }
        List<larray> dl;

        public IEnumerable<string> Results { get; set; }


        public static int Compute(string s, string t)
        {
            int n = s.Length;
            int m = t.Length;
            int[,] d = new int[n + 1, m + 1];

            // Step 1
            if (n == 0)
            {
                return m;
            }

            if (m == 0)
            {
                return n;
            }

            // Step 2
            for (int i = 0; i <= n; d[i, 0] = i++)
            {
            }

            for (int j = 0; j <= m; d[0, j] = j++)
            {
            }

            // Step 3
            for (int i = 1; i <= n; i++)
            {
                //Step 4
                for (int j = 1; j <= m; j++)
                {
                    // Step 5
                    int cost = (t[j - 1] == s[i - 1]) ? 0 : 1;

                    // Step 6
                    d[i, j] = Math.Min(
                        Math.Min(d[i - 1, j] + 1, d[i, j - 1] + 1),
                        d[i - 1, j - 1] + cost);
                }
            }
            // Step 7
            return d[n, m];
        }
    }

}



