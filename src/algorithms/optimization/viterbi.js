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
 * The set of all possible observations of the system
 * @typedef {Observation[]} ObservationSpace
 */

/**
 * Any possible hidden (i.e. unobservable) state of the system
 * @typedef {any} State
 */
/**
 * The set of all possible hidden states
 * @typedef {State[]} StateSpace
 */

/**
 * A 2D matrix, A, of size K x K (where K is the number of states in the state space) such that A[i][j] gives the probability of a transition from state i to state j
 * @typedef {Object<String, Number[]>} TransitionMatrix
 */
/**
 * A 2D matrix, B, of size K x N (where K is the number of states in the state space and N is the number of observations in the observation space) such that B[i][j] gives the probability of observation j resulting from state i
 * @typedef {Object<String, Number[]>} EmissionMatrix
 */

/**
 * Determine the Viterbi Path of a given set of Observations
 *
 * @param  {ObservationSpace} O - observation space
 * @param  {StateSpace} S - state space
 * @param  {Object<String, Number>} P - an array that, for each state in S, gives the probability that the initial hidden state is that state
 * @param  {Observation[]} Y - the sequence of recorded observations for which the Viterbi Path is to be found
 * @param  {TransitionMatrix} A - a "transition matrix" of [ length(StSp) X length(StSp) ] numbers giving the probability of transition from every state to every other state
 * @param  {EmissionMatrix} B - an "emission matrix" of [ length(StSp) X length(ObsSp) ] numbers giving the probability of every possible observation for every possible state
 *
 * @return {State[]} (denoted X) the most likely sequence of (hidden) states
 */
