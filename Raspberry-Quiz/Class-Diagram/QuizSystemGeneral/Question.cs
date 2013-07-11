using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuizSystemGeneral
{
    public class Question
    {
        public string QuestionText { get; set; }
        public string Picture { get; set; }
        public List<CheckBoxAnswer> Answers { get; set; }

        public Question(string questionText, string picture, List<AbstractAnswer> answers)
        {

        }

        public List<CheckBoxAnswer> AddAnswer(CheckBoxAnswer answer)
        {
            this.Answers.Add(answer);
            return this.Answers;
        }

    }
}
