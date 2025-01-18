// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MedicalRecords {
    event RecordAdded(address indexed patient, bytes32 indexed recordHash);
    event PatientRegistered(address indexed patientAddress, string name);

    struct Patient {
        string name;
        uint256 age;
        uint nationalId;
        bool isRegistered;
        address[] authorizedDoctors;
        mapping(bytes32 => MedicalRecord) records;
        bytes32[] recordHashes; // Track record hashes
    }

    struct MedicalRecord {
        string diagnosis;
        string prescription;
        string notes;
        uint256 timestamp;
        address doctor;
        bytes32 recordHash;
        string attachments;
    }

    mapping(address => Patient) public patients;

    function addMedicalRecord(
        address _patientAddress,
        string memory _diagnosis,
        string memory _prescription,
        string memory _notes,
        string memory _attachments
    ) external {
        require(
            patients[_patientAddress].isRegistered,
            "Patient not registered"
        );

        bytes32 recordHash = keccak256(
            abi.encodePacked(
                _patientAddress,
                _diagnosis,
                _prescription,
                _notes,
                block.timestamp
            )
        );

        MedicalRecord memory newRecord = MedicalRecord({
            diagnosis: _diagnosis,
            prescription: _prescription,
            notes: _notes,
            timestamp: block.timestamp,
            doctor: msg.sender,
            recordHash: recordHash,
            attachments: _attachments
        });

        patients[_patientAddress].records[recordHash] = newRecord;
        patients[_patientAddress].recordHashes.push(recordHash); // Track record hash
        emit RecordAdded(_patientAddress, recordHash);
    }

    function registerPatient(
        string memory _name,
        uint256 _age,
        uint _nationalId
    ) external {
        patients[msg.sender].name = _name;
        patients[msg.sender].age = _age;
        patients[msg.sender].isRegistered = true;
        patients[msg.sender].nationalId = _nationalId;
        emit PatientRegistered(msg.sender, _name);
    }

    function viewMedicalRecord(
        address _patientAddress,
        bytes32 _recordHash
    )
        external
        view
        returns (
            string memory diagnosis,
            string memory prescription,
            string memory notes,
            uint256 timestamp,
            address doctor,
            string memory attachments
        )
    {
        MedicalRecord storage record = patients[_patientAddress].records[
            _recordHash
        ];
        return (
            record.diagnosis,
            record.prescription,
            record.notes,
            record.timestamp,
            record.doctor,
            record.attachments
        );
    }
}
