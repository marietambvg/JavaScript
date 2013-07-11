using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuizSystemGeneral
{
    public class Parser
    {
        public bool Success { get; set; }
        public string Url { get; set; }

        public void ParseObjects() { }
        public List<Test> ParseTests(List<Test> tests) 
        {
            return tests;
        }

        public List<Question> ParseQuestions(List<Question> questions) 
        { 
            return questions; 
        }
        public List<AbstractAnswer> ParseAnswers(List<AbstractAnswer> abstractAnswers) 
        {
            return abstractAnswers;
        }
    }
}
