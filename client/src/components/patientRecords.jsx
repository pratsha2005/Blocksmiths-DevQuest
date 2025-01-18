import { Card, Typography } from "@material-tailwind/react";

// The table head will reflect the fields for each medical record
const TABLE_HEAD = ["Date of Visit", "Condition", "Treatment", "Doctor", ""];

export function PatientRecords({ medicalHistory, onRecordClick }) {
  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {medicalHistory.length > 0 ? (
            medicalHistory.map(({ date, diagnosis, treatment,notes, doctor,attachments }, index) => {
              const isLast = index === medicalHistory.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={date} onClick={() => onRecordClick({ date, diagnosis, treatment,notes, doctor,attachments })}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {date}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {diagnosis}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {treatment.medication} - {treatment.dosage}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {doctor || "N/A"}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      Edit
                    </Typography>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={5} className="p-4 text-center text-gray-500">
                No medical records available for this patient.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </Card>
  );
}
