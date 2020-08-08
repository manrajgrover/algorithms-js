/**
 * Draft specification based on the pseudocode in Wikipedia's article on the
 * Viterbi algorithm (as of August 6, 2020):
 *  https://en.wikipedia.org/wiki/Viterbi_algorithm#pseudocode
 *
 */

/**
 * Any possible observation of the system
 * @typedef {any} Observation
 */
/**
 * An unordered list of all possible observations of the system
 * @typedef {Observation[]} ObservationSpace
 */

/**
 * Any possible hidden (i.e. unobservable) state of the system
 * @typedef {any} State
 */
/**
 * An unordered list of all possible hidden states
 * @typedef {State[]} StateSpace
 */

/**
 * A nested map such that two state names in order gives the probability of a
 * transition from the first to the second:
 *  map.name1.name2 => probability of transition from state 1 to state 2
 * @typedef {Object<String, Object<String, Number>>} TransitionMap
 */
/**
 * A nested map such that a state name followed by an observation name gives the
 * probability of that observation resulting from that state:
 *  map.stateName.obsName => probability of named state leading to named observation
 * @typedef {Object<String, Object<String, Number>>} EmissionMap
 */

/**
 * Determine the Viterbi Path of a given set of Observations
 *
 * @param  {ObservationSpace} O
 * @param  {StateSpace} S
 * @param  {Object<String, Number>} P0 - a map which gives the probability that
 *         each state in S is the initial hidden state
 * @param  {Observation[]} Y - the sequence of recorded observations for which
 *         the Viterbi Path is to be found
 * @param  {TransitionMap} A
 * @param  {EmissionMap} B
 *
 * @return {State[]} (denoted X) the most likely sequence of (hidden) states
 */
function viterbi(O, S, P0, Y, A, B) {
  /** probability of the state with greatest likelihood at each observation,
   * given the previous state
   * @type Number[][]
   */
  const T1 = [];

  /** state (with corresponding probability in T1) with greatest likelihood at
   * each observation, given the previous state
   * @type State[][]
   */
  const T2 = [];

  //  Calculate the probability of each initial state
  //  These are irrespective of any observations
  for (let i = 0; i < S.length; i += 1) {
    T1[i] = [P0[S[i]] * B[S[i]][Y[0]]];
    T2[i] = [null];
  }

  //  determine the probability of each state state underlying each observation
  //  the calculations account for the current observation the probability of
  //  the path leading to the previous most likely state
  for (let j = 1; j < Y.length; j += 1) { //  for each observation (in sequence)
    for (let i = 0; i < S.length; i += 1) { //  find the probability of every possible state
      let Pmax = -1; //  guarantee inner conditional satisfied on first iteration
      let kPmax;
      let k = 0;
      do {
        const p = T1[k][j - 1] * A[S[k]][S[i]] * B[S[i]][Y[j]];
        if (p > Pmax) {
          Pmax = p;
          kPmax = k;
        }
        k += 1;
      } while (k < S.length);
      T1[i][j] = Pmax;
      T2[i][j] = kPmax;
    }
  }

  //  choose most likely path from T1
  const T = Y.length;
  const Z = []; // indices
  const X = []; // states

  //  determine final observed state
  Z[T - 1] = T2[0][T - 1]; //  initialize to known value
  X[T - 1] = S[Z[T - 1]];
  for (let i = 1; i < S.length; i += 1) { // skip the value used to init Z[T - 1]
    if (T1[i][T - 1] > T1[Z[T - 1]][T - 1]) {
      Z[T - 1] = i;
      X[T - 1] = S[i];
    }
  }

  //  determine Z and X in reverse order
  for (let j = T - 1; j > 0; j -= 1) {
    Z[j - 1] = T2[Z[j]][j];
    X[j - 1] = S[Z[j - 1]];
  }

  return X;
}


//  function to compose a transition state matrix from a MarkovChain

module.exports = viterbi;
