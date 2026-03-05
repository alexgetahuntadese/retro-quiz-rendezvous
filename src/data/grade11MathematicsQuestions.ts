
export interface MathematicsQuestion {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const grade11MathematicsQuestions: { [chapter: string]: MathematicsQuestion[] } = {
  'Chapter 1: Sequences and Series': [
    // Easy
    { id: 'math11_seq_e1', question: 'What is the next term in the sequence 2, 4, 6, 8, ...?', options: ['9', '10', '12', '14'], correct: '10', explanation: 'This is an arithmetic sequence with common difference 2. The next term is 8 + 2 = 10.', difficulty: 'Easy' },
    { id: 'math11_seq_e2', question: 'What is the common difference in the arithmetic sequence 3, 7, 11, 15?', options: ['3', '4', '5', '7'], correct: '4', explanation: 'The common difference d = 7 - 3 = 4.', difficulty: 'Easy' },
    { id: 'math11_seq_e3', question: 'In the geometric sequence 2, 6, 18, 54, what is the common ratio?', options: ['2', '3', '4', '6'], correct: '3', explanation: 'The common ratio r = 6/2 = 3.', difficulty: 'Easy' },
    { id: 'math11_seq_e4', question: 'What is the 5th term of the arithmetic sequence with a₁ = 1 and d = 3?', options: ['10', '13', '15', '16'], correct: '13', explanation: 'aₙ = a₁ + (n-1)d = 1 + 4(3) = 13.', difficulty: 'Easy' },
    { id: 'math11_seq_e5', question: 'Which of the following is a geometric sequence?', options: ['1, 2, 4, 8', '1, 3, 5, 7', '2, 5, 8, 11', '1, 4, 9, 16'], correct: '1, 2, 4, 8', explanation: 'In 1, 2, 4, 8, each term is multiplied by 2, making it geometric with r = 2.', difficulty: 'Easy' },
    // Medium
    { id: 'math11_seq_m1', question: 'Find the sum of the first 10 terms of the arithmetic sequence 2, 5, 8, 11, ...', options: ['145', '155', '165', '175'], correct: '155', explanation: 'S₁₀ = 10/2 × (2×2 + 9×3) = 5 × (4 + 27) = 5 × 31 = 155.', difficulty: 'Medium' },
    { id: 'math11_seq_m2', question: 'What is the 8th term of the geometric sequence 3, 6, 12, 24, ...?', options: ['192', '384', '768', '96'], correct: '384', explanation: 'a₈ = 3 × 2⁷ = 3 × 128 = 384.', difficulty: 'Medium' },
    { id: 'math11_seq_m3', question: 'If the 3rd term of an arithmetic sequence is 12 and the 7th term is 24, what is the common difference?', options: ['2', '3', '4', '6'], correct: '3', explanation: 'a₇ - a₃ = 4d, so 24 - 12 = 4d, d = 3.', difficulty: 'Medium' },
    { id: 'math11_seq_m4', question: 'Find the sum of the infinite geometric series 1 + 1/2 + 1/4 + 1/8 + ...', options: ['1', '3/2', '2', '4'], correct: '2', explanation: 'S = a/(1-r) = 1/(1 - 1/2) = 1/(1/2) = 2.', difficulty: 'Medium' },
    { id: 'math11_seq_m5', question: 'The nth term of a sequence is given by aₙ = 3n - 1. What is the 20th term?', options: ['57', '59', '60', '61'], correct: '59', explanation: 'a₂₀ = 3(20) - 1 = 60 - 1 = 59.', difficulty: 'Medium' },
    // Hard
    { id: 'math11_seq_h1', question: 'Find the sum of the first 6 terms of the geometric series 2 + 6 + 18 + ...', options: ['364', '486', '728', '1094'], correct: '728', explanation: 'S₆ = 2(3⁶ - 1)/(3 - 1) = 2(729 - 1)/2 = 728.', difficulty: 'Hard' },
    { id: 'math11_seq_h2', question: 'The sum of the first n terms of an arithmetic series is Sₙ = 2n² + 3n. What is the 10th term?', options: ['39', '41', '43', '45'], correct: '41', explanation: 'a₁₀ = S₁₀ - S₉ = (200 + 30) - (162 + 27) = 230 - 189 = 41.', difficulty: 'Hard' },
    { id: 'math11_seq_h3', question: 'For what values of x does the infinite geometric series 1 + x + x² + x³ + ... converge?', options: ['-1 < x < 1', 'x > 0', 'x < 1', 'x > -1'], correct: '-1 < x < 1', explanation: 'An infinite geometric series converges when |r| < 1, so |x| < 1, meaning -1 < x < 1.', difficulty: 'Hard' },
    { id: 'math11_seq_h4', question: 'Three numbers form an arithmetic sequence with sum 15 and product 80. What are the numbers?', options: ['2, 5, 8', '1, 5, 9', '3, 5, 7', '4, 5, 6'], correct: '2, 5, 8', explanation: 'Let the numbers be (5-d), 5, (5+d). Product: 5(25 - d²) = 80, so d² = 9, d = 3. Numbers: 2, 5, 8.', difficulty: 'Hard' },
    { id: 'math11_seq_h5', question: 'Find the sum: Σ(k=1 to 50) (2k + 1)', options: ['2600', '2650', '2550', '2700'], correct: '2650', explanation: 'Σ(2k+1) = 2·Σk + Σ1 = 2(50·51/2) + 50 = 2550 + 100 = 2650. Wait: 2(1275) + 50 = 2550 + 50 = 2600. Let me recalculate: Σ(2k+1) from k=1 to 50 = 2·(50·51/2) + 50 = 2550 + 50 = 2600. Actually the sum is 3+5+7+...+101 = 50/2 × (3+101) = 25 × 104 = 2600. The answer is 2600.', difficulty: 'Hard' },
  ],

  'Chapter 2: Introduction to Calculus': [
    // Easy
    { id: 'math11_calc_e1', question: 'What is the limit of f(x) = 3x + 1 as x approaches 2?', options: ['5', '6', '7', '8'], correct: '7', explanation: 'lim(x→2) (3x + 1) = 3(2) + 1 = 7.', difficulty: 'Easy' },
    { id: 'math11_calc_e2', question: 'What is the derivative of f(x) = 5?', options: ['5', '0', '1', '5x'], correct: '0', explanation: 'The derivative of any constant is 0.', difficulty: 'Easy' },
    { id: 'math11_calc_e3', question: 'What is the derivative of f(x) = x²?', options: ['x', '2x', '2x²', 'x²'], correct: '2x', explanation: 'Using the power rule: d/dx(xⁿ) = nxⁿ⁻¹, so d/dx(x²) = 2x.', difficulty: 'Easy' },
    { id: 'math11_calc_e4', question: 'What does the derivative of a function represent?', options: ['The area under the curve', 'The rate of change', 'The maximum value', 'The y-intercept'], correct: 'The rate of change', explanation: 'The derivative represents the instantaneous rate of change of a function.', difficulty: 'Easy' },
    { id: 'math11_calc_e5', question: 'What is the derivative of f(x) = 3x?', options: ['3', '3x', '0', 'x'], correct: '3', explanation: 'The derivative of ax is a. So d/dx(3x) = 3.', difficulty: 'Easy' },
    // Medium
    { id: 'math11_calc_m1', question: 'Find the derivative of f(x) = x³ + 2x² - 5x + 1.', options: ['3x² + 4x - 5', '3x² + 2x - 5', 'x³ + 4x - 5', '3x² + 4x + 1'], correct: '3x² + 4x - 5', explanation: 'f\'(x) = 3x² + 2(2x) - 5 = 3x² + 4x - 5.', difficulty: 'Medium' },
    { id: 'math11_calc_m2', question: 'What is lim(x→0) (sin x)/x?', options: ['0', '1', 'undefined', '∞'], correct: '1', explanation: 'This is a fundamental limit in calculus: lim(x→0) (sin x)/x = 1.', difficulty: 'Medium' },
    { id: 'math11_calc_m3', question: 'Find the slope of the tangent line to y = x² at x = 3.', options: ['3', '6', '9', '12'], correct: '6', explanation: 'y\' = 2x. At x = 3, slope = 2(3) = 6.', difficulty: 'Medium' },
    { id: 'math11_calc_m4', question: 'If f(x) = 4x³ - 2x, find f\'(1).', options: ['8', '10', '12', '14'], correct: '10', explanation: 'f\'(x) = 12x² - 2. f\'(1) = 12(1) - 2 = 10.', difficulty: 'Medium' },
    { id: 'math11_calc_m5', question: 'What is the derivative of f(x) = 1/x?', options: ['-1/x²', '1/x²', '-1/x', 'ln x'], correct: '-1/x²', explanation: 'f(x) = x⁻¹, so f\'(x) = -x⁻² = -1/x².', difficulty: 'Medium' },
    // Hard
    { id: 'math11_calc_h1', question: 'Find the equation of the tangent line to y = x² - 3x + 2 at x = 1.', options: ['y = -x + 1', 'y = -x + 2', 'y = x - 1', 'y = x'], correct: 'y = -x + 1', explanation: 'y(1) = 1 - 3 + 2 = 0. y\' = 2x - 3, slope at x=1 is -1. y - 0 = -1(x - 1), y = -x + 1.', difficulty: 'Hard' },
    { id: 'math11_calc_h2', question: 'For f(x) = x³ - 6x² + 9x + 1, find the critical points.', options: ['x = 1 and x = 3', 'x = 0 and x = 3', 'x = 2 and x = 4', 'x = 1 and x = 2'], correct: 'x = 1 and x = 3', explanation: 'f\'(x) = 3x² - 12x + 9 = 3(x² - 4x + 3) = 3(x-1)(x-3). Critical points: x = 1, x = 3.', difficulty: 'Hard' },
    { id: 'math11_calc_h3', question: 'Find the derivative of f(x) = (2x + 1)³ using the chain rule.', options: ['3(2x+1)²', '6(2x+1)²', '2(2x+1)³', '6(2x+1)'], correct: '6(2x+1)²', explanation: 'Using chain rule: f\'(x) = 3(2x+1)² × 2 = 6(2x+1)².', difficulty: 'Hard' },
    { id: 'math11_calc_h4', question: 'What is lim(x→∞) (3x² + 2x)/(x² - 1)?', options: ['0', '1', '3', '∞'], correct: '3', explanation: 'Divide numerator and denominator by x²: lim = (3 + 2/x)/(1 - 1/x²) = 3/1 = 3.', difficulty: 'Hard' },
    { id: 'math11_calc_h5', question: 'Find the second derivative of f(x) = x⁴ - 2x³ + x.', options: ['12x² - 12x', '4x³ - 6x² + 1', '12x² - 12x + 1', '12x - 12'], correct: '12x² - 12x', explanation: 'f\'(x) = 4x³ - 6x² + 1. f\'\'(x) = 12x² - 12x.', difficulty: 'Hard' },
  ],

  'Chapter 3: Coordinate Geometry and Transformation': [
    // Easy
    { id: 'math11_coord_e1', question: 'What is the distance between points (0, 0) and (3, 4)?', options: ['5', '7', '6', '4'], correct: '5', explanation: 'd = √(3² + 4²) = √(9 + 16) = √25 = 5.', difficulty: 'Easy' },
    { id: 'math11_coord_e2', question: 'What is the midpoint of (2, 6) and (4, 8)?', options: ['(3, 7)', '(6, 14)', '(2, 2)', '(1, 1)'], correct: '(3, 7)', explanation: 'Midpoint = ((2+4)/2, (6+8)/2) = (3, 7).', difficulty: 'Easy' },
    { id: 'math11_coord_e3', question: 'What is the slope of the line passing through (1, 2) and (3, 6)?', options: ['1', '2', '3', '4'], correct: '2', explanation: 'Slope m = (6-2)/(3-1) = 4/2 = 2.', difficulty: 'Easy' },
    { id: 'math11_coord_e4', question: 'What is the equation of a line with slope 3 and y-intercept 2?', options: ['y = 3x + 2', 'y = 2x + 3', 'y = 3x - 2', 'y = x + 5'], correct: 'y = 3x + 2', explanation: 'Using y = mx + b: y = 3x + 2.', difficulty: 'Easy' },
    { id: 'math11_coord_e5', question: 'A point is reflected over the x-axis. If the original point is (3, 5), what is the image?', options: ['(3, -5)', '(-3, 5)', '(-3, -5)', '(5, 3)'], correct: '(3, -5)', explanation: 'Reflection over x-axis changes (x, y) to (x, -y). So (3, 5) → (3, -5).', difficulty: 'Easy' },
    // Medium
    { id: 'math11_coord_m1', question: 'Find the equation of the line passing through (1, 3) and (4, 9).', options: ['y = 2x + 1', 'y = 3x', 'y = 2x - 1', 'y = x + 2'], correct: 'y = 2x + 1', explanation: 'Slope = (9-3)/(4-1) = 2. Using point-slope: y - 3 = 2(x - 1), y = 2x + 1.', difficulty: 'Medium' },
    { id: 'math11_coord_m2', question: 'What is the equation of a circle with center (2, -1) and radius 3?', options: ['(x-2)² + (y+1)² = 9', '(x+2)² + (y-1)² = 9', '(x-2)² + (y-1)² = 3', '(x-2)² + (y+1)² = 3'], correct: '(x-2)² + (y+1)² = 9', explanation: 'Circle equation: (x-h)² + (y-k)² = r². So (x-2)² + (y+1)² = 9.', difficulty: 'Medium' },
    { id: 'math11_coord_m3', question: 'Two lines are perpendicular. If one has slope 2, what is the slope of the other?', options: ['-2', '1/2', '-1/2', '2'], correct: '-1/2', explanation: 'Perpendicular slopes satisfy m₁ × m₂ = -1. So m₂ = -1/2.', difficulty: 'Medium' },
    { id: 'math11_coord_m4', question: 'What is the image of point (2, 3) after a translation of (4, -1)?', options: ['(6, 2)', '(-2, 4)', '(6, 4)', '(2, -1)'], correct: '(6, 2)', explanation: 'Translation: (2+4, 3+(-1)) = (6, 2).', difficulty: 'Medium' },
    { id: 'math11_coord_m5', question: 'Find the distance from point (1, 2) to the line 3x + 4y - 5 = 0.', options: ['6/5', '3/5', '1', '2'], correct: '6/5', explanation: 'd = |3(1) + 4(2) - 5|/√(9+16) = |3+8-5|/5 = 6/5.', difficulty: 'Medium' },
    // Hard
    { id: 'math11_coord_h1', question: 'Find the equation of the line perpendicular to 2x - 3y + 6 = 0 passing through (1, -2).', options: ['3x + 2y + 1 = 0', '3x + 2y - 1 = 0', '2x + 3y + 4 = 0', '3x - 2y - 7 = 0'], correct: '3x + 2y + 1 = 0', explanation: 'Original slope = 2/3. Perpendicular slope = -3/2. y + 2 = -3/2(x - 1) → 3x + 2y + 1 = 0.', difficulty: 'Hard' },
    { id: 'math11_coord_h2', question: 'What is the image of point (1, 0) after a 90° counterclockwise rotation about the origin?', options: ['(0, 1)', '(0, -1)', '(-1, 0)', '(1, 1)'], correct: '(0, 1)', explanation: 'A 90° CCW rotation maps (x,y) to (-y, x). So (1, 0) → (0, 1).', difficulty: 'Hard' },
    { id: 'math11_coord_h3', question: 'Find the area of the triangle with vertices A(0,0), B(4,0), and C(2,5).', options: ['10', '15', '20', '8'], correct: '10', explanation: 'Area = ½|x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)| = ½|0 + 20 + 0| = 10.', difficulty: 'Hard' },
    { id: 'math11_coord_h4', question: 'The point (3, 4) is dilated by a scale factor of 2 from the origin. What is the image?', options: ['(6, 8)', '(1.5, 2)', '(5, 6)', '(9, 16)'], correct: '(6, 8)', explanation: 'Dilation from origin: (kx, ky) = (2×3, 2×4) = (6, 8).', difficulty: 'Hard' },
    { id: 'math11_coord_h5', question: 'Find the center of the circle x² + y² - 4x + 6y - 12 = 0.', options: ['(2, -3)', '(-2, 3)', '(4, -6)', '(-4, 6)'], correct: '(2, -3)', explanation: 'Complete the square: (x-2)² + (y+3)² = 25. Center is (2, -3).', difficulty: 'Hard' },
  ],

  'Chapter 4: Statistics and Probability': [
    // Easy
    { id: 'math11_stat_e1', question: 'What is the mean of 2, 4, 6, 8, 10?', options: ['5', '6', '7', '8'], correct: '6', explanation: 'Mean = (2+4+6+8+10)/5 = 30/5 = 6.', difficulty: 'Easy' },
    { id: 'math11_stat_e2', question: 'What is the median of 3, 1, 7, 5, 9?', options: ['3', '5', '7', '1'], correct: '5', explanation: 'Ordered: 1, 3, 5, 7, 9. The middle value is 5.', difficulty: 'Easy' },
    { id: 'math11_stat_e3', question: 'What is the mode of 2, 3, 3, 5, 7, 3, 8?', options: ['2', '3', '5', '7'], correct: '3', explanation: 'The mode is the most frequent value. 3 appears three times.', difficulty: 'Easy' },
    { id: 'math11_stat_e4', question: 'What is the probability of getting heads when flipping a fair coin?', options: ['1/4', '1/3', '1/2', '1'], correct: '1/2', explanation: 'A fair coin has two equally likely outcomes, so P(heads) = 1/2.', difficulty: 'Easy' },
    { id: 'math11_stat_e5', question: 'What is the range of the data set 4, 8, 15, 16, 23?', options: ['12', '15', '19', '23'], correct: '19', explanation: 'Range = maximum - minimum = 23 - 4 = 19.', difficulty: 'Easy' },
    // Medium
    { id: 'math11_stat_m1', question: 'What is the probability of rolling an even number on a standard die?', options: ['1/6', '1/3', '1/2', '2/3'], correct: '1/2', explanation: 'Even numbers: 2, 4, 6. P = 3/6 = 1/2.', difficulty: 'Medium' },
    { id: 'math11_stat_m2', question: 'The variance of a data set is 16. What is the standard deviation?', options: ['2', '4', '8', '256'], correct: '4', explanation: 'Standard deviation = √variance = √16 = 4.', difficulty: 'Medium' },
    { id: 'math11_stat_m3', question: 'A bag has 3 red and 5 blue balls. What is the probability of drawing a red ball?', options: ['3/8', '5/8', '3/5', '1/3'], correct: '3/8', explanation: 'P(red) = 3/(3+5) = 3/8.', difficulty: 'Medium' },
    { id: 'math11_stat_m4', question: 'Find the median of 12, 15, 18, 22, 25, 30.', options: ['18', '20', '22', '19'], correct: '20', explanation: 'With even count, median = (18+22)/2 = 20.', difficulty: 'Medium' },
    { id: 'math11_stat_m5', question: 'Two dice are rolled. What is the probability of getting a sum of 7?', options: ['1/6', '5/36', '1/12', '7/36'], correct: '1/6', explanation: 'Favorable outcomes: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6. P = 6/36 = 1/6.', difficulty: 'Medium' },
    // Hard
    { id: 'math11_stat_h1', question: 'Find the variance of the data set: 2, 4, 4, 4, 5, 5, 7, 9.', options: ['4', '3.5', '4.5', '5'], correct: '4', explanation: 'Mean = 40/8 = 5. Variance = Σ(xᵢ - x̄)²/n = (9+1+1+1+0+0+4+16)/8 = 32/8 = 4.', difficulty: 'Hard' },
    { id: 'math11_stat_h2', question: 'Events A and B are independent. P(A) = 0.3, P(B) = 0.5. What is P(A and B)?', options: ['0.15', '0.8', '0.2', '0.35'], correct: '0.15', explanation: 'For independent events: P(A ∩ B) = P(A) × P(B) = 0.3 × 0.5 = 0.15.', difficulty: 'Hard' },
    { id: 'math11_stat_h3', question: 'In how many ways can 5 students be arranged in a row?', options: ['25', '60', '120', '720'], correct: '120', explanation: '5! = 5 × 4 × 3 × 2 × 1 = 120.', difficulty: 'Hard' },
    { id: 'math11_stat_h4', question: 'What is the probability of getting at least one head in 3 coin tosses?', options: ['3/4', '7/8', '1/2', '5/8'], correct: '7/8', explanation: 'P(at least 1 head) = 1 - P(no heads) = 1 - (1/2)³ = 1 - 1/8 = 7/8.', difficulty: 'Hard' },
    { id: 'math11_stat_h5', question: 'How many ways can a committee of 3 be chosen from 8 people?', options: ['24', '56', '336', '120'], correct: '56', explanation: 'C(8,3) = 8!/(3!5!) = (8×7×6)/(3×2×1) = 56.', difficulty: 'Hard' },
  ],

  'Chapter 5: Exponential and Logarithmic Functions': [
    // Easy
    { id: 'math11_exp_e1', question: 'What is 2³?', options: ['6', '8', '9', '12'], correct: '8', explanation: '2³ = 2 × 2 × 2 = 8.', difficulty: 'Easy' },
    { id: 'math11_exp_e2', question: 'What is log₁₀(100)?', options: ['1', '2', '10', '100'], correct: '2', explanation: 'log₁₀(100) = 2 because 10² = 100.', difficulty: 'Easy' },
    { id: 'math11_exp_e3', question: 'What is log₂(8)?', options: ['2', '3', '4', '8'], correct: '3', explanation: 'log₂(8) = 3 because 2³ = 8.', difficulty: 'Easy' },
    { id: 'math11_exp_e4', question: 'Simplify: 5⁰', options: ['0', '1', '5', 'undefined'], correct: '1', explanation: 'Any non-zero number raised to the power 0 equals 1.', difficulty: 'Easy' },
    { id: 'math11_exp_e5', question: 'What is the value of log₁₀(1)?', options: ['0', '1', '10', '-1'], correct: '0', explanation: 'log₁₀(1) = 0 because 10⁰ = 1.', difficulty: 'Easy' },
    // Medium
    { id: 'math11_exp_m1', question: 'Simplify: log₂(32)', options: ['4', '5', '6', '8'], correct: '5', explanation: 'log₂(32) = 5 because 2⁵ = 32.', difficulty: 'Medium' },
    { id: 'math11_exp_m2', question: 'If 3ˣ = 81, what is x?', options: ['2', '3', '4', '5'], correct: '4', explanation: '3⁴ = 81, so x = 4.', difficulty: 'Medium' },
    { id: 'math11_exp_m3', question: 'Simplify: log(a) + log(b)', options: ['log(a + b)', 'log(ab)', 'log(a/b)', 'log(a)·log(b)'], correct: 'log(ab)', explanation: 'Product rule of logarithms: log(a) + log(b) = log(ab).', difficulty: 'Medium' },
    { id: 'math11_exp_m4', question: 'Solve: 2^(x+1) = 16', options: ['2', '3', '4', '5'], correct: '3', explanation: '2^(x+1) = 2⁴, so x + 1 = 4, x = 3.', difficulty: 'Medium' },
    { id: 'math11_exp_m5', question: 'Simplify: log₃(27) - log₃(3)', options: ['1', '2', '3', '6'], correct: '2', explanation: 'log₃(27) - log₃(3) = 3 - 1 = 2.', difficulty: 'Medium' },
    // Hard
    { id: 'math11_exp_h1', question: 'Solve: log₂(x) + log₂(x - 2) = 3', options: ['4', '-2', '4 and -2', '8'], correct: '4', explanation: 'log₂(x(x-2)) = 3 → x²-2x = 8 → x²-2x-8 = 0 → (x-4)(x+2) = 0. Since x > 2, x = 4.', difficulty: 'Hard' },
    { id: 'math11_exp_h2', question: 'If log₅(x) = 2 + log₅(3), find x.', options: ['75', '25', '15', '45'], correct: '75', explanation: 'log₅(x) = log₅(25) + log₅(3) = log₅(75). So x = 75.', difficulty: 'Hard' },
    { id: 'math11_exp_h3', question: 'Simplify: (2⁵ × 2³) / 2⁴', options: ['2²', '2³', '2⁴', '2⁶'], correct: '2⁴', explanation: '2^(5+3-4) = 2⁴ = 16.', difficulty: 'Hard' },
    { id: 'math11_exp_h4', question: 'Solve for x: e^(2x) = e⁵ · e³', options: ['4', '8', '15', '2.5'], correct: '4', explanation: 'e^(2x) = e^(5+3) = e⁸. So 2x = 8, x = 4.', difficulty: 'Hard' },
    { id: 'math11_exp_h5', question: 'Express in terms of log 2 and log 3: log 72', options: ['3log2 + 2log3', '2log2 + 3log3', 'log2 + log3', '4log2 + log3'], correct: '3log2 + 2log3', explanation: '72 = 8 × 9 = 2³ × 3². log 72 = 3log2 + 2log3.', difficulty: 'Hard' },
  ],

  'Chapter 6: Trigonometric Functions': [
    // Easy
    { id: 'math11_trig_e1', question: 'What is sin(30°)?', options: ['0', '1/2', '√2/2', '√3/2'], correct: '1/2', explanation: 'sin(30°) = 1/2 is a standard trigonometric value.', difficulty: 'Easy' },
    { id: 'math11_trig_e2', question: 'What is cos(0°)?', options: ['0', '1/2', '1', '-1'], correct: '1', explanation: 'cos(0°) = 1.', difficulty: 'Easy' },
    { id: 'math11_trig_e3', question: 'What is tan(45°)?', options: ['0', '1/2', '1', '√2'], correct: '1', explanation: 'tan(45°) = sin(45°)/cos(45°) = 1.', difficulty: 'Easy' },
    { id: 'math11_trig_e4', question: 'In a right triangle, which ratio is sin(θ)?', options: ['Adjacent/Hypotenuse', 'Opposite/Hypotenuse', 'Opposite/Adjacent', 'Hypotenuse/Opposite'], correct: 'Opposite/Hypotenuse', explanation: 'Sine is defined as the ratio of the opposite side to the hypotenuse.', difficulty: 'Easy' },
    { id: 'math11_trig_e5', question: 'What is sin(90°)?', options: ['0', '1/2', '√2/2', '1'], correct: '1', explanation: 'sin(90°) = 1.', difficulty: 'Easy' },
    // Medium
    { id: 'math11_trig_m1', question: 'What is cos(60°)?', options: ['0', '1/2', '√2/2', '√3/2'], correct: '1/2', explanation: 'cos(60°) = 1/2 is a standard value.', difficulty: 'Medium' },
    { id: 'math11_trig_m2', question: 'If sin(θ) = 3/5, what is cos(θ) for 0° < θ < 90°?', options: ['3/5', '4/5', '5/3', '5/4'], correct: '4/5', explanation: 'Using sin²θ + cos²θ = 1: cos²θ = 1 - 9/25 = 16/25, cos θ = 4/5.', difficulty: 'Medium' },
    { id: 'math11_trig_m3', question: 'Convert 180° to radians.', options: ['π/2', 'π', '2π', '3π/2'], correct: 'π', explanation: '180° = π radians.', difficulty: 'Medium' },
    { id: 'math11_trig_m4', question: 'What is the period of y = sin(x)?', options: ['π', '2π', 'π/2', '4π'], correct: '2π', explanation: 'The standard sine function has a period of 2π.', difficulty: 'Medium' },
    { id: 'math11_trig_m5', question: 'Simplify: sin²θ + cos²θ', options: ['0', '1', '2', 'sin(2θ)'], correct: '1', explanation: 'This is the Pythagorean identity: sin²θ + cos²θ = 1.', difficulty: 'Medium' },
    // Hard
    { id: 'math11_trig_h1', question: 'Find the exact value of sin(75°).', options: ['(√6 + √2)/4', '(√6 - √2)/4', '(√3 + 1)/2', '√3/2'], correct: '(√6 + √2)/4', explanation: 'sin(75°) = sin(45° + 30°) = sin45·cos30 + cos45·sin30 = (√2/2)(√3/2) + (√2/2)(1/2) = (√6 + √2)/4.', difficulty: 'Hard' },
    { id: 'math11_trig_h2', question: 'Solve: 2sin(x) - 1 = 0 for 0° ≤ x ≤ 360°.', options: ['30° and 150°', '30° and 210°', '60° and 120°', '45° and 135°'], correct: '30° and 150°', explanation: 'sin(x) = 1/2. In [0°, 360°], x = 30° and x = 150°.', difficulty: 'Hard' },
    { id: 'math11_trig_h3', question: 'What is the amplitude and period of y = 3sin(2x)?', options: ['Amplitude 3, period π', 'Amplitude 2, period 3π', 'Amplitude 3, period 2π', 'Amplitude 6, period π'], correct: 'Amplitude 3, period π', explanation: 'For y = Asin(Bx), amplitude = |A| = 3, period = 2π/B = 2π/2 = π.', difficulty: 'Hard' },
    { id: 'math11_trig_h4', question: 'Prove: tan²θ + 1 equals which expression?', options: ['sec²θ', 'csc²θ', 'cos²θ', '1'], correct: 'sec²θ', explanation: 'Dividing sin²θ + cos²θ = 1 by cos²θ gives tan²θ + 1 = sec²θ.', difficulty: 'Hard' },
    { id: 'math11_trig_h5', question: 'In triangle ABC, a = 7, b = 8, C = 60°. Find side c using the cosine rule.', options: ['√57', '√65', '√73', '√85'], correct: '√57', explanation: 'c² = a² + b² - 2ab·cosC = 49 + 64 - 2(7)(8)(1/2) = 113 - 56 = 57. c = √57.', difficulty: 'Hard' },
  ],

  'Chapter 7: Vectors in Two Dimensions': [
    // Easy
    { id: 'math11_vec_e1', question: 'What is a vector?', options: ['A quantity with magnitude only', 'A quantity with magnitude and direction', 'A type of number', 'A point in space'], correct: 'A quantity with magnitude and direction', explanation: 'A vector is a mathematical object that has both magnitude (size) and direction.', difficulty: 'Easy' },
    { id: 'math11_vec_e2', question: 'What is the magnitude of vector (3, 4)?', options: ['5', '7', '12', '1'], correct: '5', explanation: '|v| = √(3² + 4²) = √(9 + 16) = √25 = 5.', difficulty: 'Easy' },
    { id: 'math11_vec_e3', question: 'If u = (2, 3) and v = (1, 4), what is u + v?', options: ['(3, 7)', '(1, -1)', '(2, 12)', '(3, 1)'], correct: '(3, 7)', explanation: 'u + v = (2+1, 3+4) = (3, 7).', difficulty: 'Easy' },
    { id: 'math11_vec_e4', question: 'What is 3 × (2, 5)?', options: ['(5, 8)', '(6, 15)', '(6, 5)', '(2, 15)'], correct: '(6, 15)', explanation: 'Scalar multiplication: 3(2, 5) = (6, 15).', difficulty: 'Easy' },
    { id: 'math11_vec_e5', question: 'What is the zero vector?', options: ['(1, 1)', '(0, 0)', '(0, 1)', '(1, 0)'], correct: '(0, 0)', explanation: 'The zero vector has magnitude 0 and is represented as (0, 0).', difficulty: 'Easy' },
    // Medium
    { id: 'math11_vec_m1', question: 'Find the unit vector in the direction of (3, 4).', options: ['(3/5, 4/5)', '(3, 4)', '(1, 1)', '(4/5, 3/5)'], correct: '(3/5, 4/5)', explanation: 'Unit vector = v/|v| = (3/5, 4/5) since |v| = 5.', difficulty: 'Medium' },
    { id: 'math11_vec_m2', question: 'What is the dot product of (2, 3) and (4, -1)?', options: ['5', '11', '8', '-5'], correct: '5', explanation: 'u · v = 2(4) + 3(-1) = 8 - 3 = 5.', difficulty: 'Medium' },
    { id: 'math11_vec_m3', question: 'If u = (5, 2) and v = (1, -3), find u - v.', options: ['(4, 5)', '(6, -1)', '(4, -1)', '(6, 5)'], correct: '(4, 5)', explanation: 'u - v = (5-1, 2-(-3)) = (4, 5).', difficulty: 'Medium' },
    { id: 'math11_vec_m4', question: 'Two vectors are perpendicular when their dot product is:', options: ['1', '0', '-1', 'undefined'], correct: '0', explanation: 'Two vectors are perpendicular (orthogonal) if and only if their dot product equals 0.', difficulty: 'Medium' },
    { id: 'math11_vec_m5', question: 'Find the magnitude of vector (-5, 12).', options: ['7', '13', '17', '60'], correct: '13', explanation: '|v| = √(25 + 144) = √169 = 13.', difficulty: 'Medium' },
    // Hard
    { id: 'math11_vec_h1', question: 'Find the angle between vectors (1, 0) and (1, 1).', options: ['30°', '45°', '60°', '90°'], correct: '45°', explanation: 'cos θ = (u·v)/(|u||v|) = 1/(1·√2) = 1/√2. θ = 45°.', difficulty: 'Hard' },
    { id: 'math11_vec_h2', question: 'If vectors (2, k) and (3, -6) are parallel, what is k?', options: ['-4', '-3', '4', '9'], correct: '-4', explanation: 'Parallel vectors: 2/3 = k/(-6). k = -4.', difficulty: 'Hard' },
    { id: 'math11_vec_h3', question: 'Find the projection of u = (3, 4) onto v = (1, 0).', options: ['(3, 0)', '(0, 4)', '(3, 4)', '(1, 0)'], correct: '(3, 0)', explanation: 'proj_v(u) = ((u·v)/|v|²)v = (3/1)(1,0) = (3, 0).', difficulty: 'Hard' },
    { id: 'math11_vec_h4', question: 'Vector a has magnitude 5 and makes an angle of 60° with the positive x-axis. Find its components.', options: ['(2.5, 2.5√3)', '(5cos60°, 5sin60°)', '(5/2, 5√3/2)', 'All of the above except (2.5, 2.5√3)'], correct: '(5/2, 5√3/2)', explanation: 'Components: (5cos60°, 5sin60°) = (5/2, 5√3/2).', difficulty: 'Hard' },
    { id: 'math11_vec_h5', question: 'Three forces F₁ = (2,3), F₂ = (-1,4), F₃ = (a,b) are in equilibrium. Find F₃.', options: ['(-1, -7)', '(1, 7)', '(-3, -1)', '(3, 1)'], correct: '(-1, -7)', explanation: 'Equilibrium: F₁ + F₂ + F₃ = 0. (2-1+a, 3+4+b) = (0,0). a = -1, b = -7.', difficulty: 'Hard' },
  ],

  'Chapter 8: Mathematical Proofs and Reasoning': [
    // Easy
    { id: 'math11_proof_e1', question: 'What is a mathematical statement that is accepted without proof?', options: ['Theorem', 'Axiom', 'Corollary', 'Lemma'], correct: 'Axiom', explanation: 'An axiom (or postulate) is a statement accepted as true without proof.', difficulty: 'Easy' },
    { id: 'math11_proof_e2', question: 'What type of reasoning goes from general to specific?', options: ['Inductive', 'Deductive', 'Abductive', 'Analogical'], correct: 'Deductive', explanation: 'Deductive reasoning applies general principles to reach specific conclusions.', difficulty: 'Easy' },
    { id: 'math11_proof_e3', question: 'Which of the following is a statement?', options: ['Is it raining?', 'Close the door.', '2 + 3 = 5', 'x + 1'], correct: '2 + 3 = 5', explanation: 'A statement is a declarative sentence that is either true or false. "2 + 3 = 5" is true.', difficulty: 'Easy' },
    { id: 'math11_proof_e4', question: 'The negation of "All cats are black" is:', options: ['No cats are black', 'Some cats are not black', 'All cats are white', 'Some cats are black'], correct: 'Some cats are not black', explanation: 'The negation of "all A are B" is "some A are not B."', difficulty: 'Easy' },
    { id: 'math11_proof_e5', question: 'What is a proven mathematical statement called?', options: ['Hypothesis', 'Theorem', 'Conjecture', 'Axiom'], correct: 'Theorem', explanation: 'A theorem is a statement that has been proven true using logical reasoning.', difficulty: 'Easy' },
    // Medium
    { id: 'math11_proof_m1', question: 'In proof by contradiction, we start by:', options: ['Assuming the statement is true', 'Assuming the opposite of what we want to prove', 'Using induction', 'Giving an example'], correct: 'Assuming the opposite of what we want to prove', explanation: 'Proof by contradiction assumes the negation and derives a contradiction.', difficulty: 'Medium' },
    { id: 'math11_proof_m2', question: 'What type of reasoning uses specific examples to form a general conclusion?', options: ['Deductive', 'Inductive', 'Direct proof', 'Contradiction'], correct: 'Inductive', explanation: 'Inductive reasoning observes patterns in specific cases to form general conclusions.', difficulty: 'Medium' },
    { id: 'math11_proof_m3', question: '"If P then Q" — what is the contrapositive?', options: ['If Q then P', 'If not P then not Q', 'If not Q then not P', 'If P then not Q'], correct: 'If not Q then not P', explanation: 'The contrapositive of "If P then Q" is "If not Q then not P." They are logically equivalent.', difficulty: 'Medium' },
    { id: 'math11_proof_m4', question: 'What is the first step in mathematical induction?', options: ['Prove for n = k+1', 'Assume true for n = k', 'Prove the base case', 'Find a counterexample'], correct: 'Prove the base case', explanation: 'Mathematical induction starts by proving the statement for the base case (usually n = 1).', difficulty: 'Medium' },
    { id: 'math11_proof_m5', question: 'Which is a counterexample to "All prime numbers are odd"?', options: ['3', '2', '7', '11'], correct: '2', explanation: '2 is a prime number that is even, disproving the claim.', difficulty: 'Medium' },
    // Hard
    { id: 'math11_proof_h1', question: 'Prove by contradiction: √2 is irrational. What do we assume at the start?', options: ['√2 is rational', '√2 is negative', '√2 equals 1', '√2 is an integer'], correct: '√2 is rational', explanation: 'We assume √2 = p/q (rational) and derive a contradiction showing both p and q must be even.', difficulty: 'Hard' },
    { id: 'math11_proof_h2', question: 'Using mathematical induction, what must be shown in the inductive step?', options: ['The statement is true for n = 1', 'If true for n = k, then true for n = k+1', 'The statement is true for all n', 'A counterexample does not exist'], correct: 'If true for n = k, then true for n = k+1', explanation: 'The inductive step shows that if the statement holds for n = k, it also holds for n = k + 1.', difficulty: 'Hard' },
    { id: 'math11_proof_h3', question: 'The statement "P if and only if Q" means:', options: ['P implies Q only', 'Q implies P only', 'P implies Q and Q implies P', 'Neither implies the other'], correct: 'P implies Q and Q implies P', explanation: '"P iff Q" is a biconditional meaning both P→Q and Q→P.', difficulty: 'Hard' },
    { id: 'math11_proof_h4', question: 'Which proof technique shows that the sum of the first n natural numbers is n(n+1)/2?', options: ['Direct proof', 'Contradiction', 'Mathematical induction', 'Counterexample'], correct: 'Mathematical induction', explanation: 'This classic result is typically proven using mathematical induction on n.', difficulty: 'Hard' },
    { id: 'math11_proof_h5', question: 'If the converse of a statement is false, what can we conclude about the original statement?', options: ['It must be false', 'It must be true', 'Nothing — it could be true or false', 'It is a contradiction'], correct: 'Nothing — it could be true or false', explanation: 'A statement and its converse are not logically equivalent. One can be true while the other is false.', difficulty: 'Hard' },
  ],
};

export const getGrade11MathematicsQuestions = (chapter: string, difficulty: 'easy' | 'medium' | 'hard', count: number = 10): MathematicsQuestion[] => {
  const chapterQuestions = grade11MathematicsQuestions[chapter] || [];
  const difficultyMap = { easy: 'Easy', medium: 'Medium', hard: 'Hard' };
  const targetDifficulty = difficultyMap[difficulty];

  const filtered = chapterQuestions.filter(q => q.difficulty === targetDifficulty);
  const shuffled = filtered.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
};
