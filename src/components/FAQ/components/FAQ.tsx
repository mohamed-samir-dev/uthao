import QuestionItem from './QuestionItem';
import { QUESTIONS } from '../constants/data';

const FAQ = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full px-3 sm:px-6 py-2 inline-block font-inter text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            FAQ
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-inter px-2">
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className="space-y-3 sm:space-y-4 text-left">
          {QUESTIONS.map((question) => (
            <QuestionItem key={question.id} question={question} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;