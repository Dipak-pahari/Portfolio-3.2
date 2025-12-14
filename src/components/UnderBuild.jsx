import { motion } from "framer-motion";
import { Construction, ArrowLeft, Linkedin, Mail } from "lucide-react";
import "./UnderBuild.scss";

export default function UnderBuild() {
  return (
    <div className="underbuild-container">
      {/* Animated Background */}
      <div className="underbuild-bg">
        <div className="grid-pattern">
          {[...Array(192)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{
                duration: 4,
                delay: i * 0.02,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              className="grid-item"
            />
          ))}
        </div>

        {/* Floating Shapes */}
        <motion.div
          className="shape shape1"
          animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="shape shape2"
          animate={{ y: [0, 40, 0], rotate: [0, -180, -360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="shape shape3"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="shape shape4"
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Diagonal Lines */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="diagonal-line"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: [0, 0.1, 0], x: ["-100%", "200%"] }}
            transition={{
              duration: 8,
              delay: i * 1.5,
              repeat: Infinity,
              repeatDelay: 4,
            }}
            style={{ top: `${10 + i * 12}%` }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="underbuild-content">
        <motion.div
          className="construction-icon-wrapper"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        >
          <div className="construction-icon">
            <motion.div
              className="outer-ring"
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="middle-ring"
              animate={{ rotate: -360, scale: [1, 1.05, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="pulse-bg"
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div className="icon" animate={{ y: [0, -10, 0] }}>
              <Construction />
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          className="main-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.span
            animate={{ opacity: [1, 0.8, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Under
          </motion.span>
          <br />
          <motion.span
            animate={{ opacity: [1, 0.9, 1] }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
            className="underline"
          >
            Construction
          </motion.span>
        </motion.h1>

        <motion.p
          className="subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          We're crafting something extraordinary.
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Our new experience is currently being built.
          </motion.span>
        </motion.p>

        <motion.div
          className="progress-line"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <motion.div
            className="progress-bar"
            animate={{ x: ["-100%", "200%"] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <motion.button
          className="back-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.history.back()}
        >
          <ArrowLeft /> Go Back
        </motion.button>

        {/* Social Links */}
        <div className="social-links">
          <motion.a
            className="social-icon"
            href="mailto:nexgen.d.pahari@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            <Mail />
          </motion.a>

          <motion.a
            className="social-icon"
            href="https://www.linkedin.com/in/iamu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.38 }}
          >
            <Linkedin />
          </motion.a>

          <motion.a
            className="social-icon"
            href="https://www.behance.net/dipakpahari1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.46 }}
          >
            <span>B</span>
          </motion.a>
        </div>

        <motion.div className="dots">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="dot"
              animate={{ y: [0, -10, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 1.8, delay: i * 0.3, repeat: Infinity }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
