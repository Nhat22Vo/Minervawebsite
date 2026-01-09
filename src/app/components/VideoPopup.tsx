import { motion, AnimatePresence } from "motion/react";
import { X, Play } from "lucide-react";

interface VideoPopupProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
}

export function VideoPopup({ isOpen, onClose, videoUrl, title }: VideoPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 z-[100] backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8"
          >
            <div className="relative w-full max-w-5xl">
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute -top-12 right-0 md:-right-12 md:top-0 text-white hover:text-[#FF4500] transition-colors z-10"
              >
                <X size={40} />
              </motion.button>

              {/* Video Container */}
              <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl aspect-video">
                {title && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-6 z-10">
                    <h3 className="text-white uppercase tracking-wider">
                      {title}
                    </h3>
                  </div>
                )}
                
                <video
                  src={videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function VideoThumbnail({
  imageUrl,
  title,
  onClick,
}: {
  imageUrl: string;
  title: string;
  onClick: () => void;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className="relative group cursor-pointer overflow-hidden rounded-lg aspect-video bg-black"
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
      
      {/* Play Button */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-16 h-16 rounded-full bg-[#FF4500] flex items-center justify-center group-hover:bg-white transition-colors">
          <Play className="w-8 h-8 text-white group-hover:text-black ml-1" fill="currentColor" />
        </div>
      </motion.div>
      
      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
        <h4 className="text-white uppercase tracking-wider">{title}</h4>
      </div>
    </motion.div>
  );
}
