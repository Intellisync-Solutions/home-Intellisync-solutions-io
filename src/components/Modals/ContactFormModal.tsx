import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Button } from '../ui/Button/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useToast } from '../ui/Toast/use-toast';
import { StreamingText } from '../features/StreamingText';
import { ModalTransition } from '../features/Transitions';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '../ui/select';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

const projectTypes = [
  { value: 'portfolio', label: 'Portfolio Website' },
  { value: 'ecommerce', label: 'E-commerce Platform' },
  { value: 'blog', label: 'Blog Platform' },
  { value: 'restaurant', label: 'Restaurant Website' },
  { value: 'realestate', label: 'Real Estate Platform' },
  { value: 'saas', label: 'SaaS Dashboard' },
  { value: 'social', label: 'Social Network' },
  { value: 'education', label: 'Educational Platform' },
  { value: 'healthcare', label: 'Healthcare Solution' },
  { value: 'custom', label: 'Custom Project' }
];

const ContactFormModal: React.FC<ContactFormModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormData>();
  const { toast } = useToast();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const mailtoLink = `mailto:chris.june@intellisync.ca?subject=${encodeURIComponent("Contact Form Submission")}&body=${encodeURIComponent(
        `Name: ${data.name}\n` +
        `Email: ${data.email}\n` +
        `Project Type: ${data.projectType}\n\n` +
        `Message:\n${data.message}`
      )}`;
      
      window.location.href = mailtoLink;
      
      toast({
        title: "Email client opened",
        description: "Your message has been prepared in your default email client.",
      });
      
      onClose();
    } catch  {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to open email client. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <ModalTransition>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-center mb-2">
                    Start Your Project
                  </DialogTitle>
                  <DialogDescription className="text-center text-gray-600 dark:text-gray-300">
                    Tell us about your project and we'll get back to you within 24 hours.
                  </DialogDescription>
                  <div className="mb-6">
                    <StreamingText 
                      text="Let's Build Something Amazing" 
                      className="text-3xl font-bold"
                      speed={70}
                    />
                    <p className="text-gray-600 mt-2">
                      Share your vision with us, and let's transform it into reality. Whether it's a sleek portfolio or a complex platform, we're here to help.
                    </p>
                  </div>
                </DialogHeader>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      {...register("name", { required: "Name is required" })}
                      placeholder="John Smith"
                      className="w-full"
                    />
                    {errors.name && (
                      <span className="text-sm text-red-500">{errors.name.message}</span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      placeholder="john@example.com"
                      className="w-full"
                    />
                    {errors.email && (
                      <span className="text-sm text-red-500">{errors.email.message}</span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type</Label>
                    <Select onValueChange={(value) => setValue('projectType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the type of project" />
                      </SelectTrigger>
                      <SelectContent>
                        {projectTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      {...register("message", { required: "Message is required" })}
                      placeholder="Tell us about your project idea, goals, and any specific features you'd like. The more details, the better!"
                      className="w-full min-h-[120px]"
                    />
                    {errors.message && (
                      <span className="text-sm text-red-500">{errors.message.message}</span>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </DialogContent>
            </motion.div>
          </ModalTransition>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default ContactFormModal;
