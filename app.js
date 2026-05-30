// ==========================================================================
// Quiz Application State & Initialization
// ==========================================================================

let state = {
  activeTopicId: 1,
  filterType: 'all', // 'all', 'mcq', 'tf'
  questions: [], // filtered list of questions for active topic
  currentIndex: 0,
  userAnswers: {}, // key: question index, value: { selected, isCorrect }
  correctCount: 0,
  incorrectCount: 0,
  theme: 'dark'
};

// Safe Storage Wrapper to handle incognito mode / disabled storage and cross-domain storage pollution
const safeStorage = {
  _data: {},
  getItem(key) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      console.warn("Storage access failed, using in-memory fallback:", e);
      return this._data[key] || null;
    }
  },
  setItem(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      console.warn("Storage access failed, using in-memory fallback:", e);
      this._data[key] = String(value);
    }
  },
  removeItem(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.warn("Storage access failed, using in-memory fallback:", e);
      delete this._data[key];
    }
  }
};

// DOM Cache
const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menuBtn');
const closeSidebarBtn = document.getElementById('closeSidebarBtn');
const topicList = document.getElementById('topicList');
const currentTopicTitle = document.getElementById('currentTopicTitle');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeSunIcon = themeToggleBtn.querySelector('.sun-icon');
const themeMoonIcon = themeToggleBtn.querySelector('.moon-icon');
const quizFilter = document.getElementById('quizFilter');

const statsTracker = document.getElementById('statsTracker');
const progressVal = document.getElementById('progressVal');
const correctVal = document.getElementById('correctVal');
const incorrectVal = document.getElementById('incorrectVal');
const accuracyVal = document.getElementById('accuracyVal');

const quizProgressBar = document.getElementById('quizProgressBar');
const questionCard = document.getElementById('questionCard');
const questionTypeBadge = document.getElementById('questionTypeBadge');
const questionNumberDisplay = document.getElementById('questionNumberDisplay');
const questionText = document.getElementById('questionText');
const mcqOptions = document.getElementById('mcqOptions');
const tfOptions = document.getElementById('tfOptions');
let tfTrueBtn = document.getElementById('tfTrueBtn');
let tfFalseBtn = document.getElementById('tfFalseBtn');
const explanationBox = document.getElementById('explanationBox');
const explanationTitle = document.getElementById('explanationTitle');
const explanationContent = document.getElementById('explanationContent');

const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const resetTopicBtn = document.getElementById('resetTopicBtn');

const resultsContainer = document.getElementById('resultsContainer');
const quizContainer = document.getElementById('quizContainer');
const resultsSubtitle = document.getElementById('resultsSubtitle');
const scoreRingBar = document.getElementById('scoreRingBar');
const scorePercent = document.getElementById('scorePercent');
const scoreRatio = document.getElementById('scoreRatio');
const gradeBadge = document.getElementById('gradeBadge');
const resTotalQ = document.getElementById('resTotalQ');
const resCorrect = document.getElementById('resCorrect');
const resIncorrect = document.getElementById('resIncorrect');
const retryQuizBtn = document.getElementById('retryQuizBtn');
const nextTopicBtn = document.getElementById('nextTopicBtn');
const reviewList = document.getElementById('reviewList');

// ==========================================================================
// Theme & Settings Handlers
// ==========================================================================

function initTheme() {
  try {
    const savedTheme = safeStorage.getItem('quiz-theme') || 'dark';
    setTheme(savedTheme);
  } catch (e) {
    console.error("Error in initTheme:", e);
    setTheme('dark');
  }
}

function setTheme(theme) {
  try {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    safeStorage.setItem('quiz-theme', theme);
    
    if (theme === 'dark') {
      themeSunIcon.style.display = 'block';
      themeMoonIcon.style.display = 'none';
    } else {
      themeSunIcon.style.display = 'none';
      themeMoonIcon.style.display = 'block';
    }
  } catch (e) {
    console.error("Error in setTheme:", e);
  }
}

themeToggleBtn.addEventListener('click', () => {
  setTheme(state.theme === 'dark' ? 'light' : 'dark');
});

// Sidebar Mobile Toggle
menuBtn.addEventListener('click', () => sidebar.classList.add('open'));
closeSidebarBtn.addEventListener('click', () => sidebar.classList.remove('open'));

// ==========================================================================
// Quiz Loading & Filtering
// ==========================================================================

function getQuestionKey(q) {
  if (!q) return '';
  return `${q.type.toLowerCase()}-${q.number}`;
}

function initApp() {
  initTheme();
  if (typeof quizData === 'undefined' || !Array.isArray(quizData) || quizData.length === 0) {
    console.error("Quiz data is not loaded or is empty!");
    currentTopicTitle.textContent = "Error: Quiz data could not be loaded.";
    return;
  }
  renderSidebar();
  loadTopic(state.activeTopicId);
  updateOverallProgress();
}

function renderSidebar() {
  topicList.innerHTML = '';
  quizData.forEach(topic => {
    const item = document.createElement('div');
    item.className = `topic-item ${topic.id === state.activeTopicId ? 'active' : ''}`;
    item.dataset.id = topic.id;
    
    // Retrieve progress based on total unique questions
    const progress = getSavedTopicProgress(topic.id);
    const totalQ = topic.tf.length + topic.mcq.length;
    const answeredCount = progress && progress.userAnswers ? Object.keys(progress.userAnswers).length : 0;
    const percent = totalQ > 0 ? Math.round((answeredCount / totalQ) * 100) : 0;
    
    item.innerHTML = `
      <span class="topic-item-title">${topic.title}</span>
      <span class="topic-item-progress">${percent}% Completed</span>
    `;
    
    item.addEventListener('click', () => {
      sidebar.classList.remove('open');
      loadTopic(topic.id);
    });
    
    topicList.appendChild(item);
  });
}

function loadTopic(topicId) {
  state.activeTopicId = topicId;
  
  // Highlight active sidebar item
  document.querySelectorAll('.topic-item').forEach(item => {
    if (parseInt(item.dataset.id) === topicId) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  const topicData = quizData.find(t => t.id === topicId);
  currentTopicTitle.textContent = topicData.title;
  
  // Build raw list of questions based on filtering
  filterQuestions();
}

function filterQuestions() {
  const topicData = quizData.find(t => t.id === state.activeTopicId);
  let questions = [];

  // MCQs
  const mappedMCQs = topicData.mcq.map(q => ({
    ...q,
    type: 'MCQ'
  }));

  // True/False
  const mappedTFs = topicData.tf.map(q => ({
    ...q,
    type: 'TF'
  }));

  if (state.filterType === 'all') {
    // Interleave/combine: T/F first, then MCQ per structure of PDF
    questions = [...mappedTFs, ...mappedMCQs];
  } else if (state.filterType === 'mcq') {
    questions = mappedMCQs;
  } else if (state.filterType === 'tf') {
    questions = mappedTFs;
  }

  const saved = getSavedTopicProgress(state.activeTopicId);
  if (saved) {
    // Load shared answers
    state.userAnswers = saved.userAnswers || {};
    
    const savedOrder = saved.shuffledOrders && saved.shuffledOrders[state.filterType];
    const savedIndex = saved.currentIndices && saved.currentIndices[state.filterType];
    
    if (savedOrder && savedOrder.length === questions.length) {
      // Reconstruct order
      state.questions = savedOrder.map(item => {
        return questions.find(q => q.type === item.type && q.number === item.number);
      }).filter(Boolean);
      state.currentIndex = typeof savedIndex === 'number' ? savedIndex : 0;
    } else {
      // No saved order for this filter: shuffle a fresh one
      state.questions = shuffleArray([...questions]);
      state.currentIndex = 0;
    }
    recalculateStats();
  } else {
    // Fresh start or reset: shuffle and set index 0
    state.questions = shuffleArray([...questions]);
    state.currentIndex = 0;
    state.userAnswers = {};
    state.correctCount = 0;
    state.incorrectCount = 0;
    if (questions.length > 0) {
      saveTopicProgress();
    }
  }
  
  showQuizOrResults();
}

quizFilter.addEventListener('change', (e) => {
  state.filterType = e.target.value;
  filterQuestions();
});

// ==========================================================================
// Quiz UI Rendering & Navigation
// ==========================================================================

function showQuizOrResults() {
  if (state.questions.length === 0) {
    questionText.textContent = "No questions found matching this filter.";
    mcqOptions.innerHTML = '';
    tfOptions.style.display = 'none';
    nextBtn.disabled = true;
    updateStatsUI();
    return;
  }

  // Check if we are done (currentIndex >= questions.length)
  if (state.currentIndex >= state.questions.length) {
    showResults();
  } else {
    resultsContainer.style.display = 'none';
    quizContainer.style.display = 'flex';
    statsTracker.style.display = 'grid';
    renderQuestion();
  }
}

function renderQuestion() {
  const question = state.questions[state.currentIndex];
  
  // Update progress bar
  const progressPercent = (state.currentIndex / state.questions.length) * 100;
  quizProgressBar.style.width = `${progressPercent}%`;

  // Display badges/info
  questionTypeBadge.textContent = question.type === 'MCQ' ? 'Multiple Choice' : 'True or False';
  questionNumberDisplay.textContent = `Question ${state.currentIndex + 1} of ${state.questions.length}`;
  questionText.textContent = question.question;

  // Reset next and prev buttons
  nextBtn.disabled = true;
  prevBtn.disabled = state.currentIndex === 0;

  // Check if this question was already answered
  const qKey = getQuestionKey(question);
  const previousAnswer = state.userAnswers[qKey];
  if (previousAnswer) {
    showExplanation(previousAnswer.isCorrect, question.explanation);
    nextBtn.disabled = false;
  } else {
    explanationBox.style.display = 'none';
  }

  if (question.type === 'MCQ') {
    tfOptions.style.display = 'none';
    mcqOptions.style.display = 'flex';
    renderMCQOptions(question, previousAnswer);
  } else {
    mcqOptions.style.display = 'none';
    tfOptions.style.display = 'grid';
    renderTFOptions(question, previousAnswer);
  }

  updateStatsUI();
}

function renderMCQOptions(question, previousAnswer) {
  mcqOptions.innerHTML = '';
  
  // MCQ choices from object: A, B, C, D
  ['A', 'B', 'C', 'D'].forEach(letter => {
    const text = question.options[letter];
    if (!text) return; // Skip empty options if any

    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `
      <span class="option-letter">${letter}</span>
      <span class="option-text">${text}</span>
    `;

    // Visual styles for already answered questions
    if (previousAnswer) {
      btn.disabled = true;
      if (letter === question.answer) {
        btn.classList.add('correct');
      } else if (letter === previousAnswer.selected) {
        btn.classList.add('incorrect');
      }
    } else {
      btn.addEventListener('click', () => handleMCQSelection(btn, letter, question));
    }

    mcqOptions.appendChild(btn);
  });
}

function renderTFOptions(question, previousAnswer) {
  // Clear previous states
  tfTrueBtn.className = 'tf-btn';
  tfFalseBtn.className = 'tf-btn';
  tfTrueBtn.disabled = false;
  tfFalseBtn.disabled = false;

  if (previousAnswer) {
    tfTrueBtn.disabled = true;
    tfFalseBtn.disabled = true;

    // Highlight Correct / Incorrect
    if (question.answer === 'T') {
      tfTrueBtn.classList.add('correct');
      if (previousAnswer.selected === 'F') tfFalseBtn.classList.add('incorrect');
    } else {
      tfFalseBtn.classList.add('correct');
      if (previousAnswer.selected === 'T') tfTrueBtn.classList.add('incorrect');
    }
  } else {
    // Rebind clean event listeners
    const newTrue = tfTrueBtn.cloneNode(true);
    const newFalse = tfFalseBtn.cloneNode(true);
    
    tfTrueBtn.parentNode.replaceChild(newTrue, tfTrueBtn);
    tfFalseBtn.parentNode.replaceChild(newFalse, tfFalseBtn);
    
    // Re-cache references
    tfTrueBtn = document.getElementById('tfTrueBtn');
    tfFalseBtn = document.getElementById('tfFalseBtn');

    tfTrueBtn.addEventListener('click', () => handleTFSelection(tfTrueBtn, 'T', question));
    tfFalseBtn.addEventListener('click', () => handleTFSelection(tfFalseBtn, 'F', question));
  }
}

// ==========================================================================
// Answer Selection & Evaluation
// ==========================================================================

function handleMCQSelection(selectedBtn, selectedLetter, question) {
  // Disable all option buttons
  const buttons = mcqOptions.querySelectorAll('.option-btn');
  buttons.forEach(btn => btn.disabled = true);

  const isCorrect = selectedLetter === question.answer;
  
  // Highlight correctness
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    state.correctCount++;
  } else {
    selectedBtn.classList.add('incorrect');
    // Highlight the correct answer too
    buttons.forEach(btn => {
      const letter = btn.querySelector('.option-letter').textContent;
      if (letter === question.answer) {
        btn.classList.add('correct');
      }
    });
    state.incorrectCount++;
  }

  recordAnswer(selectedLetter, isCorrect);
}

function handleTFSelection(selectedBtn, selectedVal, question) {
  tfTrueBtn.disabled = true;
  tfFalseBtn.disabled = true;

  const isCorrect = selectedVal === question.answer;

  if (isCorrect) {
    selectedBtn.classList.add('correct');
    state.correctCount++;
  } else {
    selectedBtn.classList.add('incorrect');
    // Highlight correct button
    if (question.answer === 'T') {
      tfTrueBtn.classList.add('correct');
    } else {
      tfFalseBtn.classList.add('correct');
    }
    state.incorrectCount++;
  }

  recordAnswer(selectedVal, isCorrect);
}

function recordAnswer(selectedVal, isCorrect) {
  const question = state.questions[state.currentIndex];
  const qKey = getQuestionKey(question);
  
  state.userAnswers[qKey] = {
    selected: selectedVal,
    isCorrect: isCorrect
  };

  showExplanation(isCorrect, question.explanation);

  // Enable Next button and update cache
  nextBtn.disabled = false;
  updateStatsUI();
  saveTopicProgress();
}

function showExplanation(isCorrect, explanationText) {
  explanationBox.style.display = 'flex';
  explanationBox.className = `explanation-box ${isCorrect ? 'correct-box' : 'incorrect-box'}`;
  explanationTitle.textContent = isCorrect ? 'Correct Answer Explanation' : 'Incorrect Answer Explanation';
  explanationContent.innerHTML = formatMarkdown(explanationText) || 'No explanation available.';
}

function formatMarkdown(text) {
  if (!text) return '';
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/_(.*?)_/g, '<em>$1</em>');
}

function updateStatsUI() {
  progressVal.textContent = `${state.currentIndex + 1} / ${state.questions.length}`;
  correctVal.textContent = state.correctCount;
  incorrectVal.textContent = state.incorrectCount;
  
  const totalAnswered = state.correctCount + state.incorrectCount;
  const accuracy = totalAnswered > 0 ? Math.round((state.correctCount / totalAnswered) * 100) : 0;
  accuracyVal.textContent = `${accuracy}%`;
}

// Next button handler
nextBtn.addEventListener('click', () => {
  state.currentIndex++;
  saveTopicProgress();
  showQuizOrResults();
});

// Previous button handler
prevBtn.addEventListener('click', () => {
  if (state.currentIndex > 0) {
    state.currentIndex--;
    saveTopicProgress();
    showQuizOrResults();
  }
});

// Reset Topic
resetTopicBtn.addEventListener('click', () => {
  if (confirm("Are you sure you want to reset your progress for this topic?")) {
    state.currentIndex = 0;
    state.userAnswers = {};
    state.correctCount = 0;
    state.incorrectCount = 0;
    clearTopicProgress();
    renderSidebar(); // Update completion text
    updateOverallProgress();
    filterQuestions();
  }
});

// ==========================================================================
// Results Dashboard & Review Panel
// ==========================================================================

function showResults() {
  quizContainer.style.display = 'none';
  statsTracker.style.display = 'none';
  resultsContainer.style.display = 'flex';

  const total = state.questions.length;
  const correct = state.correctCount;
  const incorrect = state.incorrectCount;
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

  // Subtitle custom feedback
  if (accuracy >= 90) {
    resultsSubtitle.textContent = "Outstanding work! You've mastered this topic.";
  } else if (accuracy >= 75) {
    resultsSubtitle.textContent = "Well done! A solid performance, but you can polish a few items.";
  } else {
    resultsSubtitle.textContent = "Keep studying! Try reviewing your incorrect answers below and retry.";
  }

  // Draw accuracy ring
  // Circumference: 2 * PI * r = 2 * 3.14159 * 70 = 439.8
  const offset = 439.8 - (accuracy / 100) * 439.8;
  scoreRingBar.style.strokeDashoffset = offset;
  
  scorePercent.textContent = `${accuracy}%`;
  scoreRatio.textContent = `${correct} / ${total} Correct`;

  // Letter Grade Calculation
  let grade = 'F';
  if (accuracy >= 97) grade = 'A+';
  else if (accuracy >= 93) grade = 'A';
  else if (accuracy >= 90) grade = 'A-';
  else if (accuracy >= 87) grade = 'B+';
  else if (accuracy >= 83) grade = 'B';
  else if (accuracy >= 80) grade = 'B-';
  else if (accuracy >= 77) grade = 'C+';
  else if (accuracy >= 73) grade = 'C';
  else if (accuracy >= 70) grade = 'C-';
  else if (accuracy >= 60) grade = 'D';
  
  gradeBadge.textContent = grade;
  
  // Stats counters
  resTotalQ.textContent = total;
  resCorrect.textContent = correct;
  resIncorrect.textContent = incorrect;

  // Render Detailed Review
  renderReviewList();
  
  // Re-save completed state
  saveTopicProgress();
  renderSidebar();
  updateOverallProgress();
}

function renderReviewList() {
  reviewList.innerHTML = '';
  
  state.questions.forEach((q, idx) => {
    const qKey = getQuestionKey(q);
    const userAns = state.userAnswers[qKey];
    const isCorrect = userAns ? userAns.isCorrect : false;
    const selected = userAns ? userAns.selected : 'Unanswered';
    
    const reviewItem = document.createElement('div');
    reviewItem.className = `review-item ${isCorrect ? 'correct-item' : 'incorrect-item'}`;
    
    let answerDetails = '';
    const formattedExplanation = formatMarkdown(q.explanation);
    if (q.type === 'MCQ') {
      const selectedText = q.options[selected] || selected;
      const correctText = q.options[q.answer] || q.answer;
      answerDetails = `
        <div class="review-ans-row">
          <span class="review-ans-label">Your Answer:</span>
          <span class="review-ans-val ${isCorrect ? 'text-success' : 'text-error'}">(${selected}) ${selectedText}</span>
        </div>
        <div class="review-ans-row">
          <span class="review-ans-label">Correct Answer:</span>
          <span class="review-ans-val text-success">(${q.answer}) ${correctText}</span>
        </div>
        <div class="review-ans-row explanation-row">
          <span class="review-ans-label">Explanation:</span>
          <span class="review-ans-val text-sub">${formattedExplanation}</span>
        </div>
      `;
    } else {
      const selectedText = selected === 'T' ? 'True' : selected === 'F' ? 'False' : selected;
      const correctText = q.answer === 'T' ? 'True' : 'False';
      answerDetails = `
        <div class="review-ans-row">
          <span class="review-ans-label">Your Answer:</span>
          <span class="review-ans-val ${isCorrect ? 'text-success' : 'text-error'}">${selectedText}</span>
        </div>
        <div class="review-ans-row">
          <span class="review-ans-label">Correct Answer:</span>
          <span class="review-ans-val text-success">${correctText}</span>
        </div>
        <div class="review-ans-row explanation-row">
          <span class="review-ans-label">Explanation:</span>
          <span class="review-ans-val text-sub">${formattedExplanation}</span>
        </div>
      `;
    }

    reviewItem.innerHTML = `
      <div class="review-q-header">
        <span class="review-q-num">Question ${idx + 1} (${q.type})</span>
        <span class="review-q-status">${isCorrect ? 'Correct' : 'Incorrect'}</span>
      </div>
      <div class="review-q-text">${q.question}</div>
      <div class="review-answers">
        ${answerDetails}
      </div>
    `;
    
    reviewList.appendChild(reviewItem);
  });
}

// Retry Quiz Button
retryQuizBtn.addEventListener('click', () => {
  state.currentIndex = 0;
  state.userAnswers = {};
  state.correctCount = 0;
  state.incorrectCount = 0;
  clearTopicProgress();
  renderSidebar();
  updateOverallProgress();
  filterQuestions();
});

// Next Topic Navigation
nextTopicBtn.addEventListener('click', () => {
  const currentIdx = quizData.findIndex(t => t.id === state.activeTopicId);
  if (currentIdx !== -1 && currentIdx + 1 < quizData.length) {
    const nextTopicId = quizData[currentIdx + 1].id;
    loadTopic(nextTopicId);
  } else {
    alert("Congratulations! You've completed all topics in this study course!");
  }
});

// ==========================================================================
// LocalStorage Progress Persistence
// ==========================================================================

function getStorageKey(topicId) {
  return `quiz-progress-t${topicId}`;
}

function saveTopicProgress() {
  try {
    const storageKey = getStorageKey(state.activeTopicId);
    const raw = safeStorage.getItem(storageKey);
    let existing = null;
    
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
          existing = parsed;
        }
      } catch (e) {
        console.error("Error parsing existing progress, resetting state:", e);
      }
    }
    
    if (!existing) {
      existing = { shuffledOrders: {}, currentIndices: {}, userAnswers: {} };
    }
    
    if (!existing.shuffledOrders || typeof existing.shuffledOrders !== 'object' || Array.isArray(existing.shuffledOrders)) {
      existing.shuffledOrders = {};
    }
    if (!existing.currentIndices || typeof existing.currentIndices !== 'object' || Array.isArray(existing.currentIndices)) {
      existing.currentIndices = {};
    }
    if (!existing.userAnswers || typeof existing.userAnswers !== 'object' || Array.isArray(existing.userAnswers)) {
      existing.userAnswers = {};
    }

    existing.shuffledOrders[state.filterType] = state.questions.map(q => ({ type: q.type, number: q.number }));
    existing.currentIndices[state.filterType] = state.currentIndex;
    
    existing.userAnswers = { ...existing.userAnswers, ...state.userAnswers };

    safeStorage.setItem(storageKey, JSON.stringify(existing));
  } catch (e) {
    console.error("Error saving topic progress:", e);
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getSavedTopicProgress(topicId) {
  try {
    const storageKey = getStorageKey(topicId);
    const raw = safeStorage.getItem(storageKey);
    if (!raw) return null;
    
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
      return parsed;
    }
    return null;
  } catch (e) {
    console.error("Error loading topic progress:", e);
    return null;
  }
}

function clearTopicProgress() {
  try {
    const storageKey = getStorageKey(state.activeTopicId);
    safeStorage.removeItem(storageKey);
  } catch (e) {
    console.error("Error clearing topic progress:", e);
  }
}

function recalculateStats() {
  state.correctCount = 0;
  state.incorrectCount = 0;
  
  state.questions.forEach(q => {
    const qKey = getQuestionKey(q);
    const ans = state.userAnswers[qKey];
    if (ans) {
      if (ans.isCorrect) {
        state.correctCount++;
      } else {
        state.incorrectCount++;
      }
    }
  });
}

function updateOverallProgress() {
  let grandTotalQ = 0;
  let grandAnswered = 0;

  quizData.forEach(topic => {
    const total = topic.tf.length + topic.mcq.length;
    grandTotalQ += total;

    const progress = getSavedTopicProgress(topic.id);
    if (progress && progress.userAnswers) {
      grandAnswered += Object.keys(progress.userAnswers).length;
    }
  });

  const overallPercent = grandTotalQ > 0 ? Math.round((grandAnswered / grandTotalQ) * 100) : 0;
  const overallProgressBar = document.getElementById('overallProgressBar');
  const overallProgressText = document.getElementById('overallProgressText');
  
  overallProgressBar.style.width = `${overallPercent}%`;
  overallProgressText.textContent = `${overallPercent}% Complete`;
}

// Start application
window.addEventListener('DOMContentLoaded', initApp);
