pragma circom  2.1.6;


template Test() {

    // Declaration of signals.
    signal input inp;
    signal output out;

    // Constraints.

    var v_t = inp * inp;
    var v_s = v_t * 2;


    out <== v_s;
}

component main = Test();

