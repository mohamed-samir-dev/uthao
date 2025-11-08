"use client";
import { useState } from "react";
import { Question } from '@/types';

interface QuestionItemProps {
  question: Question;
}

const QuestionItem = ({ question }: QuestionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3 sm:px-6 py-3 sm:py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
      >
        <div className="flex items-center space-x-2 sm:space-x-4">
          <span className="bg-blue-600 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">
            {question.id}
          </span>
          <h3 className="text-sm sm:text-lg font-semibold text-gray-900 pr-2">{question.question}</h3>
        </div>
        <span className={`text-xl sm:text-2xl transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      {isOpen && (
        <div className="px-3 sm:px-6 py-3 sm:py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base ml-8 sm:ml-12">{question.answer}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionItem;