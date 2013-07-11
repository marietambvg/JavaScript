using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestItemCreator
{
    public class Test
    {
        public string Title { get; set; }
        public List<Question> Questions { get; set; }
        public List<Score> Scoreboard { get; set; }

        public List<Question> AddQuestion(Question question)
        {
            this.Questions.Add(question);
            return this.Questions;
        }

        public List<Score> AddScore(Score score)
        {
            this.Scoreboard.Add(score);
            return this.Scoreboard;
        }
    }
}
