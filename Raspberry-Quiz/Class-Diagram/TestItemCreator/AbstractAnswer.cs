using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestItemCreator
{
    public class AbstractAnswer
    {
        public string Text { get; set; }
        public bool IsCorrect { get; set; }

        public AbstractAnswer(string text, bool isCorrect)
        {
            this.Text = text;
            this.IsCorrect = isCorrect;

        }
    }
}
