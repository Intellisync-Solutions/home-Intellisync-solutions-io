import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Heart, 
  Sparkles, 
  Code, 
  Palette, 
  Users, 
  Share2, 
  Plus, 
  Download, 
  Check, 
  X, 
  Send, 
  Bell, 
  Trash, 
  Star, 
  Zap, 
  Loader2, 
  ShoppingCart,
  
} from 'lucide-react';
import { Button } from '../../../components/ui/Button/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../../../components/ui/dialog";
import { toast } from 'sonner';
import { StreamingText } from '../../../components/features/StreamingText';

const ButtonShowcase = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const handleShare = async () => {
    const shareData = {
      title: 'Button Showcase',
      text: 'Check out this awesome button collection!',
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        toast.success("Content has been shared successfully");
      } else {
        await navigator.clipboard.writeText(shareData.url);
        toast.success("Content copied to clipboard");
      }
    } catch {
      toast.error("Failed to share");
    }
  };

  const handleLike = () => {
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);
    toast.success(newLikedState ? "Added to your likes" : "Removed from your likes");
  };

  const openModal = () => {
    setIsOpen(true);
    toast("Let me share my passion for design with you", {
      duration: 3000,
    });
  };

  const simulateLoading = () => {
    setIsLoading(true);
    toast.loading("Your request is being processed");
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Your request has been processed successfully");
    }, 2000);
  };

  const handleNotification = () => {
    setNotificationCount(prev => prev + 1);
    toast(`You have ${notificationCount + 1} unread messages`);
  };

  const handleDelete = () => {
    console.log('Delete button clicked');
    setShowConfirmModal(true);
    toast.error("Please confirm if you want to delete this item");
  };

  const confirmDelete = () => {
    toast.success("The item has been deleted successfully");
    setShowConfirmModal(false);
  };

  const handleApprove = () => {
    console.log('Approve button clicked');
    toast.success("The requested action has been approved successfully");
  };

  const handleDecline = () => {
    console.log('Decline button clicked');
    toast.error("The requested action has been rejected");
  };

  const handleSend = () => {
    console.log('Send button clicked');
    toast.success("Your message has been sent successfully. We'll get back to you soon!");
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900 via-slate-900 to-black text-white pt-24 pb-6 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <motion.button
        onClick={openModal}
        className="relative group inline-flex items-center justify-center px-8 py-4 text-lg font-medium transition-all duration-300 rounded-full backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-105"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="relative z-10 flex items-center gap-2">
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-semibold">
            Discover My Journey
          </span>
          <ArrowRight className="w-5 h-5 text-purple-400" />
        </span>
      </motion.button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl bg-slate-900/95 backdrop-blur-xl border border-white/10 shadow-2xl text-white rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Crafting Digital Experiences with Passion & Purpose
            </DialogTitle>
            <DialogDescription className="text-slate-300 text-lg mt-4">
              <StreamingText 
                text="Every pixel speaks a purpose, every interaction leaves a mark. Hover on a Title to see a change."
                speed={50}
                className="text-slate-300"
                cursor={false}
              />
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="group flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/5">
                <Heart className="w-6 h-6 text-pink-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-pink-400 transition-colors duration-300">
                    Passion for Digital Integration
                  </h3>
                  <p className="text-slate-300 mt-2">
                    I believe design is about more than just visuals—it's about creating deeply personal experiences that resonate and inspire.
                  </p>
                </div>
              </div>

              <div className="group flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/5">
                <Sparkles className="w-6 h-6 text-amber-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-amber-400 transition-colors duration-300">
                    Creative Vision
                  </h3>
                  <p className="text-slate-300 mt-2">
                    Each project is a chance to explore new ideas and push boundaries, translating concepts into compelling digital stories.
                  </p>
                </div>
              </div>

              <div className="group flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/5">
                <Users className="w-6 h-6 text-sky-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-sky-400 transition-colors duration-300">
                    User-Centered Approach
                  </h3>
                  <p className="text-slate-300 mt-2">
                    Collaboration is at the heart of my process, designing personalized solutions that deliver impact and authenticity.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div className="group flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/5">
                <Code className="w-6 h-6 text-emerald-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300">
                    Technical Excellence
                  </h3>
                  <p className="text-slate-300 mt-2">
                    I blend technical expertise with a human touch to transform creative ideas into intuitive, high-performing solutions.
                  </p>
                </div>
              </div>

              <div className="group flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/5">
                <Palette className="w-6 h-6 text-violet-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-violet-400 transition-colors duration-300">
                    Aesthetic Sensibility
                  </h3>
                  <p className="text-slate-300 mt-2">
                    With an eye for detail and a knack for visual storytelling, I create designs that balance artistry with usability.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-8 flex justify-end space-x-4">
            <Button
              onClick={() => setIsOpen(false)}
              variant="outline"
              className="bg-transparent border-white/20 text-white hover:bg-white/10 transition-all duration-300"
            >
              Close
            </Button>
            <Button
              onClick={() => {
                toast.success("I'm excited to collaborate on your next project.");
                setIsOpen(false);
              }}
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white transition-all duration-300"
            >
              Let's Work Together
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="relative mt-12 p-8 backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
        <p className="text-lg text-white/90 italic">
          "I'm not just building interfaces; I'm crafting experiences that leave lasting 
          impressions and inspire meaningful connections."
        </p>
      </div>

      {/* Button Showcase Section */}
      <div className="container mx-auto px-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Interactive Button Collection
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Explore our collection of beautiful, accessible, and interactive button designs 
              that enhance user experience and engagement.
            </p>
          </div>

          <div className="space-y-16">
            {/* Basic Variants */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-white/90">Basic Variants</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button variant="default" className="w-full">Default Button</Button>
                <Button variant="secondary" className="w-full">Secondary</Button>
                <Button variant="outline" className="w-full">Outline</Button>
                <Button variant="ghost" className="w-full">Ghost</Button>
              </div>
            </section>

            {/* Interactive States */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-white/90">Interactive States</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Like Button */}
                <Button
                  variant={isLiked ? "default" : "outline"}
                  onClick={handleLike}
                  className={`w-full group relative ${
                    isLiked 
                      ? 'bg-gradient-to-r from-pink-500/20 to-purple-500/20 hover:from-pink-500/30 hover:to-purple-500/30' 
                      : 'hover:bg-white/10'
                  }`}
                >
                  <motion.span 
                    className="flex items-center justify-center w-full"
                    animate={isLiked ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    <Heart
                      size={16}
                      className={`mr-2 transition-all duration-300 ${
                        isLiked 
                          ? "fill-pink-500 text-pink-500" 
                          : "text-slate-300 group-hover:text-pink-400"
                      }`}
                    />
                    {isLiked ? 'Liked' : 'Like'}
                  </motion.span>
                </Button>
                
                {/* Loading Button */}
                <Button
                  onClick={() => {
                    simulateLoading();
                    // toast({
                    //   title: "Loading Started",
                    //   description: "This will take 2 seconds...",
                    // });
                  }}
                  disabled={isLoading}
                  className={`w-full relative ${
                    isLoading 
                      ? 'bg-slate-700 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600'
                  }`}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    <>
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </>
                  )}
                </Button>

                {/* Share Button */}
                <Button 
                  variant="outline" 
                  className="w-full group hover:bg-white/10"
                  onClick={handleShare}
                >
                  <motion.span 
                    className="flex items-center justify-center w-full"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Share
                    <Share2 className="ml-2 h-4 w-4 transition-transform duration-300" />
                  </motion.span>
                </Button>

                {/* Cart Button */}
                <Button 
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 group relative"
                  onClick={() => {
                    setCartCount(prev => prev + 1);
                    toast.success("Item has been added to your cart");
                  }}
                >
                  <motion.span 
                    className="flex items-center justify-center w-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4 transition-transform duration-300" />
                    Add to Cart
                  </motion.span>
                  <AnimatePresence>
                    {cartCount > 0 && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                      >
                        {cartCount}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Button>
              </div>
            </section>

            {/* Action Buttons */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-white/90">Action Buttons</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button 
                  type="button"
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Approve button clicked from JSX');
                    handleApprove();
                  }}
                >
                  <Check className="mr-2 h-4 w-4" />
                  Approve
                </Button>
                
                <Button 
                  type="button"
                  className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Decline button clicked from JSX');
                    handleDecline();
                  }}
                >
                  <X className="mr-2 h-4 w-4" />
                  Reject
                </Button>
                
                <Button 
                  type="button"
                  variant="outline" 
                  className="w-full text-red-400 hover:text-red-300 hover:bg-red-950/30"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Delete button clicked from JSX');
                    handleDelete();
                  }}
                >
                  <Trash className="mr-2 h-4 w-4" />
                  Delete
                </Button>
                
                <Button 
                  type="button"
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Send button clicked from JSX');
                    handleSend();
                  }}
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send
                </Button>
              </div>
            </section>

            {/* Notification Actions */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-white/90">Interactive Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button 
                  onClick={() => setShowModal(true)}
                  className="w-full backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20"
                >
                  <motion.span 
                    className="flex items-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Open Modal
                  </motion.span>
                </Button>

                <Button
                  onClick={handleNotification}
                  className="w-full relative backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20"
                >
                  <motion.span className="flex items-center">
                    <Bell className="mr-2 h-4 w-4" />
                    Notifications
                  </motion.span>
                  <AnimatePresence>
                    {notificationCount > 0 && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                      >
                        {notificationCount}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Button>

                <Button
                  onClick={handleDelete}
                  className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600"
                >
                  <motion.span 
                    className="flex items-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Trash className="mr-2 h-4 w-4" />
                    Delete Item
                  </motion.span>
                </Button>
              </div>
            </section>

            {/* Animated Buttons */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-white/90">Animated Buttons</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    className="w-full bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600"
                    onClick={() => {
                      toast.success("Hover and click effects demonstration");
                    }}
                  >
                    <motion.div
                      className="flex items-center"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      Hover Me
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  whileTap={{ y: 0 }}
                >
                  <Button 
                    className="w-full backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20"
                    onClick={() => {
                      toast.success("Watch me bounce on hover");
                    }}
                  >
                    <motion.div
                      animate={{ y: [0, -3, 0] }}
                      transition={{ repeat: Infinity, duration: 1.2 }}
                      className="flex items-center"
                    >
                      <Star className="mr-2 h-4 w-4" />
                      Bounce Effect
                    </motion.div>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ 
                    rotate: [-2, 2, -2, 2, 0],
                    transition: {
                      duration: 0.4,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
                    onClick={() => {
                      toast.success("Watch the shake animation on hover");
                    }}
                  >
                    <motion.div 
                      className="flex items-center"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        transition: { duration: 2, repeat: Infinity }
                      }}
                    >
                      <Zap className="mr-2 h-4 w-4" />
                      Shake Effect
                    </motion.div>
                  </Button>
                </motion.div>
              </div>
            </section>

            {/* Interactive Actions */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-white/90">Interactive Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button 
                  onClick={() => setShowModal(true)}
                  className="w-full backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20"
                >
                  <motion.span 
                    className="flex items-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Open Modal
                  </motion.span>
                </Button>

                <Button
                  onClick={handleNotification}
                  className="w-full relative backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20"
                >
                  <motion.span className="flex items-center">
                    <Bell className="mr-2 h-4 w-4" />
                    Notifications
                  </motion.span>
                  <AnimatePresence>
                    {notificationCount > 0 && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                      >
                        {notificationCount}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Button>

                <Button
                  onClick={handleDelete}
                  className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600"
                >
                  <motion.span 
                    className="flex items-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Trash className="mr-2 h-4 w-4" />
                    Delete Item
                  </motion.span>
                </Button>
              </div>
            </section>
          </div>
        </motion.div>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {showModal && (
          <Dialog open={showModal} onOpenChange={setShowModal}>
            <DialogContent>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                <DialogHeader>
                  <DialogTitle>Welcome to the Modal</DialogTitle>
                  <DialogDescription>
                    This is an example of a modal dialog. It can be used to display important information or gather user input.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setShowModal(false)}>
                    Close
                  </Button>
                  <Button onClick={() => {
                    toast.success("Action completed successfully.");
                    setShowModal(false);
                  }}>
                    Save Changes
                  </Button>
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showConfirmModal && (
          <Dialog open={showConfirmModal} onOpenChange={setShowConfirmModal}>
            <DialogContent>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                <DialogHeader>
                  <DialogTitle>Confirm Delete</DialogTitle>
                  <DialogDescription>
                    Are you sure you want to delete this item? This action cannot be undone.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setShowConfirmModal(false)}>
                    Cancel
                  </Button>
                  <Button variant="destructive" onClick={confirmDelete}>
                    Delete
                  </Button>
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ButtonShowcase;
