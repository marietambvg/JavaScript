using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuizSystemGeneral
{
    public class CheckBoxAnswer : AbstractAnswer
    {
        public string Name { get; set; }

        public CheckBoxAnswer(string text, bool isCorrect, string name)
            : base(text, isCorrect)
        {
            this.Name = name;
        }

    }
}
