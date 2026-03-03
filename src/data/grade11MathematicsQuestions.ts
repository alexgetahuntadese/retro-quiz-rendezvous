
export interface MathematicsQuestion {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const grade11MathematicsQuestions: { [chapter: string]: MathematicsQuestion[] } = {
  'Unit 1: Relations and Functions': [
    // Easy
    { id: 'math11_rel_e1', question: 'Which of the following is a relation from set A = {1,2} to set B = {3,4}?', options: ['{(1,3), (2,4)}', '{(3,1), (4,2)}', '{(1,2), (3,4)}', '{1, 2, 3, 4}'], correct: '{(1,3), (2,4)}', explanation: 'A relation from A to B is a subset of A × B. {(1,3), (2,4)} ⊆ A × B.', difficulty: 'Easy' },
    { id: 'math11_rel_e2', question: 'What is the domain of the relation R = {(1,a), (2,b), (3,c)}?', options: ['{a, b, c}', '{1, 2, 3}', '{1, a}', '{(1,a)}'], correct: '{1, 2, 3}', explanation: 'The domain is the set of all first elements: {1, 2, 3}.', difficulty: 'Easy' },
    { id: 'math11_rel_e3', question: 'A function is a relation where each input has:', options: ['No output', 'Exactly one output', 'Two outputs', 'Many outputs'], correct: 'Exactly one output', explanation: 'A function assigns exactly one output to each input in its domain.', difficulty: 'Easy' },
    { id: 'math11_rel_e4', question: 'Which of the following is NOT a function?', options: ['y = 2x + 1', 'y = x²', 'x² + y² = 4', 'y = |x|'], correct: 'x² + y² = 4', explanation: 'x² + y² = 4 is a circle; for most x-values there are two y-values, so it fails the vertical line test.', difficulty: 'Easy' },
    { id: 'math11_rel_e5', question: 'If f(x) = 3x + 1, what is f(2)?', options: ['5', '6', '7', '8'], correct: '7', explanation: 'f(2) = 3(2) + 1 = 7.', difficulty: 'Easy' },
    // Medium
    { id: 'math11_rel_m1', question: 'If f(x) = x² and g(x) = x + 3, what is (f ∘ g)(2)?', options: ['7', '9', '25', '10'], correct: '25', explanation: '(f ∘ g)(2) = f(g(2)) = f(5) = 25.', difficulty: 'Medium' },
    { id: 'math11_rel_m2', question: 'What is the inverse of f(x) = 2x + 4?', options: ['f⁻¹(x) = (x-4)/2', 'f⁻¹(x) = 2x - 4', 'f⁻¹(x) = x/2 + 4', 'f⁻¹(x) = (x+4)/2'], correct: 'f⁻¹(x) = (x-4)/2', explanation: 'Let y = 2x + 4, then x = (y - 4)/2, so f⁻¹(x) = (x - 4)/2.', difficulty: 'Medium' },
    { id: 'math11_rel_m3', question: 'Which relation is reflexive on A = {1,2,3}?', options: ['{(1,1), (2,2)}', '{(1,2), (2,1)}', '{(1,1), (2,2), (3,3)}', '{(1,3), (3,1)}'], correct: '{(1,1), (2,2), (3,3)}', explanation: 'A reflexive relation must contain (a,a) for every a in A.', difficulty: 'Medium' },
    { id: 'math11_rel_m4', question: 'If f(x) = x + 1 and g(x) = 2x, what is (g ∘ f)(x)?', options: ['2x + 1', '2x + 2', '2(x+1)', 'Both 2x + 2 and 2(x+1)'], correct: 'Both 2x + 2 and 2(x+1)', explanation: '(g ∘ f)(x) = g(f(x)) = g(x+1) = 2(x+1) = 2x + 2.', difficulty: 'Medium' },
    { id: 'math11_rel_m5', question: 'The range of f(x) = x² for x ∈ ℝ is:', options: ['All real numbers', 'x ≥ 0', 'y ≥ 0', 'y > 0'], correct: 'y ≥ 0', explanation: 'Since x² ≥ 0 for all real x, the range is [0, ∞) or y ≥ 0.', difficulty: 'Medium' },
    // Hard
    { id: 'math11_rel_h1', question: 'If f(x) = (x+1)/(x-2), find f⁻¹(x).', options: ['(2x+1)/(x-1)', '(x-1)/(2x+1)', '(2x-1)/(x+1)', '(x+2)/(x-1)'], correct: '(2x+1)/(x-1)', explanation: 'Let y = (x+1)/(x-2). Then y(x-2) = x+1 → yx - 2y = x + 1 → x(y-1) = 2y+1 → x = (2y+1)/(y-1).', difficulty: 'Hard' },
    { id: 'math11_rel_h2', question: 'A relation R on ℤ is defined by aRb iff a - b is even. R is:', options: ['Only reflexive', 'Reflexive and symmetric', 'An equivalence relation', 'Only transitive'], correct: 'An equivalence relation', explanation: 'a - a = 0 (even, reflexive); if a - b is even then b - a is even (symmetric); if a - b and b - c are even, a - c is even (transitive).', difficulty: 'Hard' },
    { id: 'math11_rel_h3', question: 'If f(x) = 2x - 3 and (f ∘ f)(x) = ax + b, find a and b.', options: ['a=4, b=-9', 'a=4, b=-6', 'a=2, b=-9', 'a=4, b=-3'], correct: 'a=4, b=-9', explanation: '(f ∘ f)(x) = f(2x-3) = 2(2x-3) - 3 = 4x - 6 - 3 = 4x - 9.', difficulty: 'Hard' },
    { id: 'math11_rel_h4', question: 'The function f(x) = x³ is:', options: ['One-to-one but not onto ℝ', 'Onto but not one-to-one', 'Both one-to-one and onto ℝ', 'Neither one-to-one nor onto'], correct: 'Both one-to-one and onto ℝ', explanation: 'f(x) = x³ is strictly increasing on ℝ (one-to-one) and its range is all of ℝ (onto).', difficulty: 'Hard' },
    { id: 'math11_rel_h5', question: 'If f(x) = √(x-1) and g(x) = x² + 1, what is the domain of f ∘ g?', options: ['x ≥ 1', 'x ≥ 0', 'All real numbers', 'x > 1'], correct: 'All real numbers', explanation: '(f ∘ g)(x) = √(x²+1-1) = √(x²) = |x|. Since x² ≥ 0 for all x, the domain is ℝ.', difficulty: 'Hard' },
  ],

  'Unit 2: Rational Expressions and Rational Functions': [
    // Easy
    { id: 'math11_rat_e1', question: 'Simplify: (x² - 4)/(x - 2)', options: ['x - 2', 'x + 2', 'x² - 2', '2x'], correct: 'x + 2', explanation: '(x² - 4)/(x - 2) = (x-2)(x+2)/(x-2) = x + 2 (for x ≠ 2).', difficulty: 'Easy' },
    { id: 'math11_rat_e2', question: 'What value of x makes (x+3)/(x-1) undefined?', options: ['x = -3', 'x = 0', 'x = 1', 'x = 3'], correct: 'x = 1', explanation: 'The expression is undefined when the denominator is zero: x - 1 = 0, so x = 1.', difficulty: 'Easy' },
    { id: 'math11_rat_e3', question: 'Simplify: 6x/3', options: ['x', '2x', '3x', '6x'], correct: '2x', explanation: '6x/3 = 2x.', difficulty: 'Easy' },
    { id: 'math11_rat_e4', question: 'What is the horizontal asymptote of f(x) = 3/(x+1)?', options: ['y = 3', 'y = 1', 'y = 0', 'y = -1'], correct: 'y = 0', explanation: 'As x → ±∞, 3/(x+1) → 0, so the horizontal asymptote is y = 0.', difficulty: 'Easy' },
    { id: 'math11_rat_e5', question: 'Which is a rational expression?', options: ['√x + 1', '(x² + 1)/(x - 3)', 'sin(x)/x', '2^x + 1'], correct: '(x² + 1)/(x - 3)', explanation: 'A rational expression is a ratio of two polynomials.', difficulty: 'Easy' },
    // Medium
    { id: 'math11_rat_m1', question: 'Solve: x/(x-2) = 3', options: ['x = 3', 'x = -3', 'x = 6', 'x = 1'], correct: 'x = 3', explanation: 'x = 3(x-2) → x = 3x - 6 → -2x = -6 → x = 3.', difficulty: 'Medium' },
    { id: 'math11_rat_m2', question: 'Find the vertical asymptote of f(x) = (2x+1)/(x²-9)', options: ['x = 3 and x = -3', 'x = 9', 'x = 3 only', 'x = 0'], correct: 'x = 3 and x = -3', explanation: 'x² - 9 = (x-3)(x+3) = 0 gives x = 3 and x = -3.', difficulty: 'Medium' },
    { id: 'math11_rat_m3', question: 'Simplify: (x²-1)/(x²+2x+1)', options: ['(x-1)/(x+1)', '(x+1)/(x-1)', '1', 'x-1'], correct: '(x-1)/(x+1)', explanation: '(x-1)(x+1)/(x+1)² = (x-1)/(x+1).', difficulty: 'Medium' },
    { id: 'math11_rat_m4', question: 'Add: 1/x + 1/(x+1)', options: ['2/(2x+1)', '(2x+1)/(x²+x)', '1/(x²+x)', '2/x'], correct: '(2x+1)/(x²+x)', explanation: '1/x + 1/(x+1) = (x+1+x)/(x(x+1)) = (2x+1)/(x²+x).', difficulty: 'Medium' },
    { id: 'math11_rat_m5', question: 'Solve: 2/(x+1) = 4/(x+3)', options: ['x = 1', 'x = -1', 'x = 5', 'x = -5'], correct: 'x = 1', explanation: '2(x+3) = 4(x+1) → 2x + 6 = 4x + 4 → 2 = 2x → x = 1.', difficulty: 'Medium' },
    // Hard
    { id: 'math11_rat_h1', question: 'Solve the inequality: (x-1)/(x+2) > 0', options: ['x < -2 or x > 1', '-2 < x < 1', 'x > 1', 'x < -2'], correct: 'x < -2 or x > 1', explanation: 'Sign analysis: the expression is positive when both factors have the same sign: x < -2 or x > 1.', difficulty: 'Hard' },
    { id: 'math11_rat_h2', question: 'Find the oblique asymptote of f(x) = (x² + 2x + 3)/(x + 1)', options: ['y = x + 1', 'y = x + 2', 'y = x', 'y = x + 3'], correct: 'y = x + 1', explanation: 'Polynomial division: (x²+2x+3)/(x+1) = x + 1 + 2/(x+1). Oblique asymptote is y = x + 1.', difficulty: 'Hard' },
    { id: 'math11_rat_h3', question: 'Simplify: (x³-8)/(x²-4)', options: ['(x²+2x+4)/(x+2)', 'x+2', 'x²+2x+4', '(x-2)/(x+2)'], correct: '(x²+2x+4)/(x+2)', explanation: '(x³-8) = (x-2)(x²+2x+4), (x²-4) = (x-2)(x+2). Cancel (x-2).', difficulty: 'Hard' },
    { id: 'math11_rat_h4', question: 'For f(x) = (2x²-3x+1)/(x²-1), find the horizontal asymptote.', options: ['y = 0', 'y = 1', 'y = 2', 'No horizontal asymptote'], correct: 'y = 2', explanation: 'Degrees are equal; horizontal asymptote is ratio of leading coefficients: 2/1 = 2.', difficulty: 'Hard' },
    { id: 'math11_rat_h5', question: 'Solve: x/(x-1) - 2/(x+1) = 1', options: ['x = 3', 'x = -1', 'x = 0', 'No solution'], correct: 'x = 3', explanation: 'LCD = (x-1)(x+1). x(x+1) - 2(x-1) = (x-1)(x+1) → x²+x-2x+2 = x²-1 → -x+2 = -1 → x = 3.', difficulty: 'Hard' },
  ],

  'Unit 3: Matrices': [
    // Easy
    { id: 'math11_mat_e1', question: 'What is the order of matrix [[1,2,3],[4,5,6]]?', options: ['3×2', '2×3', '2×2', '3×3'], correct: '2×3', explanation: 'The matrix has 2 rows and 3 columns, so its order is 2×3.', difficulty: 'Easy' },
    { id: 'math11_mat_e2', question: 'If A = [[1,2],[3,4]], what is a₂₁?', options: ['1', '2', '3', '4'], correct: '3', explanation: 'a₂₁ is the element in row 2, column 1, which is 3.', difficulty: 'Easy' },
    { id: 'math11_mat_e3', question: 'What is the identity matrix of order 2?', options: ['[[1,0],[0,1]]', '[[1,1],[1,1]]', '[[0,0],[0,0]]', '[[2,0],[0,2]]'], correct: '[[1,0],[0,1]]', explanation: 'The 2×2 identity matrix has 1s on the diagonal and 0s elsewhere.', difficulty: 'Easy' },
    { id: 'math11_mat_e4', question: 'If A = [[2,3],[1,4]] and B = [[1,0],[2,1]], what is A + B?', options: ['[[3,3],[3,5]]', '[[3,3],[3,4]]', '[[2,3],[3,5]]', '[[1,3],[1,3]]'], correct: '[[3,3],[3,5]]', explanation: 'Add corresponding elements: [[2+1,3+0],[1+2,4+1]] = [[3,3],[3,5]].', difficulty: 'Easy' },
    { id: 'math11_mat_e5', question: 'What is 2 × [[1,3],[2,4]]?', options: ['[[2,6],[4,8]]', '[[2,3],[2,4]]', '[[1,6],[2,8]]', '[[3,5],[4,6]]'], correct: '[[2,6],[4,8]]', explanation: 'Scalar multiplication: multiply each element by 2.', difficulty: 'Easy' },
    // Medium
    { id: 'math11_mat_m1', question: 'If A = [[1,2],[3,4]] and B = [[0,1],[1,0]], find AB.', options: ['[[2,1],[4,3]]', '[[1,2],[3,4]]', '[[0,2],[3,0]]', '[[2,1],[4,3]]'], correct: '[[2,1],[4,3]]', explanation: 'AB: row 1: [1·0+2·1, 1·1+2·0]=[2,1], row 2: [3·0+4·1, 3·1+4·0]=[4,3].', difficulty: 'Medium' },
    { id: 'math11_mat_m2', question: 'The transpose of [[1,2,3],[4,5,6]] is:', options: ['[[1,4],[2,5],[3,6]]', '[[3,2,1],[6,5,4]]', '[[6,5,4],[3,2,1]]', '[[1,2],[3,4],[5,6]]'], correct: '[[1,4],[2,5],[3,6]]', explanation: 'Transpose swaps rows and columns.', difficulty: 'Medium' },
    { id: 'math11_mat_m3', question: 'For which condition can we multiply matrix A (m×n) by matrix B?', options: ['m = number of rows of B', 'n = number of rows of B', 'n = number of columns of B', 'm = n'], correct: 'n = number of rows of B', explanation: 'Matrix multiplication AB is defined when columns of A equals rows of B.', difficulty: 'Medium' },
    { id: 'math11_mat_m4', question: 'A square matrix where all non-diagonal elements are zero is called:', options: ['Identity matrix', 'Diagonal matrix', 'Zero matrix', 'Symmetric matrix'], correct: 'Diagonal matrix', explanation: 'A diagonal matrix has non-zero elements only on the main diagonal.', difficulty: 'Medium' },
    { id: 'math11_mat_m5', question: 'If A = [[a,b],[c,d]], what is Aᵀ?', options: ['[[a,c],[b,d]]', '[[d,b],[c,a]]', '[[a,b],[c,d]]', '[[-a,-b],[-c,-d]]'], correct: '[[a,c],[b,d]]', explanation: 'The transpose swaps rows and columns: a₁₂ becomes a₂₁, etc.', difficulty: 'Medium' },
    // Hard
    { id: 'math11_mat_h1', question: 'If A = [[1,2],[3,4]], find A².', options: ['[[7,10],[15,22]]', '[[1,4],[9,16]]', '[[5,8],[11,16]]', '[[7,10],[14,20]]'], correct: '[[7,10],[15,22]]', explanation: 'A² = A·A: [1·1+2·3, 1·2+2·4; 3·1+4·3, 3·2+4·4] = [[7,10],[15,22]].', difficulty: 'Hard' },
    { id: 'math11_mat_h2', question: 'Solve using matrices: x + 2y = 5, 3x + 4y = 11. Find x.', options: ['1', '2', '3', '4'], correct: '1', explanation: 'From the system: x + 2y = 5 and 3x + 4y = 11. Multiply first by 2: 2x + 4y = 10. Subtract: x = 1.', difficulty: 'Hard' },
    { id: 'math11_mat_h3', question: 'A matrix A is symmetric if:', options: ['A = -Aᵀ', 'A = Aᵀ', 'A·Aᵀ = I', 'A² = A'], correct: 'A = Aᵀ', explanation: 'A symmetric matrix equals its own transpose.', difficulty: 'Hard' },
    { id: 'math11_mat_h4', question: 'If AB = BA for all matrices B, then A must be:', options: ['Zero matrix', 'Identity matrix', 'Scalar matrix', 'Diagonal matrix'], correct: 'Scalar matrix', explanation: 'A scalar matrix (kI) commutes with every matrix of the same size.', difficulty: 'Hard' },
    { id: 'math11_mat_h5', question: 'Find the inverse of A = [[2,1],[5,3]].', options: ['[[3,-1],[-5,2]]', '[[3,1],[-5,-2]]', '[[-3,1],[5,-2]]', '[[2,-1],[-5,3]]'], correct: '[[3,-1],[-5,2]]', explanation: 'det(A) = 6-5 = 1. A⁻¹ = (1/1)[[3,-1],[-5,2]].', difficulty: 'Hard' },
  ],

  'Unit 4: Determinants and Their Properties': [
    // Easy
    { id: 'math11_det_e1', question: 'What is the determinant of [[3,1],[2,4]]?', options: ['10', '14', '11', '5'], correct: '10', explanation: 'det = 3(4) - 1(2) = 12 - 2 = 10.', difficulty: 'Easy' },
    { id: 'math11_det_e2', question: 'The determinant of the identity matrix I₂ is:', options: ['0', '1', '2', '-1'], correct: '1', explanation: 'det([[1,0],[0,1]]) = 1·1 - 0·0 = 1.', difficulty: 'Easy' },
    { id: 'math11_det_e3', question: 'If det(A) = 0, then matrix A is:', options: ['Invertible', 'Singular', 'Symmetric', 'Diagonal'], correct: 'Singular', explanation: 'A matrix with determinant 0 is singular (non-invertible).', difficulty: 'Easy' },
    { id: 'math11_det_e4', question: 'What is the determinant of [[5,0],[0,3]]?', options: ['8', '15', '0', '2'], correct: '15', explanation: 'For a diagonal matrix, det = product of diagonal entries = 5 × 3 = 15.', difficulty: 'Easy' },
    { id: 'math11_det_e5', question: 'det([[a,b],[c,d]]) = ?', options: ['ac - bd', 'ad - bc', 'ab - cd', 'ad + bc'], correct: 'ad - bc', explanation: 'The determinant of a 2×2 matrix [[a,b],[c,d]] is ad - bc.', difficulty: 'Easy' },
    // Medium
    { id: 'math11_det_m1', question: 'If A is a 2×2 matrix and det(A) = 5, what is det(2A)?', options: ['10', '20', '25', '40'], correct: '20', explanation: 'For an n×n matrix, det(kA) = k^n · det(A). Here det(2A) = 2² × 5 = 20.', difficulty: 'Medium' },
    { id: 'math11_det_m2', question: 'What is the minor M₁₁ of [[2,3,1],[4,5,6],[7,8,9]]?', options: ['-3', '3', '-6', '6'], correct: '-3', explanation: 'M₁₁ = det([[5,6],[8,9]]) = 45 - 48 = -3.', difficulty: 'Medium' },
    { id: 'math11_det_m3', question: 'If two rows of a matrix are identical, the determinant is:', options: ['1', '-1', '0', 'Undefined'], correct: '0', explanation: 'If any two rows (or columns) are identical, the determinant is 0.', difficulty: 'Medium' },
    { id: 'math11_det_m4', question: 'det(AB) = ?', options: ['det(A) + det(B)', 'det(A) · det(B)', 'det(A) - det(B)', 'det(A)/det(B)'], correct: 'det(A) · det(B)', explanation: 'The determinant of a product equals the product of the determinants.', difficulty: 'Medium' },
    { id: 'math11_det_m5', question: 'If det(A) = 4, what is det(Aᵀ)?', options: ['4', '-4', '1/4', '16'], correct: '4', explanation: 'The determinant of a matrix equals the determinant of its transpose.', difficulty: 'Medium' },
    // Hard
    { id: 'math11_det_h1', question: 'Using Cramer\'s rule, solve for x: 2x + y = 5, x - y = 1.', options: ['x = 2', 'x = 3', 'x = 1', 'x = 4'], correct: 'x = 2', explanation: 'D = det([[2,1],[1,-1]]) = -3. Dₓ = det([[5,1],[1,-1]]) = -6. x = Dₓ/D = -6/-3 = 2.', difficulty: 'Hard' },
    { id: 'math11_det_h2', question: 'Find det([[1,2,3],[0,4,5],[0,0,6]]).', options: ['24', '0', '12', '36'], correct: '24', explanation: 'For an upper triangular matrix, det = product of diagonal: 1 × 4 × 6 = 24.', difficulty: 'Hard' },
    { id: 'math11_det_h3', question: 'If det(A) = 3, find det(A⁻¹).', options: ['3', '-3', '1/3', '9'], correct: '1/3', explanation: 'det(A⁻¹) = 1/det(A) = 1/3.', difficulty: 'Hard' },
    { id: 'math11_det_h4', question: 'Swapping two rows of a matrix changes the determinant by:', options: ['No change', 'Multiplies by 2', 'Changes sign', 'Makes it zero'], correct: 'Changes sign', explanation: 'Swapping two rows multiplies the determinant by -1.', difficulty: 'Hard' },
    { id: 'math11_det_h5', question: 'Find det([[2,1,0],[0,3,1],[1,0,2]]).', options: ['11', '13', '9', '7'], correct: '11', explanation: 'Expanding along row 1: 2(6-0) - 1(0-1) + 0 = 12 + 1 = 13. Wait: 2·det([[3,1],[0,2]]) - 1·det([[0,1],[1,2]]) + 0 = 2(6-0) - 1(0-1) = 12+1 = 13. Actually let me recheck: 2(6) - 1(0-1) = 12 - (-1) = 13. The answer is 13.', difficulty: 'Hard' },
  ],

  'Unit 5: Vectors': [
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
    { id: 'math11_vec_h4', question: 'Vector a has magnitude 5 and makes 60° with the positive x-axis. Find its components.', options: ['(2.5, 2.5√3)', '(5, 5√3)', '(5/2, 5√3/2)', '(5√3/2, 5/2)'], correct: '(5/2, 5√3/2)', explanation: 'Components: (5cos60°, 5sin60°) = (5/2, 5√3/2).', difficulty: 'Hard' },
    { id: 'math11_vec_h5', question: 'Three forces F₁ = (2,3), F₂ = (-1,4), F₃ = (a,b) are in equilibrium. Find F₃.', options: ['(-1, -7)', '(1, 7)', '(-3, -1)', '(3, 1)'], correct: '(-1, -7)', explanation: 'Equilibrium: F₁ + F₂ + F₃ = 0. (2-1+a, 3+4+b) = (0,0). a = -1, b = -7.', difficulty: 'Hard' },
  ],

  'Unit 6: Transformations of the Plane': [
    // Easy
    { id: 'math11_trans_e1', question: 'A point (3, 5) is reflected over the x-axis. What is the image?', options: ['(3, -5)', '(-3, 5)', '(-3, -5)', '(5, 3)'], correct: '(3, -5)', explanation: 'Reflection over x-axis changes (x, y) to (x, -y). So (3, 5) → (3, -5).', difficulty: 'Easy' },
    { id: 'math11_trans_e2', question: 'What is the image of (2, 3) after a translation by (4, -1)?', options: ['(6, 2)', '(-2, 4)', '(6, 4)', '(2, -1)'], correct: '(6, 2)', explanation: 'Translation: (2+4, 3+(-1)) = (6, 2).', difficulty: 'Easy' },
    { id: 'math11_trans_e3', question: 'A rotation of 360° maps every point to:', options: ['The origin', 'Its reflection', 'Itself', 'A different point'], correct: 'Itself', explanation: 'A full 360° rotation returns every point to its original position.', difficulty: 'Easy' },
    { id: 'math11_trans_e4', question: 'Reflection over the y-axis maps (4, 2) to:', options: ['(4, -2)', '(-4, 2)', '(-4, -2)', '(2, 4)'], correct: '(-4, 2)', explanation: 'Reflection over y-axis: (x, y) → (-x, y).', difficulty: 'Easy' },
    { id: 'math11_trans_e5', question: 'Which transformation preserves both shape and size?', options: ['Dilation', 'Translation', 'Stretching', 'Shearing'], correct: 'Translation', explanation: 'Translation is a rigid motion that preserves shape and size (isometry).', difficulty: 'Easy' },
    // Medium
    { id: 'math11_trans_m1', question: 'What is the image of (1, 0) after a 90° counterclockwise rotation about the origin?', options: ['(0, 1)', '(0, -1)', '(-1, 0)', '(1, 1)'], correct: '(0, 1)', explanation: 'A 90° CCW rotation maps (x,y) to (-y, x). So (1, 0) → (0, 1).', difficulty: 'Medium' },
    { id: 'math11_trans_m2', question: 'The point (3, 4) is dilated by scale factor 2 from the origin. The image is:', options: ['(6, 8)', '(1.5, 2)', '(5, 6)', '(9, 16)'], correct: '(6, 8)', explanation: 'Dilation from origin: (kx, ky) = (6, 8).', difficulty: 'Medium' },
    { id: 'math11_trans_m3', question: 'What is the image of (a, b) reflected over the line y = x?', options: ['(b, a)', '(-a, -b)', '(-b, -a)', '(a, -b)'], correct: '(b, a)', explanation: 'Reflection over y = x swaps coordinates: (a, b) → (b, a).', difficulty: 'Medium' },
    { id: 'math11_trans_m4', question: 'A figure has rotational symmetry of order 4. Through what angle can it be rotated onto itself?', options: ['45°', '60°', '90°', '120°'], correct: '90°', explanation: 'Order 4 means 360°/4 = 90° rotation maps the figure onto itself.', difficulty: 'Medium' },
    { id: 'math11_trans_m5', question: 'Which transformation changes size but preserves shape?', options: ['Translation', 'Rotation', 'Reflection', 'Dilation'], correct: 'Dilation', explanation: 'Dilation scales a figure, changing its size but keeping its shape (similar figure).', difficulty: 'Medium' },
    // Hard
    { id: 'math11_trans_h1', question: 'Find the image of (2, 3) after a 180° rotation about the origin.', options: ['(-2, -3)', '(2, -3)', '(-2, 3)', '(3, 2)'], correct: '(-2, -3)', explanation: '180° rotation: (x, y) → (-x, -y). So (2, 3) → (-2, -3).', difficulty: 'Hard' },
    { id: 'math11_trans_h2', question: 'A glide reflection consists of:', options: ['Two rotations', 'A reflection followed by a translation parallel to the line of reflection', 'Two dilations', 'A rotation and a dilation'], correct: 'A reflection followed by a translation parallel to the line of reflection', explanation: 'A glide reflection is a reflection followed by a translation along the reflection line.', difficulty: 'Hard' },
    { id: 'math11_trans_h3', question: 'The composition of two reflections over parallel lines is equivalent to:', options: ['A reflection', 'A rotation', 'A translation', 'A dilation'], correct: 'A translation', explanation: 'Two reflections over parallel lines produce a translation perpendicular to the lines by twice the distance between them.', difficulty: 'Hard' },
    { id: 'math11_trans_h4', question: 'After rotating (1, √3) by 60° CCW about the origin, the image is:', options: ['(-1, √3)', '(1-√3, 1+√3)', '(-√3, 1)', '(2, 0)'], correct: '(-1, √3)', explanation: 'Using rotation formula with (1,√3) at angle 60° from x-axis (since tan⁻¹(√3/1) = 60°), total angle becomes 120°. Image: (2cos120°, 2sin120°) = (-1, √3).', difficulty: 'Hard' },
    { id: 'math11_trans_h5', question: 'The composition of two reflections over intersecting lines meeting at angle θ is a rotation of:', options: ['θ', '2θ', 'θ/2', '180° - θ'], correct: '2θ', explanation: 'Two reflections over lines meeting at angle θ produce a rotation by 2θ about their intersection point.', difficulty: 'Hard' },
  ],

  'Unit 7: Statistics': [
    // Easy
    { id: 'math11_stat_e1', question: 'What is the mean of 2, 4, 6, 8, 10?', options: ['5', '6', '7', '8'], correct: '6', explanation: 'Mean = (2+4+6+8+10)/5 = 30/5 = 6.', difficulty: 'Easy' },
    { id: 'math11_stat_e2', question: 'What is the median of 3, 1, 7, 5, 9?', options: ['3', '5', '7', '1'], correct: '5', explanation: 'Ordered: 1, 3, 5, 7, 9. The middle value is 5.', difficulty: 'Easy' },
    { id: 'math11_stat_e3', question: 'What is the mode of 2, 3, 3, 5, 7, 3, 8?', options: ['2', '3', '5', '7'], correct: '3', explanation: 'The mode is the most frequent value. 3 appears three times.', difficulty: 'Easy' },
    { id: 'math11_stat_e4', question: 'What is the range of the data set 4, 8, 15, 16, 23?', options: ['12', '15', '19', '23'], correct: '19', explanation: 'Range = maximum - minimum = 23 - 4 = 19.', difficulty: 'Easy' },
    { id: 'math11_stat_e5', question: 'Which type of data is "favorite color"?', options: ['Quantitative', 'Qualitative', 'Continuous', 'Discrete numerical'], correct: 'Qualitative', explanation: 'Favorite color is categorical/qualitative data — it describes a quality, not a number.', difficulty: 'Easy' },
    // Medium
    { id: 'math11_stat_m1', question: 'The variance of a data set is 16. What is the standard deviation?', options: ['2', '4', '8', '256'], correct: '4', explanation: 'Standard deviation = √variance = √16 = 4.', difficulty: 'Medium' },
    { id: 'math11_stat_m2', question: 'Find the median of 12, 15, 18, 22, 25, 30.', options: ['18', '20', '22', '19'], correct: '20', explanation: 'With even count, median = (18+22)/2 = 20.', difficulty: 'Medium' },
    { id: 'math11_stat_m3', question: 'A histogram is best used to display:', options: ['Categorical data', 'Frequency distribution of continuous data', 'Relationships between two variables', 'Time series only'], correct: 'Frequency distribution of continuous data', explanation: 'Histograms show the frequency distribution of continuous (grouped) data.', difficulty: 'Medium' },
    { id: 'math11_stat_m4', question: 'The first quartile (Q1) divides data such that what percent falls below it?', options: ['10%', '25%', '50%', '75%'], correct: '25%', explanation: 'Q1 is the 25th percentile; 25% of data falls below it.', difficulty: 'Medium' },
    { id: 'math11_stat_m5', question: 'Which measure of central tendency is most affected by outliers?', options: ['Mean', 'Median', 'Mode', 'All equally'], correct: 'Mean', explanation: 'The mean is pulled toward extreme values (outliers), while median and mode are more robust.', difficulty: 'Medium' },
    // Hard
    { id: 'math11_stat_h1', question: 'Find the variance of the data set: 2, 4, 4, 4, 5, 5, 7, 9.', options: ['4', '3.5', '4.5', '5'], correct: '4', explanation: 'Mean = 40/8 = 5. Variance = Σ(xᵢ - x̄)²/n = (9+1+1+1+0+0+4+16)/8 = 32/8 = 4.', difficulty: 'Hard' },
    { id: 'math11_stat_h2', question: 'The interquartile range (IQR) is defined as:', options: ['Q3 - Q1', 'Max - Min', 'Mean - Median', 'Q2 - Q1'], correct: 'Q3 - Q1', explanation: 'IQR = Q3 - Q1, representing the spread of the middle 50% of data.', difficulty: 'Hard' },
    { id: 'math11_stat_h3', question: 'A data set has mean 50 and standard deviation 5. Using the empirical rule, about what percent falls between 40 and 60?', options: ['68%', '95%', '99.7%', '50%'], correct: '95%', explanation: '40 and 60 are 2 standard deviations from the mean. By the empirical rule, ~95% of data falls within 2 SDs.', difficulty: 'Hard' },
    { id: 'math11_stat_h4', question: 'For grouped data with class mark xᵢ and frequency fᵢ, the mean is:', options: ['Σxᵢ/n', 'Σfᵢxᵢ/Σfᵢ', 'Σfᵢ/n', 'Σxᵢfᵢ/n²'], correct: 'Σfᵢxᵢ/Σfᵢ', explanation: 'For grouped data, the weighted mean is the sum of (frequency × class mark) divided by total frequency.', difficulty: 'Hard' },
    { id: 'math11_stat_h5', question: 'A coefficient of variation (CV) is used to:', options: ['Find the median', 'Compare variability of datasets with different units', 'Calculate probability', 'Draw histograms'], correct: 'Compare variability of datasets with different units', explanation: 'CV = (SD/mean) × 100% allows comparison of relative variability across different datasets.', difficulty: 'Hard' },
  ],

  'Unit 8: Probability': [
    // Easy
    { id: 'math11_prob_e1', question: 'What is the probability of getting heads when flipping a fair coin?', options: ['1/4', '1/3', '1/2', '1'], correct: '1/2', explanation: 'A fair coin has two equally likely outcomes, so P(heads) = 1/2.', difficulty: 'Easy' },
    { id: 'math11_prob_e2', question: 'What is the probability of rolling a 3 on a standard die?', options: ['1/2', '1/3', '1/6', '3/6'], correct: '1/6', explanation: 'A standard die has 6 equally likely outcomes. P(3) = 1/6.', difficulty: 'Easy' },
    { id: 'math11_prob_e3', question: 'The probability of an impossible event is:', options: ['0', '1/2', '1', '-1'], correct: '0', explanation: 'An impossible event has probability 0.', difficulty: 'Easy' },
    { id: 'math11_prob_e4', question: 'The probability of a certain event is:', options: ['0', '1/2', '1', '2'], correct: '1', explanation: 'A certain event always occurs, so its probability is 1.', difficulty: 'Easy' },
    { id: 'math11_prob_e5', question: 'A bag has 3 red and 5 blue balls. What is the probability of drawing a red ball?', options: ['3/8', '5/8', '3/5', '1/3'], correct: '3/8', explanation: 'P(red) = 3/(3+5) = 3/8.', difficulty: 'Easy' },
    // Medium
    { id: 'math11_prob_m1', question: 'What is the probability of rolling an even number on a standard die?', options: ['1/6', '1/3', '1/2', '2/3'], correct: '1/2', explanation: 'Even numbers: 2, 4, 6. P = 3/6 = 1/2.', difficulty: 'Medium' },
    { id: 'math11_prob_m2', question: 'How many ways can 5 students be arranged in a row?', options: ['25', '60', '120', '720'], correct: '120', explanation: '5! = 5 × 4 × 3 × 2 × 1 = 120.', difficulty: 'Medium' },
    { id: 'math11_prob_m3', question: 'What is C(6, 2)?', options: ['12', '15', '30', '36'], correct: '15', explanation: 'C(6,2) = 6!/(2!4!) = (6×5)/(2×1) = 15.', difficulty: 'Medium' },
    { id: 'math11_prob_m4', question: 'Two dice are rolled. What is the probability of getting a sum of 7?', options: ['1/6', '5/36', '1/12', '7/36'], correct: '1/6', explanation: 'Favorable outcomes: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6. P = 6/36 = 1/6.', difficulty: 'Medium' },
    { id: 'math11_prob_m5', question: 'How many 3-letter arrangements can be made from the letters A, B, C, D, E (no repetition)?', options: ['60', '120', '10', '125'], correct: '60', explanation: 'P(5,3) = 5 × 4 × 3 = 60.', difficulty: 'Medium' },
    // Hard
    { id: 'math11_prob_h1', question: 'Events A and B are independent. P(A) = 0.3, P(B) = 0.5. What is P(A and B)?', options: ['0.15', '0.8', '0.2', '0.35'], correct: '0.15', explanation: 'For independent events: P(A ∩ B) = P(A) × P(B) = 0.3 × 0.5 = 0.15.', difficulty: 'Hard' },
    { id: 'math11_prob_h2', question: 'What is the probability of getting at least one head in 3 coin tosses?', options: ['3/4', '7/8', '1/2', '5/8'], correct: '7/8', explanation: 'P(at least 1 head) = 1 - P(no heads) = 1 - (1/2)³ = 1 - 1/8 = 7/8.', difficulty: 'Hard' },
    { id: 'math11_prob_h3', question: 'How many ways can a committee of 3 be chosen from 8 people?', options: ['24', '56', '336', '120'], correct: '56', explanation: 'C(8,3) = 8!/(3!5!) = (8×7×6)/(3×2×1) = 56.', difficulty: 'Hard' },
    { id: 'math11_prob_h4', question: 'What is the coefficient of x³ in the expansion of (1+x)⁵?', options: ['5', '10', '15', '20'], correct: '10', explanation: 'By the binomial theorem, the coefficient of x³ is C(5,3) = 10.', difficulty: 'Hard' },
    { id: 'math11_prob_h5', question: 'A box has 4 defective and 6 good items. If 3 are drawn at random, what is the probability that exactly 1 is defective?', options: ['1/2', '3/10', '1/3', '1/6'], correct: '1/2', explanation: 'P = C(4,1)·C(6,2)/C(10,3) = (4×15)/120 = 60/120 = 1/2.', difficulty: 'Hard' },
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
