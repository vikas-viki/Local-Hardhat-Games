/* Game -1

// add the game address here and update the contract name if necessary
const gameAddr = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
const contractName = "Game1";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    // do whatever you need to do to win the game here:
    const tx = await game.win();

    // did you win? Check the transaction receipt!
    // if you did, it will be in both the logs and events array
    const receipt = await tx.wait();
    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
*/

// ----------------------------------------------------------------------------------------- || Game 2

/*
// add the game address here and update the contract name if necessary
const gameAddr = "0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0";
const contractName = "Game2";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    // do whatever you need to do to win the game here:
    const tx1 = await game.setX(25);
    await tx1.wait();
    const tx2 = await game.setY(25);
    await tx2.wait();
    const tx = await game.win();

    // did you win? Check the transaction receipt!
    // if you did, it will be in both the logs and events array
    const receipt = await tx.wait();
    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
*/

// ----------------------------------------------------------------------------------------- || Game 3


/*
// add the game address here and update the contract name if necessary
const gameAddr = "0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1";
const contractName = "Game3";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    // do whatever you need to do to win the game here:
    const tx = await game.win(45);

    // did you win? Check the transaction receipt!
    // if you did, it will be in both the logs and events array
    const receipt = await tx.wait();
    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

  */

  // ----------------------------------------------------------------------------------------- || Game 4
/*
  // add the game address here and update the contract name if necessary
const gameAddr = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
const contractName = "Game4";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    // do whatever you need to do to win the game here:
    // A uint8 can only hold numbers upto 255 (2^8-1), so if we pass more than that it will start again from 0,
    // so (210 + 56) = 266 => (266 - 256) = 10 => true.
    const tx = await game.win(56);

    // did you win? Check the transaction receipt!
    // if you did, it will be in both the logs and events array
    const receipt = await tx.wait();
    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
  */

// ----------------------------------------------------------------------------------------- || Game 5

    // add the game address here and update the contract name if necessary
const gameAddr = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";
const contractName = "Game5";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    // do whatever you need to do to win the game here:
    // A uint8 can only hold numbers upto 255 (2^8-1), so if we pass more than that it will start again from 0,
    // so (210 + 56) = 266 => (266 - 256) = 10 => true.
    const tx1 = await game.giveMeAllowance(10000);
    await tx1.wait();
    
    const tx2 = await game.mint(10000);
    await tx2.wait();

    const tx = await game.win();
    await tx.wait();

    // did you win? Check the transaction receipt!
    // if you did, it will be in both the logs and events array
    const receipt = await tx.wait();
    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });