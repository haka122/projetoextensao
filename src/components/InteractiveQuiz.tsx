import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/cyberbullyingData';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Award } from 'lucide-react';

export const InteractiveQuiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (index: number) => {
    if (isSubmitted) return;
    setSelectedOptionIndex(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedOptionIndex === null) return;
    setIsSubmitted(true);
    if (currentQ.options[selectedOptionIndex].isCyberbullying) {
      setScore(s => s + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(i => i + 1);
      setSelectedOptionIndex(null);
      setIsSubmitted(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptionIndex(null);
    setScore(0);
    setIsSubmitted(false);
    setIsCompleted(false);
  };

  return (
    <section id="quiz" className="py-16 bg-[#0A0A0B] text-slate-200 border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 text-red-500 text-xs font-mono uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-red-500" />
            <span>Autoavaliação e Conscientização</span>
          </div>
          <h2 className="font-['Instrument_Serif',serif] italic text-4xl sm:text-5xl text-white tracking-tight">
            Teste Rápido de Identificação
          </h2>
          <p className="mt-2 text-neutral-300 text-sm">
            Responda às questões práticas para testar sua capacidade de reconhecer o cyberbullying e saber como agir legalmente.
          </p>
        </div>

        {/* Quiz Box */}
        <div className="bg-neutral-900 p-6 sm:p-8 border border-neutral-800">
          
          {!isCompleted ? (
            <div>
              {/* Question Indicator */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-800 text-xs font-mono uppercase text-neutral-400">
                <span>Pergunta {currentQuestionIndex + 1} de {QUIZ_QUESTIONS.length}</span>
                <span>Pontuação: {score}</span>
              </div>

              {/* Question Text */}
              <h3 className="font-['Instrument_Serif',serif] italic text-2xl sm:text-3xl text-white mb-6 leading-snug">
                {currentQ.question}
              </h3>

              {/* Options List */}
              <div className="space-y-3 mb-6">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = selectedOptionIndex === idx;
                  let btnStyle = "bg-neutral-950 text-slate-300 border-neutral-800 hover:border-neutral-700";
                  
                  if (isSelected) {
                    btnStyle = "bg-neutral-950 text-white border-red-500 font-bold";
                  }

                  if (isSubmitted) {
                    if (opt.isCyberbullying) {
                      btnStyle = "bg-neutral-950 text-red-400 border-red-600 font-bold";
                    } else if (isSelected && !opt.isCyberbullying) {
                      btnStyle = "bg-neutral-950 text-neutral-400 border-neutral-700 font-bold";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isSubmitted}
                      className={`w-full p-4 border text-left text-xs sm:text-sm transition-all flex items-start gap-3 ${btnStyle}`}
                    >
                      <span className="w-5 h-5 border border-current font-mono flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="leading-relaxed">{opt.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Submitted Feedback Box */}
              {isSubmitted && selectedOptionIndex !== null && (
                <div className={`p-4 mb-6 text-xs leading-relaxed border bg-neutral-950 ${
                  currentQ.options[selectedOptionIndex].isCyberbullying
                    ? 'border-red-600 text-red-300'
                    : 'border-neutral-800 text-neutral-300'
                }`}>
                  <strong className="block font-mono uppercase font-bold mb-1">
                    {currentQ.options[selectedOptionIndex].isCyberbullying ? "Resposta Correta! " : "Atenção: "}
                  </strong>
                  <span>{currentQ.options[selectedOptionIndex].explanation}</span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-neutral-800">
                {!isSubmitted ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={selectedOptionIndex === null}
                    className="px-6 py-3 bg-red-600 hover:bg-red-500 disabled:opacity-50 text-black font-mono font-bold text-xs uppercase tracking-widest transition-all"
                  >
                    Confirmar Resposta
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="px-6 py-3 bg-red-600 hover:bg-red-500 text-black font-mono font-bold text-xs uppercase tracking-widest transition-all"
                  >
                    {currentQuestionIndex < QUIZ_QUESTIONS.length - 1 ? "Próxima Pergunta" : "Ver Resultado"}
                  </button>
                )}
              </div>

            </div>
          ) : (
            /* Completed Screen */
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-red-600 text-black font-black mx-auto flex items-center justify-center">
                <Award className="w-8 h-8 text-black" />
              </div>

              <h3 className="font-['Instrument_Serif',serif] italic text-3xl text-white">
                Quiz Concluído!
              </h3>

              <p className="text-sm text-neutral-300">
                Você acertou <strong className="text-red-500">{score}</strong> de <strong>{QUIZ_QUESTIONS.length}</strong> perguntas sobre conscientização e segurança digital.
              </p>

              <div className="p-4 bg-neutral-950 border border-neutral-800 max-w-md mx-auto text-xs text-neutral-300 leading-relaxed">
                Continue navegando pelo portal para aprofundar seus conhecimentos na Lei nº 14.811/2024 e compartilhe este guia com sua comunidade acadêmica.
              </div>

              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-500 text-black font-mono font-bold text-xs uppercase tracking-widest transition-all mt-4"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Refazer Quiz</span>
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
