async function main() {
  const MedicalRecords = await ethers.getContractFactory("MedicalRecords");
  const medical = await MedicalRecords.deploy();

  console.log("MedicalRecords deployed to:", medical.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
// Contract Address: 0x7EDF333a77adcE20424c0A69BFd172C046eF725d
