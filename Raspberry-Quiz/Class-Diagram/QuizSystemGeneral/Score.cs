using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuizSystemGeneral
{
    public class Score
    {
        string Name { get; set; }

        int Points { get; set; }

        public Score(string name, int points)
        {
            this.Name = name;
            this.Points = points;
        }
    }
}
