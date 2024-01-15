const circom_tester = require("circom_tester/wasm/tester");
const path = require("path");

async function main() {
  let circuit = await circom_tester(path.join(__dirname, "./test.circom"), {
    recompile: true,
    include: path.join(__dirname, "../node_modules"),
  });

  const witness = await circuit.calculateWitness({
    inp: 1
  })

  console.log(witness);
//   witness[1] = 2;
  await circuit.checkConstraints(witness);


//   await circuit.assertOut(witness, {
//     out: 2,
//   })

}

main().then(() => {
  console.log("run");
});
