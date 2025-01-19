import { PaperClipIcon } from '@heroicons/react/20/solid';

export default function DescriptionList({ patient, record,idx }) {
  console.log("record",record.attachments)

  return (
    <div>
      {/* Patient Information */}
      <div className="mt-4 px-4 sm:px-0">
        <h3 className="text-base font-semibold text-gray-900">Patient Record {idx + 1}</h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium text-gray-900">Full Name</dt>
            <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">{`${patient.firstName} ${patient.lastName}`}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium text-gray-900">Aadhar No.</dt>
            <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">{patient.aadhaarNo}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium text-gray-900">Email Address</dt>
            <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">{patient.email}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium text-gray-900">Date</dt>
            <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">{record.date}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium text-gray-900">Diagnosis</dt>
            <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">{record.diagnosis}</dd>
          </div>
        </dl>
      </div>

      {/* Treatment Information */}
      <div className="mt-4 px-4 sm:px-0">
        <h3 className="text-base font-semibold text-gray-900">Treatment</h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          {record.treatment && record.treatment.length > 0 ? (
            record.treatment.map((item, index) => (
              <div key={index} className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium text-gray-900">Medication & Dosage</dt>
                <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">{`${item.medication} ${item.dosage}`}</dd>
              </div>
            ))
          ) : (
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium text-gray-900">Treatment</dt>
              <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">No treatment information available</dd>
            </div>
          )}
        </dl>
      </div>

      {/* Summary */}
      <div className="mt-4 px-4 sm:px-0">
        <h3 className="text-base font-semibold text-gray-900">Summary</h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium text-gray-900">Notes</dt>
            <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">{record.notes}</dd>
          </div>
        </dl>
      </div>

      {/* Attachments */}
      <div className="mt-4 px-4 sm:px-0">
        <h3 className="text-base font-semibold text-gray-900">Attachments</h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium text-gray-900">Attachments</dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                {record.attachments && record.attachments.length > 0 ? (
                  record.attachments.map((attachment, index) => (
                    <li key={index} className="flex items-center justify-between py-4 pl-4 pr-5 text-sm">
                      <div className="flex w-0 flex-1 items-center">
                        <PaperClipIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                        <span className="ml-2 truncate">{attachment.fileName}</span>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a
                          href={attachment.url}
                          target='_blank'
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Download
                        </a>
                      </div>
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-4 text-gray-500">No attachments available</li>
                )}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
