import { motion } from 'framer-motion';
import TextInputs from './components/TextInputs';
import DateTimeInputs from './components/DateTimeInputs';
import SelectionInputs from './components/SelectionInputs';
import FileUpload from './components/FileUpload';
import CallToAction from './components/CallToAction';

const FormShowcase = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
          Form Elements
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 text-lg text-center max-w-2xl mx-auto mb-12">
          Explore our collection of beautiful and functional form elements designed 
          for optimal user experience and accessibility.
        </p>

        <div className="space-y-16">
          <TextInputs />
          <DateTimeInputs />
          <SelectionInputs />
          <FileUpload />
          <CallToAction />
        </div>
      </motion.div>
    </div>
  );
};

export default FormShowcase;
