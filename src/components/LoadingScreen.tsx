import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <motion.div
              animate={{ 
                boxShadow: ["0 0 20px rgba(0,212,255,0.2)", "0 0 60px rgba(0,212,255,0.6)", "0 0 20px rgba(0,212,255,0.2)"] 
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex h-32 w-32 items-center justify-center rounded-full border-2 border-primary/50 bg-black/50 backdrop-blur-md"
            >
              <span className="text-4xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
                PB
              </span>
            </motion.div>
            
            <motion.div
              className="absolute -inset-4 rounded-full border border-primary/20 border-t-primary"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
