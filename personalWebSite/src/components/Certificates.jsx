import { motion } from "framer-motion";

const Certificates = ({ cert }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6"
    >
      <h3 className="text-2xl font-semibold mb-4 text-violet-700 dark:text-violet-400">
        Certificates
      </h3>
      <div className="space-y-4">
        {cert.map((certificate, index) => (
          <div key={index}>
            <h4 className="font-bold dark:text-violet-300">
              {certificate.title}
            </h4>
            <p className="dark:text-violet-200">{certificate.institution}</p>
            {certificate.certificateCode && (
              <p className="text-sm text-gray-500 dark:text-violet-100">
                Certificate Code: {certificate.certificateCode}
              </p>
            )}
            <p className="text-gray-600 dark:text-violet-50">
              {certificate.description}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Certificates;
