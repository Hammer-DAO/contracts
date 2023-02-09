const ethers = require("ethers");

require("dotenv").config();

(async () => {
    const signer = new ethers.Wallet(process.env.PRIVATE_KEY);
    const daoCommitteeProxyAddress = "0xDD9f0cCc044B0781289Ee318e5971b0139602C26";
    const ABI = [
        "function createCandidate(string)",
    ];

    const daoCommitteeProxy = new ethers.Contract(daoCommitteeProxyAddress, ABI, signer);
    const candidateName = "Hammer DAO";

    // Candidate 컨트랙트 배포
    const tx = await daoCommitteeProxy.createCandidate(candidateName);
    console.log(await tx.wait());
})();